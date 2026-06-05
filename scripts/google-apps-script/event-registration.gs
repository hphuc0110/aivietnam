/**
 * Đăng ký sự kiện → Google Sheet
 *
 * Luôn ghi đúng 9 cột A→I. Deploy Web App sau mỗi lần sửa.
 * Kiểm tra deploy: mở URL Web App → phải có version "2026-06-05-v5".
 */

var SHEET_NAME = 'Đăng ký tọa đàm';
var SCRIPT_VERSION = '2026-06-05-v5';

var HEADER_ROW = [
  'Thời gian',
  'Mã sự kiện',
  'Tên sự kiện',
  'Họ và tên',
  'Email',
  'Số điện thoại',
  'Tên công ty',
  'Nghề nghiệp',
  'Ghi chú',
];

var COLUMN_COUNT = HEADER_ROW.length;
var COMPANY_COLUMN = 7;
var OCCUPATION_COLUMN = 8;

function doGet() {
  var sheet = findRegistrationSheet(SpreadsheetApp.getActiveSpreadsheet());
  return jsonResponse({
    ok: true,
    message: 'Event registration endpoint is running.',
    version: SCRIPT_VERSION,
    sheetName: sheet ? sheet.getName() : null,
    companyColumn: COMPANY_COLUMN,
    columns: HEADER_ROW,
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'Missing request body.' }, 400);
    }

    var payload = JSON.parse(e.postData.contents);
    var secret = getRegistrationSecret();

    if (secret && payload.token !== secret) {
      return jsonResponse({ success: false, error: 'Unauthorized.' }, 401);
    }

    if (!payload.fullName || !payload.email || !payload.phone || !getOccupation(payload)) {
      return jsonResponse(
        { success: false, error: 'Thiếu thông tin bắt buộc (họ tên, email, SĐT, nghề nghiệp).' },
        400
      );
    }

    var sheet = getOrCreateSheet();
    var company = getCompanyName(payload);
    var occupation = getOccupation(payload);
    var now = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone() || 'Asia/Ho_Chi_Minh',
      'dd/MM/yyyy HH:mm:ss'
    );

    var rowNumber = appendRegistrationRow(sheet, buildRegistrationRecord(payload, now));

    return jsonResponse({
      success: true,
      version: SCRIPT_VERSION,
      sheetName: sheet.getName(),
      row: rowNumber,
      companySaved: company,
      occupationSaved: occupation,
    });
  } catch (err) {
    return jsonResponse(
      { success: false, error: err && err.message ? err.message : String(err) },
      500
    );
  }
}

function buildRegistrationRecord(payload, timestamp) {
  return {
    'Thời gian': timestamp,
    'Mã sự kiện': String(payload.eventId || ''),
    'Tên sự kiện': String(payload.eventTitle || ''),
    'Họ và tên': String(payload.fullName).trim(),
    Email: String(payload.email).trim(),
    'Số điện thoại': String(payload.phone).trim(),
    'Tên công ty': getCompanyName(payload),
    'Nghề nghiệp': getOccupation(payload),
    'Ghi chú': String(payload.notes || '').trim(),
  };
}

function appendRegistrationRow(sheet, record) {
  ensureStandardHeaders(sheet);

  var row = HEADER_ROW.map(function (key) {
    return record[key] !== undefined ? record[key] : '';
  });

  var nextRow = sheet.getLastRow() + 1;
  // getRange(row, col, numRows, numCols) — không dùng getRange(row,1,row,9) (bị hiểu nhầm số hàng).
  sheet.getRange(nextRow, 1, 1, COLUMN_COUNT).setValues([row]);
  return nextRow;
}

function ensureStandardHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, COLUMN_COUNT).setValues([HEADER_ROW]);
    styleHeaderRow(sheet);
    return;
  }

  var range = sheet.getRange(1, 1, 1, COLUMN_COUNT);
  var current = range.getValues()[0];
  var needsUpdate = false;

  for (var i = 0; i < COLUMN_COUNT; i++) {
    if (normalizeHeaderLabel(current[i]) !== HEADER_ROW[i]) {
      needsUpdate = true;
      break;
    }
  }

  if (needsUpdate) {
    range.setValues([HEADER_ROW]);
    styleHeaderRow(sheet);
  }
}

function normalizeHeaderLabel(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function styleHeaderRow(sheet) {
  var headerRange = sheet.getRange(1, 1, 1, COLUMN_COUNT);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#e8f0fe');
  sheet.setFrozenRows(1);
}

function getRegistrationSecret() {
  return PropertiesService.getScriptProperties().getProperty('REGISTRATION_SECRET') || '';
}

function getCompanyName(payload) {
  var value =
    payload.companyName ||
    payload.company ||
    payload.tenCongTy ||
    payload.congTy ||
    '';
  return String(value).trim();
}

function getOccupation(payload) {
  return String(payload.occupation || payload.ngheNghiep || '').trim();
}

/**
 * Tìm tab có cột "Tên công ty" — tránh ghi nhầm tab khi tên tab không khớp SHEET_NAME.
 */
function findRegistrationSheet(ss) {
  var byName = ss.getSheetByName(SHEET_NAME);
  if (byName) {
    return byName;
  }

  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    if (sheet.getLastRow() === 0) {
      continue;
    }
    var lastCol = Math.max(sheet.getLastColumn(), COLUMN_COUNT);
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    for (var c = 0; c < headers.length; c++) {
      if (normalizeHeaderLabel(headers[c]) === 'Tên công ty') {
        return sheet;
      }
    }
  }

  return null;
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = findRegistrationSheet(ss);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  ensureStandardHeaders(sheet);
  return sheet;
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function setupRegistrationSheet() {
  var sheet = getOrCreateSheet();
  Logger.log('Sheet "' + sheet.getName() + '" — ' + SCRIPT_VERSION);
}

function migrateCompanyColumn() {
  normalizeRegistrationHeaders();
}

function normalizeRegistrationHeaders() {
  var sheet = getOrCreateSheet();
  ensureStandardHeaders(sheet);
  Logger.log('Tab: "' + sheet.getName() + '". Cột G = Tên công ty. Version: ' + SCRIPT_VERSION);
}

/**
 * Chạy thử trong Apps Script (Run): ghi 1 dòng TEST vào cột G.
 * Nếu cột G có "TEST-CONG-TY" → script OK, lỗi nằm ở website / Web App deploy.
 */
function testWriteCompanyColumn() {
  var sheet = getOrCreateSheet();
  var testPayload = {
    eventId: 'test',
    eventTitle: 'Kiểm tra cột công ty',
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '0900000000',
    companyName: 'TEST-CONG-TY',
    occupation: 'Test',
    notes: 'Xóa dòng này sau khi kiểm tra',
  };
  var now = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone() || 'Asia/Ho_Chi_Minh',
    'dd/MM/yyyy HH:mm:ss'
  );
  var rowNum = appendRegistrationRow(sheet, buildRegistrationRecord(testPayload, now));
  var savedCompany = sheet.getRange(rowNum, COMPANY_COLUMN).getValue();
  var savedOccupation = sheet.getRange(rowNum, OCCUPATION_COLUMN).getValue();
  Logger.log(
    'Tab: ' +
      sheet.getName() +
      ', dòng ' +
      rowNum +
      ', cột G = "' +
      savedCompany +
      '", cột H = "' +
      savedOccupation +
      '"'
  );
}

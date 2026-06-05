/**
 * Đăng ký sự kiện → Google Sheet
 * Chương trình tọa đàm: "Nâng tầm nhân lực cho doanh nghiệp trong kỷ nguyên AI"
 *
 * Gắn script này vào Google Sheet (Extensions → Apps Script), sau đó Deploy Web App.
 * Xem hướng dẫn: docs/HUONG-DAN-GOOGLE-SHEET-DANG-KY.md
 */

var SHEET_NAME = 'Đăng ký tọa đàm';
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

function doGet() {
  return jsonResponse({ ok: true, message: 'Event registration endpoint is running.' });
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

  if (!payload.fullName || !payload.email || !payload.phone || !payload.occupation) {
    return jsonResponse(
      { success: false, error: 'Thiếu thông tin bắt buộc (họ tên, email, SĐT, nghề nghiệp).' },
      400
    );
  }

  var sheet = getOrCreateSheet();
  var now = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone() || 'Asia/Ho_Chi_Minh',
    'dd/MM/yyyy HH:mm:ss'
  );

  sheet.appendRow([
    now,
    String(payload.eventId || ''),
    String(payload.eventTitle || ''),
    String(payload.fullName).trim(),
    String(payload.email).trim(),
    String(payload.phone).trim(),
    String(payload.companyName || '').trim(),
    String(payload.occupation).trim(),
    String(payload.notes || '').trim(),
  ]);

  return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse(
      { success: false, error: err && err.message ? err.message : String(err) },
      500
    );
  }
}

function getRegistrationSecret() {
  return PropertiesService.getScriptProperties().getProperty('REGISTRATION_SECRET') || '';
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER_ROW);
    var headerRange = sheet.getRange(1, 1, 1, HEADER_ROW.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#e8f0fe');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse(body, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
  // Apps Script Web App không hỗ trợ mã HTTP tùy chỉnh đầy đủ; body vẫn mang success/error.
  return output;
}

/**
 * Chạy một lần từ trình soạn Apps Script (Run) để tạo sheet + tiêu đề.
 */
function setupRegistrationSheet() {
  getOrCreateSheet();
  Logger.log('Sheet "' + SHEET_NAME + '" đã sẵn sàng.');
}

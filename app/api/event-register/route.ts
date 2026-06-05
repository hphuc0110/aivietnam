import { NextResponse } from 'next/server'

export type EventRegistrationPayload = {
  eventId: string
  eventTitle: string
  fullName: string
  email: string
  phone: string
  companyName?: string
  tenCongTy?: string
  occupation: string
  notes?: string
}

const SUPPORTED_SCRIPT_VERSIONS = ['2026-06-05-v4', '2026-06-05-v5']

function isSupportedScriptVersion(version: string) {
  return SUPPORTED_SCRIPT_VERSIONS.includes(version)
}

type GoogleRegistrationResult = {
  success?: boolean
  error?: string
  version?: string
  companySaved?: string
  occupationSaved?: string
  sheetName?: string
}

async function postToGoogleScript(scriptUrl: string, payload: Record<string, string>) {
  const response = await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
    cache: 'no-store',
    redirect: 'follow',
  })

  const text = await response.text()
  let result: GoogleRegistrationResult
  try {
    result = JSON.parse(text) as GoogleRegistrationResult
  } catch {
    const needsPublicAccess =
      response.status === 401 ||
      text.includes('accounts.google.com') ||
      text.includes('Không tìm thấy trang')

    result = {
      success: false,
      error: needsPublicAccess
        ? 'Google Apps Script Web App chưa cho phép truy cập công khai. Khi Deploy, chọn "Execute as: Me" và "Who has access: Anyone" (Bất kỳ ai).'
        : 'Phản hồi từ Google không hợp lệ. Kiểm tra lại URL Web App và deploy bản mới.',
    }
  }

  return { result, httpOk: response.ok, status: response.status }
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL?.trim()
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET?.trim()

  if (!scriptUrl) {
    return NextResponse.json(
      {
        success: false,
        error:
          'Chưa cấu hình kết nối Google Sheet. Liên hệ quản trị viên (GOOGLE_APPS_SCRIPT_URL).',
      },
      { status: 503 }
    )
  }

  let body: EventRegistrationPayload
  try {
    body = (await request.json()) as EventRegistrationPayload
  } catch {
    return NextResponse.json({ success: false, error: 'Dữ liệu không hợp lệ.' }, { status: 400 })
  }

  const { eventId, eventTitle, fullName, email, phone, companyName, tenCongTy, occupation, notes } =
    body
  const company = (companyName ?? tenCongTy ?? '').trim()
  const jobTitle = (occupation ?? '').trim()

  if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !jobTitle) {
    return NextResponse.json(
      { success: false, error: 'Vui lòng điền đầy đủ các trường bắt buộc.' },
      { status: 400 }
    )
  }

  const upstreamPayload = {
    token: secret ?? '',
    eventId: eventId ?? '',
    eventTitle: eventTitle ?? '',
    fullName: fullName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    companyName: company,
    occupation: jobTitle,
    notes: notes?.trim() ?? '',
  }

  try {
    const { result, httpOk, status } = await postToGoogleScript(scriptUrl, upstreamPayload)

    if (!httpOk || !result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error ?? 'Không lưu được đăng ký. Vui lòng thử lại sau.',
          googleStatus: status,
        },
        { status: 502 }
      )
    }

    if (!result.version) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Google Apps Script đang chạy bản cũ (chưa deploy code mới). Trên Google Sheet → Extensions → Apps Script → Deploy → Manage deployments → New version → Deploy. Mở URL Web App phải thấy version "2026-06-05-v5".',
          scriptVersion: null,
          sentCompanyName: company,
          sentOccupation: jobTitle,
        },
        { status: 502 }
      )
    }

    if (!isSupportedScriptVersion(result.version)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Google Apps Script version "' +
            result.version +
            '" chưa được hỗ trợ. Cần bản ' +
            SUPPORTED_SCRIPT_VERSIONS.join(' hoặc ') +
            '.',
          scriptVersion: result.version,
        },
        { status: 502 }
      )
    }

    if (result.companySaved === undefined || result.occupationSaved === undefined) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Google Apps Script không xác nhận được dữ liệu đã lưu. Hãy deploy lại Web App bản mới.',
          scriptVersion: result.version,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      companySaved: result.companySaved,
      occupationSaved: result.occupationSaved,
      sheetName: result.sheetName,
      scriptVersion: result.version,
    })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Không kết nối được máy chủ đăng ký. Vui lòng thử lại.' },
      { status: 502 }
    )
  }
}

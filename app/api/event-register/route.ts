import { NextResponse } from 'next/server'

export type EventRegistrationPayload = {
  eventId: string
  eventTitle: string
  fullName: string
  email: string
  phone: string
  companyName?: string
  occupation: string
  notes?: string
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

  const { eventId, eventTitle, fullName, email, phone, companyName, occupation, notes } = body

  if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !occupation?.trim()) {
    return NextResponse.json(
      { success: false, error: 'Vui lòng điền đầy đủ các trường bắt buộc.' },
      { status: 400 }
    )
  }

  try {
    const upstream = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: secret ?? '',
        eventId: eventId ?? '',
        eventTitle: eventTitle ?? '',
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        companyName: companyName?.trim() ?? '',
        occupation: occupation.trim(),
        notes: notes?.trim() ?? '',
      }),
      cache: 'no-store',
    })

    const text = await upstream.text()
    let result: { success?: boolean; error?: string }
    try {
      result = JSON.parse(text) as { success?: boolean; error?: string }
    } catch {
      result = { success: false, error: 'Phản hồi từ Google không hợp lệ.' }
    }

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error ?? 'Không lưu được đăng ký. Vui lòng thử lại sau.',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Không kết nối được máy chủ đăng ký. Vui lòng thử lại.' },
      { status: 502 }
    )
  }
}

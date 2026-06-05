'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { EventItem } from '@/lib/events-data'
import { hasMetaPixel, trackMetaLead } from '@/lib/meta-pixel'

type EventRegisterFormProps = {
  event: EventItem
  id?: string
  showCancel?: boolean
  onCancel?: () => void
  onSuccess?: () => void
}

export function EventRegisterForm({
  event,
  id = 'dang-ky',
  showCancel = false,
  onCancel,
  onSuccess,
}: EventRegisterFormProps) {
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return

    const form = e.currentTarget
    const data = new FormData(form)

    setSubmitting(true)
    try {
      const res = await fetch('/api/event-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId: event.id,
          eventTitle: event.title,
          fullName: String(data.get('fullName') ?? ''),
          email: String(data.get('email') ?? ''),
          phone: String(data.get('phone') ?? ''),
          companyName: String(data.get('companyName') ?? ''),
          occupation: String(data.get('occupation') ?? ''),
          notes: String(data.get('notes') ?? ''),
        }),
      })

      const result = (await res.json()) as { success?: boolean; error?: string }

      if (!res.ok || !result.success) {
        toast.error(result.error ?? 'Gửi đăng ký thất bại. Vui lòng thử lại.')
        return
      }

      toast.success('Đăng ký thành công! Chúng tôi sẽ liên hệ qua email hoặc số điện thoại.')
      if (hasMetaPixel(event.id)) {
        trackMetaLead(event.id)
      }
      form.reset()
      onSuccess?.()
    } catch {
      toast.error('Không gửi được đăng ký. Kiểm tra kết nối mạng và thử lại.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form id={id} className="space-y-4 scroll-mt-24" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="register-full-name">Họ và tên</Label>
        <Input
          id="register-full-name"
          name="fullName"
          placeholder="Nguyễn Văn A"
          required
          disabled={submitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-email">Email</Label>
        <Input
          id="register-email"
          name="email"
          type="email"
          placeholder="email@example.com"
          required
          disabled={submitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-phone">Số điện thoại</Label>
        <Input
          id="register-phone"
          name="phone"
          type="tel"
          placeholder="0901234567"
          required
          disabled={submitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-company">Tên công ty</Label>
        <Input
          id="register-company"
          name="companyName"
          placeholder="Công ty TNHH ABC"
          autoComplete="organization"
          disabled={submitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-occupation">Nghề nghiệp</Label>
        <Input
          id="register-occupation"
          name="occupation"
          placeholder="Kỹ sư phần mềm"
          required
          disabled={submitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-notes">Ghi chú thêm</Label>
        <Textarea
          id="register-notes"
          name="notes"
          placeholder="Nội dung ghi chú (không bắt buộc)"
          rows={3}
          disabled={submitting}
        />
      </div>

      <div className={`flex gap-2 pt-2 ${showCancel ? 'justify-end' : ''}`}>
        {showCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={submitting}>
            Hủy
          </Button>
        )}
        <Button type="submit" disabled={submitting} className={showCancel ? '' : 'w-full sm:w-auto'}>
          {submitting ? 'Đang gửi...' : 'Gửi đăng ký'}
        </Button>
      </div>
    </form>
  )
}

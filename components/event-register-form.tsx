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

type FormFields = {
  fullName: string
  email: string
  phone: string
  companyName: string
  occupation: string
  notes: string
}

const EMPTY_FORM: FormFields = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  occupation: '',
  notes: '',
}

export function EventRegisterForm({
  event,
  id = 'dang-ky',
  showCancel = false,
  onCancel,
  onSuccess,
}: EventRegisterFormProps) {
  const [submitting, setSubmitting] = useState(false)
  const [fields, setFields] = useState<FormFields>(EMPTY_FORM)

  function updateField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return

    setSubmitting(true)
    try {
      const payload = {
        eventId: event.id,
        eventTitle: event.title,
        fullName: fields.fullName.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        companyName: fields.companyName.trim(),
        occupation: fields.occupation.trim(),
        notes: fields.notes.trim(),
      }

      const res = await fetch('/api/event-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = (await res.json()) as {
        success?: boolean
        error?: string
        scriptVersion?: string | null
      }

      if (!res.ok || !result.success) {
        toast.error(result.error ?? 'Gửi đăng ký thất bại. Vui lòng thử lại.')
        return
      }

      toast.success('Đăng ký thành công! Chúng tôi sẽ liên hệ qua email hoặc số điện thoại.')
      if (hasMetaPixel(event.id)) {
        trackMetaLead(event.id)
      }
      setFields(EMPTY_FORM)
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
          autoComplete="name"
          required
          disabled={submitting}
          value={fields.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-email">Email</Label>
        <Input
          id="register-email"
          name="email"
          type="email"
          placeholder="email@example.com"
          autoComplete="email"
          required
          disabled={submitting}
          value={fields.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-phone">Số điện thoại</Label>
        <Input
          id="register-phone"
          name="phone"
          type="tel"
          placeholder="0901234567"
          autoComplete="tel"
          required
          disabled={submitting}
          value={fields.phone}
          onChange={(e) => updateField('phone', e.target.value)}
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
          value={fields.companyName}
          onChange={(e) => updateField('companyName', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-occupation">Nghề nghiệp</Label>
        <Input
          id="register-occupation"
          name="occupation"
          placeholder="Kỹ sư phần mềm"
          autoComplete="organization-title"
          required
          disabled={submitting}
          value={fields.occupation}
          onChange={(e) => updateField('occupation', e.target.value)}
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
          value={fields.notes}
          onChange={(e) => updateField('notes', e.target.value)}
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

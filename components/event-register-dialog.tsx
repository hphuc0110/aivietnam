'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { EventRegisterForm } from '@/components/event-register-form'
import type { EventItem } from '@/lib/events-data'

type EventRegisterDialogProps = {
  event: EventItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EventRegisterDialog({ event, open, onOpenChange }: EventRegisterDialogProps) {
  if (!event) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Đăng ký sự kiện</DialogTitle>
          <DialogDescription>
            Đăng ký tham gia: {event.title}
          </DialogDescription>
        </DialogHeader>

        <EventRegisterForm
          event={event}
          id="dang-ky-dialog"
          showCancel
          onCancel={() => onOpenChange(false)}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  )
}

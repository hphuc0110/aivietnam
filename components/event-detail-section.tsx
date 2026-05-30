'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EventRegisterDialog } from '@/components/event-register-dialog'
import type { EventContentBlock, EventItem } from '@/lib/events-data'

type EventDetailSectionProps = {
  event: EventItem
}

function EventContent({ blocks, eventId }: { blocks: EventContentBlock[]; eventId: string }) {
  return (
    <div className="mt-8 space-y-5 text-gray-800 text-[17px] sm:text-base leading-[1.75]">
      {blocks.map((block, index) => {
        const key = `${eventId}-${block.type}-${index}`

        if (block.type === 'heading') {
          return (
            <h2
              key={key}
              className="text-base sm:text-lg font-bold text-gray-900 tracking-wide pt-2 first:pt-0"
            >
              {block.text}
            </h2>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={key} className="space-y-4 list-none p-0 m-0">
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-item-${itemIndex}`} className="flex gap-3 text-pretty">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={key} className="text-pretty">
            {block.text}
          </p>
        )
      })}
    </div>
  )
}

export function EventDetailSection({ event }: EventDetailSectionProps) {
  const [registerOpen, setRegisterOpen] = useState(true)

  return (
    <article className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-12 sm:pb-16 md:pt-6">
      <Link
        href="/events"
        className="inline-flex items-center gap-1.5 min-h-[44px] min-w-[44px] -ml-2 pl-2 pr-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 active:text-blue-800 touch-manipulation"
      >
        <ChevronLeft className="size-5 shrink-0" aria-hidden />
        Quay lại danh sách sự kiện
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
        <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
          {event.category}
        </span>
        <time className="text-gray-500" dateTime={event.date}>
          {event.date}
        </time>
      </div>

      <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug tracking-tight">
        {event.title}
      </h1>

      {(event.time || event.location) && (
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          {event.time && (
            <li className="flex items-start gap-2">
              <Clock className="size-4 shrink-0 mt-0.5 text-blue-600" aria-hidden />
              <span>{event.time}</span>
            </li>
          )}
          {event.location && (
            <li className="flex items-start gap-2">
              <MapPin className="size-4 shrink-0 mt-0.5 text-blue-600" aria-hidden />
              <span>{event.location}</span>
            </li>
          )}
        </ul>
      )}

      <div className="relative mt-6 w-full aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
        <Image
          src={event.thumbnail}
          alt={event.title}
          fill
          priority
          sizes="(max-width: 640px) 100vw, 42rem"
          className="object-cover"
        />
      </div>

      <p className="mt-6 text-gray-700 text-[17px] sm:text-lg leading-relaxed font-medium border-l-4 border-blue-200 pl-4 py-1">
        {event.excerpt}
      </p>

      <EventContent blocks={event.content} eventId={event.id} />

      <div className="mt-8 flex justify-center sm:justify-start">
        <Button
          type="button"
          size="lg"
          className="min-h-[48px] px-8 text-base font-semibold touch-manipulation"
          onClick={() => setRegisterOpen(true)}
        >
          Đăng ký tham gia
          <ArrowRight className="size-5 ml-1" aria-hidden />
        </Button>
      </div>

      <section className="mt-10 sm:mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 text-center">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          Sẵn sàng tham gia sự kiện?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
          Đăng ký ngay để giữ chỗ và trực tiếp đối thoại cùng các chuyên gia từ NIC, HUST và NVIDIA.
        </p>
        <Button
          type="button"
          size="lg"
          className="mt-5 min-h-[48px] px-8 text-base font-semibold touch-manipulation"
          onClick={() => setRegisterOpen(true)}
        >
          Đăng ký ngay
          <ArrowRight className="size-5 ml-1" aria-hidden />
        </Button>
      </section>

      <EventRegisterDialog
        event={event}
        open={registerOpen}
        onOpenChange={setRegisterOpen}
      />
    </article>
  )
}

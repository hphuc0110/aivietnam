'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, MapPin, Clock } from 'lucide-react'
import { EventRegisterForm } from '@/components/event-register-form'
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

      <section
        id="dang-ky"
        className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 sm:p-6 shadow-sm"
      >
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Đăng ký tham gia</h2>
        <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
          Điền thông tin bên dưới để giữ chỗ và nhận xác nhận qua email hoặc số điện thoại.
        </p>
        <div className="mt-5">
          <EventRegisterForm event={event} />
        </div>
      </section>

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
    </article>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { EVENT_ITEMS, type EventItem } from '@/lib/events-data'
import { EventRegisterDialog } from '@/components/event-register-dialog'

export function EventsPageSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  const [registerOpen, setRegisterOpen] = useState(false)

  function openRegister(event: EventItem) {
    setSelectedEvent(event)
    setRegisterOpen(true)
  }

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 px-1">
            Sự kiện
          </h1>
          <p className="text-gray-600 text-[15px] sm:text-base max-w-3xl mx-auto leading-relaxed px-1">
            Khám phá các sự kiện sắp diễn ra. Chọn sự kiện và đăng ký tham gia.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 list-none p-0 m-0">
          {EVENT_ITEMS.map((event) => (
            <li key={event.id}>
              <button
                type="button"
                onClick={() => openRegister(event)}
                className="group flex flex-col h-full w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5 text-left transition-colors hover:border-blue-300 hover:bg-blue-50/60 active:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 touch-manipulation min-h-min cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200 mb-4 bg-gray-100">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">
                    {event.category}
                  </span>
                  <span className="text-gray-500">{event.date}</span>
                </div>
                <h2 className="text-[15px] sm:text-base font-bold text-gray-900 leading-snug group-hover:text-blue-800 transition-colors line-clamp-3">
                  {event.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                  {event.excerpt}
                </p>
                {(event.time || event.location) && (
                  <p className="mt-2 text-xs text-gray-500">
                    {[event.time, event.location].filter(Boolean).join(' · ')}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Đăng ký ngay
                  <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <EventRegisterDialog
        event={selectedEvent}
        open={registerOpen}
        onOpenChange={setRegisterOpen}
      />
    </section>
  )
}

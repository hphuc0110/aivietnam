import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EventDetailSection } from '@/components/event-detail-section'
import { EVENT_ITEMS, getEventBySlug } from '@/lib/events-data'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return EVENT_ITEMS.map((event) => ({ slug: event.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) {
    return { title: 'Không tìm thấy sự kiện' }
  }
  return {
    title: `${event.title} | Sự kiện`,
    description: event.excerpt.slice(0, 160),
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) {
    notFound()
  }

  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col bg-white">
      <Header />
      <EventDetailSection event={event} />
      <Footer />
    </main>
  )
}

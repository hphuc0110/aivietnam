import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EventsPageSection } from '@/components/events-page-section'

export default function EventsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <EventsPageSection />
      <Footer />
    </main>
  )
}

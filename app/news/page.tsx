import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NewsPageSection } from '@/components/news-page-section'

export default function NewsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <NewsPageSection />
      <Footer />
    </main>
  )
}

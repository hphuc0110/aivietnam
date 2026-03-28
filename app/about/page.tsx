import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AboutSection } from '@/components/about-section'

export const metadata: Metadata = {
  title: 'Về chúng tôi | AI Việt Nam DLI',
  description:
    'Giới thiệu AI Việt Nam — đào tạo chuyên sâu NVIDIA DLI và cam kết đồng hành cùng học viên.',
}

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <AboutSection />
      <Footer />
    </main>
  )
}

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServiceSection } from '@/components/service-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CoursesSection } from '@/components/courses-section'
import { FAQSection } from '@/components/faq-section'
import { TrainingYearsSection } from '@/components/training-years-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServiceSection />
      <TestimonialsSection />
      <CoursesSection />
      <FAQSection />
      <TrainingYearsSection />
      <Footer />
    </main>
  )
}

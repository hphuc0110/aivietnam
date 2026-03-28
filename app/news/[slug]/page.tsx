import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getArticleBySlug, NEWS_ARTICLES } from '@/lib/news-data'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({ slug: article.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    return { title: 'Không tìm thấy bài viết' }
  }
  return {
    title: `${article.title} | Trung tâm Tin tức`,
    description: article.excerpt.slice(0, 160),
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    notFound()
  }

  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col bg-white">
      <Header />
      <article className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-12 sm:pb-16 md:pt-6">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 min-h-[44px] min-w-[44px] -ml-2 pl-2 pr-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 active:text-blue-800 touch-manipulation"
        >
          <ChevronLeft className="size-5 shrink-0" aria-hidden />
          Quay lại danh sách tin
        </Link>

        <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
            {article.category}
          </span>
          <time className="text-gray-500" dateTime={article.date}>
            {article.date}
          </time>
        </div>

        <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug tracking-tight">
          {article.title}
        </h1>

        <div className="relative mt-6 w-full aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 42rem"
            className="object-cover"
          />
        </div>

        <p className="mt-6 text-gray-700 text-[17px] sm:text-lg leading-relaxed font-medium border-l-4 border-blue-200 pl-4 py-1">
          {article.excerpt}
        </p>

        <div className="mt-8 space-y-5 text-gray-800 text-[17px] sm:text-base leading-[1.75]">
          {article.paragraphs.map((paragraph, index) => (
            <p key={`${article.id}-p-${index}`} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  )
}

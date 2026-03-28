import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NEWS_ARTICLES } from '@/lib/news-data'

export function NewsPageSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 px-1">
            Trung tâm Tin tức
          </h1>
          <p className="text-gray-600 text-[15px] sm:text-base max-w-3xl mx-auto leading-relaxed px-1">
            Chọn bài viết để mở trang đọc đầy đủ, tối ưu trên điện thoại và máy tính bảng.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 list-none p-0 m-0">
          {NEWS_ARTICLES.map((article) => (
            <li key={article.id}>
              <Link
                href={`/news/${article.id}`}
                className="group flex flex-col h-full rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5 text-left transition-colors hover:border-blue-300 hover:bg-blue-50/60 active:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 touch-manipulation min-h-min"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 mb-4 bg-gray-100">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-500">{article.date}</span>
                </div>
                <h2 className="text-[15px] sm:text-base font-bold text-gray-900 leading-snug group-hover:text-blue-800 transition-colors line-clamp-3">
                  {article.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Đọc bài
                  <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

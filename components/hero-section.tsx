'use client'

import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nâng cao kỹ năng của bạn với khóa đào tạo DLI
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Chương trình đào tạo chuyên sâu được thiết kế để giúp bạn thành thạo công nghệ LED Display mới nhất.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition">
                Bắt đầu ngay
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded font-semibold hover:bg-blue-50 transition">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <Image
              src="/hero-image.jpg"
              alt="Chuyên gia đào tạo DLI"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="bg-linear-to-r from-blue-50 to-cyan-50 py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 md:mb-6 leading-tight">
              Nâng cao kỹ năng của bạn với khóa đào tạo NVIDIA DLI
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
            Chương trình đào tạo chuyên sâu này được thiết kế một cách <br /> bài bản và có hệ thống nhằm giúp bạn không chỉ tiếp cận mà còn thực sự thành thạo các công nghệ Trí tuệ nhân tạo hiện đại nhất hiện nay. Thông qua lộ trình học tập kết hợp giữa nền tảng <br /> lý thuyết vững chắc và thực hành chuyên sâu trên các bài toán thực tế, bạn sẽ từng bước xây dựng năng lực phân tích, triển khai và tối ưu các mô hình AI trong nhiều bối cảnh khác nhau.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 md:h-full min-h-72">
            <Image
              src="/kiket.jpg"
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

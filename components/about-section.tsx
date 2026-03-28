export function AboutSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-linear-to-b from-blue-50/80 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3">
            Về chúng tôi
          </h1>
          <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
            AI Việt Nam đồng hành cùng bạn trên hành trình làm chủ công nghệ trí tuệ nhân tạo.
          </p>
        </div>

        <div className="space-y-8 text-gray-700 text-[15px] sm:text-base leading-relaxed">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Sứ mệnh
            </h2>
            <p>
              Chúng tôi mang đến các chương trình đào tạo chuyên sâu theo chuẩn NVIDIA Deep Learning
              Institute (DLI), kết hợp lý thuyết vững và thực hành trên bài toán thực tế, giúp học
              viên xây dựng năng lực triển khai và vận hành hạ tầng AI hiện đại.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Đối tác và hệ sinh thái
            </h2>
            <p>
              Chương trình được phối hợp triển khai cùng các đơn vị giáo dục và đổi mới sáng tạo uy
              tín, nhằm kết nối nội dung đào tạo quốc tế với nhu cầu nhân lực công nghệ tại Việt Nam.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Cam kết
            </h2>
            <p>
              Ưu tiên chất lượng giảng dạy, hỗ trợ học viên trong suốt lộ trình học và cập nhật nội
              dung theo tiến bộ của nền tảng NVIDIA và thực tiễn ngành AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

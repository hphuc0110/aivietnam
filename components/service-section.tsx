'use client'

const SERVICES_DATA = [
  {
    title: 'Tự học trực tuyến',
    content: 'Truy cập nền tảng học tập GPU được cấu hình đầy đủ mọi lúc, mọi nơi. Làm theo hướng dẫn chi tiết trong tài liệu hoàn chỉnh để có được kỹ năng cần thiết. Bạn có thể học 2 hoặc 4 giờ để nâng cao kỹ năng chuyên môn, hoặc tham gia khóa học 8 giờ để có được kinh nghiệm phát triển dự án từ đầu đến cuối và chứng chỉ đào tạo chính thức của NVIDIA.'
  },
  {
    title: 'Các khóa đào tạo do giảng viên hướng dẫn',
    content: 'Nếu tổ chức của bạn muốn nhanh chóng phát triển hoặc nâng cao kỹ năng trong thời gian ngắn, Trung tâm Đào tạo Học sâu NVIDIA được ủy quyền chính thức của NVIDIA đang phối hợp tổ chức các khóa đào tạo trực tuyến và hội thảo trực tiếp để bồi dưỡng nhân tài AI.'
  },
  {
    title: 'Tài liệu miễn phí dành cho giáo viên',
    content: 'Với nhu cầu ngày càng cao đối với các chuyên gia có kiến thức về AI, Trung tâm Đào tạo Học sâu NVIDIA (DLI) cung cấp nhiều nguồn tài nguyên đa dạng. Bạn có thể sử dụng nền tảng phòng thí nghiệm hoặc tài liệu dạy về nhiều chủ đề để giảng dạy của mình.'
  }
] as const

export function ServiceSection() {
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
            Trung tâm đào tạo học sâu NVIDIA (DLI)
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <p>
              Trung tâm Đào tạo Học sâu NVIDIA (DLI) cung cấp các khóa đào tạo thực hành về Trí tuệ nhân tạo (AI), điện toán tăng tốc và phát triển ứng dụng khoa học dữ liệu tăng tốc. Dựa trên nền tảng GPU đám mây được cấu hình đầy đủ, các nhà phát triển có thể nhanh chóng có được kinh nghiệm phát triển ứng dụng từ đầu đến cuối.
            </p>
            <p>
              Leadtek, với tư cách là đối tác Trung tâm Đào tạo Học sâu (DLI) được ủy quyền chính thức của NVIDIA, đang phối hợp tổ chức các khóa đào tạo trực tuyến và hội thảo trực tiếp để bồi dưỡng nhân tài AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

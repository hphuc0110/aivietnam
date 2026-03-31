'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const experts = [
    {
      name: 'ThS. Lê Trần Ngọc Trân',
      title: ' Đại sứ Đại học của NVIDIA tại Việt Nam',
      image: '/teacher/tran.webp',
      bio: 'Đại sứ Đại học NVIDIA là danh hiệu dành cho những giảng viên hoàn thành chương trình University Ambassador Program – một khóa đào tạo chuyên sâu do NVIDIA tổ chức nhằm phổ cập kiến thức và kỹ năng về trí tuệ nhân tạo (AI), khoa học dữ liệu và điện toán tăng tốc.',
    },
    {
      name: 'TS. Vũ Hoài Nam',
      title: 'Giảng viên Khoa Trí tuệ nhân tạo tại Học viện Công nghệ Bưu chính Viễn thông (PTIT)',
      image: '/teacher/nam.jpg',
      bio: 'Đại sứ của University Ambassador sau khi ông vượt qua kỳ sát hạch chuyên môn của hãng.',
    },
    {
      name: ' TS. Đặng Hoàng Long',
      title: 'Giảng viên khoa Công nghệ thông tin 1 tại Học viện Công nghệ Bưu chính Viễn thông (PTIT)',
      image: '/teacher/long.jpg',
      bio: 'các đại sứ NVIDIA sẽ là đại diện của NVIDIA tại các trường Đại học, sử dụng tài nguyên của NVIDIA để triển khai các khóa học về AI do NVIDIA cấp chứng chỉ.',
    },
    {
      name: ' TS. Nguyễn Nhất Hải',
      title: 'Giảng viên tại bộ môn Công nghệ phần mềm, viện Công nghệ thông tin và truyền thông tại Đại học Bách Khoa Hà Nội.',
      image: '/teacher/hai.jpg',
      scholarUrl: 'https://scholar.google.com/citations?user=zmtZGk0AAAAJ&hl=vi',
      bio: 'TS.Hải nhận bằng  Tiến sĩ công nghệ thông tin, điều khiển và xử lý tín hiệu tại trường Đại học Bách Khoa Grenoble, Cộng hòa Pháp. TS. Hải cũng đã có 1 năm nghiên cứu sau Tiến sĩ tại France Telecom. Lĩnh vực nghiên cứu của TS. Hải bao gồm các lĩnh vực như xử lý ngôn ngữ tự nhiên, thị giác máy tính, hệ thống phân tán.',
    },
    {
      name: ' GS. TSKH. Trần Hoài Linh',
      title: 'Giảng viên cao cấp hạng I, Giáo Sư, Tiến sỹ Khoa học Trường Điện - Điện tử',
      image: '/teacher/linh.webp',
      scholarUrl: 'https://scholar.google.com/citations?user=PyNoVbMAAAAJ',
      bio: 'Ông Trần Hoài Linh nhận học vị Tiến sĩ Khoa học về Kỹ thuật điện và Trí tuệ nhân tạo năm 2005 của Trường Đại học Bách Khoa Vác-sa-va (CH Ba Lan), học vị Tiến sĩ về Kỹ thuật điện tại Trường Đại học Bách Khoa Vác-sa-va (CH Ba Lan) năm 2000. Hiện tại Ông Trần Hoài Linh là Giáo sư, Giảng viên cao cấp tại Khoa Tự động hóa, Trường Điện - Điện tử, Đại học Bách khoa Hà Nội. Các hướng nghiên cứu quan tâm hiện tại bao gồm: Trí tuệ nhân tạo và ứng dụng trong xử lý tín hiệu, Hệ thống thông minh, Lưới điện thông minh.',
    },
    {
      name: ' Nguyễn Thị Thu',
      title: 'Nhà nghiên cứu Trí tuệ Nhân tạo tại Viện Đổi mới Trí tuệ Nhân tạo và Tác động Xã hội (AI4LIFE), Đại học Khoa học và Công nghệ Hà Nội (HUST).',
      image: '/teacher/thu.jpg',
      scholarUrl: 'https://scholar.google.com/citations?user=FtFck0UAAAAJ&hl=en',
      bio: 'Cô là nhà nghiên cứu Trí tuệ Nhân tạo tại Viện Đổi mới Trí tuệ Nhân tạo và Tác động Xã hội (AI4LIFE), Đại học Khoa học và Công nghệ Hà Nội (HUST). Lĩnh vực nghiên cứu của cô bao gồm ứng dụng Mô hình Ngôn ngữ Lớn trong các lĩnh vực cụ thể để nâng cao khả năng hiểu ngữ cảnh, Trí tuệ Nhân tạo Tạo sinh trong Tin sinh học.',
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Đội ngũ chuyên gia của chúng tôi
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Được hướng dẫn bởi các chuyên gia hàng đầu trong ngành <br /> Trí tuệ nhân tạo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experts.map((expert, index) =>
            expert.scholarUrl ? (
              <a
                key={index}
                href={expert.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition block"
              >
                <div className="relative h-72 sm:h-96 md:h-152">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{expert.title}</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">{expert.bio}</p>
                </div>
              </a>
            ) : (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative h-72 sm:h-96 md:h-152">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{expert.title}</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">{expert.bio}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

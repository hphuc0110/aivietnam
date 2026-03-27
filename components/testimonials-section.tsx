'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const experts = [
    {
      name: 'Quách Trung Chín',
      title: 'Chuyên gia Công nghệ LED',
      image: '/expert-1.jpg',
      bio: 'Có 15 năm kinh nghiệm trong ngành công nghệ LED Display. Đã tham gia thiết kế và triển khai hàng trăm dự án lớn tại Việt Nam và khu vực Đông Nam Á.',
      expertise: 'LED Display, Kỹ thuật hiển thị'
    },
    {
      name: 'Thương Vĩ Đào',
      title: 'Kỹ sư Hệ thống',
      image: '/expert-2.jpg',
      bio: 'Chuyên gia hàng đầu trong lĩnh vực hệ thống LED tích hợp. Đã đào tạo hơn 500 kỹ sư chuyên nghiệp trong 10 năm qua.',
      expertise: 'Hệ thống tích hợp, Kiểm tra chất lượng'
    },
    {
      name: 'Vương Gia Trang',
      title: 'Quản lý Dự án',
      image: '/expert-3.jpg',
      bio: 'Có kinh nghiệm quản lý dự án LED từ quy hoạch đến triển khai. Đã hoàn thành thành công 50+ dự án lớn với danh sách khách hàng đa dạng.',
      expertise: 'Quản lý dự án, Tối ưu hóa chi phí'
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Đội ngũ chuyên gia của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Được hướng dẫn bởi các chuyên gia hàng đầu trong ngành công nghệ LED Display
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{expert.title}</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">{expert.bio}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold">CHUYÊN MÔN</p>
                  <p className="text-sm text-gray-700 font-medium">{expert.expertise}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

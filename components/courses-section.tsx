'use client'

import Image from 'next/image'

export function CoursesSection() {
  const courses = [
    { name: 'Những nguyên lý cơ bản của học sâu - Giới thiệu về lý thuyết và thực hành', duration: '' },
    { name: 'Xây dựng các ứng dụng chống gian lận lừa dựa trên Transformer', duration: '' },
    { name: 'Song song hóa dữ liệu – Huấn luyện mạng no-ron với nhiều GPU', duration: '' },
    { name: 'Kiến thức cơ bản về điện toán tăng tốc – CUDA C/C++', duration: '' },
    { name: 'Tăng tốc tính toán: Sử dụng nhiều GPU để tăng tốc các ứng dụng CUDA C++', duration: '' },
    { name: 'Tăng tốc tính toán cơ bản – CUDA Python', duration: '' },
    { name: 'Tăng tốc tính toán nâng cao: Mở rộng ứng dụng CUDA C++ lên GPU đa nhân', duration: '' },
    { name: 'Xây dựng các ứng dụng kiểm tra công nghiệp dựa trên học sâu', duration: '' },
    { name: 'Xây dựng các ứng dụng xử lý ngôn ngữ tự nhiên (NLP) dựa trên Transformer', duration: '' },
    { name: 'Song song hóa mô hình — Xây dựng và triển khai các mạng no-ron quy mô lớn', duration: '' },
    { name: 'Xây dựng các ứng dụng Trí tuệ nhân tạo tạo sinh dựa vào mô hình khuôn tấn', duration: '' },
    { name: 'Mô hình ngôn ngữ lớn ứng dụng cao (LLM)', duration: '' },
    { name: 'Xây dựng ứng dụng dựa trên Mô hình Ngôn ngữ Lớn (LLM)', duration: '' },
    { name: 'Xây dựng mô hình ngôn ngữ quy mô lớn tác nhân RAG', duration: '' },
    { name: 'Xây dựng các ứng dụng mô hình ngôn ngữ quy mô lớn (LLM) bằng kỹ thuật gợi ý (Hint Engineering)', duration: '' },
  ]

  return (
    <>
      {/* Section 1: Nội dung khóa học */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            Tổ chức các khóa đào tạo cho tổ chức của bạn.
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Bạn có thể chọn từ các khóa học nên tăng tổng quát hoặc ứng dụng ngành sau đây để đăng ký các khóa đào tạo trực tuyến hoặc trực tiếp với hướng dẫn viên trực tiếp. Ban sẽ hoàn thành phần học thực hành trên máy chủ GPU được cấu hình đầy đủ.
          </p>

          <p className="text-gray-600 mb-8">
            Để hỏi thông tin về khóa học, vui lòng quét mã QR.
          </p>

          <div className="flex justify-center mb-12">
            <div className="bg-white p-4 border border-gray-200 rounded">
              <Image
                src="/qr-code.jpg"
                alt="QR Code for course information"
                width={200}
                height={200}
                className="w-48 h-48"
              />
            </div>
          </div>

          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span>👤</span>
              <span>
                <strong>Người liên hệ:</strong> Janet Mao, Quản lý Kinh doanh Đào tạo Giá trị Giá tăng
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📱</span>
              <span>
                <strong>Điện thoại:</strong> 18221028993
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>✉️</span>
              <span>
                <strong>Email:</strong> janet_mao@AI Việt Nam.com.cn
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Các khóa học hiện có */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
            Các khóa học hiện có
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900">#</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Tên khóa học tiếng Trung</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Khoảng thời gian</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-semibold text-gray-900">{idx + 1}</td>
                    <td className="px-6 py-4 text-gray-700">{course.name}</td>
                    <td className="px-6 py-4 text-gray-700">{course.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Các khóa học mở do giảng viên AI Việt Nam hướng dẫn */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
            Các khóa học mở do giảng viên AI Việt Nam hướng dẫn
          </h2>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-8">
              Tổng quan về Khóa học Mở AI Việt Nam 
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Khóa học mở tháng Hai:
                </h4>
                <p className="text-gray-700 text-sm mb-6">
                  Xây dựng ứng dụng AI video | Lớp học trực tuyến
                </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Khóa học mở tháng Tư:
                </h4>
                <p className="text-gray-700 text-sm mb-6">
                  Giới thiệu về việc sử dụng RAG để nâng cao khả năng của các mô hình ngôn ngữ | Lớp học trực tuyến
                </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Khóa học mở tháng 5:
                </h4>
                <p className="text-gray-700 text-sm mb-6">
                  Hướng dẫn nhanh về xây dựng mạng no-ron | Lớp học trực tuyến
                </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                </h4>
                <p className="text-gray-700 text-sm">
                  Hướng dẫn cơ bản về OpenUSD tháng 7 dành cho người mới bắt đầu | Lớp học trực tuyến
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Lớp học mở tháng 8:
                </h4>
                <p className="text-gray-700 text-sm mb-6">
                  Xây dựng công cụ chính sửa cảnh 3D tùy chỉnh với NVIDIA Omniverse | Lớp học trực tuyến
                </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Lớp học mở tháng 9:
                </h4>
                <p className="text-gray-700 text-sm mb-6">
                  Để dạng phát triển các công cụ kỹ thuật kỹ 3D nâng cao với Omniverse | Lớp học trực tuyến
                </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Lớp học mở tháng 10:
                </h4>
                <p className="text-gray-700 text-sm mb-6">
                  Phân đoạn ảnh bằng TensorFlow | Lớp học trực tuyến
                </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Lớp học mở tháng 12:
                </h4>
                <p className="text-gray-700 text-sm">
                  Giới thiệu về NVIDIA NIM | Lớp học trực tuyến
                </p>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6 flex items-center justify-between">
              <p className="text-gray-700 text-sm">
                💬 Các khóa đào tạo về Trí tuệ nhân tạo hiện đã mở đăng ký...
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded transition text-sm">
                Xem lịch trình khóa học và đăng ký
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import Image from 'next/image'

export function CoursesSection() {
  const courses = [
    { name: 'NCP-AII (Professional AI Infrastructure)', duration: '180 phút' },
    { name: 'NCP-AIO (Professional AI Operations)', duration: '180 phút' },
    { name: 'NCA-AIIO (Associate AI Infrastructure and Operations)', duration: '120 phút' },
    { name: 'NCP-ADS (Professional Accelerated Data Science)', duration: '180 phút' },
    { name: 'NCP-GENL (Professional Generative AI LLMs)', duration: '180 phút' },
    { name: 'NCP-AAI (Professional Agentic AI)', duration: '180 phút' },
    { name: 'NCA-GENL (Associate Generative AI LLM)', duration: '120 phút' },
    { name: 'NCA-GENM (Associate Generative AI Multimodal)', duration: '120 phút' },
    { name: 'NCP-OUSD (Professional OpenUSD Development)', duration: '180 phút' },
  ]

  const availableCourses = [
    { name: 'Fundamentals of Deep Learning', duration: '8 giờ' },
    { name: 'Fundamentals of Accelerated Data Science', duration: '8 giờ' },
    { name: 'Building Transformer-Based Natural Language Processing Applications', duration: '8 giờ' },
    { name: 'Building LLM Applications with Prompt Engineering', duration: '8 giờ' },
    { name: 'Rapid Application Development With Large Language Models (LLMs)', duration: '8 giờ' },
    { name: 'Building Conversational AI Applications', duration: '8 giờ' },
    { name: 'Generative AI With Diffusion Models', duration: '8 giờ' },
    { name: 'Building AI Agents with Multimodal Models', duration: '8 giờ' },
    { name: 'Accelerating End-to-End Data Science Workflows', duration: '6 giờ' },
    { name: 'Enhancing Data Science Outcomes With Efficient Workflow', duration: '8 giờ' },
    { name: 'Adding New Knowledge to LLMs', duration: '8 giờ' },
    { name: 'Model Parallelism: Building and Deploying Large Neural Networks', duration: '8 giờ' },
    { name: 'Building RAG Agents with LLMs', duration: '8 giờ' },
    { name: 'Building Agentic AI Applications With LLMs', duration: '8 giờ' },
    { name: 'Introduction to Deploying RAG Pipelines for Production at Scale', duration: '8 giờ' },
    { name: 'AI Infrastructure Professional Public Training', duration: '28 giờ' },
    { name: 'AI Operations Professional Public Training', duration: '24 giờ' },
    { name: 'Cumulus Linux Public Bootcamp', duration: '12 giờ' },
    { name: 'InfiniBand Network Administration', duration: '6 giờ' },
    { name: 'Spectrum-X Networking Platform Administration', duration: '12 giờ' },
  ]

  return (
    <>
      {/* Section 1: Nội dung khóa học */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 md:mb-8 leading-tight">
            Tổ chức các khóa đào tạo cho tổ chức của bạn.
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-center max-w-3xl mx-auto text-sm sm:text-base">
            Bạn có thể chọn từ các khóa học nên tăng tổng quát hoặc ứng dụng ngành sau đây để đăng ký các khóa đào tạo trực tuyến hoặc trực tiếp với hướng dẫn viên trực tiếp. Ban sẽ hoàn thành phần học thực hành trên máy chủ GPU được cấu hình đầy đủ.
          </p>

          <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
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
            <div className="flex items-start sm:items-center justify-center gap-2 text-left sm:text-center">
              <span>👤</span>
              <span>
                <strong>Người liên hệ:</strong> CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN GIÁO DỤC HỒNG LĨNH
              </span>
            </div>
            <div className="flex items-start sm:items-center justify-center gap-2 text-left sm:text-center">
              <span>📱</span>
              <span>
                <strong>Điện thoại:</strong> 
                093 699 33 39
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Các chứng chỉ hiện có */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-6 md:mb-8">
            Các chứng chỉ hiện có
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900">#</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Tên khóa học Tiếng Anh</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Khoảng thời gian</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-semibold text-gray-900">{idx + 1}</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">{course.name}</td>
                    <td className="px-6 py-4 text-gray-700">{course.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Các khóa học hiện có */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-6 md:mb-8">
            Các khóa học hiện có
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900">#</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Tên khóa học Tiếng Anh</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Khoảng thời gian</th>
                </tr>
              </thead>
              <tbody>
                {availableCourses.map((course, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-semibold text-gray-900">{idx + 1}</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">{course.name}</td>
                    <td className="px-6 py-4 text-gray-700">{course.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Các khóa học mở do giảng viên AI Việt Nam hướng dẫn */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-8 md:mb-12">
            Các khóa học mở do giảng viên AI Việt Nam hướng dẫn
          </h2>

          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 border border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 md:mb-8">
              Tổng quan về Khóa học Mở AI Việt Nam 
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Khóa học mở tháng 4:
                </h4>
                <p className="text-gray-700 text-sm font-semibold mb-6">
                Associate Generative AI LLM
                </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Khóa học mở tháng 5:
                </h4>
                <p className="text-gray-700 text-sm font-semibold mb-6">
                Professional Generative AI LLMs                 </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Khóa học mở tháng 5:
                </h4>
                <p className="text-gray-700 text-sm font-semibold mb-6">
                Associate Generative AI Multimodal
                </p>

                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Khóa học mở tháng 8:
                </h4>
                <p className="text-gray-700 text-sm font-semibold">
                Professional Agentic AI                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Khóa học mở tháng 9:
                </h4>
                <p className="text-gray-700 text-sm font-semibold mb-6">
                Professional Accelerated Data Science                </p>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 justify-between">
              <p className="text-gray-700 text-sm">
                💬 Các khóa đào tạo về Trí tuệ nhân tạo hiện đã mở đăng ký...
              </p>
              <a
                href="https://nvdam.widen.net/s/brxsxxtskb/dli-learning-journey-2009000-r5-web"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded transition text-sm text-center"
              >
                Xem lịch trình khóa học và đăng ký
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

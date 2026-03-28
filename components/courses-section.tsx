'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export function CoursesSection() {
  const courses = [
    {
      name: 'NCP-AII (Professional AI Infrastructure)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-professional/',
      description:
        'Đánh giá năng lực thiết kế, triển khai và vận hành hạ tầng AI/GPU trong môi trường trung tâm dữ liệu và điện toán hiệu năng cao.',
    },
    {
      name: 'NCP-AIO (Professional AI Operations)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/ai-operations-professional/',
      description:
        'Tập trung vào giám sát, tối ưu và đảm bảo vận hành hệ thống AI trong môi trường production.',
    },
    {
      name: 'NCA-AIIO (Associate AI Infrastructure and Operations)',
      duration: '120 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/ai-networking-professional/',
      description:
        'Cấp Associate: nền tảng về hạ tầng và vận hành AI, phù hợp vai trò phối hợp và hỗ trợ kỹ thuật.',
    },
    {
      name: 'NCP-ADS (Professional Accelerated Data Science)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/accelerated-data-science-professional/',
      description:
        'Khoa học dữ liệu tăng tốc trên GPU: pipeline, mô hình và phân tích quy mô lớn với stack NVIDIA.',
    },
    {
      name: 'NCP-GENL (Professional Generative AI LLMs)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/',
      description:
        'Chuyên sâu về LLM và ứng dụng GenAI: triển khai, tinh chỉnh và tích hợp trong hệ thống thực tế.',
    },
    {
      name: 'NCP-AAI (Professional Agentic AI)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/',
      description:
        'Hệ thống tác tử AI, quy trình agentic và tích hợp mô hình trong luồng công việc tự động hóa.',
    },
    {
      name: 'NCA-GENL (Associate Generative AI LLM)',
      duration: '120 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/',
      description:
        'Cấp Associate: kiến thức nền về GenAI và LLM, phù hợp người mới bước vào lĩnh vực ứng dụng AI sinh.',
    },
    {
      name: 'NCA-GENM (Associate Generative AI Multimodal)',
      duration: '120 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-multimodal-associate/',
      description:
        'Nền tảng về mô hình đa phương thức (văn bản, hình ảnh, âm thanh) và ứng dụng GenAI liên kết.',
    },
    {
      name: 'NCP-OUSD (Professional OpenUSD Development)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/openusd-development-professional/',
      description:
        'Phát triển với OpenUSD: mô phỏng, nội dung 3D và quy trình kỹ thuật số trong hệ sinh thái NVIDIA.',
    },
  ]

  const availableCourses = [
    {
      name: 'Fundamentals of Deep Learning',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/fundamentals-of-deep-learning/',
    },
    {
      name: 'Fundamentals of Accelerated Data Science',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/fundamentals-of-accelerated-data-science/',
    },
    {
      name: 'Building Transformer-Based NLP Applications',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/natural-language-processing/',
    },
    {
      name: 'Building LLM Applications with Prompt Engineering',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/building-llm-applications-with-prompt-engineering/',
    },
    {
      name: 'Rapid Application Development with LLMs',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/rapid-application-development-with-llms/',
    },
    {
      name: 'Building Conversational AI Applications',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/building-conversational-ai-applications/',
    },
    {
      name: 'Generative AI with Diffusion Models',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/generative-ai-with-diffusion-models/',
    },
    {
      name: 'Building AI Agents with Multimodal Models',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/building-ai-agents-with-multimodal-models/',
    },
    {
      name: 'Accelerating End-to-End Data Science Workflows',
      duration: '6 giờ',
      href: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-DS-02+V1',
    },
    {
      name: 'Enhancing Data Science Outcomes with Efficient Workflow',
      duration: '8 giờ',
      href: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-DS-04+V1',
    },
    {
      name: 'Adding New Knowledge to LLMs',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/adding-new-knowledge-to-llms/',
    },
    {
      name: 'Model Parallelism: Building and Deploying Large Neural Networks',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/model-parallelism/',
    },
    {
      name: 'Building RAG Agents with LLMs',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/building-rag-agents-with-llms/',
    },
    {
      name: 'Building Agentic AI Applications with LLMs',
      duration: '8 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/building-agentic-ai-applications-with-llms/',
    },
    {
      name: 'Introduction to Deploying RAG Pipelines for Production at Scale',
      duration: '8 giờ',
      href: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-DS-07+V1',
    },
    {
      name: 'AI Infrastructure Professional Workshop',
      duration: '28 giờ',
      href: 'https://www.nvidia.com/en-us/training/instructor-led-workshops/ai-infrastructure-professional/',
    },
    {
      name: 'AI Operations Professional Public Training',
      duration: '24 giờ',
      href: 'https://academy.nvidia.com/en/ai-operations-public-training/',
    },
    {
      name: 'Cumulus Linux Bootcamp',
      duration: '12 giờ',
      href: 'https://academy.nvidia.com/en/course/cumulus-linux-bootcamp/',
    },
    {
      name: 'InfiniBand Network Administration',
      duration: '6 giờ',
      href: 'https://academy.nvidia.com/en/course/ib-pro-online/',
    },
    {
      name: 'Spectrum-X Networking Platform Administration',
      duration: '12 giờ',
      href: 'https://academy.nvidia.com/en/course/spectrum-x-networking-platform-administration/',
    },
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
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            Mỗi chứng chỉ dẫn tới trang chính thức của NVIDIA để xem chi tiết chương trình và đăng ký thi.
          </p>
          <ul className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {courses.map((course, idx) => (
              <li
                key={course.href}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 sm:p-6 flex flex-col gap-3 hover:border-blue-200 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                    {idx + 1}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    {course.duration}
                  </span>
                </div>
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-semibold text-gray-900 text-sm sm:text-base leading-snug hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded"
                >
                  <span className="inline-flex items-start gap-1.5">
                    {course.name}
                    <ExternalLink
                      className="h-4 w-4 shrink-0 mt-0.5 text-blue-500 opacity-70 group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                </a>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{course.description}</p>
              </li>
            ))}
          </ul>
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
                  <tr key={course.href} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-semibold text-gray-900">{idx + 1}</td>
                    <td className="px-6 py-4">
                      <a
                        href={course.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1.5 font-semibold text-gray-700 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded"
                      >
                        {course.name}
                        <ExternalLink
                          className="h-4 w-4 shrink-0 mt-0.5 text-blue-500 opacity-70 group-hover:opacity-100"
                          aria-hidden
                        />
                      </a>
                    </td>
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
                href="https://forms.gle/WJ9TTBp5pVJ8ggjU9"
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

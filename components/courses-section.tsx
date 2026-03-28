'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'

type CertificateDetails = {
  audience: string
  focus: string
  context: string
  examInfo: string
  language: string
}

type Certificate = {
  name: string
  duration: string
  href: string
  answer: string
  highlights: string[]
  details: CertificateDetails
}

export function CoursesSection() {
  const [openCertIndex, setOpenCertIndex] = useState<string | null>(null)

  const certificates: Certificate[] = [
    {
      name: 'NCP-AII (Professional AI Infrastructure)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-professional/',
      answer:
        'Chứng chỉ Professional đánh giá năng lực thiết kế, triển khai và vận hành hạ tầng AI/GPU trong môi trường trung tâm dữ liệu và điện toán hiệu năng cao. Đây là chuẩn tham chiếu cho kỹ sư cần đảm bảo khối lượng công việc AI chạy ổn định, mở rộng được và kiểm soát chi phí phần cứng.',
      highlights: [
        'Thiết kế kiến trúc GPU cluster và phân bổ tài nguyên cho workload AI.',
        'Triển khai và tích hợp dịch vụ AI trên hạ tầng trung tâm dữ liệu hiện đại.',
        'Giám sát hiệu năng, độ tin cậy và khả năng mở rộng của pipeline AI.',
        'Áp dụng thực tiễn tốt nhất cho vận hành AI quy mô lớn trên nền tảng NVIDIA.',
      ],
      details: {
        audience:
          'Kỹ sư hạ tầng, kiến trúc sư giải pháp, DevOps/SRE và chuyên gia IT triển khai AI trong doanh nghiệp.',
        focus:
          'GPU, mạng và lưu trữ cho AI; orchestration; tối ưu hiệu năng và chi phí vận hành hạ tầng AI.',
        context: 'Trung tâm dữ liệu, điện toán hiệu năng cao, cloud AI và môi trường sản xuất.',
        examInfo:
          'Bài thi Professional, thời lượng 180 phút; đăng ký và lịch thi theo trang chứng chỉ NVIDIA.',
        language: 'Tiếng Anh',
      },
    },
    {
      name: 'NCP-AIO (Professional AI Operations)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/ai-operations-professional/',
      answer:
        'Chứng chỉ tập trung vào vận hành hệ thống AI trong môi trường production: giám sát, tối ưu, sự cố và khôi phục. Phù hợp người chịu trách nhiệm đảm bảo dịch vụ AI luôn đạt SLA khi tải và dữ liệu thay đổi.',
      highlights: [
        'Vận hành và giám sát pipeline AI, inference và huấn luyện trong production.',
        'Tối ưu tài nguyên, chi phí GPU và hiệu năng theo thời gian thực.',
        'Xử lý sự cố, bảo mật vận hành và quy trình cập nhật mô hình an toàn.',
        'Phối hợp với nhóm hạ tầng và ứng dụng để duy trì độ ổn định hệ thống.',
      ],
      details: {
        audience:
          'Kỹ sư vận hành AI, SRE, quản trị nền tảng MLOps/LLMOps và đội hỗ trợ sản xuất AI.',
        focus:
          'Giám sát, logging, alerting, capacity planning và tối ưu vận hành workload AI.',
        context: 'Doanh nghiệp triển khai AI tại quy mô lớn, dịch vụ nội bộ và sản phẩm AI.',
        examInfo:
          'Bài thi Professional, 180 phút; chi tiết định dạng và lịch trên trang NVIDIA.',
        language: 'Tiếng Anh',
      },
    },
    {
      name: 'NCA-AIIO (Associate AI Infrastructure and Operations)',
      duration: '120 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/ai-networking-professional/',
      answer:
        'Cấp Associate cung cấp nền tảng về hạ tầng và vận hành AI, phù hợp vai trò phối hợp, hỗ trợ kỹ thuật hoặc chuyên viên mới chuyển sang mảng AI. Giúp hiểu cách các thành phần hạ tầng kết nối để phục vụ mô hình và dịch vụ AI.',
      highlights: [
        'Các khái niệm cốt lõi về hạ tầng phục vụ AI và vai trò từng lớp trong stack.',
        'Làm việc cơ bản với mạng, kết nối và yêu cầu băng thông cho workload GPU.',
        'Nền tảng vận hành: giám sát, ticket và phối hợp với nhóm chuyên sâu.',
        'Chuẩn bị cho lộ trình nâng cao lên chứng chỉ Professional tương ứng.',
      ],
      details: {
        audience:
          'Sinh viên, chuyên viên IT mới, PM/BA cần nền tảng kỹ thuật AI, hoặc hỗ trợ vận hành cấp 1–2.',
        focus: 'Kiến thức nền về hạ tầng và vận hành AI ở mức Associate, không yêu cầu kinh nghiệm sâu.',
        context: 'Đội nhóm đa vai, doanh nghiệp bắt đầu chuẩn hóa kỹ năng AI infrastructure.',
        examInfo: 'Bài thi Associate, 120 phút; xem hướng dẫn chính thức trên trang NVIDIA.',
        language: 'Tiếng Anh',
      },
    },
    {
      name: 'NCP-ADS (Professional Accelerated Data Science)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/accelerated-data-science-professional/',
      answer:
        'Chứng chỉ đánh giá khoa học dữ liệu tăng tốc trên GPU: xây dựng pipeline, huấn luyện và suy luận mô hình, phân tích quy mô lớn với stack NVIDIA (RAPIDS, CUDA-X và hệ sinh thái liên quan).',
      highlights: [
        'Thiết kế pipeline dữ liệu và huấn luyện tận dụng GPU hiệu quả.',
        'Áp dụng thư viện tăng tốc cho tiền xử lý, đặc trưng và mô hình học máy.',
        'Làm việc với dữ liệu lớn và tối ưu thời gian chạy trong môi trường thực tế.',
        'Kết nối kết quả phân tích với triển khai và vận hành trong tổ chức.',
      ],
      details: {
        audience: 'Nhà khoa học dữ liệu, kỹ sư ML và chuyên gia phân tích cần chứng minh năng lực GPU.',
        focus: 'RAPIDS, workflow data science tăng tốc, mô hình và pipeline trên GPU.',
        context: 'Tài chính, bán lẻ, sản xuất, nghiên cứu và mọi lĩnh vực có khối lượng dữ liệu lớn.',
        examInfo: 'Bài thi Professional, 180 phút; cập nhật đề cương trên trang chứng chỉ NVIDIA.',
        language: 'Tiếng Anh',
      },
    },
    {
      name: 'NCP-GENL (Professional Generative AI LLMs)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/',
      answer:
        'Chứng chỉ chuyên sâu về LLM và ứng dụng GenAI: tinh chỉnh, triển khai, bảo mật và tích hợp vào sản phẩm. Phù hợp người xây dựng giải pháp AI sinh trong doanh nghiệp và cần chứng minh năng lực end-to-end.',
      highlights: [
        'Kiến trúc LLM, tinh chỉnh (fine-tuning) và chiến lược prompt/RAG cơ bản đến nâng cao.',
        'Triển khai inference hiệu năng, giám sát chất lượng đầu ra và chi phí token.',
        'Tích hợp LLM vào luồng nghiệp vụ, API và hệ thống hiện có.',
        'Tuân thủ, an toàn và kiểm soát rủi ro khi đưa GenAI vào production.',
      ],
      details: {
        audience: 'Kỹ sư AI/ML, kiến trúc sư ứng dụng GenAI và đội phát triển sản phẩm LLM.',
        focus: 'LLM, GenAI trên văn bản, triển khai và vận hành mô hình sinh trong thực tế.',
        context: 'Chatbot doanh nghiệp, trợ lý nội bộ, tự động hóa nội dung và dịch vụ AI sinh.',
        examInfo: 'Bài thi Professional, 180 phút; thông tin đăng ký trên trang NVIDIA Learn.',
        language: 'Tiếng Anh',
      },
    },
    {
      name: 'NCP-AAI (Professional Agentic AI)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/',
      answer:
        'Chứng chỉ đánh giá năng lực thiết kế hệ thống tác tử AI: lập kế hoạch, công cụ, bộ nhớ, gọi API và phối hợp nhiều bước trong luồng công việc tự động. Phản ánh xu hướng agentic AI trong sản phẩm và quy trình doanh nghiệp.',
      highlights: [
        'Thiết kế agent với công cụ (tool use), planning và xử lý đa bước.',
        'Tích hợp mô hình ngôn ngữ và nguồn dữ liệu ngoài trong luồng agentic.',
        'Giám sát, gỡ lỗi và an toàn cho hệ thống nhiều tác tử.',
        'Ánh xạ yêu cầu nghiệp vụ sang kiến trúc agentic khả thi và bền vững.',
      ],
      details: {
        audience: 'Kỹ sư xây dựng agent, nhà phát triển LLM application và kiến trúc sư quy trình tự động.',
        focus: 'Agentic AI, orchestration, tool calling và tích hợp đa mô hình.',
        context: 'Tự động hóa nghiệp vụ, trợ lý đa bước, RAG nâng cao và workflow thông minh.',
        examInfo: 'Bài thi Professional, 180 phút; chi tiết trên trang chứng chỉ NVIDIA.',
        language: 'Tiếng Anh',
      },
    },
    {
      name: 'NCA-GENL (Associate Generative AI LLM)',
      duration: '120 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/',
      answer:
        'Cấp Associate về GenAI và LLM: kiến thức nền cho người mới bước vào ứng dụng AI sinh—khái niệm mô hình sinh, prompt, giới hạn và các kịch bản sử dụng phổ biến trong tổ chức.',
      highlights: [
        'Hiểu LLM và GenAI ở mức cần cho vai trò phối hợp và áp dụng có trách nhiệm.',
        'Soạn prompt hiệu quả và nhận biết rủi ro hallucination, bảo mật cơ bản.',
        'Làm quen với quy trình từ thử nghiệm đến triển khai pilot trong doanh nghiệp.',
        'Nền tảng để học tiếp lên chứng chỉ Professional về LLM.',
      ],
      details: {
        audience: 'Người mới chuyển ngành, PM, chuyên viên kinh doanh công nghệ và sinh viên năm cuối.',
        focus: 'Khái niệm GenAI/LLM, ứng dụng thực tế và thực hành cơ bản, không yêu cầu kinh nghiệm sâu.',
        context: 'Đội đa chức năng cần ngôn ngữ chung về AI sinh trong dự án.',
        examInfo: 'Bài thi Associate, 120 phút; đăng ký qua cổng học tập NVIDIA.',
        language: 'Tiếng Anh',
      },
    },
    {
      name: 'NCA-GENM (Associate Generative AI Multimodal)',
      duration: '120 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-multimodal-associate/',
      answer:
        'Chứng chỉ nền về mô hình đa phương thức (văn bản, hình ảnh, âm thanh) và cách kết hợp trong ứng dụng GenAI. Giúp định hướng thiết kế sản phẩm có nhiều loại đầu vào và đầu ra.',
      highlights: [
        'Khái niệm fusion đa phương thức và giới hạn của từng loại mô hình.',
        'Kịch bản ứng dụng: mô tả ảnh, tìm kiếm đa phương thức, nội dung lai.',
        'Cân nhắc hiệu năng, chi phí và quyền riêng tư khi dùng GenAI đa phương thức.',
        'Bước đệm cho lộ trình học sâu hơn về GenAI chuyên nghiệp.',
      ],
      details: {
        audience: 'Designer sản phẩm AI, nhà phát triển ứng dụng sáng tạo và chuyên viên nội dung kỹ thuật.',
        focus: 'GenAI đa phương thức ở mức Associate: khái niệm, ví dụ và thực hành cơ bản.',
        context: 'Truyền thông, e-commerce, giáo dục và mọi lĩnh vực cần nội dung đa định dạng.',
        examInfo: 'Bài thi Associate, 120 phút; thông tin cập nhật trên trang NVIDIA.',
        language: 'Tiếng Anh',
      },
    },
    {
      name: 'NCP-OUSD (Professional OpenUSD Development)',
      duration: '180 phút',
      href: 'https://www.nvidia.com/en-us/learn/certification/openusd-development-professional/',
      answer:
        'Chứng chỉ đánh giá năng lực phát triển với OpenUSD trong hệ sinh thái NVIDIA: mô phỏng, nội dung 3D, digital twin và quy trình kỹ thuật số. Phù hợp đội làm sản phẩm đồ họa, robotics ảo và trải nghiệm immersive.',
      highlights: [
        'Thiết kế và tổ chức scene graph, layer và composition trong OpenUSD.',
        'Tích hợp pipeline 3D, mô phỏng và cộng tác đa ứng dụng.',
        'Tối ưu hiệu năng và quy trình làm việc cho dự án quy mô lớn.',
        'Liên kết với Omniverse và các công cụ phát triển NVIDIA.',
      ],
      details: {
        audience: 'Kỹ sư đồ họa 3D, TD, nhà phát triển mô phỏng và chuyên gia digital twin.',
        focus: 'OpenUSD, phát triển nội dung 3D và tích hợp trong pipeline kỹ thuật số.',
        context: 'Ô tô, robot, phim, game, thiết kế sản phẩm và nhà máy ảo.',
        examInfo: 'Bài thi Professional, 180 phút; chi tiết và lịch trên trang chứng chỉ NVIDIA.',
        language: 'Tiếng Anh',
      },
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-6 md:mb-8 leading-tight">
            Các chứng chỉ hiện có
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            Mỗi mục mở ra mô tả chi tiết giống phần Khóa học tổng quan về học sâu; liên kết dẫn tới trang
            chính thức của NVIDIA để xem đề cương và đăng ký thi.
          </p>
          <div className="space-y-3">
            {certificates.map((cert, idx) => {
              const itemId = `cert-${idx}`
              return (
                <div
                  key={cert.href}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenCertIndex(openCertIndex === itemId ? null : itemId)}
                    className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 hover:bg-gray-50 transition text-left"
                  >
                    <span className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0 flex-1">
                      <span className="text-xs font-semibold text-blue-600 shrink-0 w-8">
                        {idx + 1}.
                      </span>
                      <span className="text-sm sm:text-base text-gray-800 font-medium leading-snug">
                        {cert.name}
                      </span>
                      <span className="inline-flex items-center self-start sm:self-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                        {cert.duration}
                      </span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 shrink-0 transition ${
                        openCertIndex === itemId ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openCertIndex === itemId && (
                    <div className="bg-gray-50 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2 px-4 sm:px-5 py-4 md:border-r md:border-gray-200 bg-white">
                          <p className="text-gray-600 text-sm leading-7">{cert.answer}</p>
                          <div className="mt-5">
                            <p className="text-gray-600 text-sm mb-3">
                              Sau khi nắm nội dung chứng chỉ này, bạn sẽ thể hiện được:
                            </p>
                            <ul className="space-y-2 text-gray-600 text-sm">
                              {cert.highlights.map((highlight, hIdx) => (
                                <li
                                  key={`${itemId}-h-${hIdx}`}
                                  className="border-t border-gray-200 pt-2 first:border-t-0 first:pt-0"
                                >
                                  • {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="px-4 sm:px-5 py-4 bg-gray-50">
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>
                              <span className="font-semibold">Đối tượng phù hợp:</span> {cert.details.audience}
                            </p>
                            <p>
                              <span className="font-semibold">Trọng tâm nội dung:</span> {cert.details.focus}
                            </p>
                            <p>
                              <span className="font-semibold">Bối cảnh ứng dụng:</span> {cert.details.context}
                            </p>
                            <p>
                              <span className="font-semibold">Thi &amp; chứng chỉ:</span> {cert.details.examInfo}
                            </p>
                            <p>
                              <span className="font-semibold">Ngôn ngữ:</span> {cert.details.language}
                            </p>
                            <a
                              href={cert.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-1.5 rounded bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
                            >
                              Trang chứng chỉ NVIDIA
                              <ExternalLink className="h-3.5 w-3.5 opacity-90" aria-hidden />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
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

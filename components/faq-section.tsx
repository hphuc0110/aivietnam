'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type CourseDetails = {
  prerequisites: string
  tools: string
  domain: string
  certificate: string
  language: string
}

type FAQItem = {
  question: string
  answer: string
  detailsUrl?: string
  highlightsTitle?: string
  highlights?: string[]
  afterHighlights?: string
  details?: CourseDetails
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const faqSections: { title: string; items: FAQItem[] }[] = [
    {
      title: 'Khóa học tổng quan về học sâu',
      items: [
        {
          question: 'Những nguyên lý cơ bản của học sâu: Giới thiệu về lý thuyết và thực hành',
          answer:
            'Các doanh nghiệp toàn cầu đang ứng dụng trí tuệ nhân tạo (AI) để giải quyết những thách thức to lớn mà họ phải đối mặt. Các chuyên gia y tế đang dùng AI để cung cấp cho bệnh nhân những chẩn đoán chính xác và nhanh chóng hơn. Các doanh nghiệp bán lẻ đang sử dụng AI để mang đến trải nghiệm mua sắm cá nhân hóa cho khách hàng. Các nhà sản xuất ô tô đang dùng AI để làm cho xe cá nhân, dịch vụ chia sẻ xe và dịch vụ vận chuyển an toàn và hiệu quả hơn.',
          detailsUrl: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/',
          highlights: [
            'Tìm hiểu các kỹ năng và công cụ cơ bản cần thiết để huấn luyện các mô hình học sâu.',
            'Hiểu rõ các kiểu dữ liệu học sâu phổ biến và kiến trúc mô hình.',
            'Tối ưu hóa tập dữ liệu thông qua việc tăng cường dữ liệu để cải thiện độ chính xác của mô hình.',
            'Tự tin vận hành các dự án của bạn bằng cách sử dụng các khung học sâu tiên tiến.'
          ],
          details: {
            prerequisites:
              'Hiểu biết về các khái niệm lập trình cơ bản trong Python, chẳng hạn như hàm, vòng lặp, từ điển và mảng.',
            tools: 'Tensorflow, Keras, Pandas, NumPy',
            domain: 'Tất cả các ngành công nghiệp',
            certificate:
              'Sau khi hoàn thành khóa học và vượt qua bài kiểm tra trực tuyến, hệ thống sẽ tự động cấp chứng chỉ cho bạn.',
            language: 'Tiếng Anh'
          }
        },

        {
          question: 'Xây dựng các ứng dụng xử lý ngôn ngữ tự nhiên dựa trên Transformer',
          answer:
            'Ứng dụng xử lý ngôn ngữ tự nhiên (NLP) đã bùng nổ mạnh mẽ trong những năm gần đây. Với sự phổ biến của các trợ lý AI, các doanh nghiệp tích hợp nhiều tương tác giữa người và máy tính vào hoạt động của mình, vì thế hiểu cách sử dụng công nghệ NLP để tạo trải nghiệm tự nhiên trở thành lợi thế cạnh tranh quan trọng.',
            detailsUrl: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/',
            highlights: [
            'Nắm bắt nhanh các nhiệm vụ văn bản trong NLP như Word2Vec, mô hình n-gram và Transformer.',
            'Làm thế nào để tạo mô hình ngôn ngữ sử dụng kiến trúc Transformer mà không phụ thuộc vào RNN.',
            'Tối ưu hóa Transformer trong BERT, Megatron và các biến thể khác với cơ chế tự giám sát.',
            'Sử dụng mô hình NLP tiền huấn luyện trước cho các bài toán phân loại, NER và hỏi đáp.'
          ],
          details: {
            prerequisites:
              'Kinh nghiệm lập trình Python và sử dụng các hàm, tham số thư viện; hiểu cơ bản về các framework học sâu.',
            tools: 'PyTorch, pandas, NVIDIA NeMo, NVIDIA Triton Inference Server',
            domain: 'Tất cả các ngành công nghiệp',
            certificate:
              'Sau khi hoàn thành khóa học và vượt qua bài kiểm tra trực tuyến, hệ thống sẽ tự động cấp chứng chỉ cho bạn.',
            language: 'Tiếng Anh'
          }
        },
        {
          question: 'Song song hóa dữ liệu – Huấn luyện mạng no-ron với nhiều GPU',
          answer:
            'Nhu cầu tính toán đối với mạng no-ron sâu trong các ứng dụng trí tuệ nhân tạo ngày càng lớn. Sử dụng nhiều GPU giúp rút ngắn đáng kể thời gian cần thiết để huấn luyện, đặc biệt trong các lĩnh vực như nghiên cứu y tế hay chu kỳ phát triển sản phẩm dài hạn.',
            detailsUrl: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/',
            highlights: [
            'Các phương pháp huấn luyện cho hệ thống đa GPU.',
            'Những thách thức về thuật toán và kỹ thuật trong đào tạo quy mô lớn.',
            'Các công nghệ chủ chốt được sử dụng để khắc phục các thách thức nêu trên.'
          ],
          details: {
            prerequisites: 'Kinh nghiệm huấn luyện mô hình giảm độ dốc (gradient descent).',
            tools: 'TensorFlow, Keras, Horovod',
            domain: 'Tất cả các ngành công nghiệp',
            certificate:
              'Sau khi hoàn thành khóa học và vượt qua bài kiểm tra trực tuyến, hệ thống sẽ tự động cấp chứng chỉ cho bạn.',
            language: 'Tiếng Anh'
          }
        },
      ]
    },
    {
      title: 'Các khóa học ứng dụng học sâu trong công nghiệp',
      items: [
        {
          question: 'Ứng dụng Trí tuệ Nhân tạo – Phát hiện Bất thường (Sức khỏe)',
          detailsUrl: 'https://www.nvidia.com/en-us/industries/healthcare-life-sciences/',
          answer:
            'Khi doanh nghiệp của bạn cần giám sát các mối đe dọa an ninh mạng, giao dịch tài chính gian lận, lỗi sản phẩm hoặc tình trạng thiết bị, trí tuệ nhân tạo (AI) có thể giúp phát hiện những bất thường ngay từ dữ liệu trước khi chúng ảnh hưởng đến hoạt động kinh doanh. Khóa học này sử dụng ngăn xếp điện toán tăng tốc hiện đại để xử lý dữ liệu lớn và xây dựng hệ thống phát hiện bất thường hiệu quả.',
          highlights: [
            'Ba kỹ thuật phát hiện bất thường khác nhau được áp dụng: XGBoost tăng tốc và mô hình học sâu dựa trên GAN.',
            'Xây dựng và so sánh các giải pháp dựa trên học có giám sát và học không giám sát.',
            'Khám phá các kịch bản ứng dụng thực tế có thể hưởng lợi từ các phương pháp điện toán hiện đại.'
          ],
          details: {
            prerequisites:
              'Kinh nghiệm chuyên môn về khoa học dữ liệu sử dụng Python và kinh nghiệm huấn luyện mạng nơ-ron sâu.',
            tools:
              'NVIDIA RAPIDS, XGBoost, TensorFlow, Keras, pandas, autoencoders, GANs, học máy, trí tuệ nhân tạo',
            domain: 'Tất cả các ngành công nghiệp',
            certificate:
              'Sau khi hoàn thành khóa học và vượt qua bài kiểm tra trực tuyến, hệ thống sẽ tự động cấp chứng chỉ cho bạn.',
            language: 'Tiếng Anh'
          }
        },
      ]
    },
    {
      title: 'Các khóa học tổng quát Omniverse',
      items: [
        {
          question: 'Xây dựng con người kỹ thuật số bằng Omniverse Audio2Face và Riva',
          answer:
            'Khóa học hướng dẫn tạo nhân vật số có khả năng biểu cảm khuôn mặt và giọng nói tự nhiên theo thời gian thực. Bạn sẽ thực hành kết hợp Audio2Face và Riva để xây dựng trải nghiệm tương tác sống động.',
          detailsUrl:
            'https://www.nvidia.cn/training/instructor-led-workshops/build-digital-avatar-pipeline/'
        },
      ]
    },
  ]

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 md:space-y-16">
          {faqSections.map((section, idx) => (
            <div key={`section-${idx}`}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-6 md:mb-8 leading-tight">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => {
                  const itemId = `${idx}-${itemIdx}`
                  return (
                    <div
                      key={itemId}
                      className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(itemId)}
                        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 hover:bg-gray-100 transition"
                      >
                        <span className="text-sm sm:text-base text-gray-700 text-left font-medium">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-gray-400 shrink-0 transition ${
                            openIndex === itemId ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openIndex === itemId && (
                        <div className="bg-white border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="md:col-span-2 px-4 sm:px-5 py-4 md:border-r md:border-gray-200">
                              <p className="text-gray-600 text-sm leading-7">{item.answer}</p>
                              {item.highlights && item.highlights.length > 0 && (
                                <div className="mt-5">
                                  <p className="text-gray-600 text-sm mb-3">
                                    {item.highlightsTitle ||
                                      'Sau khi tham gia khóa học này, bạn sẽ có thể:'}
                                  </p>
                                  <ul className="space-y-2 text-gray-600 text-sm">
                                    {item.highlights.map((highlight, highlightIdx) => (
                                      <li
                                        key={`${itemId}-highlight-${highlightIdx}`}
                                        className="border-t border-gray-200 pt-2"
                                      >
                                        • {highlight}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {item.afterHighlights && (
                                <p className="text-gray-600 text-sm mt-5">{item.afterHighlights}</p>
                              )}
                            </div>
                            <div className="px-4 sm:px-5 py-4 bg-gray-50">
                              {item.details ? (
                                <div className="space-y-3 text-sm text-gray-700">
                                  <p>
                                    <span className="font-semibold">Điều kiện tiên quyết:</span>{' '}
                                    {item.details.prerequisites}
                                  </p>
                                  <p>
                                    <span className="font-semibold">Các công cụ, thư viện và framework:</span>{' '}
                                    {item.details.tools}
                                  </p>
                                  <p>
                                    <span className="font-semibold">Lĩnh vực ứng dụng:</span> {item.details.domain}
                                  </p>
                                  <p>
                                    <span className="font-semibold">Chứng chỉ được cấp:</span>{' '}
                                    {item.details.certificate}
                                  </p>
                                  <p>
                                    <span className="font-semibold">Ngôn ngữ:</span> {item.details.language}
                                  </p>
                                  {item.detailsUrl ? (
                                    <a
                                      href={item.detailsUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="mt-2 inline-flex items-center rounded bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
                                    >
                                      Thông tin chi tiết khóa học
                                    </a>
                                  ) : (
                                    <button
                                      type="button"
                                      className="mt-2 inline-flex items-center rounded bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
                                    >
                                      Thông tin chi tiết khóa học
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <div className="space-y-3 text-sm text-gray-700">
                                  <p className="text-gray-600 text-sm">
                                    Thông tin điều kiện và chi tiết khóa học sẽ được cập nhật.
                                  </p>
                                  {item.detailsUrl ? (
                                    <a
                                      href={item.detailsUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="mt-2 inline-flex items-center rounded bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
                                    >
                                      Thông tin chi tiết khóa học
                                    </a>
                                  ) : (
                                    <button
                                      type="button"
                                      className="mt-2 inline-flex items-center rounded bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
                                    >
                                      Thông tin chi tiết khóa học
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

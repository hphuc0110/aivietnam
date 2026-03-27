'use client'

import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'

type YearPanel = {
  year: string
  title: string
  leftItems: string[]
  rightItems: string[]
}

export function TrainingYearsSection() {
  const panels: YearPanel[] = useMemo(
    () => [
      {
        year: '2024',
        title: 'Các khóa đào tạo doanh nghiệp của DLI',
        leftItems: [
          'Giới thiệu về Trí tuệ nhân tạo sinh - Ngày 18 tháng 1 năm 2024 - GAC Aion',
          'Kiến thức cơ bản về Học sâu - Giới thiệu về lý thuyết và thực hành - Ngày 24 tháng 2 năm 2024 - Zhilun Telecom',
          'Tăng tốc các nguyên lý tính toán - CUDA Python - Ngày 26 tháng 4 năm 2024 - Viện Công Nghệ Cao cấp Hồ Nam',
          'Xây dựng các ứng dụng Trí tuệ nhân tạo sinh dựa trên mô hình khuếch tán (Phần 2) - Ngày 24 tháng 5 năm 2024 - GAC Aion',
          'Kiến thức cơ bản về Học sâu - Giới thiệu về lý thuyết và thực hành - Ngày 15 tháng 7 năm 2024 - Zhilun Telecom'
        ],
        rightItems: [
          'Kiến thức cơ bản về Học sâu - Giới thiệu về lý thuyết và thực hành - Ngày 29 tháng 1 năm 2024 - Zhilun Telecom',
          'Kiến thức cơ bản về điện toán tăng tốc - CUDA C/C++ - Ngày 25 tháng 4 năm 2024',
          'Xây dựng các ứng dụng Trí tuệ nhân tạo tạo sinh dựa trên mô hình khuếch tán (Phần 1) - Ngày 17 tháng 5 năm 2024 - GAC Aion',
          'Xây dựng các ứng dụng Trí tuệ nhân tạo tạo sinh dựa trên mô hình khuếch tán (Phần 2) - Ngày 17 tháng 8 năm 2024',
          'Mô hình ngôn ngữ tối ưu hiệu quả cao (LLM) - Ngày 26 tháng 10 năm 2024 - Desay SV'
        ]
      },
      {
        year: '2023',
        title: 'Các khóa đào tạo doanh nghiệp của DLI',
        leftItems: [
          'Tăng tốc tính toán: Các kỹ thuật tiên tiến - Sử dụng nhiều GPU để tăng tốc các ứng dụng CUDA C++ | Ngành công nghiệp Internet | 25 tháng 2 năm 2023',
          'Xây dựng hệ thống dự xuất thông minh | Desay SV | 15 tháng 4 năm 2023',
          'Xây dựng các ứng dụng xử lý ngôn ngữ tự nhiên dựa trên Transformer | Ngành công nghiệp Internet | 27 tháng 5 năm 2023',
          'Kiến thức cơ bản về học sâu - Giới thiệu về lý thuyết và thực hành - Khóa học trực tuyến Zhuilun | 17 tháng 7 năm 2023',
          'Song song hóa mô hình - Huấn luyện mạng no-ron với nhiều GPU | BYD | 26 tháng 8 năm 2023'
        ],
        rightItems: [
          'Tăng tốc các nguyên tắc cơ bản của điện toán - CUDA Python | Desay SV | Ngày 4 tháng 9 năm 2023',
          'Tăng tốc tính toán: Mở rộng ứng dụng CUDA C++ lên GPU đa nút | Desay SV | 19 tháng 3 năm 2023',
          'Xây dựng các ứng dụng xử lý ngôn ngữ tự nhiên dựa trên Transformer | Ngành công nghiệp Internet | 17 tháng 4 năm 2023',
          'Kiến thức cơ bản về học sâu - Giới thiệu về lý thuyết và thực hành | GAC Aion | 29 tháng 7 năm 2023'
        ]
      },
      {
        year: '2022',
        title: 'Khóa đào tạo DLI',
        leftItems: [
          'Kiến thức cơ bản về điện toán tăng tốc - CUDA C/C++ | Lớp học trực tuyến | Ngày 12 tháng 2 năm 2022',
          'Kiến thức cơ bản về điện toán tăng tốc - CUDA C/C++ | Lớp học trực tuyến | Ngày 25 tháng 2 năm 2022',
          'Kiến thức cơ bản về điện toán tăng tốc - CUDA C/C++ | Lớp học trực tuyến | Ngày 27 tháng 5 năm 2022',
          'Kiến thức cơ bản về học sâu - Giới thiệu về lý thuyết và thực hành | Lớp học trực tuyến | Ngày 10 tháng 6 năm 2022',
          'Tăng tốc tính toán: Các kỹ thuật nâng cao - Tăng tốc ứng dụng CUDA C++ với nhiều GPU | Lớp học trực tuyến | Ngày 10 tháng 12 năm 2022'
        ],
        rightItems: [
          'Kiến thức cơ bản về điện toán tăng tốc - CUDA C/C++ | Lớp học trực tuyến | Ngày 23 tháng 4 năm 2022',
          'Kiến thức cơ bản về điện toán tăng tốc - CUDA C/C++ | Lớp học trực tuyến | Ngày 5 tháng 3 năm 2022',
          'Tăng tốc tính toán: Các kỹ thuật nâng cao - Tăng tốc ứng dụng CUDA C++ với nhiều GPU | Lớp học trực tuyến | Ngày 11 tháng 6 năm 2022',
          'Kiến thức cơ bản về học sâu - Giới thiệu về lý thuyết và thực hành | Lớp học trực tuyến | Ngày 28 tháng 6 năm 2022',
          'Kiến thức cơ bản về điện toán tăng tốc - CUDA C/C++ | Lớp học trực tuyến | Ngày 3 tháng 12 năm 2022'
        ]
      },
      {
        year: '2021',
        title: 'Khóa đào tạo DLI',
        leftItems: [
          'Kiến thức cơ bản về học sâu | Lớp học trực tuyến | Ngày 29 tháng 5 năm 2021',
          'Kiến thức cơ bản về điện toán tăng tốc | Lớp học trực tuyến | Ngày 17 tháng 6 năm 2021',
          'Kiến thức cơ bản về điện toán tăng tốc | Lớp học trực tuyến | Ngày 19 tháng 11 năm 2021',
          'Kiến thức cơ bản về học sâu | Lớp học trực tuyến | Ngày 10 tháng 12 năm 2021'
        ],
        rightItems: [
          'Kiến thức cơ bản về học sâu | Lớp học trực tuyến | Ngày 26 tháng 6 năm 2021',
          'Kiến thức cơ bản về điện toán tăng tốc | Lớp học trực tuyến | Ngày 21 tháng 8 năm 2021',
          'Tăng tốc tính toán nâng cao | Lớp học trực tuyến | Ngày 26 tháng 11 năm 2021',
          'Kiến thức cơ bản về học sâu | Lớp học trực tuyến | Ngày 17 tháng 12 năm 2021'
        ]
      },
      {
        year: '2019',
        title: 'Khóa đào tạo DLI',
        leftItems: [
          'Lớp học mới AI Việt Nam | Thượng Hải | 25 tháng 7 năm 2019',
          'Lớp học mới AI Việt Nam | Thượng Hải | 29 tháng 8 năm 2019',
          'Hội thảo mới AI Việt Nam | Thượng Hải | 31 tháng 10 năm 2019'
        ],
        rightItems: [
          'Phiên họp chuyên đề về Y tế | Đại Liên | Ngày 4 tháng 8 năm 2019',
          'Lớp học mở AI Việt Nam | Thượng Hải | Ngày 26 tháng 9 năm 2019'
        ]
      },
      {
        year: '2018',
        title: 'Khóa đào tạo DLI',
        leftItems: [
          'Giới thiệu về cơ bản về học sâu | Bắc Kinh | Ngày 10 tháng 1 năm 2018',
          'Đại học Công nghệ Tây An | Tây An | Ngày 14 tháng 3 năm 2018',
          'Phiên họp đặc biệt dành cho các công ty ở tối | Nam Thông | Ngày 20 tháng 4 năm 2018',
          'Đại học Công nghệ & Thâm Quyến | Thâm Dương | Ngày 30 tháng 10 năm 2018'
        ],
        rightItems: [
          'Đại học Công nghệ Tây Ninh | Tây An | Ngày 12 tháng 7 năm 2018',
          'Phiên họp đặc biệt dành cho các công ty ở tối | Nam Thông | Ngày 23 tháng 8 năm 2018',
          'Hội thảo công nghệ Trường Thực | Trường Thực | Ngày 13 tháng 11 năm 2018',
          'Trường Đại học Khoa học và Công nghệ Điền Tứ | Thượng Hải | Ngày 14 tháng 12 năm 2018'
        ]
      }
    ],
    []
  )

  const [openYears, setOpenYears] = useState<Set<string>>(() => new Set())

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-12">
          Các khóa đào tạo được tổ chức trong những năm trước
        </h2>

        <div className="space-y-6">
          {panels.map((panel) => {
            const isOpen = openYears.has(panel.year)
            return (
              <div
                key={panel.year}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  type="button"
                  onClick={() => {
                    setOpenYears((prev) => {
                      const next = new Set(prev)
                      if (next.has(panel.year)) next.delete(panel.year)
                      else next.add(panel.year)
                      return next
                    })
                  }}
                  className="w-full px-6 py-3 bg-gray-50 flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-gray-500">
                    {panel.year}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 py-7">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">
                      {panel.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                        {panel.leftItems.map((item, idx) => (
                          <li key={`${panel.year}-l-${idx}`}>{item}</li>
                        ))}
                      </ul>
                      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                        {panel.rightItems.map((item, idx) => (
                          <li key={`${panel.year}-r-${idx}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


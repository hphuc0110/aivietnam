export type EventContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export type EventItem = {
  id: string
  title: string
  date: string
  category: string
  thumbnail: string
  excerpt: string
  content: EventContentBlock[]
  time?: string
  location?: string
}

export const EVENT_ITEMS: EventItem[] = [
  {
    id: 'workshop-ai-thuc-chien',
    title: 'TỌA ĐÀM: NÂNG TẦM NHÂN LỰC CHO DOANH NGHIỆP TRONG KỶ NGUYÊN AI',
    date: '08/06/2026 (Thứ Hai)',
    category: 'Tọa đàm',
    thumbnail: '/news/event_1.jpg',
    excerpt:
      'Trong bối cảnh trí tuệ nhân tạo (AI) đang định hình lại nền kinh tế, việc ứng dụng công nghệ và xây dựng đội ngũ nhân sự chuyên sâu đã trở thành bài toán chiến lược.',
    time: '14h00 – 16h30',
    location: 'Hội trường tòa nhà Cựu sinh viên Alumni, Đại học Bách Khoa Hà Nội',
    content: [
      {
        type: 'paragraph',
        text: 'Trong bối cảnh trí tuệ nhân tạo (AI) đang định hình lại nền kinh tế, việc ứng dụng công nghệ và xây dựng đội ngũ nhân sự chuyên sâu đã trở thành bài toán chiến lược.',
      },
      {
        type: 'paragraph',
        text: 'Nhằm phác họa bức tranh toàn cảnh và tìm kiếm hướng đi thực tiễn, Học viện AI cho Việt Nam trân trọng giới thiệu tọa đàm: "Nâng tầm nhân lực cho doanh nghiệp trong kỷ nguyên AI".',
      },
      {
        type: 'paragraph',
        text: 'Sự kiện được phối hợp tổ chức bởi: Trường Đại học Bách khoa Hà Nội (HUST), Hồng Lĩnh Education (HLE) và Trung tâm Đổi mới Sáng tạo Quốc gia (NIC).',
      },
      { type: 'heading', text: 'THÔNG TIN SỰ KIỆN:' },
      {
        type: 'list',
        items: [
          'Thời gian: 14h00 - 16h30, ngày 08/06/2026 (Thứ Hai)',
          'Địa điểm: Hội trường tòa nhà Cựu sinh viên Alumni, Đại học Bách Khoa Hà Nội',
        ],
      },
      { type: 'heading', text: 'NỘI DUNG THẢO LUẬN TRỌNG TÂM:' },
      {
        type: 'list',
        items: [
          'Bài toán vận hành và tối ưu nguồn lực: Bóc tách các case-study ứng dụng trực tiếp hệ sinh thái AI của NVIDIA vào thực tế doanh nghiệp, giúp tinh gọn bộ máy và nâng cao hiệu quả kinh doanh. Các chính sách hỗ trợ, cam kết công nghệ từ NVIDIA dành riêng cho thị trường Việt Nam cũng sẽ được thảo luận chi tiết.',
          'Chiến lược giải quyết bài toán nhân sự: Khai mở lộ trình tiếp cận nguồn nhân lực chất lượng cao được đào tạo theo chuẩn NVIDIA Deep Learning Institute (DLI), cung cấp giải pháp thiết thực cho tình trạng thiếu hụt nhân sự AI tại khối doanh nghiệp.',
          'Không gian bứt phá cho doanh nghiệp siêu nhỏ và KOL/KOC: Đánh giá cơ hội ứng dụng công nghệ AI vượt trội làm bệ phóng năng lực cạnh tranh, tạo đột phá hiệu suất cho các nhà làm nội dung độc lập ngay cả trên nền tảng hạ tầng giới hạn.',
          'Định vị giá trị trên thị trường lao động: Cập nhật dữ liệu thực tế về các vị trí công việc, dải lương đang dẫn dắt xu hướng, cùng sức mạnh bảo chứng của chứng chỉ quốc tế từ NVIDIA đối với năng lực thực chiến của người lao động.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Kỷ nguyên AI đòi hỏi sự chuẩn bị kỹ lưỡng về cả tầm nhìn lẫn năng lực thực thi, và tọa đàm là không gian đối thoại chuyên sâu để các tổ chức cũng như các cá nhân tự định vị bước đi chiến lược tiếp theo của mình.',
      },
      {
        type: 'paragraph',
        text: 'Đừng bỏ lỡ cơ hội tạo ra lợi thế cạnh tranh khác biệt cho sự nghiệp của bạn. Đăng ký ngay để trực tiếp đối thoại cùng các chuyên gia từ NIC, HUST và NVIDIA!',
      },
    ],
  },
]

export function getEventBySlug(slug: string): EventItem | undefined {
  return EVENT_ITEMS.find((event) => event.id === slug)
}

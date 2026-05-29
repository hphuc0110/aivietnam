export type EventItem = {
  id: string
  title: string
  date: string
  category: string
  thumbnail: string
  excerpt: string
  time?: string
  location?: string
}

export const EVENT_ITEMS: EventItem[] = [
  {
    id: 'workshop-ai-thuc-chien',
    title: 'Chương trình tọa đàm: "Nâng tầm nhân lực cho doanh nghiệp trong kỷ nguyên AI"',
    date: '08/06/2026 (Thứ Sáu)',
    category: 'Workshop',
    thumbnail: '/news/event_1.jpg',
    excerpt:
      '“Học viện AI cho Việt Nam” và hợp tác theo mô hình “Ba nhà” (Nhà nước, Nhà trường, Doanh nghiệp) theo chương trình đào tạo của NVIDIA Deep Learning Institute.',
    time: '14h00 – 16h30',
    location: 'Hội trường tòa nhà Cựu sinh viên Alumni, Đại học Bách Khoa Hà Nội',
  },
]

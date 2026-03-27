'use client'

export function DarkSections() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Các khóa đào tạo được tổ chức trong những năm trước
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Bắt đầu học tập mọi lúc, mọi nơi với trực tuyến học sâu. Hình thành được cấu hình đầy đủ để hỗ trợ kỹ năng.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition">
            Tìm hiểu thêm
          </button>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm text-gray-400 mb-2">Người liên hệ</p>
                <p className="text-white font-semibold">Janet Mao</p>
                <p className="text-gray-400 text-sm">Quản lý Kinh doanh</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Điện thoại</p>
                <p className="text-white font-semibold">18221028993</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Email</p>
                <p className="text-white font-semibold">service@AI Việt Nam.com.cn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

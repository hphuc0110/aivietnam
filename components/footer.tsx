'use client'

import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">LT</span>
              </div>
              <span className="font-bold text-white text-lg">AI Việt Nam</span>
            </div>
            <p className="text-sm mb-4">
              Cung cấp chương trình đào tạo Trí tuệ nhân tạo hàng đầu tại khu vực.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Trang chủ</a></li>
              <li><a href="#" className="hover:text-white transition">Khóa học</a></li>
              <li><a href="#" className="hover:text-white transition">Dịch vụ</a></li>
              <li><a href="#" className="hover:text-white transition">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-white transition">Liên hệ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Tài nguyên</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Tài liệu</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Hỗ trợ</a></li>
              <li><a href="#" className="hover:text-white transition">Cộng đồng</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@AI Việt Nam.com.vn" className="hover:text-white transition">
                  info@AI Việt Nam.com.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+84234567890" className="hover:text-white transition">
                  +84 (0)23 4567 890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-bold text-white mb-2">Đăng ký nhận tin tức</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-semibold hover:bg-blue-700 transition">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 AI Việt Nam. Bảo lưu mọi quyền.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-white transition">Tuyên bố cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

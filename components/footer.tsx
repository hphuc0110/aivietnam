'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'

export function Footer() {
  const menuItems = [
    {
      label: 'Về AI Việt Nam',
      href: '#',
      subItems: [
        { label: 'Về NIC', href: 'https://nic.gov.vn/c/14167/Ve-NIC' },
        { label: 'Về Đại học Bách Khoa Hà Nội', href: 'https://hust.edu.vn/vi/about/tong-quan.html' },
      ],
    },
    { label: 'Trung tâm Tin tức', href: '/news' },

  ]

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <SiteLogo className="h-12 sm:h-14 w-auto max-w-full" />
            </Link>
            <p className="text-sm mb-4">
              Cung cấp chương trình đào tạo Trí tuệ nhân tạo hàng đầu tại khu vực.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Liên kết nhanh</h4>
            <div className="space-y-3 text-sm">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="font-medium text-gray-200 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <ul className="mt-1 ml-3 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            target={subItem.href.startsWith('http') ? '_blank' : undefined}
                            rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-400 hover:text-white transition"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 shrink-0" />
                <a href="mailto:info@AI Việt Nam.com.vn" className="hover:text-white transition">
                  
support@honglinheducation.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0" />
                <a href="tel:0936993339" className="hover:text-white transition">
                  093 699 33 39
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/dqey8MPyu5BXMvaR7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Xem trên Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-bold text-white mb-2">Đăng ký nhận tin tức</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded text-sm font-semibold hover:bg-blue-700 transition">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm gap-4">
            <p>&copy; 2024 AI Việt Nam. Bảo lưu mọi quyền.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
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

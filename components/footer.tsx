'use client'

import Link from 'next/link'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'

export function Footer() {
  const menuItems = [
    {
      label: 'Về AI Việt Nam',
      href: '#',
      subItems: [
        { label: 'Về HongLinhEducation', href: '/about' },
        { label: 'Về Đại học Bách Khoa Hà Nội', href: 'https://hust.edu.vn/vi/about/tong-quan.html' },
        { label: 'Về Trung tâm Đổi mới sáng tạo Quốc gia (NIC)', href: 'https://nic.gov.vn/c/14167/Ve-NIC' },
      ],
    },
    { label: 'Trung tâm Tin tức', href: '/news' },

  ]

  return (
    <footer id="site-footer" className="bg-gray-900 text-gray-400 scroll-mt-16">
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
              <li className="flex items-start gap-3">
                <Facebook size={16} className="mt-1 shrink-0" />
                <a
                  href="https://www.facebook.com/profile.php?id=61581528004490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

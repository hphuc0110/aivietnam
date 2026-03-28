'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    {
      label: 'Về AI Việt Nam',
      href: '#',
      subItems: [
        { label: 'Về NIC', href: 'https://nic.gov.vn/c/14167/Ve-NIC' },
        { label: 'Về Đại học Bách Khoa Hà Nội', href: 'https://hust.edu.vn/vi/about/tong-quan.html' },
      ],
    },
    {
      label: 'Chứng chỉ',
      href: '#',
      subItems: [
        { label: 'NCP-AII (Professional AI Infrastructure)', href: 'https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-professional/' },
        { label: 'NCP-AIO (Professional AI Operations)', href: 'https://www.nvidia.com/en-us/learn/certification/ai-operations-professional/' },
        { label: 'NCA-AIIO (Associate AI Infrastructure and Operations)', href: 'https://www.nvidia.com/en-us/learn/certification/ai-networking-professional/' },
        { label: 'NCP-ADS (Professional Accelerated Data Science)', href: 'https://www.nvidia.com/en-us/learn/certification/accelerated-data-science-professional/' },
        { label: 'NCP-GENL (Professional Generative AI LLMs)', href: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/' },
        { label: 'NCP-AAI (Professional Agentic AI)', href: 'https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/' },
        { label: 'NCP-OUSD (Professional OpenUSD Development)', href: 'https://www.nvidia.com/en-us/learn/certification/openusd-development-professional/' },
      ],
    },
    { label: 'Trung tâm Tin tức', href: '/news' },
    {
      label: 'Dịch vụ hỗ trợ',
      href: '#',
      subItems: [
        { label: 'Khu vực dành cho học viên', href: 'https://lms.honglinheducation.vn/login' },
        { label: 'Khu vực dành cho khách', href: 'https://ai57.honglinheducation.vn/vi' },
      ],
    },
    {
      label: 'Liên hệ',
      href: '#',
      subItems: [
        { label: 'Email', href: 'mailto:support@honglinheducation.vn' },
        { label: 'Điện thoại', href: 'tel:0936993339' },
      ],
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white/95 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs font-bold">AI Việt Nam</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-1 flex-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <button
                    type="button"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition relative block"
                  >
                    {item.label}
                    <ChevronDown size={14} className="inline-block ml-1 opacity-50" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition relative block"
                  >
                    {item.label}
                  </Link>
                )}

                {item.subItems && (
                  <div className="absolute left-0 top-full hidden min-w-[260px] rounded-md border border-gray-200 bg-white py-2 shadow-md group-hover:block group-focus-within:block">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        target={subItem.href.startsWith('http') ? '_blank' : undefined}
                        rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Mở menu điều hướng"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1 border-t border-gray-200 pt-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between text-sm text-gray-700 py-2 px-4 hover:bg-gray-100"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`opacity-50 transition ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="w-full block text-sm text-gray-700 py-2 px-4 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                )}

                {item.subItems && openDropdown === item.label && (
                  <div className="ml-4 border-l border-gray-200">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        target={subItem.href.startsWith('http') ? '_blank' : undefined}
                        rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    { label: 'Về Lita', href: '#' },
    { label: 'Thông tin sản phẩm', href: '#' },
    { label: 'Giải pháp', href: '#' },
    { label: 'Các nhà phát triển', href: '#' },
    { label: 'Trung tâm Tin tức', href: '#' },
    { label: 'Dịch vụ hỗ trợ', href: '#' },
    { label: 'Quan hệ nhà đầu tư', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI Việt Nam</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 flex-1 ml-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition relative group"
              >
                {item.label}
                <ChevronDown size={14} className="inline-block ml-1 opacity-50" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
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
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

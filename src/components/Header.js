'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Daftar Harga', href: '#pricing' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg h-[10vh]" style={{background: 'linear-gradient(to right, #103641, #3f8aa9, #3f8aa9)'}}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Positioned Left */}
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Logo Image */}
              <div className="w-64 h-64 relative">
                <Image
                  src="/assets/images/logo/nobg-white.png"
                  alt="Flaha Creative Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Positioned Right */}
          <div className="hidden md:flex">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#fefefe] hover:text-[#103641] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/20 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Positioned Right */}
          <div className="md:hidden flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#fefefe] hover:text-[#103641] hover:bg-white/20 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 w-full" style={{background: 'linear-gradient(to right, #103641, #3f8aa9, #3f8aa9)'}}>
            <div className="px-0 pt-4 pb-4 space-y-2 border-t border-white/20 text-center">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#fefefe] hover:text-[#103641] hover:bg-white/20 block px-6 py-3 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
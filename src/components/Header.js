'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [touchedItem, setTouchedItem] = useState(null)

  const menuItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Layanan', href: '#services' },
    { name: 'Daftar Harga', href: '#pricing' },
    { name: 'Kontak', href: '#contact' }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Detect active section
      const sections = menuItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      if (href === '#hero') {
        // Untuk menu Beranda, reset header ke 10vh dan scroll ke atas
        setScrolled(false)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else {
        // Untuk menu lainnya, paksa header ke 8vh untuk konsistensi
        if (!scrolled) {
          setScrolled(true)
        }
        // Gunakan tinggi header 8vh untuk semua section selain hero
        const offsetTop = target.offsetTop - (window.innerHeight * 0.08)
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
    setIsOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'h-[8vh] shadow-xl backdrop-blur-md bg-gradient-to-r from-[#103641]/95 via-[#3f8aa9]/95 to-[#3f8aa9]/95' 
          : 'h-[10vh] shadow-lg bg-gradient-to-r from-[#103641] via-[#3f8aa9] to-[#3f8aa9]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Positioned Left with animation */}
          <div className="flex items-center">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center group">
              <div className={`relative transition-all duration-300 ${
                scrolled ? 'w-40 h-40 sm:w-48 sm:h-48' : 'w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64'
              }`}>
                <Image
                  src="/assets/images/logo/nobg-white.png"
                  alt="Logo Flaha Creative"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Positioned Right with active indicator */}
          <div className="hidden lg:flex">
            <div className="flex items-center space-x-2 lg:space-x-4">
              {menuItems.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md group ${
                      isActive 
                        ? 'text-white' 
                        : 'text-[#fefefe] hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button - Positioned Right */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#fefefe] hover:text-white hover:bg-white/20 inline-flex items-center justify-center p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-300"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isOpen ? 'Tutup menu utama' : 'Buka menu utama'}</span>
              <div className="w-7 h-7 relative flex items-center justify-center">
                <span className={`absolute h-0.5 w-7 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45' : '-translate-y-2.5'
                }`}></span>
                <span className={`absolute h-0.5 w-7 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'translate-y-0'
                }`}></span>
                <span className={`absolute h-0.5 w-7 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45' : 'translate-y-2.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu with slide animation */}
        <div 
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 w-full bg-gradient-to-r from-[#103641]/98 via-[#3f8aa9]/98 to-[#3f8aa9]/98 backdrop-blur-md overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-0 pt-4 pb-4 space-y-1 border-t border-white/20">
            {menuItems.map((item, index) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onTouchStart={() => setTouchedItem(item.name)}
                  onTouchEnd={() => {
                    setTimeout(() => {
                      setTouchedItem(null)
                    }, 150)
                  }}
                  className={`block px-6 py-3 text-base font-medium transition-all duration-300 transform active:scale-95 ${
                    isActive 
                      ? 'text-white bg-white/20 translate-x-2' 
                      : touchedItem === item.name
                      ? 'text-[#fefefe] bg-white/20'
                      : 'text-[#fefefe] hover:text-white hover:bg-white/15 active:bg-white/25 hover:translate-x-3'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {isActive && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

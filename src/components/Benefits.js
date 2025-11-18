"use client"
import { useState, useEffect, useRef } from 'react'

export default function Benefits() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef(null)

  const benefits = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Semua Kebutuhan Dokumentasi Ada di Flaha Creative",
      description: "Bersama Flaha Creative, kamu bisa tenang karena semua ditangani oleh tim yang berpengalaman. Kami mendampingi kamu dari awal, saat sesi foto, sampai proses setelahnya—semuanya terkoordinasi dengan rapi."
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Service yang Berbeda (Ramah, Terarah, & Profesional)",
      description: "Yang bikin banyak klien nyaman dan kembali lagi bersama Flaha bukan karena hanya hasil fotonya saja. Tapi cara kami mendampingi mereka sepanjang proses. 99% klien puas bukan cuma karena hasil foto, tapi karena arahannya jelas, fotografernya ramah, dan attitudenya sopan."
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Momen Hari ini, Langsung Bisa Kamu Bagikan",
      description: "Flaha creative dilengkapi dengan layanan Same Day Edited file (SDE), supaya kamu bisa langsung berbagi kebahagiaan di hari yang sama tanpa harus menunggu. Sameday edited file dari Flaha bikin kamu bisa langsung update story tanpa perlu menunggu lama."
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pembayaran Mudah, Proses Aman",
      description: "Kami menyediakan alur pembayaran yang praktis dan jelas di awal. Tidak ada biaya tersembunyi atau perubahan mendadak. Setelah payment, tim Flaha langsung bantu susun konsep, moodboard, dan arahan yang kamu butuhkan dengan alur kerja yang rapi."
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Satu Vendor untuk Semua Momenmu",
      description: "Flaha juga menyediakan dokumentasi all-in mulai dari Event, Wisuda, lamaran, prewedding, sampai wedding. Jadi kamu gak perlu khawatir soal vendor dokumentasi—cukup dengan 1 vendor, nikmati momennya dan biarkan kami mengabadikan dengan cara yang natural dan penuh cerita."
    },
    {
      id: 6,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Konsultasi Gratis Sebelum Booking",
      description: "Sebelum booking, kamu bisa ngobrol dulu sama admin Flaha. Biar semuanya jelas—mulai dari konsep foto, jadwal, sampai detail teknis. Flaha siap bantu kasih gambaran yang lengkap dan rapi, supaya kerja sama bisa berjalan nyaman dan profesional."
    },
    {
      id: 7,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Saatnya Tentukan Vendor Terbaikmu",
      description: "Pemilihan vendor bukan hanya soal harga dan layanan—tapi tentang rasa, emosi dan cerita yang akan kamu dapatkan. Ambil waktu untuk mempertimbangkan dengan tenang, agar tidak salah pilih dan menyesal saat momen berharga terlewat begitu saja."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  const getSlidePosition = (index) => {
    const total = benefits.length
    let position = index - currentSlide
    
    if (position < -Math.floor(total / 2)) position += total
    if (position > Math.floor(total / 2)) position -= total
    
    return position
  }

  return (
    <section id="benefits" className="min-h-screen flex items-center bg-[#EAEAEA] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Mengapa Memilih
            <span className="block text-[#103641] mt-2">Flaha Creative Production?</span>
          </h2>
          <div className="w-20 h-1 bg-[#103641] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami memberikan nilai lebih dalam setiap layanan fotografi dengan keunggulan yang membedakan kami dari yang lain
          </p>
        </div>

        {/* Benefits Carousel */}
        <div className="relative px-2 lg:px-0" ref={containerRef}>
          <div className="overflow-hidden">
            <div className="relative h-[600px] sm:h-[550px] lg:h-[500px] flex items-center justify-center">
              {benefits.map((benefit, index) => {
                const position = getSlidePosition(index)
                const isActive = position === 0
                const isVisible = Math.abs(position) <= 2
                const baseStep = 280
                const neighborExtraGap = 10 // beri ruang ekstra di kiri/kanan kartu tengah
                const translateX = (position * baseStep) + (position === 1 ? neighborExtraGap : position === -1 ? -neighborExtraGap : 0)
                
                return (
                  <div
                    key={benefit.id}
                    onClick={() => !isActive && goToSlide(index)}
                    className={`absolute transition-all duration-500 ease-out cursor-pointer ${
                      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{
                      transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.85})`,
                      zIndex: isActive ? 10 : 5 - Math.abs(position),
                    }}
                  >
                    <div className={`benefit-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden border border-gray-100 w-[280px] sm:w-[300px] ${
                      isActive ? 'h-auto' : 'h-[210px]'
                    }`}>
                      <div className="p-6 lg:p-8 flex h-full flex-col items-center justify-center text-center flex-grow">
                        <div className="flex flex-col items-center justify-center gap-1 lg:gap-2">
                        <div className={`benefit-icon text-[#103641] transform transition-all duration-500 ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}>
                          {benefit.icon}
                        </div>
                        
                        <h3 className={`benefit-title text-lg lg:text-xl font-bold leading-tight transition-colors duration-300 ${
                          isActive ? 'text-[#103641]' : 'text-gray-900'
                        }`}>
                          {benefit.title}
                        </h3>
                        </div>
                        
                        <div className={`benefit-desc-wrapper overflow-hidden transition-all duration-500 ${
                          isActive ? 'mt-2 lg:mt-3 max-h-[500px] opacity-100' : 'mt-0 max-h-0 opacity-0'
                        }`}>
                          <p className="benefit-desc text-sm lg:text-base text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`h-2 bg-gradient-to-r from-[#103641] to-[#1a5766] transform transition-transform duration-500 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-[#103641] w-12 h-12 rounded-full shadow-lg hover:bg-[#103641] hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-[#103641] w-12 h-12 rounded-full shadow-lg hover:bg-[#103641] hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-8 h-3 bg-[#103641]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
            Siap untuk mengabadikan momen berharga Anda?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#103641] text-white font-semibold rounded-full hover:bg-[#0d2d36] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
          >
            Konsultasi Gratis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
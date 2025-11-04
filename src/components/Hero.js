'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  // Banner images data - menggunakan semua gambar dari assets
  const bannerImages = [
    {
      id: 1,
      url: '/assets/images/banner/banner1.jpg'
    },
    {
      id: 2,
      url: '/assets/images/banner/banner2.jpg'
    },
    {
      id: 3,
      url: '/assets/images/banner/banner3.jpg'
    },
    {
      id: 4,
      url: '/assets/images/banner/banner4.jpg'
    }
  ]

  // Title dan deskripsi yang tetap
  const staticContent = {
    title: 'Jasa Dokumentasi Profesional',
    description: (
      <>
        Layanan terpercaya untuk setiap kebutuhanmu<br />
        dengan hasil yang terbaik dan berkualitas.
      </>
    )
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide carousel
  useEffect(() => {
    if (bannerImages.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Ganti gambar setiap 5 detik

    return () => clearInterval(interval)
  }, [bannerImages.length])

  // Reset to first image when component mounts
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [])

  return (
    <section id="hero" className="relative h-[90vh] scroll-mt-[10vh] overflow-hidden mt-[10vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#103641] via-[#2d7a8a] to-[#1a5a6b]"></div>
      <div className="w-full h-full flex flex-col relative z-10">
      {/* Section 1: Title and Description - Mobile Optimized */}
      <section className="h-[45vh] flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#eaeaea'}}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Kolom Kiri: Title dan Button */}
            <div className="text-gray-800 flex flex-col justify-center space-y-3 sm:space-y-4 text-center lg:text-left">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-1 sm:mb-2">
                  Flaha Creative
                </h1>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-1 sm:mb-2">
                  Production
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  We Capture Every Moment
                </p>
              </div>
              <div>
                <button className="bg-[#103641] hover:bg-[#1a5a6b] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 border border-[#103641] hover:border-[#1a5a6b] inline-block text-xs sm:text-sm md:text-base">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Kolom Kanan: Deskripsi Detail */}
            <div className="text-gray-800 flex flex-col justify-center space-y-3 sm:space-y-4 text-center lg:text-left">
              <div>
                <div className="space-y-2 sm:space-y-3 text-gray-600 leading-relaxed">
                  <p className="text-xs sm:text-sm md:text-base">
                    Semua kebutuhanmu bisa terpenuhi di Flaha Creative Prodcution. Kami hadir dengan layanan lengkap Foto, Video, Drone, Desain Grafis, hingga Desain Web  untuk setiap kebutuhanmu.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-bold">
                    Kenangan indah berawal dari memilih vendor dokumentasi yang tepat. <br className="hidden sm:block" />Flaha Creative siap jadi bagian dari ceritamu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Banner Carousel - Mobile Optimized */}
      <div className="h-[45vh] relative overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background Slides - Semua gambar banner */}
          {bannerImages.map((image, index) => (
            <div
              key={`slide-${image.id}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
              }`}
            >
              <div 
                className="w-full h-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url(${image.url})`
                }}
              >
                {/* Light Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
              </div>
            </div>
          ))}

          {/* Static Content Overlay - Mobile Optimized */}
          <div className="absolute inset-0 flex items-center justify-center z-30 px-4">
            <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
              
              {/* Static Title - Mobile Optimized */}
              <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-white px-2" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 16px rgba(0,0,0,0.6)'}}>
                {staticContent.title}
              </h3>

              {/* Static Description - Mobile Optimized */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-white/95 leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0px 0px 12px rgba(0,0,0,0.6)'}}>
                {staticContent.description}
              </p>

              {/* Call to action button - Mobile Optimized */}
              <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-white/95 hover:bg-white backdrop-blur-sm rounded-full text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
                Lihat Portfolio
              </button>
            </div>
          </div>

          {/* Enhanced Navigation Dots - Mobile Optimized */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 z-40">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
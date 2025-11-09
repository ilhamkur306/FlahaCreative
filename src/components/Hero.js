'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const bannerImages = [
    { id: 1, url: '/assets/images/banner/banner1.jpg' },
    { id: 2, url: '/assets/images/banner/banner2.jpg' },
    { id: 3, url: '/assets/images/banner/banner3.jpg' },
    { id: 4, url: '/assets/images/banner/banner4.jpg' }
  ]

  const staticContent = {
    title: 'Jasa Dokumentasi Profesional',
    description: 'Layanan terpercaya untuk setiap kebutuhanmu dengan hasil yang terbaik dan berkualitas.'
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-slide carousel with pause on hover
  useEffect(() => {
    if (bannerImages.length <= 1 || !isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Interval 3 detik

    return () => clearInterval(interval)
  }, [bannerImages.length, isAutoPlay])

  // Smooth scroll to portfolio
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Smooth scroll to about
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative h-[90vh] scroll-mt-[10vh] overflow-hidden mt-[10vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#103641] via-[#2d7a8a] to-[#1a5a6b]"></div>
      <div className="w-full h-full flex flex-col relative z-10">
        
        {/* Section 1: Title and Description with improved animations */}
        <section className="h-[45vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#eaeaea]">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
              
              {/* Left Column: Title and Button with stagger animation */}
              <div className="text-gray-800 flex flex-col justify-center space-y-3 sm:space-y-4 text-center lg:text-left animate-fadeInUp">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-1 sm:mb-2 animate-slideInLeft">
                    Flaha Creative
                  </h1>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-1 sm:mb-2 animate-slideInLeft" style={{animationDelay: '0.1s'}}>
                    Production
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed animate-slideInLeft" style={{animationDelay: '0.2s'}}>
                    We Capture Every Moment
                  </p>
                </div>
                <div className="animate-slideInLeft" style={{animationDelay: '0.3s'}}>
                  <button 
                    onClick={scrollToAbout}
                    className="bg-[#103641] hover:bg-[#1a5a6b] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 border border-[#103641] hover:border-[#1a5a6b] inline-block text-xs sm:text-sm md:text-base hover:scale-105 hover:shadow-lg transform"
                  >
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>

              {/* Right Column: Description with fade animation */}
              <div className="text-gray-800 flex flex-col justify-center space-y-3 sm:space-y-4 text-center lg:text-left animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <div>
                  <div className="space-y-2 sm:space-y-3 text-gray-600 leading-relaxed">
                    <p className="text-xs sm:text-sm md:text-base">
                      Semua kebutuhanmu bisa terpenuhi di Flaha Creative Production. Kami hadir dengan layanan lengkap Foto, Video, Drone, Desain Grafis, hingga Desain Web untuk setiap kebutuhanmu.
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

        {/* Section 2: Banner Carousel with improved controls */}
        <div 
          className="h-[45vh] relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Background Slides - Horizontal Slide Effect */}
            <div className="flex h-full transition-transform duration-1000 ease-in-out"
                 style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
              {bannerImages.map((image, index) => (
                <div
                  key={`slide-${image.id}`}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <div 
                    className="w-full h-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat relative"
                    style={{ backgroundImage: `url(${image.url})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Overlay with parallax effect */}
            <div className="absolute inset-0 flex items-center justify-center z-30 px-4 pb-8 sm:pb-0">
              <div className="relative z-10 text-center max-w-4xl mx-auto w-full animate-fadeIn mb-6 sm:mb-0">
                
                <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-white px-2 animate-slideUp" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 16px rgba(0,0,0,0.6)'}}>
                  {staticContent.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-white/95 leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 animate-slideUp" style={{animationDelay: '0.1s', textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0px 0px 12px rgba(0,0,0,0.6)'}}>
                  {staticContent.description}
                </p>

                <button 
                  onClick={scrollToPortfolio}
                  className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-white/95 hover:bg-white backdrop-blur-sm rounded-full text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-all duration-300 hover:scale-105 shadow-2xl animate-slideUp hover:shadow-white/20"
                  style={{animationDelay: '0.2s'}}
                >
                  Lihat Portfolio
                </button>
              </div>
            </div>

            {/* Enhanced Navigation Dots - Fixed position for mobile */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 md:space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1.5 z-40">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white w-6 sm:w-8 md:w-10 lg:w-12 h-1 sm:h-1.5 md:h-2 shadow-md' 
                      : 'bg-white/50 hover:bg-white/75 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <footer className="bg-gradient-to-br from-[#0d2d36] via-[#103641] to-[#0d2d36] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          
          {/* Logo & Description - Left */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Flaha Creative Production</h3>
            <p className="text-sm text-white/70">
              Foto, Video, Drone, Desain Grafis & Web
            </p>
          </div>

          {/* Empty Center Column - Hidden on mobile */}
          <div className="text-center">
            <nav className="inline-flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/80">
              <a href="#hero" className="hover:text-white transition-colors">Beranda</a>
              <a href="#about" className="hover:text-white transition-colors">Tentang</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Portofolio</a>
              <a href="#services" className="hover:text-white transition-colors">Layanan</a>
              <a href="#pricing" className="hover:text-white transition-colors">Paket Harga</a>
              <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
            </nav>
          </div>

          {/* Back to Top - Right */}
          <div className="text-center sm:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              aria-label="Kembali ke atas"
            >
              <span>Kembali ke Atas</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Copyright - Bottom */}
        <div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm">&copy; {currentYear} Flaha Creative Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

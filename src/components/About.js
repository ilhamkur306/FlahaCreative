export default function About() {
  return (
    <section id="about" className="min-h-[92vh] scroll-mt-[10vh] flex items-center bg-[#EAEAEA] py-8 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Kolom Kiri: Konten Utama */}
          <div className="space-y-4 lg:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-6 leading-tight">
                Tentang
                <span className="block text-[#103641]">Flaha Creative</span>
              </h2>
              <div className="w-16 lg:w-24 h-1 bg-[#103641] mb-4 lg:mb-8"></div>
            </div>
            
            <div className="space-y-3 lg:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Sejak 2019, Flaha Creative telah tumbuh menjadi partner terpercaya dalam layanan Foto, Video, dan Desain Grafis. Kami hadir untuk mengabadikan berbagai momen penting dengan  layanan terpercaya, hasil yang eksklusif dan berkesan.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Karena hasil dan pelayanan yang memuaskan, banyak klien kami mempercayakan kembali momen  berikutnya kepada Flaha Creative. Sekali mencoba, kamu akan paham kenapa mereka tetap bersama kami.
              </p>
            </div>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-3 lg:gap-6 py-4 lg:py-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#103641] mb-1 lg:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#103641] mb-1 lg:mb-2">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#103641] mb-1 lg:mb-2">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Foto Terbaik</div>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Visual - Mobile Optimized */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative rounded-2xl h-64 sm:h-80 lg:h-[500px] overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/gallery/profile.jpg" 
                  alt="Flaha Creative Profile" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative Elements - Hidden on small mobile */}
              <div className="hidden sm:block absolute -top-4 lg:-top-6 -right-4 lg:-right-6 w-16 h-16 lg:w-24 lg:h-24 bg-[#103641] rounded-full opacity-20"></div>
              <div className="hidden sm:block absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 w-20 h-20 lg:w-32 lg:h-32 bg-[#103641] rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
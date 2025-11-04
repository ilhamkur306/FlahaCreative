export default function About() {
  return (
<section id="about" className="h-[90vh] scroll-mt-[10vh] flex items-center bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Kolom Kiri: Konten Utama */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Tentang
                <span className="block text-[#103641]">Flaha Creative</span>
              </h2>
              <div className="w-24 h-1 bg-[#103641] mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Sejak 2019, Flaha Creative telah tumbuh menjadi partner terpercaya dalam layanan Foto, Video, dan Desain Grafis. Kami hadir untuk mengabadikan berbagai momen penting dengan  layanan terpercaya, hasil yang eksklusif dan berkesan.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Karena hasil dan pelayanan yang memuaskan, banyak klien kami mempercayakan kembali momen  berikutnya kepada Flaha Creative. Sekali mencoba, kamu akan paham kenapa mereka tetap bersama kami.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#103641] mb-2">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#103641] mb-2">5+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#103641] mb-2">1000+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Foto Terbaik</div>
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-gray-700 font-medium">Fotografi Portrait</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-gray-700 font-medium">Fotografi Pernikahan</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-gray-700 font-medium">Fotografi Event</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Visual */}
          <div className="relative">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative rounded-2xl h-[500px] overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/gallery/profile.jpg" 
                  alt="Flaha Creative Profile" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#103641] rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#103641] rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
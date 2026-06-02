export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Fotografi',
      description:
        'Dokumentasi foto untuk acara, produk, bisnis, dan kebutuhan personal dengan hasil yang rapi dan profesional.',
      features: ['Acara & event', 'Produk & katalog', 'Konten bisnis', 'Dokumentasi personal'],
      price: 'Konsultasi untuk estimasi harga',
      icon: (
        <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h3l2-2h8l2 2h3v12H3V7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Videografi',
      description: 'Pembuatan video dokumentasi, promosi, dan konten kreatif untuk berbagai kebutuhan.',
      features: ['Dokumentasi acara', 'Video promosi', 'Konten media sosial', 'Highlight & recap'],
      price: 'Konsultasi untuk estimasi harga',
      icon: (
        <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Drone',
      description:
        'Pengambilan gambar udara untuk acara, properti, promosi, dan kebutuhan visual yang lebih cinematic.',
      features: ['Foto & video udara', 'Properti & lokasi', 'Acara & venue', 'Kebutuhan promosi'],
      price: 'Konsultasi untuk estimasi harga',
      icon: (
        <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h2l1 2h4l1-2h2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 16h2l1-2h6l1 2h2" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Desain Grafis',
      description:
        'Desain visual untuk branding, promosi, media sosial, poster, dan kebutuhan bisnis.',
      features: ['Branding & identitas', 'Konten media sosial', 'Poster & materi promosi', 'Kebutuhan cetak/digital'],
      price: 'Konsultasi untuk estimasi harga',
      icon: (
        <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Desain Web',
      description:
        'Pembuatan website sederhana, modern, dan responsif untuk bisnis, UMKM, personal brand, atau portofolio.',
      features: ['Landing page', 'Profil bisnis', 'Portofolio', 'Tampilan responsif'],
      price: 'Konsultasi untuk estimasi harga',
      icon: (
        <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18v14H3V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9h10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13h6" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="min-h-[92vh] scroll-mt-[8vh] flex items-center bg-[#EAEAEA] py-8 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
            <span className="block text-[#103641]"> Layanan Kami</span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-[#103641] mx-auto mb-3 lg:mb-4"></div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Kami menyediakan layanan kreatif untuk dokumentasi dan kebutuhan visual yang disesuaikan dengan kebutuhan kamu
          </p>
        </div>

        {/* Services Grid - Mobile Optimized */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Icon - Mobile Optimized */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#103641] to-[#1a5a6b] rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content - Mobile Optimized */}
                <div className="space-y-2 lg:space-y-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#103641] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features - Mobile Optimized */}
                  <ul className="space-y-1 lg:space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm sm:text-sm text-gray-600">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4 text-[#103641] mr-2 lg:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price - Mobile Optimized */}
                  <div className="pt-3 lg:pt-4 border-t border-gray-100">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#103641] mb-2 lg:mb-4 leading-snug">
                      {service.price}
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white py-2.5 lg:py-3 px-4 lg:px-6 rounded-lg lg:rounded-xl font-semibold text-sm lg:text-base hover:from-[#0d2d36] hover:to-[#154d5c] transition-all duration-300 transform hover:scale-105">
                      Konsultasi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

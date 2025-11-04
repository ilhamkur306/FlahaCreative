export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Fotografi Portrait',
      description: 'Potret profesional dan personal yang menangkap kepribadian unik Anda dengan sempurna.',
      features: ['Pencahayaan profesional', 'Multiple outfit', 'Retouching premium', 'Galeri digital'],
      price: 'Mulai dari Rp 1.500.000',
      icon: (
        <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Fotografi Pernikahan',
      description: 'Abadikan hari spesial Anda dengan fotografi pernikahan yang indah dan tak terlupakan.',
      features: ['Full day coverage', 'Pre-wedding session', 'Galeri online', 'Print release'],
      price: 'Mulai dari Rp 5.000.000',
      icon: (
        <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Fotografi Event',
      description: 'Dokumentasi profesional untuk acara korporat, pesta, dan momen-momen spesial lainnya.',
      features: ['Event coverage', 'Candid moments', 'Group photos', 'Quick delivery'],
      price: 'Mulai dari Rp 2.000.000',
      icon: (
        <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="min-h-[90vh] scroll-mt-[10vh] flex items-center bg-[#EAEAEA] py-8 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
            <span className="block text-[#103641]"> Layanan Kami</span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-[#103641] mx-auto mb-3 lg:mb-4"></div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Kami menawarkan berbagai layanan fotografi yang disesuaikan dengan kebutuhan dan budget Anda
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
                  
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features - Mobile Optimized */}
                  <ul className="space-y-1 lg:space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4 text-[#103641] mr-2 lg:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price - Mobile Optimized */}
                  <div className="pt-3 lg:pt-4 border-t border-gray-100">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#103641] mb-2 lg:mb-4">
                      {service.price}
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white py-2 lg:py-3 px-4 lg:px-6 rounded-lg lg:rounded-xl font-semibold text-xs sm:text-sm lg:text-base hover:from-[#0d2d36] hover:to-[#154d5c] transition-all duration-300 transform hover:scale-105">
                      Konsultasi Gratis
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
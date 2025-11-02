export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Fotografi Portrait',
      description: 'Potret profesional dan personal yang menangkap kepribadian unik Anda dengan sempurna.',
      features: ['Pencahayaan profesional', 'Multiple outfit', 'Retouching premium', 'Galeri digital'],
      price: 'Mulai dari Rp 1.500.000',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="h-[90vh] flex items-center bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block text-[#103641]"> Layanan Kami</span>
          </h2>
          <div className="w-24 h-1 bg-[#103641] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menawarkan berbagai layanan fotografi yang disesuaikan dengan kebutuhan dan budget Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#103641] to-[#1a5a6b] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#103641] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#103641] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-[#103641] mb-4">
                      {service.price}
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white py-3 px-6 rounded-xl font-semibold hover:from-[#0d2d36] hover:to-[#154d5c] transition-all duration-300 transform hover:scale-105">
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
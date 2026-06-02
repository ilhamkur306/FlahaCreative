export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Paket Basic',
      price: 'Mulai dari Rp 2.500.000 per event',
      duration: '',
      description: 'Pilihan praktis untuk dokumentasi acara skala kecil dengan kebutuhan yang esensial.',
      features: [
        'Durasi dokumentasi hingga 4 jam',
        '100 foto terkurasi & diedit',
        '1 fotografer',
        'Galeri online',
        'File digital'
      ],
      popular: false,
      buttonText: 'Konsultasi Paket',
      color: 'from-gray-600 to-gray-700'
    },
    {
      id: 2,
      name: 'Paket Premium',
      price: 'Mulai dari Rp 4.500.000 per event',
      duration: '',
      description: 'Untuk acara spesial dengan cakupan lebih lengkap dan variasi dokumentasi yang lebih banyak.',
      features: [
        'Durasi dokumentasi hingga 8 jam',
        '300 foto terkurasi & diedit',
        '2 fotografer',
        'Galeri online',
        'File digital',
        'Cetak foto 20x30 (10 pcs)',
        'Video highlight'
      ],
      popular: true,
      buttonText: 'Pesan Sekarang',
      color: 'from-[#103641] to-[#1a5a6b]'
    },
    {
      id: 3,
      name: 'Paket Platinum',
      price: 'Mulai dari Rp 7.500.000 per event',
      duration: '',
      description: 'Cakupan maksimal untuk kebutuhan dokumentasi lengkap, cocok untuk acara besar dan kebutuhan konten.',
      features: [
        'Full day coverage',
        '500+ foto terkurasi & diedit',
        'Tim foto + video',
        'Galeri online',
        'File digital',
        'Cetak foto 20x30 (20 pcs)',
        'Video cinematic',
        'Album premium',
        'Dokumentasi drone'
      ],
      popular: false,
      buttonText: 'Konsultasi Paket',
      color: 'from-amber-600 to-amber-700'
    }
  ]

  return (
    <section id="pricing" className="min-h-[92vh] scroll-mt-[8vh] flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white py-8 lg:py-6">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-6 lg:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-6 leading-tight">
            <span className="block text-[#103641]">Paket Harga</span>
          </h2>
          <div className="w-16 lg:w-20 h-1 bg-[#103641] mx-auto mb-3 lg:mb-4"></div>
          <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua paket sudah termasuk konsultasi gratis.
          </p>
        </div>

        {/* Pricing Cards - Mobile Optimized */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 lg:mb-6">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`relative group ${plan.popular ? 'transform scale-100 sm:scale-102 lg:scale-105' : ''}`}>
              {/* Popular Badge - Mobile Optimized */}
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-[10px] lg:text-xs font-bold shadow-lg">
                    PALING POPULER
                  </span>
                </div>
              )}

              <div className={`bg-white rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full border-2 ${plan.popular ? 'border-[#103641]' : 'border-gray-100'}`}>
                {/* Header - Mobile Optimized */}
                <div className={`bg-gradient-to-r ${plan.color} text-white p-3 lg:p-4 rounded-t-lg lg:rounded-t-xl`}>
                  <h3 className="text-base lg:text-lg font-bold mb-1 lg:mb-2">{plan.name}</h3>
                  <div className="mb-1 lg:mb-2">
                    <span className="block text-base sm:text-lg lg:text-xl font-bold leading-snug">{plan.price}</span>
                    {plan.duration ? (
                      <span className="text-[10px] lg:text-xs opacity-80">/{plan.duration}</span>
                    ) : null}
                  </div>
                  <p className="text-sm lg:text-xs opacity-90">{plan.description}</p>
                </div>

                {/* Features - Mobile Optimized */}
                <div className="p-3 lg:p-4">
                  <ul className="space-y-1 lg:space-y-1.5 mb-3 lg:mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-green-500 mr-1.5 lg:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm lg:text-xs text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Mobile Optimized */}
                  <button className={`w-full py-2.5 lg:py-2.5 px-3 lg:px-4 rounded-lg font-bold text-sm lg:text-xs transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white hover:from-[#0d2d36] hover:to-[#154d5c] shadow-lg' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <div className="text-center">
          <p className="text-gray-600 mb-2 lg:mb-3 text-sm px-4">
            Butuh paket khusus? Hubungi kami untuk konsultasi dan penawaran yang disesuaikan dengan kebutuhan kamu.
          </p>
          <button className="bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white px-4 py-2.5 lg:px-5 lg:py-2.5 rounded-lg font-semibold text-sm hover:from-[#0d2d36] hover:to-[#154d5c] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Konsultasi Paket
          </button>
        </div>
      </div>
    </section>
  )
}

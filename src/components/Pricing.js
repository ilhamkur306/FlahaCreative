export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic Package',
      price: 'Rp 2.500.000',
      duration: 'per event',
      description: 'Paket dasar untuk dokumentasi acara kecil',
      features: [
        '4 jam sesi foto',
        '100 foto edited',
        '1 fotografer',
        'Online gallery',
        'USB flashdisk'
      ],
      popular: false,
      buttonText: 'Pilih Paket',
      color: 'from-gray-600 to-gray-700'
    },
    {
      id: 2,
      name: 'Premium Package',
      price: 'Rp 4.500.000',
      duration: 'per event',
      description: 'Paket lengkap untuk acara spesial Anda',
      features: [
        '8 jam sesi foto',
        '300 foto edited',
        '2 fotografer',
        'Online gallery',
        'USB flashdisk',
        'Cetak foto 20x30 (10 pcs)',
        'Video highlight'
      ],
      popular: true,
      buttonText: 'Pilih Paket',
      color: 'from-[#103641] to-[#1a5a6b]'
    },
    {
      id: 3,
      name: 'Platinum Package',
      price: 'Rp 7.500.000',
      duration: 'per event',
      description: 'Paket premium dengan layanan terlengkap',
      features: [
        'Full day coverage',
        '500+ foto edited',
        '3 fotografer + videographer',
        'Online gallery',
        'USB flashdisk',
        'Cetak foto 20x30 (20 pcs)',
        'Video cinematic',
        'Album premium',
        'Drone photography'
      ],
      popular: false,
      buttonText: 'Pilih Paket',
      color: 'from-amber-600 to-amber-700'
    }
  ]

  return (
    <section id="pricing" className="min-h-[90vh] scroll-mt-[10vh] flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white py-8 lg:py-6">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-6 lg:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-6 leading-tight">
            <span className="block text-[#103641]">Paket Harga</span>
          </h2>
          <div className="w-16 lg:w-20 h-1 bg-[#103641] mx-auto mb-3 lg:mb-4"></div>
          <p className="text-xs sm:text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
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
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold">{plan.price}</span>
                    <span className="text-[10px] lg:text-xs opacity-80">/{plan.duration}</span>
                  </div>
                  <p className="text-[10px] lg:text-xs opacity-90">{plan.description}</p>
                </div>

                {/* Features - Mobile Optimized */}
                <div className="p-3 lg:p-4">
                  <ul className="space-y-1 lg:space-y-1.5 mb-3 lg:mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-green-500 mr-1.5 lg:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[11px] lg:text-xs text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Mobile Optimized */}
                  <button className={`w-full py-2 lg:py-2.5 px-3 lg:px-4 rounded-lg font-bold text-[11px] lg:text-xs transition-all duration-300 transform hover:scale-105 ${
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
          <p className="text-gray-600 mb-2 lg:mb-3 text-[11px] sm:text-xs px-4">
            Butuh paket khusus? Hubungi kami untuk konsultasi gratis dan penawaran yang disesuaikan dengan kebutuhan Anda.
          </p>
          <button className="bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg font-semibold text-[11px] sm:text-xs hover:from-[#0d2d36] hover:to-[#154d5c] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  )
}
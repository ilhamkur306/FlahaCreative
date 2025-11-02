export default function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Kualitas Profesional",
      description: "Hasil foto berkualitas tinggi dengan teknik profesional dan peralatan terdepan untuk memastikan setiap momen terabadikan dengan sempurna."
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pengerjaan Cepat",
      description: "Proses editing dan delivery yang efisien tanpa mengurangi kualitas. Hasil foto siap dalam waktu yang telah disepakati."
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Tim Berpengalaman",
      description: "Fotografer profesional dengan pengalaman bertahun-tahun dalam berbagai jenis pemotretan dan event photography."
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Harga Terjangkau",
      description: "Paket fotografi dengan harga kompetitif dan fleksibel sesuai budget. Kualitas premium dengan investasi yang reasonable."
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Pelayanan Ramah",
      description: "Konsultasi gratis dan pelayanan yang personal untuk memahami kebutuhan dan keinginan klien dengan detail."
    },
    {
      id: 6,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Garansi Kepuasan",
      description: "Jaminan revisi dan kepuasan 100%. Kami berkomitmen memberikan hasil terbaik sesuai ekspektasi klien."
    }
  ];

  return (
    <section id="benefits" className="h-[90vh] flex items-center bg-[#EAEAEA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mengapa Memilih
            <span className="block text-[#103641]">Flaha Creative Production?</span>
          </h2>
          <div className="w-20 h-1 bg-[#103641] mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kami memberikan nilai lebih dalam setiap layanan fotografi dengan keunggulan yang membedakan kami dari yang lain
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
            >
              {/* Icon */}
              <div className="text-[#103641] mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#103641] transition-colors duration-300">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-xs">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 mb-3">
            Siap untuk mengabadikan momen berharga Anda?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-2.5 bg-[#103641] text-white font-semibold rounded-full hover:bg-[#0d2d36] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm"
          >
            Konsultasi Gratis
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
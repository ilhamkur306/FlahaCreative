"use client"

import { useState } from 'react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'wedding', name: 'Pernikahan' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'event', name: 'Event' }
  ]

  const galleryItems = [
    {
      id: 1,
      title: 'Pernikahan Elegant',
      category: 'wedding',
      description: 'Dokumentasi pernikahan dengan nuansa elegant dan romantis',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Portrait Professional',
      category: 'portrait',
      description: 'Sesi foto portrait dengan pencahayaan profesional',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Corporate Event',
      category: 'event',
      description: 'Dokumentasi acara corporate dengan hasil berkualitas tinggi',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Pre-Wedding Session',
      category: 'wedding',
      description: 'Sesi foto pre-wedding dengan konsep outdoor',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Fashion Portrait',
      category: 'portrait',
      description: 'Portrait fashion dengan styling modern',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Birthday Party',
      category: 'event',
      description: 'Dokumentasi pesta ulang tahun yang meriah',
      image: '/api/placeholder/400/300'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="h-[90vh] flex items-center bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block text-[#103641]"> Portfolio Kami /<br /> Contoh Album</span>
          </h2>
          <div className="w-16 h-1 bg-[#103641] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Lihat koleksi karya terbaik kami yang menampilkan berbagai momen berharga
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full border-2 border-[#103641] font-semibold transition-all duration-300 transform hover:scale-105 text-sm ${
                  activeFilter === category.id 
                    ? 'bg-[#103641] text-white' 
                    : 'text-[#103641] hover:bg-[#103641] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Flex grow to fill remaining space */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Container - Reduced aspect ratio */}
                <div className="aspect-[4/2.5] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#103641]/20 to-[#1a5a6b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs font-medium">{item.category}</p>
                    </div>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white px-4">
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-xs mb-3 line-clamp-2">{item.description}</p>
                      <button className="bg-white text-[#103641] px-4 py-1 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm">
                        Lihat Detail
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#103641] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0d2d36] hover:to-[#154d5c] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Lihat Portfolio Lengkap
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
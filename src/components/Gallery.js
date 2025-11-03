"use client"

import { useState } from 'react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'pre-wedding', name: 'Pre-Wedding' },
    { id: 'engagement', name: 'Engagement' },
    { id: 'graduation', name: 'Graduation' },
    { id: 'event', name: 'Event' }
  ]

  const galleryItems = [
    // Wedding Category
    {
      id: 1,
      title: 'Pernikahan Elegant',
      category: 'wedding',
      description: 'Dokumentasi pernikahan dengan nuansa elegant dan romantis',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Pernikahan Tradisional',
      category: 'wedding',
      description: 'Dokumentasi pernikahan dengan adat tradisional yang kental',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Pernikahan Outdoor',
      category: 'wedding',
      description: 'Dokumentasi pernikahan dengan konsep garden party yang indah',
      image: '/api/placeholder/400/300'
    },
    
    // Pre-Wedding Category
    {
      id: 4,
      title: 'Pre-Wedding Pantai',
      category: 'pre-wedding',
      description: 'Sesi foto pre-wedding dengan latar belakang pantai yang eksotis',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Pre-Wedding Urban',
      category: 'pre-wedding',
      description: 'Sesi foto pre-wedding dengan konsep perkotaan yang modern',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Pre-Wedding Studio',
      category: 'pre-wedding',
      description: 'Sesi foto pre-wedding indoor dengan pencahayaan profesional',
      image: '/api/placeholder/400/300'
    },
    
    // Engagement Category
    {
      id: 7,
      title: 'Lamaran Romantis',
      category: 'engagement',
      description: 'Dokumentasi momen lamaran dengan suasana romantis',
      image: '/api/placeholder/400/300'
    },
    {
      id: 8,
      title: 'Lamaran Keluarga',
      category: 'engagement',
      description: 'Dokumentasi acara lamaran dengan keluarga besar',
      image: '/api/placeholder/400/300'
    },
    {
      id: 9,
      title: 'Lamaran Surprise',
      category: 'engagement',
      description: 'Dokumentasi momen lamaran kejutan yang berkesan',
      image: '/api/placeholder/400/300'
    },
    
    // Graduation Category
    {
      id: 10,
      title: 'Wisuda Universitas',
      category: 'graduation',
      description: 'Dokumentasi momen wisuda dengan keluarga dan teman',
      image: '/api/placeholder/400/300'
    },
    {
      id: 11,
      title: 'Graduation Studio',
      category: 'graduation',
      description: 'Sesi foto wisuda profesional di studio',
      image: '/api/placeholder/400/300'
    },
    {
      id: 12,
      title: 'Graduation Outdoor',
      category: 'graduation',
      description: 'Sesi foto wisuda dengan konsep outdoor yang menarik',
      image: '/api/placeholder/400/300'
    },
    
    // Event Category
    {
      id: 13,
      title: 'Corporate Event',
      category: 'event',
      description: 'Dokumentasi acara corporate dengan hasil berkualitas tinggi',
      image: '/api/placeholder/400/300'
    },
    {
      id: 14,
      title: 'Birthday Party',
      category: 'event',
      description: 'Dokumentasi pesta ulang tahun yang meriah',
      image: '/api/placeholder/400/300'
    },
    {
      id: 15,
      title: 'Gathering Event',
      category: 'event',
      description: 'Dokumentasi acara gathering perusahaan atau komunitas',
      image: '/api/placeholder/400/300'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="h-[90vh] flex items-center bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="block text-[#103641]"> Portfolio Kami </span>
          </h2>
          <div className="w-16 h-1 bg-[#103641] mx-auto mb-3"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-3">
            Lihat koleksi karya terbaik kami yang menampilkan berbagai momen berharga
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
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

        {/* Gallery Grid with Scrolling - Fixed height with overflow */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="overflow-y-auto pr-2 py-1 h-[53vh] scrollbar-thin scrollbar-thumb-[#103641] scrollbar-track-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
          </div>

          {/* View More Button */}
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-[#103641] to-[#1a5a6b] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0d2d36] hover:to-[#154d5c] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Lihat Portfolio Lengkap
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
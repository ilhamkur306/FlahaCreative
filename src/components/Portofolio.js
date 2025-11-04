"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Portofolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'pre-wedding', name: 'Pre-Wedding' },
    { id: 'engagement', name: 'Engagement' },
    { id: 'graduation', name: 'Graduation' },
    { id: 'event', name: 'Event' }
  ]

  // Data untuk slider pada kategori "Semua"
  const sliderImages = [
    {
      id: 1,
      title: 'Wedding Photography',
      category: 'wedding',
      description: 'Dokumentasi pernikahan dengan nuansa elegant dan romantis',
      image: '/images/wedding1.jpg'
    },
    {
      id: 2,
      title: 'Pre-Wedding Session',
      category: 'pre-wedding',
      description: 'Sesi foto pre-wedding dengan latar belakang pantai yang eksotis',
      image: '/images/pre1.jpg'
    },
    {
      id: 3,
      title: 'Engagement Moment',
      category: 'engagement',
      description: 'Dokumentasi momen lamaran dengan suasana romantis',
      image: '/images/engagement1.jpg'
    },
    {
      id: 4,
      title: 'Graduation Day',
      category: 'graduation',
      description: 'Dokumentasi momen wisuda dengan keluarga dan teman',
      image: '/images/graduation1.jpg'
    },
    {
      id: 5,
      title: 'Corporate Event',
      category: 'event',
      description: 'Dokumentasi acara corporate dengan hasil berkualitas tinggi',
      image: '/images/event1.jpg'
    }
  ]

  // Data untuk gallery items berdasarkan kategori
  const galleryItems = {
    wedding: [
      {
        id: 1,
        title: 'Pernikahan Elegant',
        category: 'wedding',
        description: 'Dokumentasi pernikahan dengan nuansa elegant dan romantis',
        image: '/images/wedding1.jpg'
      },
      {
        id: 2,
        title: 'Pernikahan Tradisional',
        category: 'wedding',
        description: 'Dokumentasi pernikahan dengan adat tradisional yang kental',
        image: '/images/wedding2.jpg'
      },
      {
        id: 3,
        title: 'Pernikahan Outdoor',
        category: 'wedding',
        description: 'Dokumentasi pernikahan dengan konsep garden party yang indah',
        image: '/images/wedding3.jpg'
      },
      {
        id: 4,
        title: 'Pernikahan Modern',
        category: 'wedding',
        description: 'Dokumentasi pernikahan dengan konsep modern dan minimalis',
        image: '/images/wedding4.jpg'
      },
      {
        id: 5,
        title: 'Pernikahan Intimate',
        category: 'wedding',
        description: 'Dokumentasi pernikahan intimate dengan keluarga terdekat',
        image: '/images/wedding5.jpg'
      },
      {
        id: 6,
        title: 'Pernikahan Mewah',
        category: 'wedding',
        description: 'Dokumentasi pernikahan dengan konsep mewah dan elegan',
        image: '/images/wedding6.jpg'
      }
    ],
    'pre-wedding': [
      {
        id: 7,
        title: 'Pre-Wedding Pantai',
        category: 'pre-wedding',
        description: 'Sesi foto pre-wedding dengan latar belakang pantai yang eksotis',
        image: '/images/pre1.jpg'
      },
      {
        id: 8,
        title: 'Pre-Wedding Urban',
        category: 'pre-wedding',
        description: 'Sesi foto pre-wedding dengan konsep perkotaan yang modern',
        image: '/images/pre2.jpg'
      },
      {
        id: 9,
        title: 'Pre-Wedding Studio',
        category: 'pre-wedding',
        description: 'Sesi foto pre-wedding indoor dengan pencahayaan profesional',
        image: '/images/pre3.jpg'
      },
      {
        id: 10,
        title: 'Pre-Wedding Vintage',
        category: 'pre-wedding',
        description: 'Sesi foto pre-wedding dengan tema vintage yang klasik',
        image: '/images/pre4.jpg'
      },
      {
        id: 11,
        title: 'Pre-Wedding Nature',
        category: 'pre-wedding',
        description: 'Sesi foto pre-wedding dengan latar belakang alam yang indah',
        image: '/images/pre5.jpg'
      },
      {
        id: 12,
        title: 'Pre-Wedding Destination',
        category: 'pre-wedding',
        description: 'Sesi foto pre-wedding di lokasi destinasi yang menakjubkan',
        image: '/images/pre6.jpg'
      }
    ],
    engagement: [
      {
        id: 13,
        title: 'Lamaran Romantis',
        category: 'engagement',
        description: 'Dokumentasi momen lamaran dengan suasana romantis',
        image: '/images/engagement1.jpg'
      },
      {
        id: 14,
        title: 'Lamaran Keluarga',
        category: 'engagement',
        description: 'Dokumentasi acara lamaran dengan keluarga besar',
        image: '/images/engagement2.jpg'
      },
      {
        id: 15,
        title: 'Lamaran Surprise',
        category: 'engagement',
        description: 'Dokumentasi momen lamaran kejutan yang berkesan',
        image: '/images/engagement3.jpg'
      },
      {
        id: 16,
        title: 'Lamaran Tradisional',
        category: 'engagement',
        description: 'Dokumentasi acara lamaran dengan adat tradisional',
        image: '/images/engagement4.jpg'
      },
      {
        id: 17,
        title: 'Lamaran Outdoor',
        category: 'engagement',
        description: 'Dokumentasi acara lamaran dengan konsep outdoor yang indah',
        image: '/images/engagement5.jpg'
      },
      {
        id: 18,
        title: 'Lamaran Intimate',
        category: 'engagement',
        description: 'Dokumentasi acara lamaran intimate yang hangat',
        image: '/images/engagement6.jpg'
      }
    ],
    graduation: [
      {
        id: 19,
        title: 'Wisuda Universitas',
        category: 'graduation',
        description: 'Dokumentasi momen wisuda dengan keluarga dan teman',
        image: '/images/graduation1.jpg'
      },
      {
        id: 20,
        title: 'Graduation Studio',
        category: 'graduation',
        description: 'Sesi foto wisuda profesional di studio',
        image: '/images/graduation2.jpg'
      },
      {
        id: 21,
        title: 'Graduation Outdoor',
        category: 'graduation',
        description: 'Sesi foto wisuda dengan konsep outdoor yang menarik',
        image: '/images/graduation3.jpg'
      },
      {
        id: 22,
        title: 'Graduation Group',
        category: 'graduation',
        description: 'Sesi foto wisuda bersama teman-teman satu angkatan',
        image: '/images/graduation4.jpg'
      },
      {
        id: 23,
        title: 'Graduation Family',
        category: 'graduation',
        description: 'Sesi foto wisuda bersama keluarga tercinta',
        image: '/images/graduation5.jpg'
      },
      {
        id: 24,
        title: 'Graduation Celebration',
        category: 'graduation',
        description: 'Dokumentasi perayaan kelulusan yang meriah',
        image: '/images/graduation6.jpg'
      }
    ],
    event: [
      {
        id: 25,
        title: 'Corporate Event',
        category: 'event',
        description: 'Dokumentasi acara corporate dengan hasil berkualitas tinggi',
        image: '/images/event1.jpg'
      },
      {
        id: 26,
        title: 'Birthday Party',
        category: 'event',
        description: 'Dokumentasi pesta ulang tahun yang meriah',
        image: '/images/event2.jpg'
      },
      {
        id: 27,
        title: 'Gathering Event',
        category: 'event',
        description: 'Dokumentasi acara gathering perusahaan atau komunitas',
        image: '/images/event3.jpg'
      },
      {
        id: 28,
        title: 'Conference Event',
        category: 'event',
        description: 'Dokumentasi acara konferensi dan seminar',
        image: '/images/event4.jpg'
      },
      {
        id: 29,
        title: 'Product Launch',
        category: 'event',
        description: 'Dokumentasi acara peluncuran produk baru',
        image: '/images/event5.jpg'
      },
      {
        id: 30,
        title: 'Award Ceremony',
        category: 'event',
        description: 'Dokumentasi acara penghargaan yang prestisius',
        image: '/images/event6.jpg'
      }
    ]
  }

  // Mendapatkan 6 item untuk kategori yang aktif
  const getFilteredItems = () => {
    if (activeFilter === 'all') {
      return []
    }
    return galleryItems[activeFilter] || []
  }

  const filteredItems = getFilteredItems()

  return (
    <section id="portfolio" className="min-h-[90vh] scroll-mt-[10vh] flex items-center bg-gray-50 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 w-full h-full">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
            <span className="block text-[#103641]">Portfolio Kami</span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-[#103641] mx-auto mb-3 lg:mb-4"></div>
          <p className="text-xs sm:text-sm lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Lihat koleksi karya terbaik kami yang menampilkan berbagai momen berharga
          </p>

          {/* Category Filter - Mobile Optimized */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mt-3 lg:mt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border-2 border-teal-800 font-semibold transition-all duration-300 transform hover:scale-105 text-[11px] sm:text-xs lg:text-base ${
                  activeFilter === category.id 
                    ? 'bg-teal-800 text-white' 
                    : 'text-teal-800 hover:bg-teal-800 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section - Mobile Optimized */}
        <div className="mb-6 lg:mb-10 h-[40vh] sm:h-[45vh] lg:h-[50vh]">
          {activeFilter === 'all' ? (
            // Swiper Slider for "Semua" category
            <div className="w-full h-full relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-full rounded-lg lg:rounded-xl overflow-hidden"
              >
                {sliderImages.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative w-full h-full">
                      {/* Fallback for Image component in development */}
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center text-gray-500 px-4">
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 lg:mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-sm lg:text-lg font-medium">{slide.title}</p>
                        </div>
                      </div>
                      
                      {/* Overlay with text - Mobile Optimized */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-3 sm:p-4 lg:p-6 text-white w-full">
                          <h3 className="text-base sm:text-lg lg:text-2xl font-bold mb-1 lg:mb-2">{slide.title}</h3>
                          <p className="text-xs sm:text-sm opacity-90">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            // Grid Gallery for other categories - Mobile Optimized
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 h-full overflow-y-auto">
              {filteredItems.slice(0, 6).map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    {/* Fallback for Image component in development */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-500 px-2">
                        <svg className="w-8 h-8 lg:w-12 lg:h-12 mx-auto mb-1 lg:mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-[10px] lg:text-xs font-medium">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View More Button - Mobile Optimized */}
        <div className="text-center mt-4 lg:mt-6">
          <button className="bg-gradient-to-r from-teal-700 to-teal-900 text-white px-4 py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-xs sm:text-sm lg:text-xl hover:from-teal-800 hover:to-teal-950 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Lihat Portfolio Lengkap
          </button>
        </div>
      </div>
    </section>
  )
}
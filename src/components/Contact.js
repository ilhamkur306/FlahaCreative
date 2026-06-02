"use client"

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    location: '',
    eventDate: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.eventType || !formData.location) {
      alert('Mohon lengkapi data yang wajib diisi (Nama, Jenis Layanan, Lokasi)')
      return
    }

    const message = `Halo Flaha Creative Production, saya ingin konsultasi.

Nama: ${formData.name}
Layanan: ${formData.eventType}
Tanggal: ${formData.eventDate || 'Belum ditentukan'}
Lokasi: ${formData.location}
Pesan: ${formData.message || '-'}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = '6288808017869'
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappURL, '_blank')
    
    setFormData({
      name: '',
      eventType: '',
      location: '',
      eventDate: '',
      message: ''
    })
    
    alert('Pesan berhasil disiapkan! Anda akan diarahkan ke WhatsApp.')
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Area Layanan',
      info: 'Jabodetabek dan sekitarnya',
      description: 'Bisa diskusi untuk luar kota sesuai kebutuhan'
    },
    {
      icon: '📞',
      title: 'WhatsApp',
      info: '+62 888-0801-7869',
      description: 'Senin - Sabtu: 09:00 - 18:00'
    },
    {
      icon: '✉️',
      title: 'Email',
      info: 'info@flahacreative.com',
      description: 'Respon dalam 24 jam'
    },
    {
      icon: '🕒',
      title: 'Jam Operasional',
      info: 'Senin - Jumat: 09:00 - 18:00',
      description: 'Sabtu: 09:00 - 15:00'
    }
  ]

  const socialMedia = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'WhatsApp', icon: '💬', url: '#' },
    { name: 'YouTube', icon: '🎥', url: '#' }
  ]

  const locationOptions = [
    'Jakarta Barat', 'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Utara',
    'Bogor', 'Depok', 'Tangerang', 'Tangerang Selatan', 'Bekasi', 'Bekasi Selatan',
    'Kabupaten Bogor', 'Kabupaten Tangerang', 'Kabupaten Bekasi'
  ]

  return (
    <section id="contact" className="min-h-screen md:min-h-[85vh] scroll-mt-[10vh] py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-[#103641] to-[#1a5a6b] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-start">
          
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Mari
              <span className="block text-white/90">Berkolaborasi</span>
            </h2>
            <div className="w-20 h-1 bg-white/80 mb-6 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed sm:mb-6">
              Punya kebutuhan foto, video, drone, desain grafis, atau desain web? Ceritakan kebutuhan kamu, kami bantu arahkan paket dan konsep yang paling sesuai.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 sm:space-y-4 sm:mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg text-white flex-shrink-0 text-lg sm:text-xl">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold mb-1 text-white">{contact.title}</h3>
                    <p className="text-sm sm:text-base font-bold mb-1.5 text-white">{contact.info}</p>
                    <p className="text-white/80 text-xs sm:text-sm">{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold sm:mb-4 text-white">Ikuti Kami</h3>
              <div className="flex space-x-3 sm:space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="bg-white/20 p-2 sm:p-3 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110 text-lg sm:text-xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-8 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Konsultasi Gratis</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-base"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Jenis Layanan</label>
                <select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-base"
                >
                  <option value="" className="text-gray-800">Pilih layanan</option>
                  <option value="portrait" className="text-gray-800">Fotografi Portrait</option>
                  <option value="wedding" className="text-gray-800">Fotografi Pernikahan</option>
                  <option value="event" className="text-gray-800">Fotografi Event</option>
                  <option value="product" className="text-gray-800">Fotografi Produk</option>
                  <option value="corporate" className="text-gray-800">Fotografi Corporate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Lokasi</label>
                <select 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-base"
                >
                  <option value="" className="text-gray-800">Pilih lokasi</option>
                  {locationOptions.map((location) => (
                    <option key={location} value={location} className="text-gray-800">{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Tanggal Pemesanan</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Pesan Tambahan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full  px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none text-base"
                  placeholder="Tambahkan pesan atau detail tambahan..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#103641] py-3 px-6 rounded-lg font-bold text-base hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Kirim Pesan
              </button>
            </form>

            {/* WhatsApp CTA */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="text-center">
                <p className="text-white/80 mb-2 text-sm">WhatsApp: +62 888-0801-7869</p>
                <a 
                  href="https://wa.me/6288808017869?text=Halo%20Flaha%20Creative%20Production%2C%20aku%20mau%20konsultasi%20untuk%20kebutuhan%20dokumentasi.%20Bisa%20dibantu%3F" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-sm" 
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

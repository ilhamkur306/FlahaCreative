"use client"

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    budget: '',
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
    
    // Validasi form
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Mohon lengkapi data yang wajib diisi (Nama, Telepon, Email)')
      return
    }

    // Format pesan WhatsApp
    const message = `*KONSULTASI FLAHA CREATIVE*

*Informasi Klien:*
👤 Nama: ${formData.name}
📞 Telepon: ${formData.phone}
📧 Email: ${formData.email}

*Detail Layanan:*
🎯 Jenis Layanan: ${formData.eventType || 'Belum dipilih'}
📅 Tanggal Acara: ${formData.eventDate || 'Belum ditentukan'}
📍 Lokasi: ${formData.location || 'Belum ditentukan'}
💰 Budget: ${formData.budget || 'Akan dibahas'}

*Pesan:*
💬 ${formData.message || 'Tidak ada pesan tambahan'}

---
Terima kasih telah menghubungi Flaha Creative! 📸✨
Kami akan segera merespons konsultasi Anda.`

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message)
    
    // Nomor WhatsApp tujuan
    const whatsappNumber = '6282229914755'
    
    // URL WhatsApp API
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Buka WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Reset form setelah submit
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      location: '',
      budget: '',
      message: ''
    })
    
    // Tampilkan notifikasi sukses
    alert('Pesan berhasil disiapkan! Anda akan diarahkan ke WhatsApp.')
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Alamat',
      info: 'Jl. Kreatif No. 123',
      description: 'Jakarta Selatan, 12345'
    },
    {
      icon: '📞',
      title: 'Telepon',
      info: '+62 812-3456-7890',
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

  return (
    <section id="contact" className="min-h-[85vh] scroll-mt-[10vh] py-6 lg:py-4 bg-gradient-to-br from-[#103641] to-[#1a5a6b] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start w-full">
          {/* Left Side - Contact Info - Mobile Optimized */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 lg:mb-3 text-white">
              Mari
              <span className="block text-white/90">Berkolaborasi</span>
            </h2>
            <div className="w-12 lg:w-16 h-1 bg-white/80 mb-3 lg:mb-4"></div>
            <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed mb-4 lg:mb-6">
              Siap untuk mengabadikan momen berharga Anda? Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik.
            </p>

            {/* Contact Information - Mobile Optimized */}
            <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-2 lg:space-x-3">
                  <div className="bg-white/20 p-1.5 lg:p-2 rounded-lg text-white flex-shrink-0 text-xs lg:text-sm">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-xs lg:text-sm font-semibold mb-0.5 lg:mb-1 text-white">{contact.title}</h3>
                    <p className="text-sm lg:text-base font-bold mb-0.5 lg:mb-1 text-white">{contact.info}</p>
                    <p className="text-white/80 text-[10px] lg:text-xs">{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media - Mobile Optimized */}
            <div>
              <h3 className="text-xs lg:text-sm font-semibold mb-2 lg:mb-3 text-white">Ikuti Kami</h3>
              <div className="flex space-x-2 lg:space-x-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="bg-white/20 p-1.5 lg:p-2 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110 text-xs lg:text-sm"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form - Mobile Optimized */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
            <h3 className="text-base lg:text-lg font-bold mb-3 lg:mb-4 text-white">Konsultasi Gratis</h3>
            <form onSubmit={handleSubmit} className="space-y-2 lg:space-y-3">
              <div className="grid sm:grid-cols-2 gap-2 lg:gap-3">
                <div>
                  <label className="block text-[10px] lg:text-xs font-medium mb-1 text-white">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-xs lg:text-sm"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-[10px] lg:text-xs font-medium mb-1 text-white">No. Telepon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-xs lg:text-sm"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] lg:text-xs font-medium mb-1 text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-xs lg:text-sm"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-[10px] lg:text-xs font-medium mb-1 text-white">Jenis Layanan</label>
                <select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-xs lg:text-sm"
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
                <label className="block text-[10px] lg:text-xs font-medium mb-1 text-white">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none text-xs lg:text-sm"
                  placeholder="Ceritakan tentang acara atau kebutuhan fotografi Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#103641] py-1.5 lg:py-2 px-3 lg:px-4 rounded-lg font-bold text-xs lg:text-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Kirim Pesan
              </button>
            </form>

            {/* WhatsApp CTA - Mobile Optimized */}
            <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-white/20">
              <div className="text-center">
                <p className="text-white/80 mb-2 text-[10px] lg:text-xs">Atau hubungi langsung via WhatsApp</p>
                <a
                  href="https://wa.me/6282229914755"
                  className="inline-flex items-center bg-green-500 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-[11px] lg:text-xs"
                >
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 mr-1.5 lg:mr-2" fill="currentColor" viewBox="0 0 24 24">
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
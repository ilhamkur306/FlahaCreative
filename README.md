# 📸 FlahaCreative

**Professional Photography Services Landing Page**

FlahaCreative adalah website landing page modern untuk layanan fotografi profesional yang dibangun menggunakan Next.js dan Tailwind CSS. Website ini menampilkan portfolio, layanan, dan informasi lengkap tentang jasa fotografi dengan desain yang responsif dan user-friendly.

## ✨ Fitur Utama

### 🎯 **Komponen Utama**
- **Hero Section** - Banner carousel dengan multiple images dan auto-slide
- **About Section** - Informasi tentang fotografer dengan profile image
- **Gallery** - Portfolio foto dalam grid layout yang responsif
- **Services** - Daftar layanan fotografi yang tersedia
- **Benefits** - Keunggulan layanan dengan icons dan deskripsi
- **Pricing** - Paket harga dengan tiga tier (Basic, Premium, Platinum)
- **Contact** - Form kontak dan informasi komunikasi
- **Footer** - Informasi tambahan dan social media links

### 🎨 **Desain & UI/UX**
- **Responsive Design** - Optimal di semua device (mobile, tablet, desktop)
- **Modern Interface** - Clean dan professional design
- **Smooth Animations** - Hover effects dan transitions
- **Color Scheme** - Konsisten dengan brand identity (#103641)
- **Typography** - Hierarki yang jelas dan readable

### 🚀 **Teknologi & Performance**
- **Next.js 14** - React framework dengan App Router
- **Tailwind CSS** - Utility-first CSS framework
- **SVG Icons** - Scalable vector graphics untuk performa optimal
- **Image Optimization** - Next.js built-in image optimization
- **90vh Sections** - Consistent viewport height untuk setiap section

## 🛠️ Teknologi Stack

- **Frontend Framework**: Next.js 14.2.3
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.0
- **Build Tool**: Next.js built-in bundler
- **Package Manager**: npm

## 📁 Struktur Project

```
FlahaCreative/
├── public/
│   └── assets/
│       ├── images/           # Image assets
│       │   ├── gallery/      # Gallery photos
│       │   └── banners/      # Hero carousel images
│       ├── icons/            # Icon assets
│       └── fonts/            # Custom fonts
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.js         # Root layout
│   │   └── page.js           # Main page
│   └── components/
│       ├── Header.js         # Navigation header
│       ├── Hero.js           # Hero carousel section
│       ├── About.js          # About section
│       ├── Gallery.js        # Photo gallery
│       ├── Services.js       # Services section
│       ├── Benefits.js       # Benefits section
│       ├── Pricing.js        # Pricing plans
│       ├── Contact.js        # Contact form
│       └── Footer.js         # Footer section
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies & scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd FlahaCreative
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🎨 Customization

### **Colors**
Primary color scheme dapat diubah di `tailwind.config.js`:
```javascript
colors: {
  primary: '#103641',  // Brand color
  // Add custom colors here
}
```

### **Images**
- **Hero Banners**: Tambahkan images di `/public/assets/images/`
- **Gallery Photos**: Upload ke `/public/assets/images/gallery/`
- **Profile Image**: Update di `/public/assets/images/gallery/profile.png`

### **Content**
- **Services**: Edit di `src/components/Services.js`
- **Pricing Plans**: Modify di `src/components/Pricing.js`
- **Benefits**: Update di `src/components/Benefits.js`
- **Contact Info**: Change di `src/components/Contact.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Detail

### **Hero Carousel**
- Auto-slide setiap 5 detik
- Manual navigation dengan dots
- Smooth transitions
- Responsive images
- Overlay gradient untuk readability

### **Pricing Cards**
- Tiga tier: Basic, Premium, Platinum
- Popular badge untuk recommended plan
- Hover animations
- Responsive grid layout
- Call-to-action buttons

### **Benefits Section**
- 6 benefit cards dengan icons
- Center-aligned content
- Hover effects dengan scale animation
- SVG icons untuk performa optimal

### **Gallery**
- Masonry-style grid layout
- Responsive image sizing
- Hover overlay effects
- Optimized loading

## 🔧 Configuration

### **Next.js Config**
```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
}
```

### **Tailwind Config**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom configurations
    },
  },
}
```

## 📈 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic dengan Next.js App Router
- **CSS Purging**: Tailwind CSS removes unused styles
- **SVG Icons**: Vector graphics untuk file size minimal
- **Lazy Loading**: Built-in lazy loading untuk images

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Flaha Creative**
- Website: [Your Website]
- Email: [Your Email]
- Portfolio: [Your Portfolio]

## 🙏 Acknowledgments

- Next.js team untuk amazing framework
- Tailwind CSS untuk utility-first approach
- React community untuk ecosystem yang luar biasa

---

**Built with ❤️ using Next.js & Tailwind CSS**
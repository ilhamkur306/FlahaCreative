import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flaha Creative Production | Foto, Video, Drone, Desain Grafis & Web',
  description:
    'Flaha Creative Production menyediakan layanan fotografi, videografi, drone, desain grafis, dan desain web untuk kebutuhan acara, bisnis, UMKM, dan personal brand.',
  icons: {
    icon: '/assets/icons/white-nbg.png',
    shortcut: '/assets/icons/white-nbg.png',
    apple: '/assets/icons/white-nbg.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

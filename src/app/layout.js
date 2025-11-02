import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flaha Creative - Photography Services',
  description: 'Professional photography services for all your creative needs',
  icons: {
    icon: '/assets/icons/white-nbg.png',
    shortcut: '/assets/icons/white-nbg.png',
    apple: '/assets/icons/white-nbg.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
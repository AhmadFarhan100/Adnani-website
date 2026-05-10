import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

export const metadata: Metadata = {
  title: 'YPI Adnani - Yayasan Pendidikan Islam Adnani',
  description: 'Yayasan Pendidikan Islam Adnani - Membentuk generasi Qurani yang berilmu, berakhlak mulia, dan berdaya saing global. Pendidikan Islam berkualitas untuk putra-putri Anda.',
  keywords: ['pendidikan islam', 'sekolah islam', 'tahfidz', 'ypi adnani', 'pendidikan qurani', 'sekolah islam terpadu'],
  authors: [{ name: 'YPI Adnani' }],
  generator: 'v0.app',
  openGraph: {
    title: 'YPI Adnani - Yayasan Pendidikan Islam Adnani',
    description: 'Membentuk generasi Qurani yang berilmu, berakhlak mulia, dan berdaya saing global.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YPI Adnani - Yayasan Pendidikan Islam Adnani',
    description: 'Membentuk generasi Qurani yang berilmu, berakhlak mulia, dan berdaya saing global.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

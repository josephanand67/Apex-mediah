import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://josephanand.com'),
  title: {
    default: 'Joseph Anand | Author, Speaker & Executive Coach',
    template: '%s | Joseph Anand'
  },
  description: 'Joseph Anand is an accomplished author, keynote speaker, executive coach, and emotional intelligence expert with 40+ years of global leadership experience.',
  keywords: ['Joseph Anand', 'Author', 'Speaker', 'Executive Coach', 'Emotional Intelligence', 'Leadership', 'Transformative Coach', 'Positive Psychology'],
  authors: [{ name: 'Joseph Anand' }],
  creator: 'Joseph Anand',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Joseph Anand',
    title: 'Joseph Anand | Author, Speaker & Executive Coach',
    description: 'Joseph Anand is an accomplished author, keynote speaker, executive coach, and emotional intelligence expert with 40+ years of global leadership experience.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Anand | Author, Speaker & Executive Coach',
    description: 'Joseph Anand is an accomplished author, keynote speaker, executive coach, and emotional intelligence expert with 40+ years of global leadership experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1A2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.amazon.com" />
        <link rel="dns-prefetch" href="https://www.barnesandnoble.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

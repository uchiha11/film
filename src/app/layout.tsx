import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'John Doe - Cinematographer',
  description: 'Award-winning cinematographer specializing in narrative films, commercials, and music videos. Bringing stories to life through cinematic vision.',
  keywords: 'cinematographer, director of photography, film, video production, visual storytelling',
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe - Cinematographer',
    description: 'Award-winning cinematographer bringing stories to life through cinematic vision.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Cinematographer',
    description: 'Award-winning cinematographer bringing stories to life through cinematic vision.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-cinematic-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
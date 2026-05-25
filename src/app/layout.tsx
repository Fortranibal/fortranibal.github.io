import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://anibalguerrero.com'),
  title: {
    default: 'Aníbal Guerrero Hernandez',
    template: '%s | Aníbal Guerrero Hernandez',
  },
  description: 'Aerospace Engineer & AI Enthusiast. GNC Engineer at Rocket Lab.',
  openGraph: {
    title: 'Aníbal Guerrero Hernandez',
    description: 'Aerospace Engineer & AI Enthusiast. GNC Engineer at Rocket Lab.',
    url: 'https://anibalguerrero.com',
    siteName: 'Aníbal Guerrero Hernandez',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Aníbal Guerrero Hernandez',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fortranibal',
    title: 'Aníbal Guerrero Hernandez',
    description: 'Aerospace Engineer & AI Enthusiast. GNC Engineer at Rocket Lab.',
    creator: '@fortranibal',
    images: {
      url: '/og_image.png',
      width: 1200,
      height: 630,
      alt: 'Aníbal Guerrero Hernandez',
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

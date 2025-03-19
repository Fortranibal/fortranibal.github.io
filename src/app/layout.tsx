import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://anibalguerrero.com'),
  title: {
    default: 'Anibal Guerrero Hernandez Portfolio',
    template: '%s | Anibal Guerrero Hernandez Portfolio',
  },
  description: 'Portfolio of Anibal Guerrero Hernandez, Aerospace Engineer, Entrepreneur, and Innovator',

  openGraph: {
    title: 'Anibal Guerrero Hernandez Portfolio',
    description: 'Portfolio of Anibal Guerrero Hernandez, Aerospace Engineer, Entrepreneur, and Innovator',
    url: 'https://anibalguerrero.com',
    siteName: 'Anibal Guerrero Hernandez Portfolio',
    images: [
      {
        url: '/og_image.png', // Corrected the image path
        width: 1200,
        height: 630,
        alt: 'Anibal Guerrero Hernandez Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anibal Guerrero Hernandez Portfolio',
    description: 'Portfolio of Anibal Guerrero Hernandez, Aerospace Engineer, Entrepreneur, and Innovator',
    images: ['/og_image.png'], // Corrected the image path
  },
};

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
          defaultTheme="dark"
          enableSystem={false} 
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SITE_CANONICAL_URL } from '@/lib/structured-data'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const SITE_NAME = 'Anibal Guerrero Hernandez'
const DEFAULT_TITLE = `${SITE_NAME} | GNC Engineer`
const DESCRIPTION =
  'Aerospace Engineer & AI Enthusiast. GNC Engineer at Rocket Lab.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anibalguerrero.com'),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    url: SITE_CANONICAL_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fortranibal',
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    creator: '@fortranibal',
    images: {
      url: '/og_image.png',
      width: 1200,
      height: 630,
      alt: SITE_NAME,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
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

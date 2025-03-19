import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
// import localFont from "next/font/local"
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  metadataBase: new URL ('https://anibalguerrero.com'),
  title: {
    default: 'Anibal Guerrero Hernandez Portfolio',
    template: '%s | Anibal Guerrero Hernandez Portfolio',
  },
  
  description: 'Portfolio of Anibal Guerrero Hernandez, Aerospace Engineer, Entrepeneur, and Innovator',

  openGraph: {
    title: 'Anibal Guerrero Hernandez Portfolio',
    description: 'Portfolio of Anibal Guerrero Hernandez, Aerospace Engineer, Entrepeneur, and Innovator',
    url: '/',
    siteName: 'Anibal Guerrero Hernandez Portfolio',
    images: [
      {
        url: '/public/og_image.png',
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
    description: 'Portfolio of Anibal Guerrero Hernandez, Aerospace Engineer, Entrepeneur, and Innovator',
    images: ['/public/og_image.png'], // Add your image URL
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
          defaultTheme="dark"   // or 'system'
          // enableSystem
          enableSystem={false}  // Prevents light theme automatic override
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

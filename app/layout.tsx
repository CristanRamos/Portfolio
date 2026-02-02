import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cristan Ramos | Next.js & Flutter Developer',
  description: 'Professional portfolio of Cristan Ramos - BS Information Technology graduate specializing in Web and App Development. Experienced in Next.js, React, Flutter, and full-stack development.',
  keywords: ['Cristan Ramos', 'Next.js Developer', 'Flutter Developer', 'Web Development', 'App Development', 'Full Stack Developer', 'React Developer'],
  authors: [{ name: 'Cristan Ramos' }],
  creator: 'Cristan Ramos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/CristanRamos',
    title: 'Cristan Ramos | Next.js & Flutter Developer',
    description: 'Professional portfolio showcasing web and mobile development projects',
    siteName: 'Cristan Ramos Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

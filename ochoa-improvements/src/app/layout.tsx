import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import './animations.css'
import { Layout } from '@/components/layout'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ochoa Home Improvements LLC - Expert Wood Framing Services',
  description: 'Professional wood framing services for residential and commercial projects. Quality craftsmanship and exceptional results.',
  keywords: 'wood framing, home improvement, construction, renovation, residential construction, commercial construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

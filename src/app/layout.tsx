import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Dashboard Template',
    default: 'Next.js Dashboard Template',
  },
  description: 'Next.js Dashboard Template.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-black-1 bg-white-1`}>{children}</body>
    </html>
  )
}

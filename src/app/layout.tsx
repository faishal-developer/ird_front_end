import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dua & Ruqyah',
  description: 'Dua Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='https://duaruqyah.com/assets/dua-logo.svg'/>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

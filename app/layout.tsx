import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BusinessPage',
  description: 'Generated by create next app',
  openGraph: {
    title: 'BusinessPage',
    description: 'Generated by create next app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-419">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

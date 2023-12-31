import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth Nextjs13',
  description: 'Autenticacion con Nextjs 13'
}

interface RoutLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RoutLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}

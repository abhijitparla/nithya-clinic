import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import TopNavHeader from './TopNavHeader'

const font = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nithya Gastro Clinic',
  description: 'Gastro and Liver Clinic in Hyderabad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <TopNavHeader/>
        {children}
        </body>
    </html>
  )
}

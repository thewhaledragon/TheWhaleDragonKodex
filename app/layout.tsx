import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    default: 'The Kodex',
    template: '%s · The Kodex',
  },
  description: 'Writing about AI x Music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}

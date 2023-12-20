import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ weight:"300"})

export const metadata: Metadata = {
  title: 'Cubieverse',
  description: 'Pagina de test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
        
        
      </body>
    </html>
  )
}

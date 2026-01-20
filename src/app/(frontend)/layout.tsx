import '@/app/globals.css'
import localFont from 'next/font/local'
import React from 'react'
import { Toaster } from 'sonner'

const generalSans = localFont({
  src: [
    {
      path: '../../assets/fonts/GeneralSans/Fonts/WEB/fonts/GeneralSans-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/GeneralSans/Fonts/WEB/fonts/GeneralSans-VariableItalic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-general-sans',
})

const satoshi = localFont({
  src: [
    {
      path: '../../assets/fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Satoshi/Fonts/WEB/fonts/Satoshi-VariableItalic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function Layout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${generalSans.variable} ${satoshi.variable} antialiased`}>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}

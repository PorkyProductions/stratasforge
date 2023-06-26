import {name,  description } from '@/typescript/constants'
import './globals.css'
import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: name,
  description: description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script id="toggleTheme">
						{
							`if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
								document.body.setAttribute('data-bs-theme', 'dark')
							} else {
								document.body.setAttribute('data-bs-theme', 'light')
							}`
						}
					</Script>
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

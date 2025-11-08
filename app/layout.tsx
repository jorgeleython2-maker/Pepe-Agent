import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pepe Agent",
  description: "Created with PF dev",
  icons: {
    icon: "https://ibb.co/m58Srzpp",
    apple: "https://ibb.co/jPWnQ1mx", // ← Corregido: falta coma y comillas
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Asegura compatibilidad extra con favicon */}
        <link rel="icon" href="public/apple-icon.png" />
        <link rel="apple-touch-icon" href="public/apple-icon.png" />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}

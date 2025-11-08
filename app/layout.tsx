import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image' // Importa esto para mostrar imágenes

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pepe Agent',
  description: 'El bot que detecta GEMAS en Pump.fun',
  icons: {
    icon: '/favicon.ico', // <-- AGREGADO: Favicon principal
    shortcut: '/favicon.ico', // Icono en barra de tareas
    apple: '/apple-touch-icon.png', // Para iOS (opcional, crea este archivo)
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* AGREGADO: Meta tags extras para iconos (opcional para compatibilidad) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" /> {/* Para PWA, opcional */}
      </head>
      <body className={inter.className}>
        {/* AGREGADO: Header con logo (muestra el icono grande en la navbar) */}
        <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
          <div className="flex items-center space-x-2">
            <Image
              src="/icon.png" // <-- CAMBIA: Ruta a tu icono/logo
              alt="Pepe Agent Logo"
              width={40} // Ancho del icono
              height={40} // Alto del icono
              priority // Carga rápida
            />
            <h1 className="text-xl font-bold">Pepe Agent</h1>
          </div>
          {/* Aquí puedes agregar más navbar si quieres */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
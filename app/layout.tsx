
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bontex Bondeados | Telas bondeadas y servicio de bondeado textil',
  description:
    'Desarrollamos y producimos soluciones textiles con tecnología de bondeado. Telas bondeadas, servicio de bondeado a medida, ventas mayoristas y envíos a todo el país.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e4d5c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${manrope.variable} bg-background`}
    >
      <body className="antialiased">

        {/* MENÚ GLOBAL PARA TODAS LAS PÁGINAS */}
        <SiteHeader />

        {/* OCULTA LOS ENCABEZADOS ANTIGUOS DE LAS SUBPÁGINAS */}
        <div className="[&>main>header]:hidden">
          {children}
        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}

      </body>
    </html>
  )
}

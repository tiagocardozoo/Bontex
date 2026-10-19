
import { Hero } from '@/components/hero'
import { ProductosCarrusel } from '@/components/productos-carrusel'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductosCarrusel />
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}

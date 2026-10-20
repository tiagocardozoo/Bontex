
import { Hero } from '@/components/hero'
import { ProductosCarrusel } from '@/components/productos-carrusel'
import { PreguntasFrecuentes } from '@/components/preguntas-frecuentes'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductosCarrusel />
        <PreguntasFrecuentes />
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}

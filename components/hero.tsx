import Image from 'next/image'
import { MousePointer2 } from 'lucide-react'
import { FeatureCard } from '@/components/feature-card'

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden scroll-mt-20">
      <Image
        src="/images/hero-textil.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-105 object-cover blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f2630]/85 via-[#163a46]/75 to-[#0f2630]/90"
      />

      <div className="mx-auto max-w-7xl px-5 pb-32 pt-16 md:px-8 md:pb-40 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-teal-soft md:text-xs">
              tu socio estrategico para la industria textil
            </p>
            <h1
              id="hero-title"
              className="mt-5 font-serif text-5xl font-medium leading-[1.02] text-white text-balance md:text-6xl lg:text-7xl"
            >
              Valor agregado
              <br />
              en tus telas
            </h1>
          </div>

          <div className="flex gap-6 lg:col-span-5 lg:pb-3">
            <span aria-hidden="true" className="w-px shrink-0 bg-gradient-to-b from-teal-soft via-white/40 to-transparent" />
            <p className="max-w-md text-base leading-relaxed text-white/75 text-pretty md:text-[17px]">
              En Bontex Bondeados desarrollamos y producimos soluciones textiles con tecnología de bondeado,
              combinando calidad, innovación y un servicio confiable para cada industria.
            </p>
          </div>
        </div>

        <div className="relative mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:gap-8">
          <FeatureCard
            href="#productos"
            image="/images/telas-bondeadas.jpeg"
            imageAlt="Rollos de telas bondeadas en tonos gris, azul petróleo y negro"
            titleTop="Telas"
            titleBottom="bondeadas"
            description={['Jersey, Simil Neopren y mas telas bondeadas', '¡Listas para despachar!']}
            cta="Ver catalogo de telas"
          />
          <div className="relative">
            <FeatureCard
              href="#servicio"
              image="/images/maquina-bontex.png"
              imageAlt="Maquinaria de bondeado textil con rodillos industriales"
              titleTop="Servicio de"
              titleBottom="bondeado"
              description={['Servicio de Pegado/Laminado textil para todas tus telas ¡Personalizado para cada cliente!']}
              cta="Cotizar servicio"
              highlighted
            />
            <MousePointer2
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 right-[22%] hidden size-7 -rotate-6 fill-white text-slate-ink drop-shadow-lg lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

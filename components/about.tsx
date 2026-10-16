import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-petrol/80">Sobre Bontex Bondeados</p>
          <h2
            id="about-title"
            className="mt-5 font-serif text-4xl font-medium leading-[1.05] text-slate-ink text-balance md:text-5xl lg:text-6xl"
          >
            Más que telas,
            <br />
            <span className="italic text-petrol">soluciones reales.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground md:text-[17px]">
            Somos una empresa argentina especializada en telas bondeadas y servicios de bondeado textil, con el
            compromiso de brindar calidad, innovación y asesoramiento en cada proyecto.
          </p>
          <a
            href="#contacto"
            className="group mt-9 inline-flex items-center gap-2 rounded-md border border-petrol/25 px-6 py-3 text-sm font-semibold tracking-wide text-petrol transition-colors hover:border-petrol hover:bg-petrol hover:text-white"
          >
            Conocé nuestra historia
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-5 gap-4 md:gap-5 lg:col-span-7">
          <div className="relative col-span-2 mt-12 aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(20,45,56,0.5)]">
            <Image
              src="/images/sobre-rollos.png"
              alt="Detalle de capas en rollos de telas bondeadas"
              fill
              sizes="(min-width: 1024px) 25vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative col-span-3 aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(20,45,56,0.6)]">
            <Image
              src="/images/sobre-proceso.png"
              alt="Rodillo industrial bobinando una tela en planta"
              fill
              sizes="(min-width: 1024px) 35vw, 60vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-[#0c1f27]/85 via-[#0c1f27]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-9 md:left-9">
              <span aria-hidden="true" className="mb-4 block h-px w-10 bg-teal-soft" />
              <p className="text-xs font-semibold uppercase leading-[2] tracking-[0.4em] text-white/90 md:text-sm">
                Industria
                <br />
                Diseño
                <br />
                Desempeño
                <br />
                <span className="text-teal-soft">En cada capa</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

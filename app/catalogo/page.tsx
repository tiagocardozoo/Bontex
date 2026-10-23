
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
const catalogos = [
  {
    titulo: 'CATÁLOGO MINORISTA',
    descripcion:
    'Mínimo de compra de 5 metros.',
    destino: '/catalogo/minorista',
    boton: 'Ver catálogo minorista',
    tipo: 'minorista',
  },
  {
    titulo: 'CATÁLOGO MAYORISTA',
    descripcion:
      'Rollos a partir de 50 metros.',
    destino: '/catalogo/mayorista',
    boton: 'Ver catálogo mayorista',
    tipo: 'mayorista',
  },
]

export default function CatalogoPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0f2630] text-white">

      {/* FONDO TEXTIL */}
      <Image
        src="/images/hero-textil.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover blur-[2px]"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f2630]/95 via-[#163a46]/90 to-[#0f2630]/95" />

      {/* CONTENIDO */}
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-8 md:pt-20">

        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
            BONTEX BONDEADOS
          </p>

          <h1 className="mt-4 font-serif text-5xl font-medium md:text-6xl">
            Catálogo de telas
          </h1>

          <p className="mt-5 text-base text-white/75">
            Seleccioná el catálogo que mejor se adapte a tu compra.
          </p>
        </div>

        {/* LAS DOS TARJETAS */}
        <div className="grid gap-7 md:grid-cols-2">

          {catalogos.map((catalogo) => (
            <Link
              key={catalogo.destino}
              href={catalogo.destino}
              className="group relative flex min-h-[350px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#8ed0db]/40 bg-[#174453]/90 px-7 py-12 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#8ed0db] hover:bg-[#1d5363] md:min-h-[390px]"
            >

        

              {/* TÍTULO */}
              <h2 className="max-w-md font-sans text-2xl font-bold uppercase leading-tight tracking-[0.045em] text-white md:text-3xl">
                {catalogo.titulo}
              </h2>

              <div className="my-6 h-px w-16 bg-[#8ed0db]/70" />

              {/* DESCRIPCIÓN */}
              <p className="max-w-sm font-sans text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                {catalogo.descripcion}
              </p>

              {/* BOTÓN */}
              <span className="mt-9 inline-flex items-center gap-3 rounded-lg border border-[#8ed0db]/65 bg-[#286879] px-6 py-4 font-sans text-sm font-semibold text-white transition-colors group-hover:bg-[#337d90]">
                {catalogo.boton}

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}

        </div>
      </section>
    </main>
  )
}

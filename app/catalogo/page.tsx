
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const catalogos = [
  {
    titulo: 'CATÁLOGO MINORISTA',
    descripcion: 'Conocé nuestras telas disponibles para compras por menor.',
    imagen: '/images/telas-bondeadas.jpeg',
    destino: '/catalogo/minorista',
    boton: 'Ver catálogo minorista',
  },
  {
    titulo: 'CATÁLOGO MAYORISTA',
    descripcion: 'Compras mayoristas a partir de 50 metros.',
    imagen: '/images/maquina-bontex.png',
    destino: '/catalogo/mayorista',
    boton: 'Ver catálogo mayorista',
  },
]

export default function CatalogoPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0f2630] text-white">
      {/* Fondo textil igual a la estética de la portada */}
      <Image
        src="/images/hero-textil.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover blur-[2px]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f2630]/90 via-[#163a46]/85 to-[#0f2630]/95" />

      <header className="border-b border-white/10 bg-white/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <Link href="/" className="text-2xl font-extrabold text-[#1e4d5c]">
            Bontex <span className="font-light text-[#6a8592]">Bondeados</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1e4d5c]"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </header>

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

        <div className="grid gap-7 md:grid-cols-2">
          {catalogos.map((catalogo) => (
            <Link
              key={catalogo.destino}
              href={catalogo.destino}
              className="group relative flex min-h-[440px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#7cc3cc]/40 px-7 py-14 text-center shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#7cc3cc] md:min-h-[490px]"
            >
              <Image
                src={catalogo.imagen}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Oscurecimiento de la fotografía */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b24]/95 via-[#102b36]/75 to-[#102b36]/55" />

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="max-w-md text-3xl font-extrabold uppercase leading-tight tracking-[0.07em] text-white md:text-4xl">
                  {catalogo.titulo}
                </h2>

                <div className="my-6 h-px w-16 bg-[#7cc3cc]" />

                <p className="max-w-sm text-base leading-relaxed text-white/85">
                  {catalogo.descripcion}
                </p>

                <span className="mt-9 inline-flex items-center gap-3 rounded-lg border border-[#7cc3cc]/70 bg-[#1e4d5c] px-6 py-4 text-sm font-semibold text-white transition-colors group-hover:bg-[#286b7d]">
                  {catalogo.boton}
                  <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

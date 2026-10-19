
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#f3f5f5]">
      <header className="bg-white px-6 py-6 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#1e4d5c]">
            Bontex <span className="font-normal text-[#78909c]">Bondeados</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-[#1e4d5c]">
            <ArrowLeft size={18} /> Volver al inicio
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#397587]">
            NUESTROS PRODUCTOS
          </p>
          <h1 className="mt-4 font-serif text-5xl text-[#102b36] md:text-6xl">
            Catálogo de telas
          </h1>
          <p className="mt-5 text-slate-600">
            Elegí el catálogo que mejor se adapte a tu compra.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Link
            href="/catalogo/minorista"
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src="/images/telas-bondeadas.jpeg"
                alt="Telas bondeadas"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h2 className="font-serif text-3xl text-[#102b36]">
                Catálogo minorista
              </h2>
              <p className="mt-3 text-slate-600">
                Conocé nuestras telas y opciones de compra por menor.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#1e4d5c]">
                Ver catálogo <ArrowRight size={19} />
              </span>
            </div>
          </Link>

          <Link
            href="/catalogo/mayorista"
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src="/images/maquina-bontex.png"
                alt="Producción textil mayorista"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h2 className="font-serif text-3xl text-[#102b36]">
                Catálogo mayorista
              </h2>
              <p className="mt-3 text-slate-600">
                Compras mayoristas a partir de 50 metros.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#1e4d5c]">
                Ver catálogo <ArrowRight size={19} />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}

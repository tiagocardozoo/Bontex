import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const PRODUCTS = [
  { name: 'Bondeados técnicos', text: 'Para indumentaria de trabajo, outdoor y deportiva.' },
  { name: 'Bondeados para calzado', text: 'Capas resistentes con excelente estabilidad.' },
  { name: 'Bondeados para tapicería', text: 'Confort, cuerpo y durabilidad para muebles.' },
]

const STEPS = [
  { n: '01', title: 'Asesoramiento', text: 'Analizamos tu proyecto y los materiales.' },
  { n: '02', title: 'Desarrollo', text: 'Definimos adhesivos, capas y parámetros.' },
  { n: '03', title: 'Producción', text: 'Bondeamos con control de calidad constante.' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.3em] text-petrol/80">{children}</p>
}

export function ProductsService() {
  return (
    <>
      <section id="productos" aria-labelledby="productos-title" className="scroll-mt-20 bg-muted py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Productos</SectionLabel>
              <h2 id="productos-title" className="mt-4 font-serif text-4xl font-medium text-slate-ink md:text-5xl">
                Telas bondeadas
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Combinaciones de capas pensadas para cada aplicación, con terminaciones consistentes en cada rollo.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {PRODUCTS.map((product) => (
              <li
                key={product.name}
                className="group rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-soft/60 hover:shadow-[0_24px_50px_-30px_rgba(20,45,56,0.45)]"
              >
                <span aria-hidden="true" className="block h-px w-10 bg-teal-soft transition-all group-hover:w-16" />
                <h3 className="mt-6 text-lg font-semibold text-slate-ink">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="servicio" aria-labelledby="servicio-title" className="scroll-mt-20 bg-white py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(20,45,56,0.55)]">
            <Image
              src="/images/servicio-bondeado.png"
              alt="Proceso de bondeado textil en maquinaria industrial"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionLabel>Servicio</SectionLabel>
            <h2 id="servicio-title" className="mt-4 font-serif text-4xl font-medium text-slate-ink text-balance md:text-5xl">
              Bondeado a medida, de principio a fin.
            </h2>
            <ol className="mt-10 divide-y divide-border border-y border-border">
              {STEPS.map((step) => (
                <li key={step.n} className="flex gap-6 py-5">
                  <span className="font-serif text-2xl text-teal-soft">{step.n}</span>
                  <div>
                    <h3 className="font-semibold text-slate-ink">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="mayoristas" aria-labelledby="mayoristas-title" className="scroll-mt-20 px-5 pb-24 md:px-8 md:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl bg-petrol-deep px-8 py-12 md:flex-row md:items-center md:px-14 md:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-soft">Mayoristas</p>
            <h2 id="mayoristas-title" className="mt-4 font-serif text-3xl font-medium text-white text-balance md:text-4xl">
              Condiciones especiales para tu negocio.
            </h2>
          </div>
          <a
            href="#contacto"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-petrol transition-colors hover:bg-teal-soft hover:text-petrol-deep"
          >
            Solicitar lista de precios
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </>
  )
}

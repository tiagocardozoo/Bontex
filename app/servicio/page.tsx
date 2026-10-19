
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Layers,
} from 'lucide-react'

const espesores = [
  {
    medida: '3 mm',
    imagen: '/images/telas-bondeadas.jpeg',
  },
  {
    medida: '4 mm',
    imagen: '/images/telas-bondeadas.jpeg',
  },
  {
    medida: '5 mm',
    imagen: '/images/telas-bondeadas.jpeg',
  },
]

const WHATSAPP = '5491132043169'

const mensaje = encodeURIComponent(
  '¡Hola! Vine desde la página de Bontex y quisiera cotizar el servicio de bondeado. Quiero consultar por los espesores de espuma y las opciones de respaldo. ¡Gracias!'
)

const enlaceWhatsapp =
  `https://wa.me/${WHATSAPP}?text=${mensaje}`

export default function ServicioBondeadoPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#102b36] text-white">

      {/* FONDO AZUL PETRÓLEO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#102b36] via-[#173e4b] to-[#0b2430]"
      />

      {/* ENCABEZADO */}
      <header className="border-b border-white/10 bg-[#102b36]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 md:px-8">
          <Link
            href="/"
            className="text-xl font-extrabold text-white md:text-2xl"
          >
            Bontex{' '}
            <span className="font-light text-[#8ed0db]">
              Bondeados
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* TÍTULO */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 text-center md:px-8 md:pb-14 md:pt-20">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
          SERVICIO DE BONDEADO TEXTIL
        </p>

        <h1 className="mx-auto mt-6 max-w-5xl font-serif text-4xl font-medium leading-tight md:text-6xl">
          Vos traés tus telas,
          <br />
          <span className="text-[#9dd6dd]">
            nosotros las bondeamos
          </span>
          <br />
          y les damos forma.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75">
          Ofrecemos un servicio de bondeado textil
          personalizado, adaptado a las características
          y necesidades de cada cliente.
        </p>
      </section>

      {/* ESPESORES */}
      <section className="mx-auto max-w-5xl px-5 pb-14 md:px-8">

        <div className="mb-7 text-center">
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Trabajamos con distintos espesores de espuma
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {espesores.map((espesor) => (
            <article
              key={espesor.medida}
              className="group relative aspect-square overflow-hidden rounded-xl border border-[#8ed0db]/40 bg-[#1e4d5c] shadow-lg transition-all duration-300 hover:border-[#8ed0db] hover:shadow-xl"
            >
              <Image
                src={espesor.imagen}
                alt={`Espesor de espuma de ${espesor.medida}, imagen ilustrativa`}
                fill
                sizes="(min-width: 768px) 280px, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b24]/90 via-[#102b36]/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-2 text-center sm:p-4">
                <h3 className="font-serif text-2xl font-semibold text-white sm:text-4xl md:text-5xl">
                  {espesor.medida}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESPALDO */}
      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-8">

        <div className="border-t border-white/20 pt-12 text-center">

          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Con o sin respaldo
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Adaptamos la terminación según las
            necesidades de cada tela.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:gap-5">

            <div className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-[#8ed0db]/35 bg-white/10 p-4 text-center">
              <Layers className="mb-3 text-[#8ed0db]" size={26} />
              <h3 className="text-base font-semibold sm:text-xl">
                Con respaldo
              </h3>
            </div>

            <div className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-[#8ed0db]/35 bg-white/10 p-4 text-center">
              <Layers className="mb-3 text-[#8ed0db]" size={26} />
              <h3 className="text-base font-semibold sm:text-xl">
                Sin respaldo
              </h3>
            </div>
          </div>

          {/* NO TEJIDO */}
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-[#8ed0db]/25 bg-[#1e4d5c]/70 px-5 py-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8ed0db]">
              MATERIAL DE RESPALDO
            </p>

            <h3 className="mt-3 font-serif text-3xl text-white">
              No tejido
            </h3>

            <p className="mt-2 text-sm text-white/70">
              Opción de respaldo para diferentes
              aplicaciones textiles.
            </p>
          </div>

        </div>
      </section>

      {/* COTIZACIÓN */}
      <section className="border-t border-white/15 bg-[#0b2430]/50 px-5 py-14 text-center md:px-8">

        <div className="mx-auto max-w-3xl">

          <h2 className="font-serif text-3xl text-white md:text-4xl">
            ¿Querés bondear tus telas?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Contanos qué telas tenés, qué espesor necesitás
            y qué tipo de terminación buscás.
          </p>

          <a
            href={enlaceWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-[#8ed0db] px-7 py-4 font-bold text-[#102b36] transition hover:bg-white"
          >
            <MessageCircle size={22} />
            Cotizar servicio por WhatsApp
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  )
}

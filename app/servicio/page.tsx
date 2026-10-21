
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Layers,
} from 'lucide-react'

// ESPESORES DISPONIBLES
const espesores = [
  { medida: '2 mm' },
  { medida: '2.5 mm' },
  { medida: '3 mm' },
  { medida: '4 mm' },
  { medida: '5 mm' },
  { medida: '10 mm' },
]

// WHATSAPP DE BONTEX
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

      {/* ENCABEZADO ANTIGUO - OCULTO POR EL MENÚ GLOBAL */}
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

      {/* NUEVA PORTADA: TEXTO A LA IZQUIERDA, MÁQUINA A LA DERECHA */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-16 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-2 lg:items-center lg:gap-14">

        {/* TEXTO IZQUIERDO */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
            SERVICIO DE BONDEADO TEXTIL
          </p>

          <h1 className="mt-7 font-serif text-4xl font-medium leading-[1.12] text-white md:text-5xl lg:text-6xl">
            Vos traés tus telas, nosotros las bondeamos y les damos forma.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Ofrecemos un servicio de bondeado textil personalizado,
            adaptado a las características y necesidades de cada cliente.
          </p>
        </div>

        {/* FOTOGRAFÍA DERECHA */}
        <div className="flex flex-col gap-6">

          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-[#8ed0db]/30 bg-[#1e4d5c] shadow-2xl">

            <Image
              src="/images/maquina-bontex.png"
              alt="Máquina industrial de bondeado textil de Bontex"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />

            {/* OSCURECIMIENTO SUAVE */}
            <div className="absolute inset-0 bg-[#071b24]/40" />

            {/* TEXTO SOBRE LA FOTOGRAFÍA */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071b24]/85 to-transparent p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8ed0db]">
                BONTEX BONDEADOS
              </p>

              <p className="mt-3 font-serif text-2xl leading-tight text-white md:text-3xl">
                Tecnología y experiencia al servicio de tus telas.
              </p>
            </div>
          </div>

          {/* BOTÓN DE COTIZACIÓN */}
          <a
            href={enlaceWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#8ed0db] px-7 py-4 text-base font-bold text-[#102b36] transition hover:bg-white"
          >
            <MessageCircle size={22} />
            Cotizá tu servicio ya
            <ArrowRight size={19} />
          </a>

        </div>
      </section>

      {/* ESPESORES DE ESPUMA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">

        <h2 className="mb-8 font-serif text-3xl text-white md:text-4xl">
          Trabajamos con distintos espesores de espuma
        </h2>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
          {espesores.map((espesor) => (
            <div
              key={espesor.medida}
              className="flex aspect-square flex-col items-center justify-center rounded-xl border border-[#8ed0db]/35 bg-[#1e4d5c]/70 p-3 text-center shadow-lg transition hover:border-[#8ed0db] hover:bg-[#286879]"
            >
              <span className="font-serif text-3xl font-semibold text-white md:text-4xl">
                {espesor.medida}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* OPCIONES DE RESPALDO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">

        <div className="border-t border-white/20 pt-14">

          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Con o sin respaldo
          </h2>

          <p className="mt-4 max-w-xl text-white/70">
            Adaptamos la terminación según las
            necesidades de cada tela.
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:gap-5">

            {/* CON RESPALDO */}
            <div className="flex min-h-32 flex-col items-center justify-center rounded-xl border border-[#8ed0db]/35 bg-white/10 p-5 text-center">
              <Layers className="mb-3 text-[#8ed0db]" size={28} />

              <h3 className="text-base font-semibold sm:text-xl">
                Con respaldo
              </h3>
            </div>

            {/* SIN RESPALDO */}
            <div className="flex min-h-32 flex-col items-center justify-center rounded-xl border border-[#8ed0db]/35 bg-white/10 p-5 text-center">
              <Layers className="mb-3 text-[#8ed0db]" size={28} />

              <h3 className="text-base font-semibold sm:text-xl">
                Sin respaldo
              </h3>
            </div>

          </div>

          {/* NO TEJIDO */}
          <div className="mt-7 max-w-2xl rounded-xl border border-[#8ed0db]/25 bg-[#1e4d5c]/70 px-6 py-7">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8ed0db]">
              MATERIAL DE RESPALDO
            </p>

            <h3 className="mt-3 font-serif text-3xl text-white">
              No tejido
            </h3>

            <p className="mt-3 text-sm text-white/70">
              Opción de respaldo para diferentes aplicaciones textiles.
            </p>
          </div>

        </div>
      </section>

      {/* COTIZACIÓN POR WHATSAPP */}
      <section className="border-t border-white/15 bg-[#0b2430]/50 px-5 py-16 md:px-8">

        <div className="mx-auto max-w-7xl">

          <h2 className="font-serif text-3xl text-white md:text-4xl">
            ¿Querés bondear tus telas?
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-white/70">
            Contanos qué telas tenés, qué espesor necesitás
            y qué tipo de terminación buscás.
            Te ayudamos a evaluar tu proyecto.
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

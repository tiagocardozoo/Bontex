
import {
  ArrowRight,
  MessageCircle,
  Layers,
} from 'lucide-react'

// ESPESORES DISPONIBLES
// Las fotografías se cargarán en public/images/espesores/
const espesores = [
  { medida: '2 mm', imagen: '/images/espesores/2mm.jpg' },
  { medida: '2.5 mm', imagen: '/images/espesores/2-5mm.jpg' },
  { medida: '3 mm', imagen: '/images/espesores/3mm.jpg' },
  { medida: '4 mm', imagen: '/images/espesores/4mm.jpg' },
  { medida: '5 mm', imagen: '/images/espesores/5mm.jpg' },
  { medida: '10 mm', imagen: '/images/espesores/10mm.jpg' },
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
    <main className="min-h-screen bg-gradient-to-b from-[#102b36] via-[#173e4b] to-[#0b2430] text-white">

      {/* PRIMERA SECCIÓN: VIDEO DE FONDO SOLO AQUÍ */}
      <section className="relative isolate overflow-hidden bg-[#102b36]">

        {/* VIDEO */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/videos/bondeado.MP4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* CAPA AZUL OSCURA SOBRE EL VIDEO */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[#102b36]/75"
        />

        {/* CONTENIDO DEL PRIMER BLOQUE */}
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-20 md:px-8 md:pb-28 md:pt-28 lg:grid-cols-2 lg:items-center lg:gap-20">

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

          {/* BOTÓN DERECHO */}
          <div className="flex items-center justify-center lg:justify-end">
            <a
              href={enlaceWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-[#8ed0db] px-7 py-5 text-lg font-bold text-[#102b36] shadow-2xl transition hover:bg-white"
            >
              <MessageCircle size={23} />
              Cotizá tu servicio ya
              <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </section>

      {/* DESDE ACÁ VUELVE EL FONDO AZUL NORMAL */}

      {/* ESPESORES DE ESPUMA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8">

        <h2 className="mb-8 font-serif text-3xl text-white md:text-4xl">
          Trabajamos con distintos espesores de espuma
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {espesores.map((espesor) => (
            <div
              key={espesor.medida}
              className="overflow-hidden rounded-2xl border border-[#8ed0db]/35 bg-[#1e4d5c]/70 shadow-lg transition hover:border-[#8ed0db]"
            >

              {/* FOTOGRAFÍA DEL ESPESOR */}
              <div className="relative aspect-square overflow-hidden bg-[#d5e0df]">

                <img
                  src={espesor.imagen}
                  alt={`Espuma de ${espesor.medida} de espesor`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={undefined}
                />

                <div className="pointer-events-none absolute inset-0 bg-[#102b36]/10" />

              </div>

              {/* MEDIDA DEBAJO DE LA FOTOGRAFÍA */}
              <div className="flex min-h-20 items-center justify-center px-3 py-4 text-center">

                <span className="font-sans text-xl font-semibold tracking-normal text-white md:text-2xl">
                  {espesor.medida}
                </span>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* TERMINACIONES DISPONIBLES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">

        {/* SIN LÍNEA SEPARADORA */}
        <div className="pt-8">

          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Terminaciones disponibles
          </h2>

          <p className="mt-4 max-w-xl text-white/70">
            Adaptamos la terminación según las
            necesidades de cada tela.
          </p>

          {/* TRES OPCIONES */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5">

            {/* CON RESPALDO */}
            <div className="flex min-h-40 flex-col items-center justify-center rounded-xl border border-[#8ed0db]/35 bg-white/10 p-5 text-center">

              <Layers
                className="mb-3 text-[#8ed0db]"
                size={28}
              />

              <h3 className="text-base font-semibold sm:text-xl">
                Con respaldo
              </h3>

              <p className="mt-2 text-sm text-white/65">
                (No tejido)
              </p>

            </div>

            {/* SIN RESPALDO */}
            <div className="flex min-h-40 flex-col items-center justify-center rounded-xl border border-[#8ed0db]/35 bg-white/10 p-5 text-center">

              <Layers
                className="mb-3 text-[#8ed0db]"
                size={28}
              />

              <h3 className="text-base font-semibold sm:text-xl">
                Sin respaldo
              </h3>

            </div>

            {/* TELA CON TELA */}
            <div className="flex min-h-40 flex-col items-center justify-center rounded-xl border border-[#8ed0db]/35 bg-white/10 p-5 text-center">

              <Layers
                className="mb-3 text-[#8ed0db]"
                size={28}
              />

              <h3 className="text-base font-semibold sm:text-xl">
                Tela con tela pegado
              </h3>

            </div>

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

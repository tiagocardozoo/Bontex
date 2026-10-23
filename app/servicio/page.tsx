import {
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

const enlaceWhatsapp = `https://wa.me/${WHATSAPP}?text=${mensaje}`

export default function ServicioBondeadoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#102b36] via-[#173e4b] to-[#0b2430] text-white">
      {/* PRIMERA SECCIÓN: VIDEO DE FONDO SOLAMENTE ACÁ */}
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
            <source src="/videos/bondeado.MP4" type="video/mp4" />
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

          {/* BOTONES DERECHA */}
          <div className="flex flex-col items-center justify-center gap-4 lg:items-end">
            <a
              href={enlaceWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-[#8ed0db] px-7 py-6 text-lg font-bold text-[#102b36] shadow-2xl transition hover:bg-white"
            >
              <MessageCircle size={24} />
              Cotizá tu servicio ya
              <ArrowRight size={20} />
            </a>

            <a
              href="#que-es-bondeado"
              className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl border border-[#8ed0db]/50 bg-white/10 px-7 py-5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              ¿Qué es el bondeado?
            </a>
          </div>
        </div>
      </section>

      {/* QUÉ ES EL BONDEADO */}
      <section
        id="que-es-bondeado"
        className="mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* TEXTO */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
              VALOR AGREGADO
            </p>

            <h2 className="mt-5 font-serif text-3xl text-white md:text-5xl">
              ¿Qué es el bondeado?
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/75 md:text-lg">
              <p>
                El bondeado es un proceso en el que se unen materiales textiles
                para darles mayor cuerpo, estructura y mejor terminación.
              </p>

              <p>
                En la práctica, esto permite que el producto final tenga más
                presencia, más firmeza y una apariencia mucho más prolija.
              </p>

              <p>
                Además, suma un valor agregado clave: ayuda a darle más forma y
                resistencia a tus productos finales, mejorando su comportamiento
                en el uso diario y su calidad percibida.
              </p>

              <p>
                Por eso el bondeado es ideal para aplicaciones como cotillón,
                marroquinería, bolsos, artículos técnicos y muchos otros
                desarrollos textiles.
              </p>
            </div>
          </div>

          {/* COMPARATIVA VISUAL */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* CON BONDEADO */}
            <div className="overflow-hidden rounded-2xl border border-[#8ed0db]/25 bg-white/10 shadow-xl">
              <div className="flex h-64 items-center justify-center bg-[#183d49] p-6">
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute bottom-8 h-3 w-28 rounded-full bg-black/25 blur-md" />

                  <div
                    className="relative"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '54px solid transparent',
                      borderRight: '54px solid transparent',
                      borderBottom: '130px solid #f472b6',
                      filter: 'drop-shadow(0 14px 20px rgba(0,0,0,0.20))',
                    }}
                  />

                  <div className="absolute top-[44px] h-5 w-5 rounded-full bg-white" />

                  <div className="absolute bottom-[34px] left-1/2 h-[3px] w-[108px] -translate-x-1/2 rounded-full bg-white/70" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white">
                  Con tela bondeada
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  El gorro mantiene su forma, se ve más firme y transmite mayor
                  calidad visual en el producto terminado.
                </p>
              </div>
            </div>

            {/* SIN BONDEADO */}
            <div className="overflow-hidden rounded-2xl border border-[#8ed0db]/25 bg-white/10 shadow-xl">
              <div className="flex h-64 items-center justify-center bg-[#183d49] p-6">
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute bottom-8 h-3 w-28 rounded-full bg-black/25 blur-md" />

                  <div
                    className="relative rotate-[68deg] scale-y-75"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '54px solid transparent',
                      borderRight: '54px solid transparent',
                      borderBottom: '130px solid #fca5a5',
                      filter: 'drop-shadow(0 14px 20px rgba(0,0,0,0.20))',
                    }}
                  />

                  <div className="absolute bottom-[94px] right-[30%] h-4 w-4 rounded-full bg-white" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white">
                  Sin tela bondeada
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  El producto pierde estructura, se deforma con más facilidad y
                  no logra la misma presencia final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESPESORES DE ESPUMA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-4 md:px-8">
        <h2 className="mb-8 font-serif text-3xl text-white md:text-4xl">
          Trabajamos con distintos espesores de espuma
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {espesores.map((espesor) => (
            <div
              key={espesor.medida}
              className="overflow-hidden rounded-xl border border-[#8ed0db]/35 bg-[#1e4d5c]/70 shadow-lg transition hover:border-[#8ed0db] hover:bg-[#286879]"
            >
              <div className="flex h-40 items-center justify-center bg-[#214c59]">
                <div className="h-20 w-20 rounded-2xl border border-white/30 bg-white/10" />
              </div>

              <div className="border-t border-white/10 px-4 py-4 text-center">
                <span className="text-xl font-semibold tracking-wide text-white">
                  {espesor.medida}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPCIONES DE RESPALDO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <h2 className="font-serif text-3xl text-white md:text-4xl">
          Terminaciones disponibles
        </h2>

        <p className="mt-4 max-w-xl text-white/70">
          Adaptamos la terminación según la necesidad de cada proyecto.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {/* CON RESPALDO */}
          <div className="overflow-hidden rounded-xl border border-[#8ed0db]/30 bg-white/10">
            <div className="flex h-44 items-center justify-center bg-[#214c59]">
              <div className="h-24 w-24 rounded-2xl border border-white/30 bg-white/10" />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">
                Con respaldo
              </h3>
              <p className="mt-1 text-sm text-white/65">
                (no tejido)
              </p>
            </div>
          </div>

          {/* SIN RESPALDO */}
          <div className="overflow-hidden rounded-xl border border-[#8ed0db]/30 bg-white/10">
            <div className="flex h-44 items-center justify-center bg-[#214c59]">
              <div className="h-24 w-24 rounded-2xl border border-white/30 bg-white/10" />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">
                Sin respaldo
              </h3>
            </div>
          </div>

          {/* TELA CON TELA */}
          <div className="overflow-hidden rounded-xl border border-[#8ed0db]/30 bg-white/10">
            <div className="flex h-44 items-center justify-center bg-[#214c59]">
              <div className="h-24 w-24 rounded-2xl border border-white/30 bg-white/10" />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">
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
            Contanos qué telas tenés, qué espesor necesitás y qué tipo de
            terminación buscás. Te ayudamos a evaluar tu proyecto.
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

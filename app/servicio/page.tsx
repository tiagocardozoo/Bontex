
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  Layers,
} from 'lucide-react'

const espesores = [
  {
    medida: '3 mm',
    descripcion: 'Una opción de menor espesor para diferentes aplicaciones textiles.',
    imagen: '/images/telas-bondeadas.jpeg',
  },
  {
    medida: '4 mm',
    descripcion: 'Una alternativa intermedia para sumar cuerpo y estructura.',
    imagen: '/images/telas-bondeadas.jpeg',
  },
  {
    medida: '5 mm',
    descripcion: 'Mayor espesor para proyectos que requieren más volumen.',
    imagen: '/images/telas-bondeadas.jpeg',
  },
]

const whatsapp = '5491132043169'

const mensaje = encodeURIComponent(
  '¡Hola! Vine desde la página de Bontex y quisiera cotizar el servicio de bondeado. ¿Podemos conversar sobre las telas, los espesores y las opciones de respaldo? ¡Gracias!'
)

const enlaceWhatsapp = `https://wa.me/${whatsapp}?text=${mensaje}`

export default function ServicioBondeadoPage() {
  return (
    <main className="min-h-screen bg-[#f3f5f5]">

      {/* ENCABEZADO */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 md:px-8">
          <Link
            href="/"
            className="text-xl font-extrabold text-[#1e4d5c] md:text-2xl"
          >
            Bontex{' '}
            <span className="font-light text-[#78909c]">
              Bondeados
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-[#1e4d5c]"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* PORTADA DEL SERVICIO */}
      <section className="relative isolate overflow-hidden bg-[#102b36] text-white">
        <Image
          src="/images/maquina-bontex.png"
          alt="Máquina industrial de bondeado textil de Bontex"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081e28]/95 via-[#102b36]/85 to-[#102b36]/55" />

        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
            SERVICIO DE BONDEADO TEXTIL
          </p>

          <h1 className="max-w-4xl font-serif text-4xl font-medium leading-tight md:text-6xl lg:text-7xl">
            Vos traés tus telas.
            <br />
            <span className="text-[#9dd6dd]">
              Nosotros las bondeamos
            </span>
            <br />
            y les damos forma.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Transformamos tus materiales textiles mediante
            nuestro servicio de bondeado, adaptándonos a
            las necesidades de cada proyecto.
          </p>

          <a
            href={enlaceWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#8ed0db] px-7 py-4 font-semibold text-[#102b36] transition hover:bg-white"
          >
            Consultar por el servicio
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* ESPESORES */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#39798a]">
            SOLUCIONES A MEDIDA
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#102b36] md:text-5xl">
            Trabajamos con distintos
            <br />
            espesores de espuma
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-600">
            Diferentes alternativas para darle a cada tela
            el cuerpo y la terminación que necesita.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {espesores.map((espesor) => (
            <article
              key={espesor.medida}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden bg-slate-200 md:h-64">
                <Image
                  src={espesor.imagen}
                  alt={`Imagen ilustrativa de bondeado de ${espesor.medida}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102b36]/60 to-transparent" />

                <span className="absolute bottom-5 left-6 font-serif text-5xl text-white">
                  {espesor.medida}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-slate-600">
                  {espesor.descripcion}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-[#1e4d5c]">
                  <Check size={18} />
                  Servicio personalizado
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESPALDO */}
      <section className="bg-[#102b36] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8ed0db]">
              OPCIONES DE TERMINACIÓN
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Con o sin respaldo
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Adaptamos el proceso de bondeado según
              el uso y las características de tus telas.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            {/* CON RESPALDO */}
            <div className="rounded-2xl border border-[#7cc3cc]/30 bg-white/10 p-8 md:p-10">
              <div className="mb-7 flex size-14 items-center justify-center rounded-xl bg-white/10">
                <Layers size={29} className="text-[#8ed0db]" />
              </div>

              <h3 className="font-serif text-3xl">
                Con respaldo
              </h3>

              <p className="mt-4 text-xl font-semibold text-[#8ed0db]">
                No tejido
              </p>

              <p className="mt-4 max-w-md leading-relaxed text-white/75">
                Opción de bondeado con respaldo de
                material no tejido, según los requerimientos
                del producto final.
              </p>
            </div>

            {/* SIN RESPALDO */}
            <div className="rounded-2xl border border-[#7cc3cc]/30 bg-white/10 p-8 md:p-10">
              <div className="mb-7 flex size-14 items-center justify-center rounded-xl bg-white/10">
                <Layers size={29} className="text-[#8ed0db]" />
              </div>

              <h3 className="font-serif text-3xl">
                Sin respaldo
              </h3>

              <p className="mt-4 text-xl font-semibold text-[#8ed0db]">
                Bondeado directo
              </p>

              <p className="mt-4 max-w-md leading-relaxed text-white/75">
                Una alternativa para proyectos que
                requieren el bondeado sin incorporar
                una capa adicional de respaldo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section className="px-5 py-20 text-center md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#39798a]">
            TRABAJEMOS JUNTOS
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#102b36] md:text-5xl">
            ¿Querés bondear tus telas?
          </h2>

          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-slate-600">
            Contanos qué material tenés, qué espesor
            buscás y qué tipo de terminación necesitás.
            Te ayudamos a evaluar tu proyecto.
          </p>

          <a
            href={enlaceWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#1e4d5c] px-8 py-4 font-bold text-white transition hover:bg-[#286b7d]"
          >
            <MessageCircle size={23} />
            Cotizar servicio por WhatsApp
          </a>

          <p className="mt-4 text-xs text-slate-500">
            Atención personalizada para cada proyecto.
          </p>
        </div>
      </section>
    </main>
  )
}


import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP = '5491173438981'

export default function NosotrosPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#102b36] text-white">

      {/* FONDO AZUL PETRÓLEO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#102b36] via-[#173e4b] to-[#0b2430]"
      />

      {/* NUESTRA HISTORIA */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-6 pt-16 md:px-8 md:pb-8 md:pt-24 lg:grid-cols-2 lg:gap-16">

        {/* TEXTO IZQUIERDO */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
            NUESTRA HISTORIA
          </p>

          <h1 className="mt-6 font-serif text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
            Más de 25 años
            <span className="text-[#8ed0db]">
              {' '}transformando telas.
            </span>
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/75 md:text-lg">

            <p>
              En Bontex Bondeados llevamos más de 25 años
              acompañando a la industria textil argentina.
              Desde el año 2000 trabajamos para aportar
              calidad, experiencia y valor agregado a
              cada tela que pasa por nuestras manos.
            </p>

            <p>
              Nuestra historia comienza con Gastón,
              quien adquirió experiencia trabajando
              previamente en otra fábrica dedicada
              al bondeado textil.
              Con ese conocimiento y el deseo de
              desarrollar su propio proyecto,
              decidió dar origen a Bontex Bondeados.
            </p>

            <p>
              Lo que comenzó como un emprendimiento
              hoy forma parte del proceso productivo
              de más de 50 empresas, además de
              acompañar a numerosos particulares
              que eligen nuestras telas para
              sus propios emprendimientos.
            </p>

            <p>
              Seguimos trabajando con el mismo compromiso
              de nuestros comienzos: ofrecer soluciones
              textiles confiables y una atención cercana
              a cada cliente.
            </p>

          </div>
        </div>

        {/* FOTOGRAFÍA DERECHA */}
        <div className="relative">

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#8ed0db]/30 bg-[#1e4d5c] shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">

            <Image
              src="/images/maquina-bontex.png"
              alt="Maquinaria industrial de Bontex Bondeados"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071b24]/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8ed0db]">
                BONTEX BONDEADOS
              </p>

              <p className="mt-2 font-serif text-2xl text-white">
                Experiencia que se transforma en calidad.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* EMPRESAS QUE TRABAJAN CON NOSOTROS */}
      <section className="px-5 pb-12 pt-0 md:px-8 md:pb-16 md:pt-0">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-10 text-center font-serif text-3xl text-white md:text-4xl">
            Algunas empresas que trabajan con nosotros
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {/* EMPRESA 1: LAMIC */}
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-[#8ed0db]/25 bg-white p-5 shadow-lg">

              <div className="relative h-full w-full">
                <Image
                  src="/images/Lamic.png"
                  alt="Logo de LAMIC"
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                  className="object-contain"
                />
              </div>

            </div>

            {/* ESPACIOS PARA FUTURAS EMPRESAS */}
            {[2, 3, 4, 5].map((numero) => (
              <div
                key={numero}
                className="flex aspect-[4/3] items-center justify-center rounded-xl border border-[#8ed0db]/25 bg-white/10 p-5"
              >
                <span className="text-center text-xs text-white/40">
                  Logo empresa {numero}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* NUESTRA TRAYECTORIA */}
      <section className="border-y border-white/15 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-center md:grid-cols-3 md:px-8 md:py-16">

          <div>
            <p className="font-serif text-5xl text-[#8ed0db] md:text-6xl">
              2000
            </p>
            <p className="mt-3 text-sm text-white/75">
              Año en que nació Bontex Bondeados
            </p>
          </div>

          <div>
            <p className="font-serif text-5xl text-[#8ed0db] md:text-6xl">
              +25
            </p>
            <p className="mt-3 text-sm text-white/75">
              Años de trayectoria
            </p>
          </div>

          <div>
            <p className="font-serif text-5xl text-[#8ed0db] md:text-6xl">
              +50
            </p>
            <p className="mt-3 text-sm text-white/75">
              Empresas que confían en nosotros
            </p>
          </div>

        </div>
      </section>

      {/* CIERRE */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">

          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Cada tela, un proyecto.
            <br />
            Cada cliente, una relación de confianza.
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            Trabajamos junto a empresas, fabricantes
            y emprendedores, acompañándolos con
            nuestros productos y servicios de bondeado.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/servicio"
              className="inline-flex items-center gap-2 rounded-lg bg-[#8ed0db] px-6 py-4 font-semibold text-[#102b36] transition hover:bg-white"
            >
              Conocé nuestro servicio
              <ArrowRight size={19} />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                '¡Hola! Vine desde la página de Bontex y quisiera hacer una consulta.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#8ed0db]/50 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={20} />
              Contactanos
            </a>

          </div>
        </div>
      </section>

    </main>
  )
}

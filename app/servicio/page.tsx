
'use client'

import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react'

// ESPESORES DE ESPUMA
const espesores = [
  { medida: '2 mm', imagen: '/images/espesores/2mm.jpg' },
  { medida: '2.5 mm', imagen: '/images/espesores/2-5mm.jpg' },
  { medida: '3 mm', imagen: '/images/espesores/3mm.jpg' },
  { medida: '4 mm', imagen: '/images/espesores/4mm.jpg' },
  { medida: '5 mm', imagen: '/images/espesores/5mm.jpg' },
  { medida: '10 mm', imagen: '/images/espesores/10mm.jpg' },
]

// TERMINACIONES
const terminaciones = [
  {
    nombre: 'Con respaldo (no tejido)',
    imagen: '/images/terminaciones/con-respaldo.jpg',
  },
  {
    nombre: 'Sin respaldo',
    imagen: '/images/terminaciones/sin-respaldo.jpg',
  },
  {
    nombre: 'Tela con tela pegado',
    imagen: '/images/terminaciones/tela-con-tela.jpg',
  },
]

// EJEMPLOS COMPARATIVOS
const ejemplos = [
  {
    nombre: 'Gorro de cotillón',
    descripcion:
      'El bondeado aporta cuerpo y ayuda a que el gorro mantenga su forma.',
    sin:
      'Sin estructura adicional, una tela flexible puede doblarse o perder la forma.',
    con:
      'Con bondeado, el material gana firmeza y permite lograr una terminación más estructurada.',
    imagenSin: '/images/comparaciones/gorro-sin.jpg',
    imagenCon: '/images/comparaciones/gorro-con.jpg',
    simbolo: '🎉',
  },
  {
    nombre: 'Neceser',
    descripcion:
      'Una buena estructura ayuda a mejorar la presentación del producto terminado.',
    sin:
      'Una tela muy flexible puede hacer que el neceser pierda volumen y estabilidad.',
    con:
      'El bondeado aporta cuerpo, ayudando a conservar la forma y mejorar la terminación.',
    imagenSin: '/images/comparaciones/neceser-sin.jpg',
    imagenCon: '/images/comparaciones/neceser-con.jpg',
    simbolo: '👜',
  },
  {
    nombre: 'Zapatilla',
    descripcion:
      'El bondeado permite trabajar determinadas piezas textiles con mayor estructura.',
    sin:
      'Un material sin refuerzo puede resultar demasiado flexible para algunas partes del calzado.',
    con:
      'El bondeado puede aportar soporte y estabilidad a componentes textiles de la zapatilla.',
    imagenSin: '/images/comparaciones/zapatilla-sin.jpg',
    imagenCon: '/images/comparaciones/zapatilla-con.jpg',
    simbolo: '👟',
  },
]

const WHATSAPP = '5491132043169'

const mensaje = encodeURIComponent(
  '¡Hola! Vine desde la página de Bontex y quisiera cotizar el servicio de bondeado. Quiero consultar por los espesores de espuma y las opciones de respaldo. ¡Gracias!'
)

const enlaceWhatsapp =
  `https://wa.me/${WHATSAPP}?text=${mensaje}`

// FOTOGRAFÍA CON ESPACIO PROVISORIO SI NO ESTÁ CARGADA
function Foto({
  src,
  alt,
  simbolo,
}: {
  src: string
  alt: string
  simbolo?: string
}) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [src])

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#254d58]">
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#315b68] to-[#173b48] p-5 text-center">
          <span className="text-5xl" aria-hidden="true">
            {simbolo || '▤'}
          </span>
          <span className="text-xs text-white/60">
            Fotografía pendiente
          </span>
        </div>
      )}
    </div>
  )
}

export default function ServicioBondeadoPage() {
  const [ejemploActual, setEjemploActual] = useState(0)
  const [pausado, setPausado] = useState(false)

  // CAMBIO AUTOMÁTICO CADA 3 SEGUNDOS
  useEffect(() => {
    if (pausado) return

    const intervalo = window.setInterval(() => {
      setEjemploActual((actual) =>
        (actual + 1) % ejemplos.length
      )
    }, 3000)

    return () => window.clearInterval(intervalo)
  }, [pausado])

  function cambiarEjemplo(direccion: number) {
    setEjemploActual((actual) =>
      (actual + direccion + ejemplos.length) % ejemplos.length
    )
  }

  const ejemplo = ejemplos[ejemploActual]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#102b36] via-[#173e4b] to-[#0b2430] text-white">

      {/* PRIMERA SECCIÓN: VIDEO */}
      <section className="relative isolate overflow-hidden bg-[#102b36]">

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

        {/* OSCURECIMIENTO AZUL */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[#102b36]/75"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-20 md:px-8 md:pb-28 md:pt-28 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* IZQUIERDA */}
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
              <ArrowRight size={18} />
            </a>

          </div>
        </div>
      </section>

      {/* ESPESORES DE ESPUMA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8">

        <h2 className="mb-8 font-serif text-3xl text-white md:text-4xl">
          Trabajamos con distintos espesores de espuma
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {espesores.map((espesor) => (
            <div
              key={espesor.medida}
              className="overflow-hidden rounded-2xl border border-[#8ed0db]/35 bg-[#1e4d5c]/70 shadow-lg"
            >
              <div className="aspect-square">
                <Foto
                  src={espesor.imagen}
                  alt={`Espuma de ${espesor.medida}`}
                />
              </div>

              <div className="flex min-h-20 items-center justify-center px-3 py-4 text-center">
                <span className="font-sans text-xl font-semibold text-white md:text-2xl">
                  {espesor.medida}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TERMINACIONES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">

        <div className="pt-8">
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Terminaciones disponibles
          </h2>

          <p className="mt-4 max-w-xl text-white/70">
            Adaptamos la terminación según las necesidades de cada tela.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {terminaciones.map((terminacion) => (
              <div
                key={terminacion.nombre}
                className="overflow-hidden rounded-2xl border border-[#8ed0db]/35 bg-[#1e4d5c]/70 shadow-lg"
              >
                <div className="aspect-[4/3]">
                  <Foto
                    src={terminacion.imagen}
                    alt={terminacion.nombre}
                  />
                </div>

                <div className="flex min-h-20 items-center justify-center px-4 py-5 text-center">
                  <h3 className="font-sans text-lg font-semibold text-white md:text-xl">
                    {terminacion.nombre}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ ES EL BONDEADO - AL FINAL DEL CONTENIDO */}
      <section
        id="que-es-bondeado"
        className="scroll-mt-24 px-5 pb-24 pt-12 md:px-8 md:pt-16"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
            EL VALOR AGREGADO DE NUESTRAS TELAS
          </p>

          <h2 className="mt-5 font-serif text-4xl text-white md:text-5xl">
            ¿Qué es el bondeado?
          </h2>

          <div className="mt-7 max-w-4xl space-y-5 text-base leading-relaxed text-white/75 md:text-lg">
            <p>
              El bondeado es un proceso mediante el cual unimos
              materiales textiles para aportarles mayor cuerpo,
              estructura y una mejor terminación.
            </p>

            <p>
              ¿Qué significa esto para tu producto? Que una tela
              puede transformarse en un material con más firmeza
              y estabilidad, ayudándote a conseguir mejores
              resultados en cada diseño.
            </p>

            <p>
              En Bontex trabajamos para darle más forma y
              resistencia a tus productos finales, aumentando
              su valor agregado y mejorando su presentación.
              Porque muchas veces la diferencia está en aquello
              que no se ve, pero se nota en el resultado.
            </p>
          </div>

          {/* EJEMPLOS */}
          <div className="mt-14">

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
                APLICACIONES REALES
              </p>

              <h3 className="mt-3 font-serif text-3xl text-white md:text-4xl">
                Ejemplos
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                Mirá cómo el bondeado puede cambiar la
                estructura y presentación de distintos productos.
              </p>
            </div>

            {/* CUADRO FIJO DE COMPARACIONES */}
            <div
              onMouseEnter={() => setPausado(true)}
              onMouseLeave={() => setPausado(false)}
              onFocusCapture={() => setPausado(true)}
              onBlurCapture={(e) => {
                if (
                  !e.currentTarget.contains(
                    e.relatedTarget as Node | null
                  )
                ) {
                  setPausado(false)
                }
              }}
              className="overflow-hidden rounded-3xl border border-[#8ed0db]/30 bg-[#153844] shadow-2xl"
            >

              {/* ENCABEZADO DEL EJEMPLO */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-5 md:px-8">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8ed0db]">
                    EJEMPLO {ejemploActual + 1} DE {ejemplos.length}
                  </p>

                  <h4 className="mt-2 font-serif text-2xl text-white md:text-3xl">
                    {ejemplo.nombre}
                  </h4>
                </div>

                {/* FLECHAS MANUALES */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => cambiarEjemplo(-1)}
                    aria-label="Ejemplo anterior"
                    className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <ChevronLeft size={23} />
                  </button>

                  <button
                    type="button"
                    onClick={() => cambiarEjemplo(1)}
                    aria-label="Siguiente ejemplo"
                    className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <ChevronRight size={23} />
                  </button>
                </div>
              </div>

              {/* DOS IMÁGENES DEL MISMO EJEMPLO */}
              <div className="grid gap-0 md:grid-cols-2">

                {/* SIN BONDEADO */}
                <div className="border-b border-white/10 md:border-b-0 md:border-r">
                  <div className="relative aspect-[4/3]">
                    <Foto
                      src={ejemplo.imagenSin}
                      alt={`${ejemplo.nombre} sin bondeado`}
                      simbolo={ejemplo.simbolo}
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[#102b36]/90 px-4 py-2 text-sm font-semibold text-white">
                      Sin bondeado
                    </span>
                  </div>

                  <div className="min-h-28 p-5 md:p-6">
                    <p className="text-sm leading-relaxed text-white/75 md:text-base">
                      {ejemplo.sin}
                    </p>
                  </div>
                </div>

                {/* CON BONDEADO */}
                <div>
                  <div className="relative aspect-[4/3]">
                    <Foto
                      src={ejemplo.imagenCon}
                      alt={`${ejemplo.nombre} con bondeado`}
                      simbolo={ejemplo.simbolo}
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[#8ed0db] px-4 py-2 text-sm font-bold text-[#102b36]">
                      Con bondeado
                    </span>
                  </div>

                  <div className="min-h-28 p-5 md:p-6">
                    <p className="text-sm leading-relaxed text-white/75 md:text-base">
                      {ejemplo.con}
                    </p>
                  </div>
                </div>

              </div>

              {/* PARTE INFERIOR DEL CUADRO */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#0e2b36]/70 px-5 py-5 md:px-8">

                <p className="max-w-2xl text-sm text-white/75">
                  {ejemplo.descripcion}
                </p>

                <div
                  className="flex items-center gap-2"
                  aria-label="Indicador de ejemplo"
                >
                  {ejemplos.map((item, indice) => (
                    <button
                      key={item.nombre}
                      type="button"
                      onClick={() => setEjemploActual(indice)}
                      aria-label={`Mostrar ejemplo ${indice + 1}`}
                      className={
                        indice === ejemploActual
                          ? 'h-2.5 w-7 rounded-full bg-[#8ed0db]'
                          : 'size-2.5 rounded-full bg-white/30 transition hover:bg-white/60'
                      }
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COTIZACIÓN FINAL */}
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

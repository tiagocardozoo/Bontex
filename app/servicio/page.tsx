
'use client'

import { useEffect, useState } from 'react'
import {
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

// TERMINACIONES DISPONIBLES
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

// COMPARACIONES
const ejemplos = [
  {
    nombre: 'Gorro de cotillón',
    sin: 'Sin bondeado, una tela flexible puede perder su forma.',
    con: 'Con bondeado, gana cuerpo y mantiene mejor su estructura.',
    imagenSin: '/images/comparaciones/gorro-sin.jpg',
    imagenCon: '/images/comparaciones/gorro-con.jpg',
  },
  {
    nombre: 'Neceser',
    sin: 'Sin estructura adicional, puede perder volumen y firmeza.',
    con: 'Con bondeado, conserva mejor su forma y presentación.',
    imagenSin: '/images/comparaciones/neceser-sin.jpg',
    imagenCon: '/images/comparaciones/neceser-con.jpg',
  },
  {
    nombre: 'Zapatilla',
    sin: 'Algunas piezas textiles pueden resultar demasiado flexibles.',
    con: 'El bondeado puede aportar soporte y estabilidad.',
    imagenSin: '/images/comparaciones/zapatilla-sin.jpg',
    imagenCon: '/images/comparaciones/zapatilla-con.jpg',
  },
]

const WHATSAPP = '5491132043169'

const mensaje = encodeURIComponent(
  '¡Hola! Vine desde la página de Bontex y quisiera cotizar el servicio de bondeado. Quiero consultar por los espesores de espuma y las opciones de respaldo. ¡Gracias!'
)

const enlaceWhatsapp = `https://wa.me/${WHATSAPP}?text=${mensaje}`

// IMAGEN CON FONDO PROVISORIO SI FALTA EL ARCHIVO
function Foto({
  src,
  alt,
}: {
  src: string
  alt: string
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
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#315b68] to-[#173b48] p-3 text-center">
          <span className="text-xs text-white/50">
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

  // CAMBIO AUTOMÁTICO CADA TRES SEGUNDOS
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
              <ArrowRight size={18} />
            </a>

          </div>
        </div>
      </section>

      {/* ESPESORES - TAMAÑO COMPACTO */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8">

        <h2 className="mb-8 font-serif text-3xl text-white md:text-4xl">
          Trabajamos con distintos espesores de espuma
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {espesores.map((espesor) => (
            <div
              key={espesor.medida}
              className="min-w-0 overflow-hidden rounded-xl border border-[#8ed0db]/35 bg-[#1e4d5c]/70 shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Foto
                  src={espesor.imagen}
                  alt={`Espuma de ${espesor.medida}`}
                />
              </div>

              <div className="flex h-14 items-center justify-center px-2 text-center">
                <span className="font-sans text-lg font-semibold text-white">
                  {espesor.medida}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TERMINACIONES - TAMAÑO COMPACTO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">

        <h2 className="font-serif text-3xl text-white md:text-4xl">
          Terminaciones disponibles
        </h2>

        <p className="mt-4 max-w-xl text-white/70">
          Adaptamos la terminación según las necesidades de cada tela.
        </p>

        <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">

          {terminaciones.map((terminacion) => (
            <div
              key={terminacion.nombre}
              className="min-w-0 overflow-hidden rounded-xl border border-[#8ed0db]/35 bg-[#1e4d5c]/70 shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Foto
                  src={terminacion.imagen}
                  alt={terminacion.nombre}
                />
              </div>

              <div className="flex h-16 items-center justify-center px-3 text-center">
                <h3 className="font-sans text-sm font-semibold text-white sm:text-base">
                  {terminacion.nombre}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* QUÉ ES EL BONDEADO */}
      <section
        id="que-es-bondeado"
        className="scroll-mt-24 px-5 pb-24 pt-12 md:px-8 md:pt-16"
      >
        <div className="mx-auto max-w-7xl">

          {/* DOS COLUMNAS ALINEADAS DESDE ARRIBA */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">

            {/* COLUMNA IZQUIERDA */}
            <div>

              <h2 className="font-serif text-4xl text-white md:text-5xl">
                ¿Qué es el bondeado?
              </h2>

              <div className="mt-8 space-y-6 text-base leading-relaxed text-white/75 md:text-lg">

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
                </p>

                <p className="font-medium text-white">
                  Porque muchas veces la diferencia está en aquello
                  que no se ve, pero se nota en el resultado.
                </p>

              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="min-w-0">

              <h3 className="mb-4 font-serif text-xl text-white md:text-2xl">
                Algunos ejemplos:
              </h3>

              {/* CUADRO COMPARATIVO MÁS ARRIBA */}
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
                className="overflow-hidden rounded-2xl border border-[#8ed0db]/30 bg-[#153844] shadow-xl"
              >

                {/* TÍTULO DEL EJEMPLO Y FLECHAS */}
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 md:px-5">

                  <div>
                    <p className="text-xs text-[#8ed0db]">
                      Ejemplo {ejemploActual + 1} de 3
                    </p>

                    <h4 className="mt-1 font-serif text-xl text-white md:text-2xl">
                      {ejemplo.nombre}
                    </h4>
                  </div>

                  <div className="flex gap-2">

                    <button
                      type="button"
                      onClick={() => cambiarEjemplo(-1)}
                      aria-label="Ejemplo anterior"
                      className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={() => cambiarEjemplo(1)}
                      aria-label="Siguiente ejemplo"
                      className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
                    >
                      <ChevronRight size={20} />
                    </button>

                  </div>
                </div>

                {/* DOS FOTOGRAFÍAS */}
                <div className="grid grid-cols-2">

                  {/* SIN BONDEADO */}
                  <div className="min-w-0 border-r border-white/10">

                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Foto
                        src={ejemplo.imagenSin}
                        alt={`${ejemplo.nombre} sin bondeado`}
                      />

                      <span className="absolute left-2 top-2 rounded-full bg-[#102b36]/90 px-2 py-1 text-xs font-semibold text-white sm:left-3 sm:top-3 sm:px-3 sm:py-2">
                        Sin bondeado
                      </span>
                    </div>

                    <div className="min-h-28 p-3 sm:p-4">
                      <p className="text-xs leading-relaxed text-white/75 sm:text-sm">
                        {ejemplo.sin}
                      </p>
                    </div>
                  </div>

                  {/* CON BONDEADO */}
                  <div className="min-w-0">

                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Foto
                        src={ejemplo.imagenCon}
                        alt={`${ejemplo.nombre} con bondeado`}
                      />

                      <span className="absolute left-2 top-2 rounded-full bg-[#8ed0db] px-2 py-1 text-xs font-bold text-[#102b36] sm:left-3 sm:top-3 sm:px-3 sm:py-2">
                        Con bondeado
                      </span>
                    </div>

                    <div className="min-h-28 p-3 sm:p-4">
                      <p className="text-xs leading-relaxed text-white/75 sm:text-sm">
                        {ejemplo.con}
                      </p>
                    </div>
                  </div>

                </div>

                {/* INDICADORES */}
                <div className="flex items-center justify-center gap-2 border-t border-white/10 px-4 py-4">
                  {ejemplos.map((item, indice) => (
                    <button
                      key={item.nombre}
                      type="button"
                      onClick={() => setEjemploActual(indice)}
                      aria-label={`Ver ${item.nombre}`}
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

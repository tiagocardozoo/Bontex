
'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const productos = [
  {
    nombre: 'Bolsos y mochilas',
    material: 'Telas bondeadas con espuma',
    imagen: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Calzado deportivo',
    material: 'Textiles laminados y acolchados',
    imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Marroquinería',
    material: 'Telas bondeadas para estructura',
    imagen: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Accesorios textiles',
    material: 'Tejidos técnicos bondeados',
    imagen: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Bolsos de uso diario',
    material: 'Telas con refuerzo textil',
    imagen: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Artículos deportivos',
    material: 'Materiales textiles acolchados',
    imagen: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700&auto=format&fit=crop&q=85',
  },
]

export function ProductosCarrusel() {
  const carruselRef = useRef<HTMLDivElement>(null)
  const grupoRef = useRef<HTMLDivElement>(null)
  const pausadoRef = useRef(false)
  const [pausado, setPausado] = useState(false)

  useEffect(() => {
    const carrusel = carruselRef.current
    const grupo = grupoRef.current
    if (!carrusel || !grupo) return

    const anchoGrupo = () => grupo.getBoundingClientRect().width

    carrusel.scrollLeft = anchoGrupo()

    const movimientoReducido = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    let frame = 0
    let anterior = 0

    function animar(tiempo: number) {
      if (anterior === 0) anterior = tiempo

      const delta = Math.min(tiempo - anterior, 50)
      anterior = tiempo

      if (
        carrusel &&
        !pausadoRef.current &&
        !movimientoReducido.matches
      ) {
        // Velocidad: 38 píxeles por segundo
        carrusel.scrollLeft += (delta * 38) / 1000
      }

      const ancho = anchoGrupo()

      if (ancho > 0) {
        if (carrusel.scrollLeft >= ancho * 2) {
          carrusel.scrollLeft -= ancho
        }

        if (carrusel.scrollLeft <= 0) {
          carrusel.scrollLeft += ancho
        }
      }

      frame = requestAnimationFrame(animar)
    }

    frame = requestAnimationFrame(animar)

    return () => cancelAnimationFrame(frame)
  }, [])

  function pausar(valor: boolean) {
    pausadoRef.current = valor
    setPausado(valor)
  }

  function mover(direccion: number) {
    const carrusel = carruselRef.current
    const tarjeta = carrusel?.querySelector<HTMLElement>(
      '.producto-tarjeta'
    )

    if (!carrusel || !tarjeta) return

    const ancho = tarjeta.getBoundingClientRect().width + 16

    carrusel.scrollBy({
      left: direccion * ancho,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="aplicaciones"
      className="relative bg-[#f3f5f5] pb-20 md:pb-24"
    >
      {/* Carrusel situado sobre el fondo azul del hero */}
      <div className="relative z-10 -mt-48 md:-mt-56">
        <div className="mx-auto mb-4 flex max-w-7xl justify-end gap-2 px-5 md:px-8">
          <button
            type="button"
            onClick={() => mover(-1)}
            aria-label="Ver productos anteriores"
            className="flex size-11 items-center justify-center rounded-full border border-white/50 bg-[#174554] text-white transition hover:bg-[#28667a]"
          >
            <ChevronLeft size={23} />
          </button>

          <button
            type="button"
            onClick={() => mover(1)}
            aria-label="Ver productos siguientes"
            className="flex size-11 items-center justify-center rounded-full border border-white/50 bg-[#174554] text-white transition hover:bg-[#28667a]"
          >
            <ChevronRight size={23} />
          </button>
        </div>

        <div
          ref={carruselRef}
          className="productos-ventana"
          onMouseEnter={() => pausar(true)}
          onMouseLeave={() => pausar(false)}
          onTouchStart={() => pausar(true)}
          onTouchEnd={() => pausar(false)}
          onFocusCapture={() => pausar(true)}
          onBlurCapture={() => pausar(false)}
          aria-label="Carrusel de aplicaciones textiles"
        >
          <div className="productos-pista">
            {[0, 1, 2].map((repeticion) => (
              <div
                ref={repeticion === 0 ? grupoRef : undefined}
                className="productos-grupo"
                key={repeticion}
                aria-hidden={repeticion !== 1}
              >
                {productos.map((producto) => (
                  <article
                    key={producto.nombre}
                    className="producto-tarjeta overflow-hidden rounded-xl bg-white shadow-lg"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-sm font-bold text-[#102b36]">
                        {producto.nombre}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                        {producto.material}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Título y descripción debajo del carrusel */}
      <div className="mx-auto mt-14 max-w-7xl px-5 md:mt-16 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#397587]">
          APLICACIONES TEXTILES
        </p>

        <h2 className="mt-4 font-serif text-4xl text-[#102b36] md:text-5xl">
          Productos elaborados con nuestras telas
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          Descubrí las distintas aplicaciones de los materiales textiles bondeados.
        </p>

        <p className="mt-5 text-xs text-slate-500">
          Imágenes ilustrativas de posibles aplicaciones textiles.
        </p>
      </div>

      <style jsx>{`
        .productos-ventana {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-x: contain;
        }

        .productos-ventana::-webkit-scrollbar {
          display: none;
        }

        .productos-pista {
          display: flex;
          width: max-content;
        }

        .productos-grupo {
          display: flex;
          flex-shrink: 0;
          gap: 16px;
          padding-right: 16px;
        }

        .producto-tarjeta {
          flex: 0 0 auto;
          width: calc((100vw - 96px) / 5);
          max-width: 300px;
        }

        @media (max-width: 1023px) {
          .producto-tarjeta {
            width: calc((100vw - 64px) / 3);
          }
        }

        @media (max-width: 639px) {
          .producto-tarjeta {
            width: 68vw;
          }
        }
      `}</style>
    </section>
  )
}

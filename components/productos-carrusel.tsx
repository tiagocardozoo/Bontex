
'use client'

import { useEffect, useRef } from 'react'
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
  const ventanaRef = useRef<HTMLDivElement>(null)
  const grupoRef = useRef<HTMLDivElement>(null)
  const pausadoRef = useRef(false)

  useEffect(() => {
    const ventana = ventanaRef.current
    const grupo = grupoRef.current
    if (!ventana || !grupo) return

    const reducirMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    ventana.scrollLeft = grupo.offsetWidth

    let frame = 0
    let tiempoAnterior = 0

    function animar(tiempo: number) {
      if (!ventana || !grupo) return

      if (!tiempoAnterior) tiempoAnterior = tiempo
      const delta = Math.min(tiempo - tiempoAnterior, 50)
      tiempoAnterior = tiempo

      const ancho = grupo.offsetWidth

      if (
        !pausadoRef.current &&
        !reducirMovimiento.matches
      ) {
        ventana.scrollLeft += (delta * 110) / 1000
      }

      if (ancho > 0) {
        if (ventana.scrollLeft >= ancho * 2) {
          ventana.scrollLeft -= ancho
        }

        if (ventana.scrollLeft < ancho * 0.5) {
          ventana.scrollLeft += ancho
        }
      }

      frame = requestAnimationFrame(animar)
    }

    frame = requestAnimationFrame(animar)

    return () => cancelAnimationFrame(frame)
  }, [])

  function mover(direccion: number) {
    const ventana = ventanaRef.current
    const tarjeta = ventana?.querySelector<HTMLElement>(
      '.producto-tarjeta'
    )

    if (!ventana || !tarjeta) return

    const ancho = tarjeta.getBoundingClientRect().width + 16
    ventana.scrollLeft += direccion * ancho
  }

  return (
    <section
      id="aplicaciones"
      className="relative bg-[#f3f5f5] py-16 md:py-20"
    >
      {/* TITULO ARRIBA DEL CARRUSEL */}
      <div className="mx-auto mb-10 max-w-7xl px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#397587]">
          APLICACIONES TEXTILES
        </p>

        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#102b36] md:text-5xl">
          Productos elaborados con nuestras telas
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Descubrí las distintas aplicaciones de los materiales textiles bondeados.
        </p>
      </div>

      {/* CARRUSEL CON FLECHAS A LOS COSTADOS */}
      <div className="relative w-full">

        <div
          ref={ventanaRef}
          className="productos-ventana"
          onMouseEnter={() => {
            pausadoRef.current = true
          }}
          onMouseLeave={() => {
            pausadoRef.current = false
          }}
          onTouchStart={() => {
            pausadoRef.current = true
          }}
          onTouchEnd={() => {
            pausadoRef.current = false
          }}
        >
          <div className="productos-pista">
            {[0, 1, 2].map((repeticion) => (
              <div
                key={repeticion}
                ref={repeticion === 0 ? grupoRef : undefined}
                className="productos-grupo"
                aria-hidden={repeticion !== 1}
              >
                {productos.map((producto) => (
                  <article
                    key={producto.nombre}
                    className="producto-tarjeta overflow-hidden rounded-xl bg-white shadow-md"
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

        {/* FLECHA IZQUIERDA */}
        <button
          type="button"
          aria-label="Producto anterior"
          onClick={() => mover(-1)}
          onMouseEnter={() => {
            pausadoRef.current = true
          }}
          onMouseLeave={() => {
            pausadoRef.current = false
          }}
          className="absolute left-2 top-[30%] z-20 flex size-11 items-center justify-center rounded-full border border-white/50 bg-[#174554]/90 text-white shadow-lg transition hover:bg-[#28667a] md:left-4"
        >
          <ChevronLeft size={25} />
        </button>

        {/* FLECHA DERECHA */}
        <button
          type="button"
          aria-label="Producto siguiente"
          onClick={() => mover(1)}
          onMouseEnter={() => {
            pausadoRef.current = true
          }}
          onMouseLeave={() => {
            pausadoRef.current = false
          }}
          className="absolute right-2 top-[30%] z-20 flex size-11 items-center justify-center rounded-full border border-white/50 bg-[#174554]/90 text-white shadow-lg transition hover:bg-[#28667a] md:right-4"
        >
          <ChevronRight size={25} />
        </button>
      </div>

      <div className="mx-auto mt-5 max-w-7xl px-5 md:px-8">
        <p className="text-xs text-slate-500">
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
          padding: 4px 24px 20px;
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
          width: calc((100vw - 112px) / 5);
        }

        @media (max-width: 1023px) {
          .producto-tarjeta {
            width: calc((100vw - 80px) / 3);
          }
        }

        @media (max-width: 639px) {
          .producto-tarjeta {
            width: 72vw;
          }
        }
      `}</style>
    </section>
  )
}

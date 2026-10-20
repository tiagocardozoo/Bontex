
'use client'

import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// PRODUCTOS E INDUSTRIAS
// Acá podremos agregar nuevas aplicaciones más adelante.

const productos = [
  {
    nombre: 'Industria Automotriz',
    material: 'Tapizados realizados con símil neopreno',
    imagen:
      'https://unsplash.com/photos/a-GqS405lxc/download?w=700',
  },
  {
    nombre: 'Cotillón',
    material: 'Artículos de cotillón confeccionados con jersey bondeado',
    imagen:
      'https://unsplash.com/photos/pXjhm5dr8_c/download?w=700',
  },
  {
    nombre: 'Productos ortopédicos',
    material: 'Productos de ortopedia elaborados con jersey bondeado',
    imagen:
      'https://unsplash.com/photos/_EqHeYEJU44/download?w=700',
  },
  {
    nombre: 'Bolsos y mochilas',
    material: 'Telas bondeadas con espuma',
    imagen:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Calzado deportivo',
    material: 'Textiles laminados y acolchados',
    imagen:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Marroquinería',
    material: 'Telas bondeadas para estructura',
    imagen:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Accesorios textiles',
    material: 'Tejidos técnicos bondeados',
    imagen:
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Bolsos de uso diario',
    material: 'Telas con refuerzo textil',
    imagen:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Artículos deportivos',
    material: 'Materiales textiles acolchados',
    imagen:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700&auto=format&fit=crop&q=85',
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

    const ancho =
      tarjeta.getBoundingClientRect().width + 16

    ventana.scrollLeft += direccion * ancho
  }

  return (
    <section
      id="aplicaciones"
      className="relative bg-[#f3f5f5] py-16 md:py-20"
    >
      {/* TÍTULO */}
      <div className="mx-auto mb-9 max-w-7xl px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#397587]">
          APLICACIONES TEXTILES
        </p>

        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#102b36] md:text-5xl">
          Productos elaborados con nuestras telas
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Descubrí las distintas aplicaciones de los
          materiales textiles bondeados.
        </p>
      </div>

      {/* CARRUSEL */}
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
          onTouchCancel={() => {
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
                    className="producto-tarjeta group flex flex-col overflow-hidden rounded-xl bg-white shadow-md"
                  >
                    {/* FOTOGRAFÍA */}
                    <div className="aspect-[4/3] shrink-0 overflow-hidden bg-slate-200">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="text-sm font-bold leading-snug text-[#102b36] md:text-base">
                        {producto.nombre}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
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
          className="absolute left-2 top-[42%] z-20 flex size-11 items-center justify-center rounded-full border border-white/50 bg-[#174554]/90 text-white shadow-lg transition hover:bg-[#28667a] md:left-4"
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
          className="absolute right-2 top-[42%] z-20 flex size-11 items-center justify-center rounded-full border border-white/50 bg-[#174554]/90 text-white shadow-lg transition hover:bg-[#28667a] md:right-4"
        >
          <ChevronRight size={25} />
        </button>

      </div>

      <style jsx>{`
        .productos-ventana {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-x: contain;
          padding: 35px 24px 45px;
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
          align-items: stretch;
          gap: 16px;
          padding-right: 16px;
        }

        .producto-tarjeta {
          flex: 0 0 auto;
          width: calc((100vw - 112px) / 5);
          transform: scale(1);
          transform-origin: center center;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
          position: relative;
          z-index: 1;
        }

        @media (hover: hover) and (pointer: fine) {
          .producto-tarjeta:hover {
            transform: scale(1.12);
            z-index: 10;
            box-shadow: 0 18px 35px rgba(10, 38, 48, 0.25);
          }
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

          .productos-ventana {
            padding: 15px 20px 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .producto-tarjeta {
            transition: none;
          }

          .producto-tarjeta:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}

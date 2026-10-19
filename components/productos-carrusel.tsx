
'use client'

const productos = [
  {
    nombre: 'Bolsos y mochilas',
    material: 'Aplicación: telas bondeadas con espuma',
    imagen: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Calzado deportivo',
    material: 'Aplicación: textiles laminados y acolchados',
    imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Marroquinería',
    material: 'Aplicación: telas bondeadas para estructura',
    imagen: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Accesorios textiles',
    material: 'Aplicación: tejidos técnicos bondeados',
    imagen: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Bolsos de uso diario',
    material: 'Aplicación: telas con refuerzo textil',
    imagen: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&auto=format&fit=crop&q=85',
  },
  {
    nombre: 'Artículos deportivos',
    material: 'Aplicación: materiales textiles acolchados',
    imagen: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700&auto=format&fit=crop&q=85',
  },
]

export function ProductosCarrusel() {
  return (
    <section
      id="aplicaciones"
      className="overflow-hidden bg-[#f3f5f5] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#397587]">
          APLICACIONES TEXTILES
        </p>

        <h2 className="mt-4 font-serif text-4xl text-[#102b36] md:text-5xl">
          Productos elaborados con nuestras telas
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          Descubrí las distintas aplicaciones de los
          materiales textiles bondeados.
        </p>
      </div>

      <div className="carrusel-ventana mt-12" aria-label="Ejemplos de aplicaciones textiles">
        <div className="carrusel-pista">
          {[0, 1].map((repeticion) => (
            <div
              key={repeticion}
              className="carrusel-grupo"
              aria-hidden={repeticion === 1}
            >
              {productos.map((producto) => (
                <article
                  key={producto.nombre}
                  className="carrusel-tarjeta"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#102b36]">
                      {producto.nombre}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {producto.material}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-7xl px-5 text-xs text-slate-500 md:px-8">
        Imágenes ilustrativas de posibles aplicaciones textiles.
      </p>

      <style jsx>{`
        .carrusel-ventana {
          width: 100%;
          overflow: hidden;
        }

        .carrusel-pista {
          display: flex;
          width: max-content;
          animation: desplazar 75s linear infinite;
        }

        .carrusel-ventana:hover .carrusel-pista,
        .carrusel-ventana:focus-within .carrusel-pista {
          animation-play-state: paused;
        }

        .carrusel-grupo {
          display: flex;
          gap: 20px;
          padding-right: 20px;
        }

        .carrusel-tarjeta {
          width: 290px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 14px;
          background: white;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        @keyframes desplazar {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .carrusel-tarjeta {
            width: 240px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .carrusel-pista {
            animation: none;
          }

          .carrusel-ventana {
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  )
}

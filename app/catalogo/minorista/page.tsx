
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
} from 'lucide-react'

// EDITAR AQUÍ LOS PRODUCTOS Y SUS PRECIOS
// Los precios actuales son de prueba.

const productos = [
  {
    id: 'jersey-amarillo',
    nombre: 'Jersey bondeado',
    espesor: '3 mm',
    color: 'Amarillo',
    precio: 5000,
    imagen: '/images/telas-bondeadas.jpeg',
    muestra: '#F4CB28',
  },
  {
    id: 'jersey-negro',
    nombre: 'Jersey bondeado',
    espesor: '3 mm',
    color: 'Negro',
    precio: 5000,
    imagen: '/images/telas-bondeadas.jpeg',
    muestra: '#222222',
  },
  {
    id: 'jersey-blanco',
    nombre: 'Jersey bondeado',
    espesor: '3 mm',
    color: 'Blanco',
    precio: 5000,
    imagen: '/images/telas-bondeadas.jpeg',
    muestra: '#F5F5F5',
  },
]

// Número de WhatsApp de Bontex
const WHATSAPP = '5491135399183'

const formatoPrecio = (numero: number) =>
  '$' + numero.toLocaleString('es-AR')

export default function CatalogoMinorista() {
  const [cantidades, setCantidades] = useState<Record<string, number>>({})
  const [seleccion, setSeleccion] = useState<Record<string, number>>({})

  const productosElegidos = productos.filter(
    (producto) => (seleccion[producto.id] || 0) > 0
  )

  const totalMetros = productosElegidos.reduce(
    (total, producto) => total + seleccion[producto.id],
    0
  )

  const totalPrecio = productosElegidos.reduce(
    (total, producto) =>
      total + producto.precio * seleccion[producto.id],
    0
  )

  function agregarProducto(id: string) {
    const cantidad = cantidades[id] || 1

    setSeleccion((actual) => ({
      ...actual,
      [id]: (actual[id] || 0) + cantidad,
    }))
  }

  function modificarCantidad(id: string, cambio: number) {
    setSeleccion((actual) => ({
      ...actual,
      [id]: Math.max(0, (actual[id] || 0) + cambio),
    }))
  }

  function eliminarProducto(id: string) {
    setSeleccion((actual) => ({
      ...actual,
      [id]: 0,
    }))
  }

  function realizarPedido() {
    if (productosElegidos.length === 0) return

    const detalle = productosElegidos
      .map((producto) => {
        const metros = seleccion[producto.id]
        const subtotal = metros * producto.precio

        return (
          `• ${metros} metros de ${producto.nombre} ` +
          `${producto.espesor}, color ${producto.color}\n` +
          `  ${formatoPrecio(producto.precio)} por metro\n` +
          `  Subtotal: ${formatoPrecio(subtotal)}`
        )
      })
      .join('\n\n')

    const mensaje =
      '¡Hola! Vine desde la página de Bontex ' +
      'y quiero realizar este pedido:\n\n' +
      detalle +
      '\n\nTotal de metros: ' + totalMetros +
      '\nTotal del pedido: ' + formatoPrecio(totalPrecio) +
      '\n\n¿Me confirman la disponibilidad de ' +
      'las telas seleccionadas?\n¡Gracias!'

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <main className="min-h-screen bg-[#f3f5f5]">

      {/* ENCABEZADO */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
          <Link
            href="/"
            className="text-2xl font-extrabold text-[#1e4d5c]"
          >
            Bontex{' '}
            <span className="font-light text-[#78909c]">
              Bondeados
            </span>
          </Link>

          <Link
            href="/catalogo"
            className="flex items-center gap-2 text-sm text-[#1e4d5c]"
          >
            <ArrowLeft size={18} />
            Volver
          </Link>
        </div>
      </header>

      {/* PRESENTACIÓN */}
      <section className="bg-[#102b36] px-5 py-16 text-center text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8ed0db]">
          BONTEX BONDEADOS
        </p>

        <h1 className="mt-4 font-serif text-5xl md:text-6xl">
          Catálogo minorista
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-white/75">
          Elegí tus telas, indicá los metros y armá tu pedido.
        </p>
      </section>

      {/* AVISO DE PRECIOS DE PRUEBA */}
      <div className="mx-auto max-w-7xl px-5 pt-8">
        <p className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Catálogo en preparación: los precios publicados
          son de prueba y todavía no representan los
          valores comerciales definitivos.
        </p>
      </div>

      {/* PRODUCTOS */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="mb-8 font-serif text-3xl text-[#102b36]">
          Nuestras telas
        </h2>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => (
            <article
              key={producto.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img
                  src={producto.imagen}
                  alt={`${producto.nombre} color ${producto.color}`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-md">
                  <span
                    className="size-5 rounded-full border border-slate-300"
                    style={{ backgroundColor: producto.muestra }}
                  />
                  <span className="text-xs font-semibold text-[#102b36]">
                    {producto.color}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#102b36]">
                  {producto.nombre}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Espesor: {producto.espesor}
                  {' · '}
                  Color: {producto.color}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-xs text-slate-500">
                    Precio por metro
                  </p>
                  <p className="mt-1 text-2xl font-bold text-[#1e4d5c]">
                    {formatoPrecio(producto.precio)}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <label className="text-sm font-medium text-[#102b36]">
                    Metros
                  </label>

                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={cantidades[producto.id] || 1}
                    onChange={(e) => {
                      const numero = Number(e.target.value)
                      setCantidades((actual) => ({
                        ...actual,
                        [producto.id]: Math.max(
                          1,
                          Math.floor(numero || 1)
                        ),
                      }))
                    }}
                    className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-center text-[#102b36]"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => agregarProducto(producto.id)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1e4d5c] px-5 py-3.5 font-semibold text-white transition hover:bg-[#286b7d]"
                >
                  <ShoppingCart size={19} />
                  Agregar al carrito
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CARRITO */}
      <section
        id="carrito"
        className="bg-white px-5 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <ShoppingCart className="text-[#1e4d5c]" size={29} />
            <h2 className="font-serif text-4xl text-[#102b36]">
              Tu carrito
            </h2>
          </div>

          {productosElegidos.length === 0 ? (
            <p className="rounded-xl bg-[#f3f5f5] p-8 text-center text-slate-500">
              Todavía no agregaste telas a tu pedido.
            </p>
          ) : (
            <div className="space-y-5">
              {productosElegidos.map((producto) => (
                <div
                  key={producto.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 p-5"
                >
                  <div className="min-w-44">
                    <h3 className="font-bold text-[#102b36]">
                      {producto.nombre}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {producto.espesor} · {producto.color}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formatoPrecio(producto.precio)} / metro
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Restar un metro"
                      onClick={() => modificarCantidad(producto.id, -1)}
                      className="rounded-lg border border-slate-300 p-2"
                    >
                      <Minus size={17} />
                    </button>

                    <span className="min-w-12 text-center font-semibold text-[#102b36]">
                      {seleccion[producto.id]} m
                    </span>

                    <button
                      type="button"
                      aria-label="Sumar un metro"
                      onClick={() => modificarCantidad(producto.id, 1)}
                      className="rounded-lg border border-slate-300 p-2"
                    >
                      <Plus size={17} />
                    </button>
                  </div>

                  <p className="font-bold text-[#1e4d5c]">
                    {formatoPrecio(
                      producto.precio * seleccion[producto.id]
                    )}
                  </p>

                  <button
                    type="button"
                    aria-label={`Eliminar ${producto.nombre} ${producto.color}`}
                    onClick={() => eliminarProducto(producto.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={19} />
                  </button>
                </div>
              ))}

              <div className="rounded-xl bg-[#102b36] p-7 text-white">
                <div className="flex justify-between gap-4">
                  <span>Total de metros</span>
                  <strong>{totalMetros} m</strong>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/20 pt-5">
                  <span className="text-lg font-semibold">
                    Total del pedido
                  </span>

                  <strong className="text-3xl">
                    {formatoPrecio(totalPrecio)}
                  </strong>
                </div>

                <p className="mt-3 text-xs text-white/65">
                  Total sujeto a confirmación comercial.
                </p>

                <button
                  type="button"
                  onClick={realizarPedido}
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-lg bg-[#21c063] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#1ca851]"
                >
                  <MessageCircle size={24} />
                  Realizar pedido por WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

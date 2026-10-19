
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
  X,
} from 'lucide-react'

// PRODUCTOS DEL CATÁLOGO MINORISTA
// Modificá acá nombres, fotografías y precios.
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

const WHATSAPP = '5491132043169'

const formatoPrecio = (valor: number) =>
  '$' + valor.toLocaleString('es-AR')

export default function CatalogoMinorista() {
  const [cantidades, setCantidades] = useState<Record<string, string>>({})
  const [carrito, setCarrito] = useState<Record<string, number>>({})
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  const productosElegidos = productos.filter(
    (producto) => (carrito[producto.id] || 0) > 0
  )

  const cantidadProductos = productosElegidos.length

  const totalMetros = productosElegidos.reduce(
    (total, producto) => total + carrito[producto.id],
    0
  )

  const totalPrecio = productosElegidos.reduce(
    (total, producto) =>
      total + producto.precio * carrito[producto.id],
    0
  )

  function agregarProducto(id: string) {
    const cantidad = Number(cantidades[id] ?? '0')

    if (!Number.isInteger(cantidad) || cantidad <= 0) return

    setCarrito((actual) => ({
      ...actual,
      [id]: (actual[id] || 0) + cantidad,
    }))

    setCantidades((actual) => ({
      ...actual,
      [id]: '0',
    }))

    setCarritoAbierto(true)
  }

  function modificarMetros(id: string, cambio: number) {
    setCarrito((actual) => ({
      ...actual,
      [id]: Math.max(0, (actual[id] || 0) + cambio),
    }))
  }

  function eliminarProducto(id: string) {
    setCarrito((actual) => ({
      ...actual,
      [id]: 0,
    }))
  }

  function realizarPedido() {
    if (productosElegidos.length === 0) return

    const detalle = productosElegidos
      .map((producto) => {
        const metros = carrito[producto.id]
        const subtotal = producto.precio * metros

        return (
          `• ${metros} metros de ${producto.nombre} ` +
          `${producto.espesor}, color ${producto.color}\n` +
          `  Precio por metro: ${formatoPrecio(producto.precio)}\n` +
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

    const url =
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`

    window.open(url, '_blank', 'noopener,noreferrer')
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

      {/* PORTADA */}
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

      {/* RESUMEN DEL CARRITO ARRIBA */}
      <section className="mx-auto max-w-7xl px-5 pt-10">

        <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-[#1e4d5c] px-6 py-6 text-white shadow-lg md:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/10 p-3">
              <ShoppingCart size={27} />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Mi carrito
              </h2>
              <p className="mt-1 text-sm text-white/75">
                {cantidadProductos === 0
                  ? 'Todavía no agregaste telas.'
                  : `${cantidadProductos} productos · ${totalMetros} metros`}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <div>
              <p className="text-xs text-white/70">
                Total del pedido
              </p>
              <p className="text-2xl font-bold">
                {formatoPrecio(totalPrecio)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setCarritoAbierto(true)}
              className="rounded-lg bg-white px-5 py-3 font-semibold text-[#1e4d5c] transition hover:bg-[#d9ecef]"
            >
              Ver carrito →
            </button>
          </div>
        </div>
        
      </section>

      {/* PRODUCTOS */}
      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => {
            const cantidad = cantidades[producto.id] ?? '0'
            const numero = Number(cantidad)

            const cantidadValida =
              cantidad !== '' &&
              Number.isInteger(numero) &&
              numero > 0

            return (
              <article
                key={producto.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <img
                    src={producto.imagen}
                    alt={`${producto.nombre} ${producto.color}`}
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
                    <label
                      htmlFor={`metros-${producto.id}`}
                      className="text-sm font-medium text-[#102b36]"
                    >
                      Metros
                    </label>

                    <input
                      id={`metros-${producto.id}`}
                      type="number"
                      min="0"
                      step="1"
                      placeholder="0"
                      value={cantidad}
                      onChange={(e) => {
                        setCantidades((actual) => ({
                          ...actual,
                          [producto.id]: e.target.value,
                        }))
                      }}
                      className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-center text-[#102b36]"
                    />
                  </div>

                  <button
                    type="button"
                    disabled={!cantidadValida}
                    onClick={() => agregarProducto(producto.id)}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1e4d5c] px-5 py-3.5 font-semibold text-white transition hover:bg-[#286b7d] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Plus size={18} />
                    Agregar al carrito
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* BOTÓN FLOTANTE DEL CARRITO */}
      {!carritoAbierto && (
        <button
          type="button"
          onClick={() => setCarritoAbierto(true)}
          aria-label="Abrir carrito de compras"
          className="fixed bottom-24 right-5 z-40 flex items-center gap-3 rounded-full border border-white/20 bg-[#1e4d5c] px-5 py-4 text-white shadow-2xl transition hover:bg-[#286b7d] md:bottom-8 md:right-8"
        >
          <div className="relative">
            <ShoppingCart size={25} />

            {cantidadProductos > 0 && (
              <span className="absolute -right-3 -top-3 flex size-5 items-center justify-center rounded-full bg-[#20c567] text-xs font-bold text-white">
                {cantidadProductos}
              </span>
            )}
          </div>

          <div className="text-left">
            <p className="text-xs font-medium">
              Mi carrito
            </p>

            <p className="text-sm font-bold">
              {formatoPrecio(totalPrecio)}
            </p>
          </div>
        </button>
      )}

      {/* PANEL LATERAL DEL CARRITO */}
      {carritoAbierto && (
        <div className="fixed inset-0 z-50">

          {/* FONDO OSCURO */}
          <button
            type="button"
            aria-label="Cerrar carrito"
            onClick={() => setCarritoAbierto(false)}
            className="absolute inset-0 bg-black/60"
          />

          {/* PANEL */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Tu carrito de compras"
            className="absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
          >

            {/* CABECERA */}
            <div className="flex items-center justify-between bg-[#102b36] px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <ShoppingCart size={25} />

                <div>
                  <h2 className="text-xl font-bold">
                    Tu carrito
                  </h2>
                  <p className="text-xs text-white/70">
                    {cantidadProductos} productos
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCarritoAbierto(false)}
                aria-label="Cerrar carrito"
                className="rounded-lg p-2 hover:bg-white/10"
              >
                <X size={25} />
              </button>
            </div>

            {/* CONTENIDO DEL CARRITO */}
            <div className="flex-1 overflow-y-auto px-5 py-6">

              {productosElegidos.length === 0 ? (
                <div className="py-16 text-center text-slate-500">
                  <ShoppingCart
                    size={46}
                    className="mx-auto mb-4 opacity-30"
                  />
                  <p>Tu carrito está vacío.</p>
                  <p className="mt-2 text-sm">
                    Agregá alguna tela para comenzar.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {productosElegidos.map((producto) => (
                    <div
                      key={producto.id}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <div className="flex justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-[#102b36]">
                            {producto.nombre}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {producto.espesor} · {producto.color}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {formatoPrecio(producto.precio)} / metro
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => eliminarProducto(producto.id)}
                          aria-label={`Eliminar ${producto.color}`}
                          className="self-start text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={19} />
                        </button>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => modificarMetros(producto.id, -1)}
                            aria-label="Restar un metro"
                            className="rounded-lg border border-slate-300 p-2"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="min-w-12 text-center font-semibold text-[#102b36]">
                            {carrito[producto.id]} m
                          </span>

                          <button
                            type="button"
                            onClick={() => modificarMetros(producto.id, 1)}
                            aria-label="Sumar un metro"
                            className="rounded-lg border border-slate-300 p-2"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <strong className="text-[#1e4d5c]">
                          {formatoPrecio(
                            producto.precio * carrito[producto.id]
                          )}
                        </strong>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* TOTAL Y PEDIDO */}
            <div className="border-t border-slate-200 bg-[#f3f5f5] p-6">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Total de metros</span>
                <strong>{totalMetros} m</strong>
              </div>

              <div className="mt-3 flex items-center justify-between text-[#102b36]">
                <span className="font-semibold">
                  Total del pedido
                </span>

                <strong className="text-2xl">
                  {formatoPrecio(totalPrecio)}
                </strong>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Total sujeto a confirmación comercial.
              </p>

              <button
                type="button"
                onClick={realizarPedido}
                disabled={cantidadProductos === 0}
                className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-[#20c567] px-4 py-4 font-bold text-white transition hover:bg-[#1ba954] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <MessageCircle size={23} />
                Realizar pedido por WhatsApp
              </button>

              <button
                type="button"
                onClick={() => setCarritoAbierto(false)}
                className="mt-3 w-full py-2 text-sm font-medium text-[#1e4d5c] hover:underline"
              >
                Seguir comprando
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  )
}

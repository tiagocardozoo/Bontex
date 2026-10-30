
'use client'

import { useEffect, useState } from 'react'
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

// PRODUCTOS DEL CATÁLOGO MAYORISTA
// Más adelante agregaremos las telas reales.

const productos = [
  {
    id: 'jersey-amarillo',
    nombre: 'Jersey bondeado',
    color: 'Amarillo',
    espesor: 'A convenir',
    imagen: '/images/telas-bondeadas.jpeg',
    muestra: '#F4CB28',
  },
  {
    id: 'jersey-negro',
    nombre: 'Jersey bondeado',
    color: 'Negro',
    espesor: 'A convenir',
    imagen: '/images/telas-bondeadas.jpeg',
    muestra: '#222222',
  },
  {
    id: 'jersey-blanco',
    nombre: 'Jersey bondeado',
    color: 'Blanco',
    espesor: 'A convenir',
    imagen: '/images/telas-bondeadas.jpeg',
    muestra: '#F5F5F5',
  },
]

type LineaTransferida = {
  productoId: string
  nombre: string
  varianteId: string
  color: string
  espesor: string
  metros: number
  imagen: string
  muestra: string
}

const WHATSAPP = '5491173438981'
const MINIMO = 50

export default function CatalogoMayorista() {
  const [cantidades, setCantidades] = useState<Record<string, string>>({})
  const [carrito, setCarrito] = useState<Record<string, number>>({})
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [transferidos, setTransferidos] = useState<LineaTransferida[]>([])
  const [avisoTransferencia, setAvisoTransferencia] = useState(false)

  useEffect(() => {
    // El traspaso se lee una única vez al entrar desde el catálogo minorista.
    if (new URLSearchParams(window.location.search).get('desde') !== 'minorista') return
    try {
      const guardado = window.sessionStorage.getItem('bontex-carrito-traspaso-mayorista')
      if (!guardado) return
      const datos: unknown = JSON.parse(guardado)
      if (!Array.isArray(datos)) return
      const lineas = datos.filter((linea): linea is LineaTransferida =>
        typeof linea === 'object' && linea !== null &&
        typeof linea.productoId === 'string' && typeof linea.nombre === 'string' &&
        typeof linea.varianteId === 'string' && typeof linea.color === 'string' &&
        typeof linea.espesor === 'string' && typeof linea.metros === 'number' &&
        Number.isInteger(linea.metros) && linea.metros > 0
      ).map((linea) => ({ ...linea,
        imagen: typeof linea.imagen === 'string' ? linea.imagen : '',
        muestra: typeof linea.muestra === 'string' ? linea.muestra : '#BFC8CC',
      }))
      setTransferidos(lineas)
      setAvisoTransferencia(lineas.length > 0)
      setCarritoAbierto(lineas.length > 0)
      window.sessionStorage.removeItem('bontex-carrito-traspaso-mayorista')
    } catch { /* Si está bloqueado el almacenamiento, mostrar el catálogo normal. */ }
  }, [])

  const metrosTransferidos = transferidos.reduce((total, item) => total + item.metros, 0)
  const resumenTransferidos = Object.values(transferidos.reduce((grupos, item) => {
    grupos[item.productoId] = (grupos[item.productoId] || 0) + item.metros
    return grupos
  }, {} as Record<string, number>))
  const hayProductoMayoristaTransferido = resumenTransferidos.some((metros) => metros >= MINIMO)

  function cambiarTransferido(indice: number, cambio: number) {
    setTransferidos((actual) => actual.map((item, i) =>
      i === indice ? { ...item, metros: Math.max(1, item.metros + cambio) } : item
    ))
  }
  function eliminarTransferido(indice: number) {
    setTransferidos((actual) => actual.filter((_, i) => i !== indice))
  }


  const productosElegidos = productos.filter(
    (producto) => (carrito[producto.id] || 0) >= MINIMO
  )

  const cantidadProductos = productosElegidos.length + transferidos.length

  const totalMetros = productosElegidos.reduce(
    (total, producto) => total + carrito[producto.id],
    0
  ) + metrosTransferidos

  function agregarProducto(id: string) {
    const cantidad = Number(cantidades[id] ?? '50')

    if (
      !Number.isFinite(cantidad) ||
      !Number.isInteger(cantidad) ||
      cantidad < MINIMO
    ) {
      return
    }

    setCarrito((actual) => ({
      ...actual,
      [id]: (actual[id] || 0) + cantidad,
    }))

    setCantidades((actual) => ({
      ...actual,
      [id]: '50',
    }))

    setCarritoAbierto(true)
  }

  function modificarMetros(id: string, cambio: number) {
    setCarrito((actual) => {
      const cantidadActual = actual[id] || MINIMO

      return {
        ...actual,
        [id]: Math.max(MINIMO, cantidadActual + cambio),
      }
    })
  }

  function eliminarProducto(id: string) {
    setCarrito((actual) => ({
      ...actual,
      [id]: 0,
    }))
  }

  function realizarPedido() {
    if (productosElegidos.length === 0 && transferidos.length === 0) return

    const detalle = productosElegidos
      .map((producto) => {
        const metros = carrito[producto.id]

        return (
          `• ${metros} metros de ${producto.nombre}, ` +
          `color ${producto.color}\n` +
          `  Espesor: A convenir\n` +
          `  Precio: A convenir`
        )
      })
      .join('\n\n')

    const detalleTransferidos = transferidos.map((item) =>
      `• ${item.metros} metros de ${item.nombre}\n` +
      `  Color: ${item.color}\n` +
      `  Espesor: ${item.espesor}\n` +
      '  Precio mayorista: A convenir'
    ).join('\n\n')

    const detalleCompleto = [detalle, detalleTransferidos].filter(Boolean).join('\n\n')

const mensaje =
  '¡Hola! Vine desde la página de Bontex ' +
  'y quiero realizar este pedido:\n\n' +
  '* PEDIDO MAYORISTA*\n\n' +
  detalleCompleto +

      '\n\nTotal de metros: ' + totalMetros +
      '\n\nQuisiera coordinar el espesor y consultar ' +
      'los precios y la disponibilidad de las telas.\n' +
      '¡Gracias!'

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
          Catálogo mayorista
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-white/75">
          Elegí tus telas y armá tu pedido mayorista.
          Mínimo 50 metros por tela.
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
                  : `${cantidadProductos} productos seleccionados`}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <div>
              <p className="text-xs text-white/70">
                Total de metros
              </p>

              <p className="text-2xl font-bold">
                {totalMetros} m
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

      {avisoTransferencia && (
        <section className="mx-auto max-w-7xl px-5 pt-6">
          <div className="rounded-xl border border-[#8ed0db] bg-[#e2f5f7] p-5 text-[#102b36]">
            <p className="font-bold">Recuperamos tu selección del catálogo minorista.</p>
            <p className="mt-1 text-sm">Conservamos las telas, colores y metros. Los precios mayoristas son a convenir. Podés revisar tu carrito y continuar comprando.</p>
            {!hayProductoMayoristaTransferido && transferidos.length > 0 && <p className="mt-2 text-sm font-semibold">Para acceder a condiciones mayoristas necesitás al menos 50 metros de una misma tela, sumando sus colores.</p>}
          </div>
        </section>
      )}

      {/* PRODUCTOS */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => {
            const cantidad = cantidades[producto.id] ?? '50'
            const numero = Number(cantidad)

            const cantidadValida =
              cantidad !== '' &&
              Number.isInteger(numero) &&
              numero >= MINIMO

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
                      style={{
                        backgroundColor: producto.muestra,
                      }}
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
                    Color: {producto.color}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Espesor: {producto.espesor}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-xs text-slate-500">
                      Precio por metro
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#1e4d5c]">
                      Precio a convenir
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
                      min={MINIMO}
                      step="1"
                      value={cantidad}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => {
                        setCantidades((actual) => ({
                          ...actual,
                          [producto.id]: e.target.value,
                        }))
                      }}
                      className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-center text-[#102b36]"
                    />
                  </div>

                  <p className="mt-2 text-right text-xs text-slate-500">
                    Mínimo 50 metros
                  </p>

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
              {totalMetros} metros
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
            aria-label="Tu carrito mayorista"
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

              {cantidadProductos === 0 ? (
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
                  {transferidos.map((item, indice) => (
                    <div key={`${item.productoId}-${item.varianteId}-${indice}`} className="rounded-xl border border-[#8ed0db] bg-[#f0f8f9] p-4">
                      <div className="flex justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-[#102b36]">{item.nombre}</h3>
                          <p className="mt-1 text-sm text-slate-500">Color: {item.color}</p>
                          <p className="mt-1 text-sm text-slate-500">Espesor: {item.espesor}</p>
                          <p className="mt-1 text-sm font-semibold text-[#1e4d5c]">Precio mayorista a convenir</p>
                        </div>
                        <button type="button" onClick={() => eliminarTransferido(indice)} aria-label={`Eliminar ${item.nombre} ${item.color}`} className="self-start text-red-500"><Trash2 size={19}/></button>
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <button type="button" onClick={() => cambiarTransferido(indice, -5)} className="rounded-lg border border-slate-300 p-2"><Minus size={16}/></button>
                        <span className="min-w-14 text-center font-semibold text-[#102b36]">{item.metros} m</span>
                        <button type="button" onClick={() => cambiarTransferido(indice, 5)} className="rounded-lg border border-slate-300 p-2"><Plus size={16}/></button>
                      </div>
                    </div>
                  ))}
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
                            Color: {producto.color}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            Espesor: A convenir
                          </p>

                          <p className="mt-1 text-sm font-medium text-[#1e4d5c]">
                            Precio a convenir
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

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            disabled={carrito[producto.id] <= MINIMO}
                            onClick={() => modificarMetros(producto.id, -1)}
                            aria-label="Restar un metro"
                            className="rounded-lg border border-slate-300 p-2 disabled:cursor-not-allowed disabled:opacity-40"
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
                      </div>
                    </div>
                  ))}

                  {transferidos.length > 0 && !hayProductoMayoristaTransferido && (
                    <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">Todavía no alcanzaste 50 metros de una misma tela. Podés ajustar las cantidades o consultar igualmente por WhatsApp; el precio está sujeto a confirmación.</p>
                  )}
                  {/* AGREGAR MÁS PRODUCTOS */}
                  <button
                    type="button"
                    onClick={() => setCarritoAbierto(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#1e4d5c]/40 bg-[#f3f8f9] px-5 py-4 font-semibold text-[#1e4d5c] transition hover:bg-[#e2eff1]"
                  >
                    <Plus size={20} />
                    Agregar más productos
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Tu pedido se conserva mientras seguís comprando.
                  </p>
                </div>
              )}
            </div>

            {/* TOTAL Y PEDIDO */}
            <div className="border-t border-slate-200 bg-[#f3f5f5] p-6">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Productos seleccionados</span>
                <strong>{cantidadProductos}</strong>
              </div>

              <div className="mt-3 flex items-center justify-between text-[#102b36]">
                <span className="font-semibold">
                  Total de metros
                </span>

                <strong className="text-2xl">
                  {totalMetros} m
                </strong>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Precio y espesor a convenir.
                Pedido sujeto a confirmación de disponibilidad.
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
            </div>
          </aside>
        </div>
      )}
    </main>
  )
}

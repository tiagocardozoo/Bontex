'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
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

type Variante = {
  id: string
  espesor: string
  color: string
  precio: number | null
  imagen: string
  muestra: string
}

type Producto = {
  id: string
  nombre: string
  categoria: string
  descripcion: string
  variantes: Variante[]
}

const productos: Producto[] = [
  {
    id: 'jersey-bondeado',
    nombre: 'Jersey bondeado',
    categoria: 'Jersey',
    descripcion: 'Tela bondeada ideal para múltiples aplicaciones.',
    variantes: [
      {
        id: 'jersey-2-5-amarillo-fluo',
        espesor: '2,5 mm',
        color: 'Amarillo fluo',
        precio: 5000,
        imagen: 'https://dummyimage.com/900x700/EFFF00/102B36&text=Jersey+Amarillo+Fluo',
        muestra: '#EDFF00',
      },
      {
        id: 'jersey-2-5-azul-marino',
        espesor: '2,5 mm',
        color: 'Azul marino',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_747535-MLA90710923645_082025-R.webp',
        muestra: '#172752',
      },
      {
        id: 'jersey-2-5-blanco',
        espesor: '2,5 mm',
        color: 'Blanco',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_890606-MLA69941397615_062023-R.webp',
        muestra: '#F5F5F5',
      },
      {
        id: 'jersey-2-5-bordo',
        espesor: '2,5 mm',
        color: 'Bordó',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_719249-MLA117819108023_092026-R.webp',
        muestra: '#751D34',
      },
      {
        id: 'jersey-2-5-celeste',
        espesor: '2,5 mm',
        color: 'Celeste',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_850382-MLA88788521006_082025-R.webp',
        muestra: '#73C7E6',
      },
      {
        id: 'jersey-2-5-fuxia-fluo',
        espesor: '2,5 mm',
        color: 'Fuxia Fluo',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_669655-MLA90379518244_082025-R.webp',
        muestra: '#FF1493',
      },
      {
        id: 'jersey-2-5-marron-oscuro',
        espesor: '2,5 mm',
        color: 'Marrón oscuro',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_986369-MLA116324835932_092026-R.webp',
        muestra: '#4B3029',
      },
      {
        id: 'jersey-2-5-naranja-fluo',
        espesor: '2,5 mm',
        color: 'Naranja fluo',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_621513-MLA88788174516_082025-R.webp',
        muestra: '#FF6B00',
      },
      {
        id: 'jersey-2-5-negro',
        espesor: '2,5 mm',
        color: 'Negro',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_658019-MLA69941458823_062023-R.webp',
        muestra: '#222222',
      },
      {
        id: 'jersey-2-5-oro-amarillo',
        espesor: '2,5 mm',
        color: 'Oro amarillo',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_854791-MLA69941396221_062023-R.webp',
        muestra: '#D8AD24',
      },
      {
        id: 'jersey-2-5-rojo',
        espesor: '2,5 mm',
        color: 'Rojo',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_658075-MLA88788243272_082025-R.webp',
        muestra: '#D3272F',
      },
      {
        id: 'jersey-2-5-verde-fluo',
        espesor: '2,5 mm',
        color: 'Verde Flúo',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_865084-MLA69922760962_062023-R.webp',
        muestra: '#50FF11',
      },
      {
        id: 'jersey-2-5-violeta-oscuro',
        espesor: '2,5 mm',
        color: 'Violeta oscuro',
        precio: 5000,
        imagen: 'https://http2.mlstatic.com/D_Q_NP_676960-MLA88788876868_082025-R.webp',
        muestra: '#4B237A',
      },
    ],
  },
  {
    id: 'simil-neopreno',
    nombre: 'Símil neopreno',
    categoria: 'Símil neopreno',
    descripcion: 'Estructura firme y excelente presencia visual.',
    variantes: [
      {
        id: 'simil-neopreno-2-5-negro',
        espesor: '2,5 mm',
        color: 'Negro',
        precio: 5800,
        imagen:
          'https://dummyimage.com/900x700/1F1F1F/FFFFFF&text=Simil+Neopreno+Negro',
        muestra: '#1F1F1F',
      },
    ],
  },
  {
    id: 'velour-bondeado',
    nombre: 'Velour bondeado',
    categoria: 'Velour',
    descripcion: 'Textura suave y aspecto elegante.',
    variantes: [
      {
        id: 'velour-2-5-negro',
        espesor: '2,5 mm',
        color: 'Negro',
        precio: 6200,
        imagen:
          'https://dummyimage.com/900x700/2B2B2B/FFFFFF&text=Velour+Negro',
        muestra: '#2B2B2B',
      },
    ],
  },
  {
    id: 'bondeado-para-relleno',
    nombre: 'Bondeado para relleno',
    categoria: 'Bondeado para relleno',
    descripcion: 'Consultá por las características y disponibilidad de esta tela.',
    variantes: [{
      id: 'relleno-a-consultar',
      espesor: 'A consultar',
      color: 'A consultar',
      precio: null,
      imagen: '',
      muestra: '#BFC8CC',
    }],
  },
  {
    id: 'ecocuero-bondeado',
    nombre: 'Ecocuero bondeado',
    categoria: 'Ecocuero bondeado',
    descripcion: 'Consultá por las características y disponibilidad de esta tela.',
    variantes: [{
      id: 'ecocuero-a-consultar',
      espesor: 'A consultar',
      color: 'A consultar',
      precio: null,
      imagen: '',
      muestra: '#BFC8CC',
    }],
  },
]

const filtros = [
  'Todas las telas',
  'Jersey',
  'Símil neopreno',
  'Velour',
  'Bondeado para relleno',
  'Ecocuero bondeado',
]

const WHATSAPP = '5491173438981'

const MINIMO_MINORISTA = 5
const LIMITE_MAYORISTA = 50

// Precio escalonado del Jersey: se calcula sobre todos los colores juntos.
function precioJerseyPorMetro(metros: number) {
  if (metros >= 25) return 5500
  if (metros >= 20) return 5900
  if (metros >= 10) return 6500
  return 6900
}

const formatoPrecio = (valor: number | null) =>
  valor === null ? 'Precio a consultar' : '$' + valor.toLocaleString('es-AR')

function crearClave(productoId: string, varianteId: string) {
  return `${productoId}__${varianteId}`
}

export default function CatalogoMinorista() {
  const router = useRouter()
  const [filtroActivo, setFiltroActivo] = useState('Todas las telas')
  const [cantidades, setCantidades] = useState<Record<string, string>>({})
  const [carrito, setCarrito] = useState<Record<string, number>>({})
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [productoSeleccionado, setProductoSeleccionado] = useState<string | null>(null)
  const [selecciones, setSelecciones] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      productos.map((producto) => [producto.id, producto.variantes[0].id])
    )
  )

  const mapaVariantes = useMemo(() => {
    const mapa: Record<
      string,
      {
        producto: Producto
        variante: Variante
      }
    > = {}

    productos.forEach((producto) => {
      producto.variantes.forEach((variante) => {
        mapa[crearClave(producto.id, variante.id)] = {
          producto,
          variante,
        }
      })
    })

    return mapa
  }, [])

  const productosFiltrados =
    filtroActivo === 'Todas las telas'
      ? productos
      : productos.filter((producto) => producto.categoria === filtroActivo)

  const itemsCarrito = Object.entries(carrito)
    .filter(([, metros]) => metros > 0)
    .map(([clave, metros]) => ({
      clave,
      metros,
      ...mapaVariantes[clave],
    }))

  const cantidadProductos = itemsCarrito.length

  const totalMetros = itemsCarrito.reduce(
    (total, item) => total + item.metros,
    0
  )

  const metrosJersey = itemsCarrito
    .filter((item) => item.producto.id === 'jersey-bondeado')
    .reduce((total, item) => total + item.metros, 0)
  const precioJersey = precioJerseyPorMetro(metrosJersey)

  function precioFinalPorMetro(producto: Producto, variante: Variante) {
    return producto.id === 'jersey-bondeado' ? precioJersey : variante.precio
  }

  const tienePrecioAConsultar = itemsCarrito.some((item) => item.variante.precio === null)
  const totalPrecio = itemsCarrito.reduce(
    (total, item) => total + (precioFinalPorMetro(item.producto, item.variante) ?? 0) * item.metros,
    0
  )
  const resumenPrecio = tienePrecioAConsultar ? 'A confirmar' : formatoPrecio(totalPrecio)

  const productosMayoristas = productos.filter((producto) =>
    itemsCarrito
      .filter((item) => item.producto.id === producto.id)
      .reduce((total, item) => total + item.metros, 0) >= LIMITE_MAYORISTA
  )
  const ahorroJersey = metrosJersey * (6900 - precioJersey)

  function seleccionarEspesor(producto: Producto, espesor: string) {
    const varianteActual = producto.variantes.find(
      (variante) => variante.id === selecciones[producto.id]
    )

    const colorActual = varianteActual?.color

    const nuevaVariante =
      producto.variantes.find(
        (variante) =>
          variante.espesor === espesor &&
          variante.color === colorActual
      ) ||
      producto.variantes.find(
        (variante) => variante.espesor === espesor
      )

    if (!nuevaVariante) return

    setSelecciones((actual) => ({
      ...actual,
      [producto.id]: nuevaVariante.id,
    }))
  }

  function seleccionarColor(producto: Producto, color: string) {
    const varianteActual = producto.variantes.find(
      (variante) => variante.id === selecciones[producto.id]
    )

    const espesorActual = varianteActual?.espesor

    const nuevaVariante =
      producto.variantes.find(
        (variante) =>
          variante.color === color &&
          variante.espesor === espesorActual
      ) ||
      producto.variantes.find(
        (variante) => variante.color === color
      )

    if (!nuevaVariante) return

    setSelecciones((actual) => ({
      ...actual,
      [producto.id]: nuevaVariante.id,
    }))
  }

  function agregarProducto(producto: Producto) {
    const varianteId = selecciones[producto.id]
    const clave = crearClave(producto.id, varianteId)
    const cantidad = Number(cantidades[clave] ?? '0')

    if (!Number.isInteger(cantidad) || cantidad < MINIMO_MINORISTA) return

    setCarrito((actual) => ({
      ...actual,
      [clave]: (actual[clave] || 0) + cantidad,
    }))

    setCantidades((actual) => ({
      ...actual,
      [clave]: '5',
    }))

    setCarritoAbierto(true)
  }

  function modificarMetros(clave: string, cambio: number) {
    setCarrito((actual) => ({
      ...actual,
      [clave]: Math.max(MINIMO_MINORISTA, (actual[clave] || 0) + cambio),
    }))
  }

  function eliminarProducto(clave: string) {
    setCarrito((actual) => ({
      ...actual,
      [clave]: 0,
    }))
  }

  // Guarda el carrito completo para recuperarlo en el catálogo mayorista.
  // También incluye lo que el cliente está seleccionando en la ventana actual.
  function irAlMayorista(productoPendiente?: Producto, variantePendiente?: Variante, metrosPendientes?: number) {
    const lineas = itemsCarrito.map((item) => ({
      productoId: item.producto.id,
      nombre: item.producto.nombre,
      varianteId: item.variante.id,
      color: item.variante.color,
      espesor: item.variante.espesor,
      metros: item.metros,
      imagen: item.variante.imagen,
      muestra: item.variante.muestra,
    }))

    if (productoPendiente && variantePendiente && metrosPendientes && metrosPendientes >= MINIMO_MINORISTA) {
      const existente = lineas.find((linea) =>
        linea.productoId === productoPendiente.id && linea.varianteId === variantePendiente.id
      )
      if (existente) {
        existente.metros += metrosPendientes
      } else {
        lineas.push({
          productoId: productoPendiente.id,
          nombre: productoPendiente.nombre,
          varianteId: variantePendiente.id,
          color: variantePendiente.color,
          espesor: variantePendiente.espesor,
          metros: metrosPendientes,
          imagen: variantePendiente.imagen,
          muestra: variantePendiente.muestra,
        })
      }
    }

    try {
      window.sessionStorage.setItem('bontex-carrito-traspaso-mayorista', JSON.stringify(lineas))
    } catch {
      // El enlace sigue funcionando si el navegador bloquea el almacenamiento.
    }
    router.push('/catalogo/mayorista?desde=minorista')
  }

  function realizarPedido() {
    if (itemsCarrito.length === 0) return

    const detalle = itemsCarrito
      .map((item) => {
        const precioUnitario = precioFinalPorMetro(item.producto, item.variante)
        const subtotal = precioUnitario === null ? null : precioUnitario * item.metros

        return (
          `• ${item.metros} metros de ${item.producto.nombre}\n` +
          `  Espesor: ${item.variante.espesor}\n` +
          `  Color: ${item.variante.color}\n` +
          `  Precio por metro: ${formatoPrecio(precioUnitario)}\n` +
          `  Subtotal: ${formatoPrecio(subtotal)}`
        )
      })
      .join('\n\n')

    const mensaje =
      '¡Hola! Vine desde la página de Bontex y quiero realizar este pedido:\n\n' +
      '*PEDIDO MINORISTA*\n\n' +
      detalle +
      '\n\nTotal de metros: ' +
      totalMetros +
      '\nTotal del pedido: ' +
      resumenPrecio +
      (ahorroJersey > 0 ? '\nAhorro Jersey por volumen: ' + formatoPrecio(ahorroJersey) : '') +
      (productosMayoristas.length > 0 ? '\nCantidad mayorista alcanzada en: ' + productosMayoristas.map(p => p.nombre).join(', ') : '') +
      '\n\n¿Me confirman la disponibilidad de las telas seleccionadas?\n¡Gracias!'

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`
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

      {/* RESUMEN DEL CARRITO */}
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
                {resumenPrecio}
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

      {/* FILTROS */}
      <section className="mx-auto max-w-7xl px-5 pt-8">
        <div className="flex flex-wrap items-center gap-3">
          {filtros.map((filtro) => {
            const activo = filtroActivo === filtro

            return (
              <button
                key={filtro}
                type="button"
                onClick={() => setFiltroActivo(filtro)}
                className={
                  activo
                    ? 'rounded-full bg-[#1e4d5c] px-5 py-2.5 text-sm font-semibold text-white'
                    : 'rounded-full border border-[#1e4d5c]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#1e4d5c] transition hover:border-[#1e4d5c]/40 hover:bg-[#edf4f5]'
                }
              >
                {filtro}
              </button>
            )
          })}
        </div>
      </section>

      {/* PRODUCTOS: UNA TARJETA POR TIPO DE TELA */}
      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {productosFiltrados.map((producto) => {
            const varianteSeleccionada =
              producto.variantes.find(
                (variante) => variante.id === selecciones[producto.id]
              ) || producto.variantes[0]

            return (
              <article
                key={producto.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  {(producto.id === 'jersey-bondeado' || producto.variantes[0].imagen) ? (
                    <img
                      src={producto.id === 'jersey-bondeado' ? '/images/telas-bondeadas.jpeg' : producto.variantes[0].imagen}
                      alt={`Foto de portada de ${producto.nombre}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#dce8eb] text-sm text-[#1e4d5c]">
                      Fotografía próximamente
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b9aa4]">
                    {producto.categoria}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#102b36]">
                    {producto.nombre}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {producto.descripcion}
                  </p>
                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-xs text-slate-500">Precio por metro</p>
                    <p className="mt-1 text-2xl font-bold text-[#1e4d5c]">
                      {producto.id === 'jersey-bondeado' ? 'Desde $5.500' : formatoPrecio(varianteSeleccionada.precio)}
                    </p>
                    {producto.id === 'jersey-bondeado' && (
                      <p className="mt-1 text-xs text-slate-500">De $6.900 a $5.500/m según cantidad. Mínimo 5 m.</p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setProductoSeleccionado(producto.id)}
                    className="mt-6 flex w-full items-center justify-center rounded-lg bg-[#1e4d5c] px-5 py-3.5 font-semibold text-white transition hover:bg-[#286b7d]"
                  >
                    Comprar esta tela
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* VENTANA DE COMPRA: FOTO IZQUIERDA Y OPCIONES DERECHA */}
      {productoSeleccionado && (() => {
        const producto = productos.find((p) => p.id === productoSeleccionado)
        if (!producto) return null

        const varianteSeleccionada =
          producto.variantes.find(
            (variante) => variante.id === selecciones[producto.id]
          ) || producto.variantes[0]
        const claveSeleccionada = crearClave(producto.id, varianteSeleccionada.id)
        const cantidad = cantidades[claveSeleccionada] ?? '5'
        const numero = Number(cantidad)
        const cantidadValida =
          cantidad !== '' && Number.isInteger(numero) && numero >= MINIMO_MINORISTA
        const metrosDelProductoEnCarrito = itemsCarrito
          .filter(item => item.producto.id === producto.id)
          .reduce((total, item) => total + item.metros, 0)
        const metrosPrevistos = metrosDelProductoEnCarrito + (Number.isInteger(numero) && numero > 0 ? numero : 0)
        const precioPreview = producto.id === 'jersey-bondeado'
          ? precioJerseyPorMetro(metrosPrevistos)
          : varianteSeleccionada.precio
        const subtotalPreview = precioPreview === null ? null : precioPreview * numero
        const espesoresUnicos = Array.from(
          new Set(producto.variantes.map((variante) => variante.espesor))
        )
        const coloresUnicos = Array.from(
          new Set(producto.variantes.map((variante) => variante.color))
        )

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <button
              type="button"
              aria-label="Cerrar selección de tela"
              onClick={() => setProductoSeleccionado(null)}
              className="absolute inset-0 bg-black/70"
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Comprar ${producto.nombre}`}
              className="relative z-10 grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl md:grid-cols-2"
            >
              <div className="relative min-h-56 bg-slate-200 sm:min-h-80 md:min-h-[530px]">
                {varianteSeleccionada.imagen ? (
                  <img
                    src={varianteSeleccionada.imagen}
                    alt={`${producto.nombre}, color ${varianteSeleccionada.color}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#dce8eb] text-[#1e4d5c]">
                    Fotografía próximamente
                  </div>
                )}
              </div>

              <div className="relative p-6 pt-14 sm:p-9 sm:pt-14">
                <button
                  type="button"
                  onClick={() => setProductoSeleccionado(null)}
                  aria-label="Cerrar ventana"
                  className="absolute right-5 top-4 rounded-full border border-slate-200 p-2 text-[#102b36] transition hover:bg-slate-100"
                >
                  <X size={22} />
                </button>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39798a]">
                  {producto.categoria}
                </p>
                <h2 className="mt-2 font-serif text-4xl text-[#102b36]">
                  {producto.nombre}
                </h2>
                <p className="mt-3 text-sm text-slate-500">{producto.descripcion}</p>

                <div className="mt-7 border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-[#102b36]">Espesor</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {espesoresUnicos.map((espesor) => (
                      <button
                        key={espesor}
                        type="button"
                        onClick={() => seleccionarEspesor(producto, espesor)}
                        className={
                          varianteSeleccionada.espesor === espesor
                            ? 'rounded-lg bg-[#1e4d5c] px-5 py-2.5 text-sm font-semibold text-white'
                            : 'rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#102b36] hover:border-[#1e4d5c]'
                        }
                      >
                        {espesor}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#102b36]">
                    Color: <span className="font-normal">{varianteSeleccionada.color}</span>
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {coloresUnicos.map((color) => {
                      const varianteColor =
                        producto.variantes.find((variante) => variante.color === color) ||
                        producto.variantes[0]
                      const activo = varianteSeleccionada.color === color

                      return (
                        <button
                          key={color}
                          type="button"
                          onClick={() => seleccionarColor(producto, color)}
                          aria-label={`Elegir color ${color}`}
                          aria-pressed={activo}
                          title={color}
                          className={
                            activo
                              ? 'rounded-full border-2 border-[#1e4d5c] p-1.5'
                              : 'rounded-full border-2 border-transparent p-1.5 hover:border-slate-300'
                          }
                        >
                          <span
                            className="block size-8 rounded-full border border-slate-300"
                            style={{ backgroundColor: varianteColor.muestra }}
                          />
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-7 border-t border-slate-200 pt-6">
                  <p className="text-xs text-slate-500">Precio por metro</p>
                  {producto.id === 'jersey-bondeado' && (
                    precioPreview !== null && precioPreview < 6900
                      ? <p className="mt-1 text-sm text-slate-400 line-through">$6.900 / metro</p>
                      : <p className="mt-1 text-sm text-slate-500">Sin descuento por pocas unidades</p>
                  )}
                  <p className="mt-1 text-3xl font-bold text-[#1e4d5c]">
                    {formatoPrecio(precioPreview)}
                    <span className="ml-2 text-sm font-normal text-slate-500">/ metro</span>
                  </p>
                  {producto.id === 'jersey-bondeado' && (
                    <div className="mt-3 space-y-1 text-xs text-slate-600">
                      <p>5 a 9 m: $6.900 · 10 a 19 m: $6.500</p>
                      <p>20 a 24 m: $5.900 · desde 25 m: $5.500</p>
                      <p>Se suman todos los colores de Jersey de tu carrito para obtener el descuento.</p>
                      {metrosPrevistos >= MINIMO_MINORISTA && (
                        <p className="font-semibold text-emerald-700">{precioPreview < 6900 ? 'Total con descuento' : 'Total a pagar'}: {formatoPrecio(subtotalPreview)}{precioPreview < 6900 ? ` · Ahorrás ${formatoPrecio((6900 - precioPreview) * numero)} en esta selección` : ''}</p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <label
                    htmlFor="metros-ventana-compra"
                    className="text-sm font-semibold text-[#102b36]"
                  >
                    Metros
                  </label>
                  <input
                    id="metros-ventana-compra"
                    type="number"
                    min="5"
                    step="5"
                    placeholder="5"
                    value={cantidad}
                    onChange={(e) =>
                      setCantidades((actual) => ({
                        ...actual,
                        [claveSeleccionada]: e.target.value,
                      }))
                    }
                    className="w-28 rounded-lg border border-slate-300 px-3 py-3 text-center text-[#102b36]"
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">Mínimo de compra: 5 metros por selección.</p>
                {metrosPrevistos >= LIMITE_MAYORISTA && (
                  <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
                    <p className="font-semibold">Estás comprando la cantidad mínima para poder acceder al precio mayorista.</p>
                    <button type="button" onClick={() => irAlMayorista(producto, varianteSeleccionada, numero)} className="mt-3 inline-flex rounded-lg bg-[#1e4d5c] px-4 py-3 font-semibold text-white hover:bg-[#286b7d]">Acceder al catálogo mayorista <ArrowLeft className="ml-2 rotate-180" size={16} /></button>
                  </div>
                )}
                <button
                  type="button"
                  disabled={!cantidadValida}
                  onClick={() => {
                    agregarProducto(producto)
                    setProductoSeleccionado(null)
                  }}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1e4d5c] px-5 py-4 font-semibold text-white transition hover:bg-[#286b7d] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Plus size={19} />
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        )
      })()}

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
              {resumenPrecio}
            </p>
          </div>
        </button>
      )}

      {/* PANEL LATERAL DEL CARRITO */}
      {carritoAbierto && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Cerrar carrito"
            onClick={() => setCarritoAbierto(false)}
            className="absolute inset-0 bg-black/60"
          />

          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Tu carrito de compras"
            className="absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
          >
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

            <div className="flex-1 overflow-y-auto px-5 py-6">
              {itemsCarrito.length === 0 ? (
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
                  {itemsCarrito.map((item) => (
                    <div
                      key={item.clave}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <div className="flex justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-[#102b36]">
                            {item.producto.nombre}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {item.variante.espesor} · {item.variante.color}
                          </p>

                                  <p className="mt-1 text-sm text-slate-500">
                            {formatoPrecio(precioFinalPorMetro(item.producto, item.variante))} / metro
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => eliminarProducto(item.clave)}
                          aria-label={`Eliminar ${item.variante.color}`}
                          className="self-start text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={19} />
                        </button>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => modificarMetros(item.clave, -5)}
                            disabled={item.metros <= MINIMO_MINORISTA}
                            aria-label="Restar cinco metros"
                            className="rounded-lg border border-slate-300 p-2"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="min-w-12 text-center font-semibold text-[#102b36]">
                            {item.metros} m
                          </span>

                          <button
                            type="button"
                            onClick={() => modificarMetros(item.clave, 5)}
                            aria-label="Sumar cinco metros"
                            className="rounded-lg border border-slate-300 p-2"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <strong className="text-[#1e4d5c]">
                          {formatoPrecio(
                                                         precioFinalPorMetro(item.producto, item.variante) === null ? null : precioFinalPorMetro(item.producto, item.variante)! * item.metros
                          )}
                        </strong>
                      </div>
                    </div>
                  ))}

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
                  {resumenPrecio}
                </strong>
              </div>

              {ahorroJersey > 0 && (
                <p className="mt-3 font-semibold text-emerald-700">Ahorrás {formatoPrecio(ahorroJersey)} en Jersey respecto del precio de lista.</p>
              )}
              {productosMayoristas.length > 0 && (
                <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
                  <p className="font-semibold">Estás comprando la cantidad mínima para poder acceder al precio mayorista.</p>
                  <p className="mt-1 text-xs">{productosMayoristas.map(p => p.nombre).join(', ')}: 50 metros o más.</p>
                  <button type="button" onClick={() => irAlMayorista()} className="mt-3 inline-flex rounded-lg bg-[#1e4d5c] px-4 py-3 font-semibold text-white hover:bg-[#286b7d]">Acceder al catálogo mayorista <ArrowLeft className="ml-2 rotate-180" size={16} /></button>
                </div>
              )}
              <p className="mt-3 text-xs text-slate-500">Total sujeto a confirmación comercial.</p>

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

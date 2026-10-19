
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo de telas' },
  { href: '/servicio', label: 'Servicio de bondeado' },
  { href: '/#mayoristas', label: 'Nosotros' },
  { href: '/#contacto', label: 'Contacto' },
]

export function Logo({
  className,
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-baseline gap-1.5 text-xl tracking-tight',
        className
      )}
    >
      <span
        className={cn(
          'font-extrabold',
          light ? 'text-white' : 'text-petrol'
        )}
      >
        Bontex
      </span>

      <span
        className={cn(
          'font-light',
          light ? 'text-teal-soft' : 'text-[#6a8592]'
        )}
      >
        Bondeados
      </span>
    </span>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function paginaActiva(href: string) {
    if (href === '/') {
      return pathname === '/'
    }

    if (href === '/catalogo') {
      return pathname.startsWith('/catalogo')
    }

    if (href === '/servicio') {
      return pathname.startsWith('/servicio')
    }

    return false
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* LOGO */}
        <a
          href="/"
          aria-label="Bontex Bondeados, ir al inicio"
        >
          <Logo className="text-2xl" />
        </a>

        {/* MENÚ COMPUTADORA */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = paginaActiva(item.href)

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'relative py-2 text-sm font-medium tracking-wide transition-colors',
                      'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-teal-soft',
                      isActive
                        ? 'text-petrol after:scale-x-100'
                        : 'text-slate-ink/70 after:scale-x-0 hover:text-petrol hover:after:scale-x-100'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* BOTÓN MENÚ CELULAR */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-petrol md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}

          <span className="sr-only">
            Abrir o cerrar menú
          </span>
        </button>
      </div>

      {/* MENÚ CELULAR */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="border-t border-border bg-white md:hidden"
        >
          <ul className="flex flex-col px-5 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-base font-medium text-petrol"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

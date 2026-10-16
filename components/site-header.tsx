'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'productos', label: 'Catalogo de telas' },
  { id: 'servicio', label: 'Servicio de bondeado' },
  { id: 'mayoristas', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
]

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('inline-flex items-baseline gap-1.5 text-xl tracking-tight', className)}>
      <span className={cn('font-extrabold', light ? 'text-white' : 'text-petrol')}>Bontex</span>
      <span className={cn('font-light', light ? 'text-teal-soft' : 'text-[#6a8592]')}>Bondeados</span>
    </span>
  )
}

export function SiteHeader() {
  const [active, setActive] = useState('inicio')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="Bontex Bondeados, ir al inicio">
          <Logo className="text-2xl" />
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'relative py-2 text-sm font-medium tracking-wide transition-colors',
                      'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-teal-soft after:transition-transform after:duration-300',
                      isActive
                        ? 'text-petrol after:scale-x-100'
                        : 'text-slate-ink/70 after:scale-x-0 hover:text-petrol hover:after:scale-x-100',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-petrol transition-colors hover:bg-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navegación móvil" className="border-t border-border bg-white md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-3 border-b border-border/60 py-3.5 text-base font-medium last:border-0',
                    active === item.id ? 'text-petrol' : 'text-slate-ink/75',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn('h-4 w-0.5 rounded-full', active === item.id ? 'bg-teal-soft' : 'bg-transparent')}
                  />
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

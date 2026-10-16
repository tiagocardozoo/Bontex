import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/site-header'

const CONTACT = [
  { icon: Phone, label: 'Teléfono', value: '+54 9 11 3539-9183', href: 'tel:+5491135399183' },
  { icon: Mail, label: 'Email', value: 'bontexbondeados@yahoo.com', href: 'mailto:bontexbondeados@yahoo.com' },
  { icon: MapPin, label: 'Ubicación', value: 'Lomas Del Mirador, Buenos Aires, Argentina', href: undefined },
]

export function SiteFooter() {
  return (
    <footer id="contacto" aria-labelledby="contacto-title" className="scroll-mt-20 bg-slate-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-soft">Contacto</p>
            <h2 id="contacto-title" className="mt-4 font-serif text-4xl font-medium text-balance md:text-5xl">
              Estamos para asesorarte.
            </h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {CONTACT.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-teal-soft">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-white/50">{label}</span>
                  {href ? (
                    <a href={href} className="text-white/90 transition-colors hover:text-teal-soft">
                      {value}
                    </a>
                  ) : (
                    <span className="text-white/90">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <Logo light />
          <p>© {new Date().getFullYear()} Bontex Bondeados. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

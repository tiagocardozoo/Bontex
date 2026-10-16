import { Factory, Headphones, Truck, Users } from 'lucide-react'

const BENEFITS = [
  { icon: Factory, title: 'Quiénes somos', text: 'Experiencia y compromiso textil.', href: '#nosotros' },
  { icon: Users, title: 'Ventas mayoristas', text: 'Condiciones especiales para tu negocio.', href: '#mayoristas' },
  { icon: Truck, title: 'Envíos a todo el país', text: 'Llegamos donde nos necesites.', href: '#contacto' },
  { icon: Headphones, title: 'Contacto', text: 'Estamos para asesorarte.', href: '#contacto' },
]

export function Benefits() {
  return (
    <section aria-label="Beneficios" className="relative z-10 -mt-16 px-5 md:-mt-20 md:px-8">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_60px_-30px_rgba(20,45,56,0.35)] sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map(({ icon: Icon, title, text, href }, i) => (
          <li
            key={title}
            className={[
              'border-border',
              i > 0 ? 'border-t sm:border-t-0' : '',
              i % 2 === 1 ? 'sm:border-l' : '',
              i >= 2 ? 'sm:border-t lg:border-t-0' : '',
              i === 2 ? 'lg:border-l' : '',
            ].join(' ')}
          >
            <a href={href} className="group flex items-center gap-4 px-6 py-7 transition-colors hover:bg-muted/70 lg:px-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-petrol/15 bg-accent text-petrol transition-colors group-hover:border-teal-soft group-hover:bg-white">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-[15px] font-semibold text-slate-ink">{title}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{text}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

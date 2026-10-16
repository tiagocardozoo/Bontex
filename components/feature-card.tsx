import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type FeatureCardProps = {
  href: string
  image: string
  imageAlt: string
  titleTop: string
  titleBottom: string
  description: [string, string]
  cta: string
  highlighted?: boolean
}

export function FeatureCard({
  href,
  image,
  imageAlt,
  titleTop,
  titleBottom,
  description,
  cta,
  highlighted = false,
}: FeatureCardProps) {
  return (
    <a
      href={href}
      className={cn(
        'group relative flex min-h-[340px] flex-col items-center justify-end overflow-hidden rounded-2xl px-6 pb-9 pt-16 text-center md:min-h-[400px] md:px-10',
        'ring-1 transition-all duration-500 ease-out hover:-translate-y-1',
        'shadow-[0_20px_50px_-20px_rgba(5,20,28,0.65)] hover:shadow-[0_30px_70px_-20px_rgba(5,20,28,0.85)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-soft',
        highlighted
          ? 'ring-teal-soft/60 shadow-[0_30px_70px_-20px_rgba(5,20,28,0.85),0_0_0_1px_rgba(124,195,204,0.25)]'
          : 'ring-white/10 hover:ring-teal-soft/50',
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0c1f27]/90 via-[#102a35]/45 to-[#102a35]/5 transition-opacity duration-500 group-hover:opacity-95"
      />

      <h2 className="font-sans text-3xl font-extrabold uppercase leading-[1.05] tracking-[0.08em] text-white md:text-4xl">
        {titleTop}
        <br />
        {titleBottom}
      </h2>
      <span aria-hidden="true" className="mt-5 h-px w-12 bg-teal-soft transition-all duration-500 group-hover:w-20" />
      <p className="mt-5 text-sm leading-relaxed text-white/75 md:text-base">
        {description[0]}
        <br className="hidden sm:block" /> {description[1]}
      </p>
      <span
        className={cn(
          'mt-7 inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors duration-300',
          highlighted
            ? 'border-teal-soft/70 bg-petrol group-hover:bg-petrol-deep'
            : 'border-teal-soft/40 bg-petrol/70 backdrop-blur-sm group-hover:border-teal-soft/70 group-hover:bg-petrol',
        )}
      >
        {cta}
        <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  )
}

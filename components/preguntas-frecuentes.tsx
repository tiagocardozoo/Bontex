
import { ChevronDown } from 'lucide-react'

const preguntas = [
  {
    pregunta: '¿Hacen envíos a todo el país?',
    respuesta:
      '¡Sí! Realizamos envíos a todo el país a través de Andreani, Vía Cargo, Correo Argentino o el transporte que prefiera el cliente.',
  },
  {
    pregunta: '¿Puedo comprar telas por menor?',
    respuesta:
      'Sí. Contamos con un catálogo minorista donde podés elegir las telas disponibles, indicar la cantidad de metros y enviarnos tu pedido directamente por WhatsApp.',
  },
  {
    pregunta: '¿Realizan ventas mayoristas?',
    respuesta:
      'Sí. Trabajamos con empresas, fabricantes y emprendedores. Los pedidos mayoristas son a partir de 50 metros por tipo de tela, con precios a convenir.',
  },
  {
    pregunta: '¿Puedo llevar mis propias telas para bondear?',
    respuesta:
      '¡Por supuesto! En Bontex ofrecemos el servicio de bondeado para las telas que nos proporciona cada cliente. Consultanos para coordinar el trabajo según tus necesidades.',
  },
  {
    pregunta: '¿Con qué espesores de espuma trabajan?',
    respuesta:
      'Trabajamos con espesores de espuma de 2, 2,5, 3, 4, 5 y 10 mm. También podemos conversar sobre las distintas opciones de terminación, con o sin respaldo.',
  },
]

export function PreguntasFrecuentes() {
  return (
    <section
      id="preguntas-frecuentes"
      className="bg-[#102b36] px-5 py-16 text-white md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ed0db]">
            TE AYUDAMOS
          </p>

          <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl">
            Preguntas frecuentes
          </h2>

          <p className="mt-4 text-base text-white/65">
            Todo lo que necesitás saber sobre nuestros
            productos y servicios.
          </p>
        </div>

        <div className="space-y-3">
          {preguntas.map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-[#8ed0db]/25 bg-white/5 transition-colors open:bg-white/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-semibold marker:hidden [&::-webkit-details-marker]:hidden md:px-7">
                <span className="text-base md:text-lg">
                  {item.pregunta}
                </span>

                <ChevronDown
                  size={21}
                  className="shrink-0 text-[#8ed0db] transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-white/10 px-5 pb-6 pt-5 md:px-7">
                <p className="max-w-3xl leading-relaxed text-white/75">
                  {item.respuesta}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

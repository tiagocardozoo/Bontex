
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
      className="bg-white px-5 py-16 text-[#102b36] md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* TÍTULO ALINEADO A LA IZQUIERDA */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#39798a]">
            TE AYUDAMOS
          </p>

          <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl">
            Preguntas frecuentes
          </h2>

          <p className="mt-4 text-base text-slate-500">
            Todo lo que necesitás saber sobre nuestros
            productos y servicios.
          </p>
        </div>

        {/* PREGUNTAS SEPARADAS POR LÍNEAS */}
        <div className="border-t border-[#102b36]/20">
          {preguntas.map((item, index) => (
            <details
              key={index}
              className="group border-b border-[#102b36]/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left marker:hidden [&::-webkit-details-marker]:hidden md:py-7">

                <span className="text-base font-semibold text-[#102b36] md:text-lg">
                  {item.pregunta}
                </span>

                <ChevronDown
                  size={23}
                  className="shrink-0 text-[#39798a] transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              {/* RESPUESTA DESPLEGABLE */}
              <div className="pb-7 pr-10">
                <p className="max-w-4xl text-base leading-relaxed text-slate-600">
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

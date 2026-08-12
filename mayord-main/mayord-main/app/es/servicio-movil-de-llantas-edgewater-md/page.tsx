import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react"
import { siteConfig } from "@/lib/data"
import { serviceAreas } from "@/lib/service-areas"
import {
  pageMetadata,
  breadcrumbSchema,
  mobileServiceSchema,
  faqPageSchema,
  jsonLdProps,
} from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"

const PAGE_PATH = "/es/servicio-movil-de-llantas-edgewater-md"

export const metadata: Metadata = pageMetadata({
  title: "Servicio Móvil de Llantas en Edgewater y Annapolis, MD — Vamos a Usted",
  description:
    "¿Llanta ponchada y no puede manejar? Mayo RD lleva el servicio móvil de llantas a usted en Edgewater, Annapolis, Riva y Mayo — cambios de ponchadura, instalación de repuesto y llantas usadas en su medida. Llame al 240-595-8547, abierto 7 días.",
  path: PAGE_PATH,
})

const bullets = [
  "Cambio de llanta ponchada o instalación segura del repuesto en el lugar",
  "Llanta usada o nueva llevada a usted en su medida",
  "Reemplazo de vástago de válvula mientras estamos ahí",
  "Despachado por teléfono en horario de tienda, 7 días a la semana",
]

const faqs: FaqItem[] = [
  {
    question: "¿Van a mi ubicación a cambiar una llanta?",
    answer:
      "Sí. Eso es exactamente lo que es nuestro servicio móvil de llantas — vamos a su casa, trabajo, o donde sea que esté detenido con seguridad y cambiamos o reemplazamos la llanta en el lugar. Solo llámenos con su ubicación y medida de llanta y vamos en camino durante el horario de tienda.",
  },
  {
    question: "¿Qué tan lejos viajan para el servicio móvil?",
    answer:
      "Cubrimos aproximadamente 15 minutos de manejo — unas 10 millas — desde nuestra tienda en 175 Mayo Rd en Edgewater. Eso incluye Edgewater, Annapolis, Riva, Mayo, Davidsonville y las comunidades cercanas. ¿Un poco más lejos? Llame y le confirmamos si podemos llegar en aproximadamente un minuto.",
  },
  {
    question: "¿Cuánto cuesta el servicio móvil de llantas?",
    answer:
      "El servicio móvil comienza con una tarifa de visita que se aplica al costo de su servicio, más el precio de la reparación o la llanta. El precio depende de su medida de llanta y de lo que requiera el trabajo, así que confirmamos el número con usted por teléfono antes de despachar — sin sorpresas al llegar.",
  },
  {
    question: "¿Qué tan rápido pueden llegar?",
    answer:
      "Depende de dónde esté y qué tan ocupada esté la tienda ese día, pero áreas cercanas como Riva y Mayo suelen estar a solo unos minutos. Le damos un estimado honesto de llegada cuando llame — no prometemos una hora que no podamos cumplir.",
  },
  {
    question: "¿Pueden llevar una llanta usada en mi medida a mi ubicación?",
    answer:
      "Usualmente, sí. Díganos su medida de llanta (está impresa en el costado, como 205/55R16) y revisamos nuestro inventario usado y nuevo antes de salir, para llevar la llanta correcta con nosotros cuando esté disponible.",
  },
  {
    question: "¿Ofrecen servicio móvil de llantas en Annapolis?",
    answer:
      "Sí. Annapolis es una de nuestras áreas de servicio móvil más comunes — Forest Drive, Bay Ridge, West Street y el corredor de la US-50 están todos a corta distancia cruzando el South River desde nuestra tienda.",
  },
  {
    question: "¿Qué pasa si mi llanta no se puede reparar en el lugar?",
    answer:
      "Si una llanta no se puede reparar con seguridad, podemos instalar su repuesto o reemplazarla con una llanta usada o nueva en su medida ahí mismo. Y si el problema es mayor que la llanta — un rin dañado o una ubicación insegura — se lo diremos honestamente y recomendaremos una grúa.",
  },
  {
    question: "¿Ofrecen servicio móvil los domingos?",
    answer:
      "Sí. Despachamos servicio móvil durante el horario de tienda los siete días de la semana, incluyendo el domingo (9am–4pm). Llámenos y si estamos abiertos, haremos lo posible por llegar a usted.",
  },
]

const WHATSAPP_MESSAGE = "¡Hola! Necesito asistencia móvil de llantas. Esta es mi ubicación:"

export default function MobileTireServicePageEs() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Inicio", path: "/es" },
    { name: "Servicios", path: "/es/servicios" },
    { name: "Servicio Móvil de Llantas", path: PAGE_PATH },
  ])

  return (
    <>
      <script {...jsonLdProps(mobileServiceSchema({ path: PAGE_PATH }))} />
      <script {...jsonLdProps(faqPageSchema(faqs))} />
      <script {...jsonLdProps(breadcrumbs)} />

      {/* ===== Above the fold: high-converting hero ===== */}
      <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-brand-orange mb-6">
                <Truck size={14} />
                Servicio Móvil de Llantas
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-balance">
                SERVICIO MÓVIL DE LLANTAS EN{" "}
                <span className="text-brand-orange">EDGEWATER Y ANNAPOLIS</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-text-muted leading-relaxed mb-8 max-w-xl text-pretty">
                ¿Llanta ponchada y no puede manejar? Quédese donde está. Le llevamos la
                llanta y las herramientas en Edgewater, Annapolis, Riva y Mayo — y lo
                ponemos en marcha de nuevo.
              </p>

              <ul className="flex flex-col gap-3 mb-10">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/15">
                      <Check size={14} className="text-brand-orange" />
                    </span>
                    <span className="font-medium text-brand-text">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneCallLink
                  label="mobile_assistance_es"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors text-lg"
                >
                  <Phone size={22} />
                  LLAME AHORA: {siteConfig.phone}
                </PhoneCallLink>
                <WhatsAppLink
                  label="mobile_assistance_es"
                  message={WHATSAPP_MESSAGE}
                  className="border-2 border-brand-surface-light hover:border-brand-orange hover:text-brand-orange text-brand-text px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
                >
                  Comparta su ubicación por WhatsApp
                </WhatsAppLink>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-brand-text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Star size={16} className="fill-brand-orange text-brand-orange" />
                  4.4 estrellas · 206 reseñas
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} className="text-brand-orange" />
                  Abierto 7 días
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-brand-orange" />
                  Hablamos Español
                </span>
              </div>
            </div>

            {/* Coverage snapshot card */}
            <div className="rounded-2xl border border-brand-surface-light bg-brand-surface/40 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange">
                  <MapPin size={24} className="text-white" fill="currentColor" />
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-white leading-none">
                    Ubicados en 175 Mayo Rd
                  </p>
                  <p className="text-sm text-brand-text-muted mt-1">
                    Edgewater, MD 21037
                  </p>
                </div>
              </div>
              <p className="font-label text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
                Vamos a usted en ~15 min (unas 10 millas)
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-brand-text-muted">
                {[
                  "Edgewater",
                  "Annapolis",
                  "Riva",
                  "Mayo",
                  "Davidsonville",
                  "Selby-on-the-Bay",
                  "Londontowne",
                  "Beverly Beach",
                ].map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Below the fold: substantial SEO content ===== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                ¿Qué es el servicio móvil de llantas — y cuándo debe llamarlo?
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  El servicio móvil de llantas significa que vamos a su vehículo en lugar
                  de que usted venga a nosotros. En vez de arriesgarse a manejar con una
                  ponchadura — o pagar una grúa por un auto que solo necesita una llanta —
                  usted llama, nos dice dónde está, y llevamos la solución a su entrada, al
                  estacionamiento de su trabajo, o donde sea que esté detenido con seguridad.
                </p>
                <p>
                  Es la opción correcta cuando una llanta está completamente ponchada,
                  reventada o destrozada y no puede manejar con seguridad hasta la tienda.
                  Si su auto todavía es seguro para manejar despacio, la opción más rápida
                  y económica suele ser traerlo directamente a 175 Mayo Rd, donde tenemos
                  todo nuestro inventario de llantas a mano. Ante la duda, llame y le
                  ayudamos a decidir honestamente.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Qué llevamos, y qué podemos hacer en el lugar
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  Nuestro equipo móvil resuelve los problemas de llantas más comunes en la
                  carretera justo donde usted está. Cuando llame, díganos su medida de
                  llanta — está impresa en el costado, algo como 205/55R16 — para cargar la
                  llanta correcta antes de salir. En el lugar típicamente podemos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cambiar una llanta ponchada e instalar su repuesto</li>
                  <li>Reemplazar una llanta dañada con una usada o nueva en su medida</li>
                  <li>Cambiar un vástago de válvula agrietado o con fuga</li>
                  <li>Ponerlo de nuevo en la carretera con seguridad, sin grúa</li>
                </ul>
                <p>
                  Para cualquier cosa que requiera la tienda completa — montaje y balanceo
                  de un juego, programación de sensores TPMS, o trabajo de rines — lo
                  ponemos en marcha y, si es necesario, terminamos el trabajo en la tienda.
                  Conozca todo lo que hacemos en nuestra página de{" "}
                  <Link
                    href="/es/servicios"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    servicios de llantas
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                A dónde vamos: unos 15 minutos desde nuestra tienda en Edgewater
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  Nuestro rango móvil es de aproximadamente 15 minutos de manejo — unas 10
                  millas — desde 175 Mayo Rd. Eso cubre cómodamente Edgewater, Annapolis,
                  Riva, la península de Mayo, Davidsonville, Selby-on-the-Bay, Londontowne,
                  Beverly Beach y los vecindarios intermedios. Si está un poco más lejos, no
                  asuma que no podemos ayudar — llame y le confirmamos si podemos llegar en
                  aproximadamente un minuto.
                </p>
                <p>
                  Servimos a las comunidades de <strong className="text-brand-dark">Annapolis</strong>,{" "}
                  <strong className="text-brand-dark">Riva</strong>,{" "}
                  <strong className="text-brand-dark">Davidsonville</strong> y{" "}
                  <strong className="text-brand-dark">Mayo</strong>, entre otras.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Cómo funciona el precio
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  El servicio móvil comienza con una tarifa de visita que cubre ir a su
                  ubicación — y esa tarifa se aplica al costo de su servicio, así que no
                  paga dos veces. Además de eso, paga por lo que el trabajo realmente
                  necesita: una reparación de ponchadura, la instalación del repuesto, o una
                  llanta usada o nueva en su medida.
                </p>
                <p>
                  Como el total depende de su llanta y situación específica, confirmamos el
                  precio con usted por teléfono antes de despachar. Usted aprueba el número
                  primero — sin cargos sorpresa cuando llegamos. Es el mismo precio honesto
                  y directo por el que nos conocen nuestros vecinos.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Tiempos de respuesta y horario — dichos con honestidad
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  Despachamos servicio móvil durante el horario de tienda, siete días a la
                  semana: de lunes a sábado desde las 8am (hasta las 6:30pm la mayoría de
                  los días, 6pm el jueves) y el domingo de 9am a 4pm. Las llamadas móviles se
                  atienden junto con el trabajo en la tienda, así que los tiempos de llegada
                  varían según qué tan ocupados estemos ese día.
                </p>
                <p>
                  No prometemos un tiempo de respuesta garantizado que no podamos cumplir.
                  Lo que sí haremos es darle un estimado honesto de llegada cuando llame — y
                  áreas cercanas como Riva y Mayo suelen estar a solo unos minutos. Llame al{" "}
                  {siteConfig.phone} y le decimos con franqueza.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Cuándo le diremos que llame a una grúa en su lugar
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  El servicio móvil de llantas no siempre es la respuesta correcta, y se lo
                  diremos. Si su vehículo está detenido en un carril de tráfico activo, en un
                  puente angosto, o en cualquier lugar donde no sea seguro trabajar, primero
                  necesita una grúa o asistencia policial — no un técnico de llantas. Lo
                  mismo aplica si el daño va más allá de la llanta, como un rin doblado o daño
                  a la suspensión que no se puede arreglar en la carretera.
                </p>
                <p>
                  Preferimos perder una llamada antes que darle un mal consejo. Si una grúa
                  es la opción más segura e inteligente, se lo diremos honestamente y lo
                  orientaremos en la dirección correcta. Así nos hemos ganado la confianza de
                  nuestros vecinos — y eso no va a cambiar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-brand-dark py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-label text-xs font-bold uppercase tracking-widest text-brand-orange">
              Preguntas Frecuentes del Servicio Móvil
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 text-balance">
              Preguntas frecuentes
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ===== Service-area links ===== */}
      <section className="bg-brand-surface/30 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center text-balance">
            Servicio móvil de llantas cerca de usted
          </h2>
          <p className="text-brand-text-muted text-center mb-10 max-w-2xl mx-auto">
            Vamos a estas comunidades y a todo lo que hay entre ellas. Llámenos para
            detalles de su zona.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href="/es/contacto"
                className="group flex items-center justify-between rounded-xl border border-brand-surface-light bg-brand-surface/50 px-6 py-5 transition-colors hover:border-brand-orange"
              >
                <span className="flex items-center gap-3">
                  <MapPin size={20} className="text-brand-orange" />
                  <span className="font-heading font-bold text-white">
                    Servicio Móvil de Llantas en {area.town}, MD
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="text-brand-text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-orange"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            ¿Atrapado con una ponchadura? Llámenos — vamos a usted.
          </h2>
          <p className="text-white/90 text-lg font-medium mb-8">
            Abierto 7 días · Despachado en horario de tienda · Hablamos Español
          </p>
          <PhoneCallLink
            label="mobile_assistance_es"
            className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-lg font-bold font-label text-lg transition-colors"
          >
            <Phone size={22} />
            LLAME {siteConfig.phone}
          </PhoneCallLink>
        </div>
      </section>
    </>
  )
}

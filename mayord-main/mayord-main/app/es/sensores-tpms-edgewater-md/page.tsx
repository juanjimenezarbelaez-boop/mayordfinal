import type { Metadata } from "next"
import { Battery, CheckCircle2, Clock, Gauge, MapPin, Phone, RotateCcw, Star } from "lucide-react"
import { hoursEs, siteConfig } from "@/lib/data"
import { localBusinessSchema, faqPageSchema, jsonLdProps, pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"
import LandingStickyBar from "@/components/landing/landing-sticky-bar"
import OpenStatus from "@/components/landing/open-status"

const LANDING_LABEL = "landing_tpms_es"
const WHATSAPP_MESSAGE = "¡Hola! Mi luz de TPMS / presión de llantas está encendida. ¿Me pueden ayudar?"

export const metadata: Metadata = pageMetadata({
  title: "Reemplazo y Programación de Sensores TPMS | Edgewater MD | Mayo RD",
  description:
    "¿Luz de TPMS encendida? Instalamos, programamos y reprogramamos sensores de presión de llantas para todas las marcas y modelos en Edgewater, MD — mientras espera. Abierto 7 días. Llame al 240-595-8547.",
  path: "/es/sensores-tpms-edgewater-md",
  absoluteTitle: true,
})

const explainers = [
  {
    icon: RotateCcw,
    title: "¿Luz encendida tras cambiar llantas?",
    body: "Los sensores suelen necesitar reprogramación a su vehículo después de montar llantas nuevas. Los reajustamos para que la luz se apague.",
  },
  {
    icon: Battery,
    title: "¿Batería del sensor agotada?",
    body: "Los sensores TPMS duran unos años y luego la batería se agota. Reemplazamos el sensor dañado y programamos uno nuevo al momento.",
  },
  {
    icon: Gauge,
    title: "¿Rines o llantas nuevas?",
    body: "¿Un juego de rines nuevo? Instalamos sensores nuevos y vástagos de válvula para que cada llanta reporte la presión correctamente.",
  },
]

const included = [
  "Sensor TPMS nuevo",
  "Instalación profesional",
  "Programación a su vehículo",
  "Reinicio de la luz de advertencia",
]

const trust = [
  { icon: Star, label: "4.4 estrellas · 206 reseñas" },
  { icon: Clock, label: "Entra y sale en ~20 minutos" },
  { icon: CheckCircle2, label: "Abierto 7 días" },
  { icon: Gauge, label: "Negocio familiar" },
]

const faqs: FaqItem[] = [
  {
    question: "¿Puedo manejar con la luz de TPMS encendida?",
    answer:
      "Puede manejar distancias cortas, pero no debe ignorarla. La luz significa que una o más llantas pueden estar bajas de presión — o que un sensor falló. La presión baja afecta el manejo, el consumo de gasolina y la vida de la llanta, y puede provocar un reventón. Lo mejor es revisarla el mismo día.",
  },
  {
    question: "¿Cuánto tarda el reemplazo del sensor?",
    answer:
      "La mayoría de los reemplazos y reprogramaciones de sensores TPMS se hacen mientras espera — usualmente unos 20 minutos. No necesita cita; solo venga o llame antes para confirmar que tenemos su sensor en existencia.",
  },
  {
    question: "¿Programan sensores para cualquier marca de auto?",
    answer:
      "Sí. Instalamos y programamos sensores TPMS para todas las marcas y modelos — nacionales, importados, autos, camionetas y SUVs. Reajustamos los sensores a su vehículo específico para que la luz del tablero se apague correctamente.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "El costo depende del tipo de sensor de su vehículo, e incluye el sensor, la instalación, la programación a su vehículo y el reinicio de la luz de advertencia. Llámenos con su año, marca y modelo y le damos el número exacto.",
  },
]

export default function TpmsServiceLandingPageEs() {
  return (
    <div className="bg-brand-dark text-brand-text pb-20 lg:pb-0">
      <script {...jsonLdProps(localBusinessSchema())} />
      <script {...jsonLdProps(faqPageSchema(faqs))} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            ¿Luz de TPMS encendida? <span className="text-brand-orange">La arreglamos hoy.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-text-muted text-pretty sm:text-xl">
            Instalación, programación y reprogramación de sensores TPMS para todas las
            marcas y modelos, mientras espera. Llame para una cotización rápida.
          </p>

          <OpenStatus locale="es" className="mt-6 flex items-center gap-2 font-label text-base font-bold sm:text-lg" />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PhoneCallLink label={LANDING_LABEL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-5 font-label text-xl font-bold text-white transition-colors hover:bg-brand-orange-hover">
              <Phone size={24} />
              LLAME AHORA: {siteConfig.phone}
            </PhoneCallLink>
            <WhatsAppLink
              label={LANDING_LABEL}
              message={WHATSAPP_MESSAGE}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-surface-light px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Escríbanos por WhatsApp
            </WhatsAppLink>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-brand-text-muted sm:text-base">
            <span className="inline-flex items-center gap-1 font-bold text-brand-orange">
              4.4
              <Star size={16} className="fill-current" />
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>206 reseñas</span>
            <span aria-hidden="true">&middot;</span>
            <span>Todas las marcas y modelos</span>
            <span aria-hidden="true">&middot;</span>
            <span>Sin cita previa</span>
          </p>
        </div>
      </section>

      {/* 2. Explainer row */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            ¿Por qué está encendida mi luz de TPMS?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {explainers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand-surface-light bg-brand-surface/60 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-4 font-label text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-brand-text-muted text-pretty">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What's included */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-brand-orange/40 bg-brand-surface p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                  Todo incluido, sin sorpresas
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <CheckCircle2 size={20} className="flex-shrink-0 text-brand-orange" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <PhoneCallLink
                label={LANDING_LABEL}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-orange px-8 py-6 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
              >
                <Phone size={20} />
                LLAME POR PRECIOS
              </PhoneCallLink>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust row */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <item.icon size={22} className={item.icon === Star ? "fill-current" : ""} />
                </div>
                <span className="font-label font-bold text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            Preguntas sobre TPMS, respondidas
          </h2>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 6. Map + hours + directions */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-brand-surface-light">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="Mapa a Mayo RD Tire Shop, 175 Mayo Rd, Edgewater, MD"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Venga directamente
            </h2>
            <p className="mt-4 flex items-start gap-3 text-brand-text-muted">
              <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <span>{siteConfig.address.full}</span>
            </p>
            <p className="mt-3 flex items-start gap-3 text-brand-text-muted">
              <Phone size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <PhoneCallLink label={LANDING_LABEL} className="font-bold text-white hover:text-brand-orange">
                {siteConfig.phone}
              </PhoneCallLink>
            </p>

            <div className="mt-5 flex items-start gap-3">
              <Clock size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <ul className="w-full max-w-xs space-y-1 text-sm">
                {hoursEs.map((row) => (
                  <li
                    key={row.day}
                    className="flex justify-between gap-4 text-brand-text-muted"
                  >
                    <span className="font-medium text-white">{row.day}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <DirectionsLink
              label={LANDING_LABEL}
              className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
            >
              <MapPin size={20} />
              CÓMO LLEGAR
            </DirectionsLink>
          </div>
        </div>
      </section>

      {/* Minimal footer: address, phone, hours, privacy */}
      <footer className="border-t border-brand-surface-light bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-brand-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-1">
            <p className="font-label font-bold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p>{siteConfig.address.full}</p>
            <p>
              <PhoneCallLink label={LANDING_LABEL} className="hover:text-brand-orange">
                {siteConfig.phone}
              </PhoneCallLink>{" "}
              &middot; Abierto 7 días &middot; Sin cita previa
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span>
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </span>
            <a href="#" className="hover:text-white">
              Privacidad
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile sticky bottom bar */}
      <LandingStickyBar label={LANDING_LABEL} locale="es" />
    </div>
  )
}

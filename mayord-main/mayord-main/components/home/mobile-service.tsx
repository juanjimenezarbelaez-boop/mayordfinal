import Link from "next/link"
import { Check, MapPin, Phone } from "lucide-react"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import { siteConfig } from "@/lib/data"
import type { Locale } from "@/lib/i18n"

const copy = {
  en: {
    badge: "Mobile Tire Assistance",
    heading: (
      <>
        MOBILE TIRE SERVICE —
        <br />
        <span className="text-brand-orange">WE COME TO YOU.</span>
      </>
    ),
    body: "Flat tire at home, work, or on the road? Our mobile tire service covers everything within about 15 minutes of our Edgewater shop.",
    bullets: [
      "Tire change or flat assistance on location",
      "Available during shop hours, 7 days a week",
      "Service call fee applies, credited toward your service",
      "Dispatched by phone for the fastest response",
    ],
    callCta: "CALL FOR MOBILE SERVICE: ",
    whatsappCta: "Share your location on WhatsApp",
    whatsappMessage: "Hi! I need mobile tire assistance. Here is my location:",
    learnMorePre: "Learn how it works, pricing, and coverage on our ",
    learnMoreLink: "mobile tire service in Edgewater",
    learnMorePost: " page.",
    learnMoreHref: "/mobile-tire-service-edgewater-md",
    radiusLabel: "~15 min radius",
    mapFooter: "A little farther out? Call — we'll confirm in one minute.",
  },
  es: {
    badge: "Asistencia Móvil de Llantas",
    heading: (
      <>
        SERVICIO MÓVIL DE LLANTAS —
        <br />
        <span className="text-brand-orange">VAMOS HASTA DONDE USTED ESTÁ.</span>
      </>
    ),
    body: "¿Llanta ponchada en casa, el trabajo o en el camino? Nuestro servicio móvil cubre todo dentro de unos 15 minutos de nuestro taller en Edgewater.",
    bullets: [
      "Cambio de llanta o asistencia por ponchadura en su ubicación",
      "Disponible en horario de taller, los 7 días de la semana",
      "Se aplica un cargo por visita, que se acredita a su servicio",
      "Se despacha por teléfono para la respuesta más rápida",
    ],
    callCta: "LLAME PARA SERVICIO MÓVIL: ",
    whatsappCta: "Comparta su ubicación por WhatsApp",
    whatsappMessage: "¡Hola! Necesito asistencia móvil de llantas. Aquí está mi ubicación:",
    learnMorePre: "Conozca cómo funciona, los precios y la cobertura en nuestra página de ",
    learnMoreLink: "servicio móvil de llantas en Edgewater",
    learnMorePost: ".",
    learnMoreHref: "/es/servicio-movil-de-llantas-edgewater-md",
    radiusLabel: "~15 min de radio",
    mapFooter: "¿Un poco más lejos? Llámenos — le confirmamos en un minuto.",
  },
}

// 12 covered communities distributed around the radius circle.
const communities = [
  "Edgewater",
  "Mayo",
  "Riva",
  "Selby-on-the-Bay",
  "Beverly Beach",
  "Londontowne",
  "Annapolis",
  "Parole",
  "Hillsmere Shores",
  "Davidsonville",
  "Galesville",
  "Harwood",
]

export default function MobileService({ locale = "en" }: { locale?: Locale }) {
  const t = copy[locale]

  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + CTAs */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-brand-orange mb-6">
              <MapPin size={14} />
              {t.badge}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">
              {t.heading}
            </h2>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-8 max-w-lg text-pretty">
              {t.body}
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {t.bullets.map((bullet) => (
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
                label="mobile_assistance"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={20} />
                {t.callCta}
                {siteConfig.phone}
              </PhoneCallLink>
              <WhatsAppLink
                label="mobile_assistance"
                message={t.whatsappMessage}
                className="border-2 border-brand-surface-light hover:border-brand-orange hover:text-brand-orange text-brand-text px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
              >
                {t.whatsappCta}
              </WhatsAppLink>
            </div>

            <p className="mt-6 text-brand-text-muted">
              {t.learnMorePre}
              <Link
                href={t.learnMoreHref}
                className="font-bold text-brand-orange hover:underline"
              >
                {t.learnMoreLink}
              </Link>
              {t.learnMorePost}
            </p>
          </div>

          {/* Right: stylized radius map */}
          <div>
            <div className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl border border-brand-surface-light bg-brand-surface/40 p-6">
              {/* concentric radius rings */}
              <div className="absolute inset-[8%] rounded-full border border-brand-surface-light/70" />
              <div className="absolute inset-[22%] rounded-full border border-dashed border-brand-orange/40" />
              <div className="absolute inset-[36%] rounded-full border border-brand-orange/70 bg-brand-orange/5" />

              {/* radius label */}
              <span className="absolute left-1/2 top-[9%] -translate-x-1/2 font-label text-xs font-bold uppercase tracking-widest text-brand-orange">
                {t.radiusLabel}
              </span>

              {/* community markers distributed around the circle */}
              {communities.map((name, i) => {
                // start half a step past top-center so no marker collides with the radius label
                const angle =
                  (i / communities.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / 12
                const radius = 38 // percent from center
                const left = 50 + radius * Math.cos(angle)
                const top = 50 + radius * Math.sin(angle)
                const isShop = name === "Edgewater"
                return (
                  <div
                    key={name}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                    style={{ top: `${top}%`, left: `${left}%` }}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isShop ? "bg-brand-orange" : "bg-brand-text-muted"
                      }`}
                    />
                    <span
                      className={`whitespace-nowrap font-label text-[10px] font-semibold uppercase tracking-wide ${
                        isShop ? "text-brand-orange" : "text-brand-text-muted"
                      }`}
                    >
                      {name}
                    </span>
                  </div>
                )
              })}

              {/* center pin: the shop */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange shadow-lg shadow-brand-orange/30">
                  <MapPin size={26} className="text-white" fill="currentColor" />
                </div>
                <span className="whitespace-nowrap rounded-full bg-brand-dark px-3 py-1 font-label text-xs font-bold uppercase tracking-wide text-white">
                  175 Mayo Rd
                </span>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-brand-text-muted">
              {t.mapFooter}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

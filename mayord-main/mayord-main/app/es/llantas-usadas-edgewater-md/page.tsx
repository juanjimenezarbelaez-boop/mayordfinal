import type { Metadata } from "next"
import {
  BadgeCheck,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Timer,
  Users,
} from "lucide-react"
import { hoursEs, siteConfig } from "@/lib/data"
import { localBusinessSchema, jsonLdProps, pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"
import QuoteForm from "@/components/landing/quote-form"
import LandingStickyBar from "@/components/landing/landing-sticky-bar"

const LANDING_LABEL = "landing_used_tires"
const WHATSAPP_MESSAGE = "¡Hola! Quisiera verificar disponibilidad de llantas usadas."

export const metadata: Metadata = pageMetadata({
  title: "Llantas Usadas Edgewater MD | Inspeccionadas e Instaladas | Mayo RD Tire Shop",
  description:
    "Llantas usadas inspeccionadas en Edgewater, MD — montaje y balanceo incluidos. Cientos en inventario, las mejores marcas, entra y sale en ~20 minutos. Llame al 240-595-8547 para verificar su medida.",
  path: "/es/llantas-usadas-edgewater-md",
  absoluteTitle: true,
  locale: "es",
})

const reasons = [
  {
    icon: ShieldCheck,
    title: "Cada llanta inspeccionada",
    body: "Revisamos la profundidad de la banda, los costados y la edad de cada llanta usada antes de ponerla en su carro. Nada de basura.",
  },
  {
    icon: BadgeCheck,
    title: "Las mejores marcas en inventario",
    body: "Michelin, Goodyear, Firestone, Continental y más — cientos de llantas en las medidas más populares.",
  },
  {
    icon: Timer,
    title: "Entra y sale en ~20 minutos",
    body: "Venga sin cita previa. La mayoría de las instalaciones se hacen mientras espera.",
  },
  {
    icon: Users,
    title: "Negocio familiar — consejos honestos",
    body: "Somos un taller familiar local. Le decimos la verdad sobre lo que necesita y lo que no.",
  },
]

const reviews = [
  {
    name: "Rachel M.",
    quote: "10 minutos después ya tenía una llanta en mi carro.",
  },
  {
    name: "Gina S.",
    quote: "Entré y salí rápido. Excelente negocio local.",
  },
  {
    name: "Trent J.",
    quote: "Rápido, honesto y a un precio justo.",
  },
]

export default function LlantasUsadasLandingPage() {
  return (
    <div className="bg-brand-dark text-brand-text pb-20 lg:pb-0">
      <script {...jsonLdProps(localBusinessSchema())} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Llantas Usadas en <span className="text-brand-orange">Edgewater, MD</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-text-muted text-pretty sm:text-xl">
            Llantas usadas inspeccionadas, montadas y balanceadas. Cientos en
            inventario — llame para verificar su medida.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PhoneCallLink
              label={LANDING_LABEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
            >
              <Phone size={20} />
              LLAME {siteConfig.phone} — VERIFICAR MI MEDIDA
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
            <span>Negocio Familiar</span>
            <span aria-hidden="true">&middot;</span>
            <span>Abierto 7 Días</span>
            <span aria-hidden="true">&middot;</span>
            <span>Sin cita previa</span>
          </p>
        </div>
      </section>

      {/* 2. Fit anchor cards */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {["PASAJEROS", "SUV / CAMIONETA", "COMERCIAL / LT"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-brand-surface-light bg-brand-surface p-6 text-center"
              >
                <p className="font-label text-sm font-bold tracking-wider text-brand-text-muted">
                  {label}
                </p>
                <p className="mt-2 font-label text-lg font-bold text-white">
                  En inventario, listas para instalar
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm font-medium text-brand-text-muted">
            Cada llanta usada incluye montaje y balanceo.
          </p>
        </div>
      </section>

      {/* 3. Why buy used from Mayo RD */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            Por qué comprar usadas en Mayo RD
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <reason.icon size={24} />
                </div>
                <div>
                  <h3 className="font-label text-lg font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-brand-text-muted text-pretty">
                    {reason.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="rounded-2xl border border-brand-surface-light bg-brand-surface p-6"
              >
                <div className="mb-3 flex gap-0.5 text-brand-orange" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium text-white text-pretty">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-label text-sm font-bold tracking-wide text-brand-text-muted">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mini form */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
              Verifique disponibilidad en un mensaje
            </h2>
            <p className="mt-4 max-w-md text-lg text-brand-text-muted text-pretty">
              Envíe su medida de llanta o vehículo y le respondemos por mensaje para
              confirmar que la tenemos en inventario. Sin presión, sin spam.
            </p>
          </div>
          <QuoteForm label={LANDING_LABEL} locale="es" />
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
              Visite el taller
            </h2>
            <p className="mt-4 flex items-start gap-3 text-brand-text-muted">
              <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <span>{siteConfig.address.full}</span>
            </p>
            <p className="mt-3 flex items-start gap-3 text-brand-text-muted">
              <Phone size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <PhoneCallLink
                label={LANDING_LABEL}
                className="font-bold text-white hover:text-brand-orange"
              >
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

      {/* Minimal footer */}
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

      {/* 7. Mobile sticky bottom bar */}
      <LandingStickyBar label={LANDING_LABEL} locale="es" />
    </div>
  )
}

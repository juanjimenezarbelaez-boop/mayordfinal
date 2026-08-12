import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarClock,
  Clock,
  Gauge,
  MapPin,
  Phone,
  Star,
  TrendingUp,
} from "lucide-react"
import { hoursEs, siteConfig } from "@/lib/data"
import { localBusinessSchema, jsonLdProps, pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"
import LandingStickyBar from "@/components/landing/landing-sticky-bar"
import OpenStatus from "@/components/landing/open-status"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"

const LANDING_LABEL = "landing_tire_rotation_es"
const WHATSAPP_MESSAGE = "¡Hola! Me gustaría que roten mis llantas."

export const metadata: Metadata = pageMetadata({
  title: "Rotación de Llantas Edgewater MD | ~15 Min, Sin Cita | Mayo RD",
  description:
    "Rotación de llantas rápida en Edgewater, MD — prolongue la vida de sus llantas y mantenga el desgaste parejo. Sin cita, la mayoría de los trabajos en unos 15 minutos. Llame al 240-595-8547.",
  path: "/es/rotacion-de-llantas-edgewater-md",
  absoluteTitle: true,
})

const benefits = [
  { icon: TrendingUp, title: "Mayor vida de la llanta", body: "El desgaste parejo en las cuatro llantas significa que obtiene el máximo de millas de cada juego." },
  { icon: Gauge, title: "Mejor tracción y manejo", body: "Las llantas delanteras y traseras se desgastan diferente — rotarlas mantiene el agarre consistente en cada temporada." },
  { icon: CalendarClock, title: "Cada 5,000-7,500 millas", body: "La mayoría de los fabricantes recomiendan rotar en cada segundo cambio de aceite para mantenerse al día." },
]

const steps = [
  { n: "1", title: "Venga, sin cita", body: "Sin cita previa — solo llegue y nosotros nos encargamos." },
  { n: "2", title: "Rotamos de adelante hacia atrás", body: "Las llantas se mueven a la posición correcta según el patrón de tracción de su vehículo." },
  { n: "3", title: "De vuelta a la carretera rápido", body: "La mayoría de las rotaciones se hacen en unos 15 minutos, entra y sale." },
]

const faqs: FaqItem[] = [
  {
    question: "¿Con qué frecuencia debo rotar mis llantas?",
    answer:
      "La mayoría de los conductores deben rotar cada 5,000-7,500 millas para mantener el desgaste parejo y prolongar la vida de la llanta. Revise el manual de su vehículo para la recomendación exacta.",
  },
  {
    question: "¿Necesito cita?",
    answer:
      "No — siempre son bienvenidos sin cita. Venga y usualmente tendremos su rotación lista en unos 15 minutos.",
  },
  {
    question: "¿Qué pasa si no roto mis llantas?",
    answer:
      "Los patrones de desgaste desigual se desarrollan más rápido, lo que puede acortar la vida de sus llantas y afectar el manejo, especialmente en lluvia o nieve.",
  },
  {
    question: "¿Debo balancear mis llantas al mismo tiempo?",
    answer:
      "Es una excelente idea combinar ambos. La rotación empareja el desgaste y el balanceo elimina la vibración — muchos conductores hacen los dos en la misma visita.",
  },
]

export default function TireRotationLandingPageEs() {
  return (
    <div className="bg-brand-dark text-brand-text pb-20 lg:pb-0">
      <script {...jsonLdProps(localBusinessSchema())} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Rote Ahora. <span className="text-brand-orange">Cuide sus Llantas.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-text-muted text-pretty sm:text-xl">
            El desgaste parejo significa mayor vida de la llanta y mejor tracción. Venga
            — la mayoría de las rotaciones en unos{" "}
            <span className="font-bold text-white">15 minutos</span>.
          </p>

          <OpenStatus locale="es" className="mt-6 flex items-center gap-2 font-label text-base font-bold sm:text-lg" />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PhoneCallLink
              label={LANDING_LABEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-5 font-label text-xl font-bold text-white transition-colors hover:bg-brand-orange-hover"
            >
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
            <span>Negocio familiar</span>
            <span aria-hidden="true">&middot;</span>
            <span>Sin cita previa</span>
          </p>
        </div>
      </section>

      {/* 2. Why rotate */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            Por qué importa la rotación
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-label text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-brand-text-muted text-pretty">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 3-step strip */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange font-label text-xl font-bold text-white">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-label text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-brand-text-muted text-pretty">{step.body}</p>
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="absolute -right-3 top-6 hidden text-2xl text-brand-orange sm:block"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust row + review */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 text-brand-orange" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="fill-current" />
              ))}
            </div>
            <p className="font-label text-lg font-bold text-white">
              4.4 estrellas &middot; 206 reseñas
            </p>
          </div>
          <figure className="max-w-2xl">
            <blockquote className="text-xl font-medium text-white text-pretty sm:text-2xl">
              &ldquo;Nunca había conocido un taller que se esforzara tanto como este
              lugar&hellip; nunca tienes que esperar mucho. ¡Te atienden y sales
              rápido!&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-label text-sm font-bold tracking-wide text-brand-text-muted">
              &mdash; Jennifer M.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. Cross-path banner: pair with balancing */}
      <section className="border-b border-brand-surface-light bg-brand-orange/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/20 text-brand-orange">
              <Gauge size={26} />
            </div>
            <div>
              <p className="font-label text-xl font-bold uppercase tracking-tight text-white">
                ¿También siente una vibración?
              </p>
              <p className="mt-1 text-brand-text-muted text-pretty">
                Combine su rotación con un{" "}
                <Link
                  href="/es/balanceo-de-llantas-edgewater-md"
                  className="font-bold text-brand-orange hover:underline"
                >
                  balanceo de ruedas
                </Link>{" "}
                para un manejo más suave y duradero.
              </p>
            </div>
          </div>
          <PhoneCallLink
            label="balancing_from_rotation_es"
            className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3.5 font-label text-base font-bold text-white transition-colors hover:bg-brand-orange-hover"
          >
            <Phone size={20} />
            LLAME AHORA
          </PhoneCallLink>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 7. Map + hours + directions */}
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

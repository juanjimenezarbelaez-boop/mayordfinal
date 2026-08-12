import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Cog,
  Gauge,
  Languages,
  MapPin,
  Phone,
  RotateCw,
  Settings,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Users,
  Wrench,
} from "lucide-react"
import { siteConfig } from "@/lib/data"
import { pageMetadata, breadcrumbSchema, jsonLdProps } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"
import ServiceRadiusMap from "@/components/services/service-radius-map"

export const metadata: Metadata = pageMetadata({
  title: "Servicios de Llantas en Edgewater, MD — Reparación, Montaje y Servicio Móvil",
  description:
    "Reparación de ponchaduras, montaje, balanceo, rotación, servicio TPMS y asistencia móvil de llantas en Edgewater, MD. Sin cita previa, la mayoría de servicios en ~20 minutos, abierto 7 días. Vamos hasta donde usted está a ~15 minutos de Edgewater y Annapolis.",
  path: "/es/servicios",
  locale: "es",
})

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", path: "/es" },
  { name: "Servicios", path: "/es/servicios" },
])

const services = [
  {
    icon: ShoppingBag,
    name: "Venta de Llantas (Nuevas y Usadas)",
    description: "Cientos de llantas nuevas y usadas en inventario, listas para instalar hoy.",
    time: "~20 min",
    href: "/es/llantas",
  },
  {
    icon: Wrench,
    name: "Reparación de Ponchaduras",
    description: "Parches y tapones rápidos y confiables para volver al camino con seguridad.",
    time: "~20 min",
    href: "/es/reparacion-de-llantas-edgewater-md",
  },
  {
    icon: Truck,
    name: "Asistencia Móvil de Llantas",
    description: "¿No puede manejar? Vamos hasta donde usted está a ~15 min de Edgewater.",
    time: "En horario de taller",
    featured: true,
    extra: "Disponible en horario de taller • Se despacha por teléfono • Llame para más detalles",
    href: "/es/servicio-movil-de-llantas-edgewater-md",
  },
  {
    icon: Settings,
    name: "Montaje de Llantas",
    description: "Montaje profesional hecho bien desde la primera vez, siempre.",
    time: "~20 min",
    href: "/es/servicios",
  },
  {
    icon: Gauge,
    name: "Balanceo de Llantas",
    description: "Un manejo suave, mejor control y llantas que duran más.",
    time: "~20 min",
    href: "/es/servicios",
  },
  {
    icon: RotateCw,
    name: "Rotación de Llantas",
    description: "Prolongue la vida de sus llantas con un desgaste uniforme. Rápido.",
    time: "~15 min",
    href: "/es/servicios",
  },
  {
    icon: Cog,
    name: "Instalación y Reprogramación de Sensores TPMS",
    description: "Instalamos, programamos y reprogramamos sensores TPMS para todas las marcas.",
    time: "~30 min",
    href: "/es/sensores-tpms-edgewater-md",
  },
  {
    icon: Gauge,
    name: "Sensores TPMS y Válvulas",
    description: "Mantenga la presión precisa con sensores y válvulas nuevas.",
    time: "~20 min",
    href: "/es/sensores-tpms-edgewater-md",
  },
  {
    icon: Sparkles,
    name: "Limpieza de Rines",
    description: "Limpieza profesional de rines y ruedas para un aspecto como nuevo.",
    time: "~20 min",
    href: "/es/servicios",
  },
]

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

const reasons = [
  { icon: Star, title: "4.4★", subtitle: "206 reseñas en Google y Yelp" },
  { icon: Clock, title: "~20 min", subtitle: "Entra y sale, la mayoría de servicios" },
  { icon: Phone, title: "Abierto 7 Días", subtitle: "Sin cita, siempre bienvenido" },
  { icon: Users, title: "Negocio Familiar", subtitle: "y operado localmente" },
  { icon: Languages, title: "Hablamos", subtitle: "Español" },
]

const faqs: FaqItem[] = [
  {
    question: "¿Necesito una cita?",
    answer:
      "No — siempre atendemos sin cita previa. Solo venga y lo atendemos, normalmente en unos 20 minutos. Abrimos los 7 días de la semana.",
  },
  {
    question: "¿Cuánto tarda un cambio de llanta?",
    answer:
      "La mayoría de los cambios, reparaciones y balanceos se hacen en unos 20 minutos. Nos enorgullece atenderlo rápido.",
  },
  {
    question: "¿Van hasta mí si no puedo manejar con mi llanta?",
    answer:
      "Sí. Si su llanta está muy dañada para manejar, nuestra asistencia móvil va hasta usted a unos 15 minutos de Edgewater en horario de taller. Solo llame y enviamos un técnico.",
  },
  {
    question: "¿Hasta dónde llega su servicio móvil?",
    answer:
      "Cubrimos aproximadamente un radio de 15 minutos alrededor de 175 Mayo Rd — Edgewater, Mayo, Riva, Annapolis y comunidades cercanas. ¿Un poco más lejos? Llámenos y le confirmamos en un minuto.",
  },
  {
    question: "¿Pueden apagar la luz de TPMS?",
    answer:
      "Por supuesto. Instalamos, programamos y reprogramamos sensores TPMS para todas las marcas y modelos para apagar esa luz del tablero y mantener la presión precisa.",
  },
  {
    question: "¿Con qué frecuencia debo rotar mis llantas?",
    answer:
      "La mayoría de los conductores deben rotar cada 5,000-7,500 millas para mantener el desgaste uniforme y prolongar la vida de las llantas. Es un servicio rápido.",
  },
  {
    question: "¿Tienen mi medida de llanta en inventario?",
    answer:
      "Mantenemos cientos de llantas nuevas y usadas en inventario en las medidas más populares. Llámenos con su medida y le confirmamos disponibilidad en un minuto.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script {...jsonLdProps(breadcrumbs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
              MONTADAS.
              <br />
              <span className="text-brand-orange">REPARADAS.</span>
              <br />
              BALANCEADAS.
            </h1>
            <div className="mt-8 inline-block">
              <h2 className="bg-brand-orange px-4 py-2 text-3xl font-bold uppercase italic text-white sm:text-4xl">
                LO MANTENEMOS RODANDO.
              </h2>
            </div>

            <div className="mt-10 flex flex-col items-start gap-5">
              <PhoneCallLink label="services_card" className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand-orange px-8 py-4 font-label text-xl font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover">
                <Phone size={24} />
                LLAME {siteConfig.phone}
              </PhoneCallLink>
              <p className="font-label text-sm font-medium uppercase tracking-wide text-brand-text-muted sm:text-base">
                Sin cita previa • La mayoría de servicios en ~20 minutos • Abierto 7
                días • Vamos hasta usted a ~15 min
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="bg-black py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between gap-6 rounded-2xl border-2 border-brand-orange bg-brand-dark p-8">
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  ¿Llanta Ponchada?
                </h3>
                <p className="mt-2 text-brand-text-muted">
                  Venga — la mayoría de reparaciones en ~20 minutos.
                </p>
              </div>
              <PhoneCallLink label="services_card" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-label font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover sm:w-auto">
                <Phone size={20} />
                Llame Ahora
              </PhoneCallLink>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-2xl border-2 border-brand-orange bg-brand-dark p-8">
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  ¿No Puede Manejar?
                </h3>
                <p className="mt-2 text-brand-text-muted">
                  Vamos hasta usted —{" "}
                  <Link
                    href="/es/servicio-movil-de-llantas-edgewater-md"
                    className="font-semibold text-brand-orange hover:underline"
                  >
                    asistencia móvil de llantas
                  </Link>{" "}
                  a ~15 minutos de Edgewater.
                </p>
              </div>
              <PhoneCallLink label="mobile_assistance" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-label font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover sm:w-auto">
                <Truck size={20} />
                Llame Para Servicio Móvil
              </PhoneCallLink>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="bg-brand-dark py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold uppercase text-white sm:text-5xl">
              NUESTROS <span className="text-brand-orange">SERVICIOS</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-text-muted">
              Todo lo que sus llantas necesitan, hecho rápido y bien — en el taller o
              en el camino.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                  service.featured
                    ? "border-2 border-brand-orange bg-brand-surface shadow-[0_8px_40px_rgba(255,94,0,0.12)]"
                    : "border border-brand-surface-light bg-brand-surface/60 hover:border-brand-orange/40"
                }`}
              >
                {service.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-orange px-3 py-1 font-label text-xs font-bold uppercase tracking-widest text-white">
                    Vamos Hasta Usted
                  </span>
                )}
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${
                    service.featured
                      ? "bg-brand-orange/15 text-brand-orange"
                      : "bg-brand-dark text-brand-orange"
                  }`}
                >
                  <service.icon size={30} strokeWidth={1.5} />
                </div>
                <Link href={service.href} className="group/title">
                  <h3 className="font-heading text-xl font-bold uppercase leading-tight text-white transition-colors group-hover/title:text-brand-orange">
                    {service.name}
                  </h3>
                </Link>
                <p className="mt-3 flex-grow leading-relaxed text-brand-text-muted">
                  {service.description}
                </p>

                {service.extra && (
                  <p className="mt-4 rounded-lg bg-brand-dark/60 p-3 text-sm text-brand-text-muted">
                    {service.extra}
                  </p>
                )}

                <div className="mt-6 flex items-center gap-4 border-t border-brand-surface-light pt-5">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-white">
                    <Clock size={15} className="text-brand-orange" />
                    {service.time}
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <PhoneCallLink label="services_card" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-label font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover">
                    <Phone size={18} />
                    Llame Ahora
                  </PhoneCallLink>
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-1.5 font-label text-sm font-bold uppercase tracking-wide text-brand-text-muted transition-colors hover:text-brand-orange"
                  >
                    Más información
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We come to you */}
      <section className="border-y border-brand-surface bg-black py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl">
                ¿VARADO CERCA?
                <br />
                <span className="text-brand-orange">VAMOS HASTA USTED.</span>
              </h2>
              <p className="mt-5 text-lg text-brand-text-muted">
                Nuestra asistencia móvil cubre aproximadamente un radio de 15 minutos
                alrededor del taller. Comunidades que servimos:
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3">
                {communities.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <MapPin size={18} className="flex-shrink-0 text-brand-orange" />
                    <span className="font-medium text-white">{c}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 font-label text-sm font-medium uppercase tracking-wide text-brand-text-muted">
                ¿Un poco más lejos? Llámenos — le confirmamos en un minuto.
              </p>

              <PhoneCallLink label="mobile_assistance" className="mt-6 inline-flex items-center justify-center gap-3 rounded-lg bg-brand-orange px-8 py-4 font-label text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover">
                <Phone size={22} />
                LLAME {siteConfig.phone}
              </PhoneCallLink>
            </div>

            <ServiceRadiusMap locale="es" />
          </div>
        </div>
      </section>

      {/* Why drivers choose Mayo RD */}
      <section className="bg-brand-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase text-white sm:text-4xl">
            POR QUÉ NOS ELIGEN EN <span className="text-brand-orange">MAYO RD</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-surface text-brand-orange">
                  <r.icon size={30} strokeWidth={1.5} />
                </div>
                <p className="font-heading text-2xl font-bold text-white">
                  {r.title}
                </p>
                <p className="mt-1 text-sm text-brand-text-muted">{r.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-surface bg-black py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold uppercase text-white sm:text-5xl">
              PREGUNTAS <span className="text-brand-orange">FRECUENTES</span>
            </h2>
          </div>
          <FaqAccordion items={faqs} />

          <div className="mt-14 text-center">
            <p className="mb-5 text-lg text-brand-text-muted">
              ¿Aún tiene una pregunta? Le respondemos en un minuto.
            </p>
            <PhoneCallLink label="services_card" className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand-orange px-8 py-4 font-label text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover">
              <Phone size={22} />
              LLAME {siteConfig.phone}
            </PhoneCallLink>
          </div>
        </div>
      </section>
    </>
  )
}

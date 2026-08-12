import Link from "next/link"
import {
  ChevronRight,
  Cog,
  Gauge,
  RotateCw,
  Settings,
  ShoppingBag,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react"
import type { Locale } from "@/lib/i18n"

const servicesByLocale = {
  en: [
    {
      icon: ShoppingBag,
      title: ["TIRE", "SALES"],
      description: "New & used tires, ready to install today.",
    },
    {
      icon: Wrench,
      title: ["FLAT TIRE", "REPAIR"],
      description: "Puncture repair you can trust.",
    },
    {
      icon: Truck,
      title: ["MOBILE", "ASSISTANCE"],
      description:
        "Stuck nearby? We come to you — tire help within ~15 minutes of Edgewater.",
      highlight: true,
    },
    {
      icon: Settings,
      title: ["MOUNTING &", "BALANCING"],
      description: "Professional mounting and balancing for a smooth ride.",
    },
    {
      icon: RotateCw,
      title: ["TIRE", "ROTATION"],
      description: "Extend tire life and keep wear even. Quick in-and-out service.",
    },
    {
      icon: Gauge,
      title: ["TPMS", "SENSORS"],
      description:
        "We install, program and reprogram TPMS sensors for all makes. Kill that dashboard light.",
    },
    {
      icon: Cog,
      title: ["TPMS &", "VALVES"],
      description: "We install and service TPMS and valve stems.",
    },
    {
      icon: Sparkles,
      title: ["RIM", "CLEANING"],
      description: "Professional rim and wheel cleaning for a like-new look.",
    },
  ],
  es: [
    {
      icon: ShoppingBag,
      title: ["VENTA DE", "LLANTAS"],
      description: "Llantas nuevas y usadas, listas para instalar hoy.",
    },
    {
      icon: Wrench,
      title: ["REPARACIÓN DE", "LLANTA PONCHADA"],
      description: "Reparación de pinchazos en la que puede confiar.",
    },
    {
      icon: Truck,
      title: ["ASISTENCIA", "MÓVIL"],
      description:
        "¿Varado cerca? Vamos hasta donde usted está — ayuda a ~15 minutos de Edgewater.",
      highlight: true,
    },
    {
      icon: Settings,
      title: ["MONTAJE Y", "BALANCEO"],
      description: "Montaje y balanceo profesional para un manejo suave.",
    },
    {
      icon: RotateCw,
      title: ["ROTACIÓN DE", "LLANTAS"],
      description: "Prolongue la vida de sus llantas con un desgaste uniforme. Servicio rápido.",
    },
    {
      icon: Gauge,
      title: ["SENSORES", "TPMS"],
      description:
        "Instalamos, programamos y reprogramamos sensores TPMS para todas las marcas. Apagamos esa luz del tablero.",
    },
    {
      icon: Cog,
      title: ["TPMS Y", "VÁLVULAS"],
      description: "Instalamos y damos servicio a sensores TPMS y válvulas.",
    },
    {
      icon: Sparkles,
      title: ["LIMPIEZA DE", "RINES"],
      description: "Limpieza profesional de rines y ruedas para un aspecto como nuevo.",
    },
  ],
}

const copy = {
  en: {
    eyebrow: "OUR SERVICES",
    heading: (
      <>
        WE KEEP YOU <br />
        <span className="text-brand-orange">ROLLING</span>
      </>
    ),
    body: "From mounting to repairs, we've got everything you need to stay safe on the road.",
    cta: "VIEW ALL SERVICES",
    href: "/services",
  },
  es: {
    eyebrow: "NUESTROS SERVICIOS",
    heading: (
      <>
        LO MANTENEMOS <br />
        <span className="text-brand-orange">RODANDO</span>
      </>
    ),
    body: "Desde el montaje hasta las reparaciones, tenemos todo lo que necesita para estar seguro en el camino.",
    cta: "VER TODOS LOS SERVICIOS",
    href: "/es/servicios",
  },
}

export default function ServicesPreview({ locale = "en" }: { locale?: Locale }) {
  const services = servicesByLocale[locale]
  const t = copy[locale]

  return (
    <section className="bg-white text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="flex-1 max-w-2xl">
            <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
              {t.eyebrow}
            </h4>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.heading}
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mb-0">{t.body}</p>
          </div>
          <div>
            <Link
              href={t.href}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors lg:mb-4"
            >
              {t.cta}
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title.join(" ")}
              href={t.href}
              className={`relative bg-white rounded-2xl p-8 text-center transition-all group block ${
                service.highlight
                  ? "border-2 border-brand-orange shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                  : "border border-gray-100 hover:border-brand-orange/30 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              }`}
            >
              {service.highlight && (
                <span className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-label font-bold tracking-widest px-2.5 py-1 rounded-full">
                  {locale === "es" ? "NUEVO" : "NEW"}
                </span>
              )}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors ${
                  service.highlight
                    ? "bg-brand-orange/10"
                    : "bg-gray-50 group-hover:bg-brand-orange/10"
                }`}
              >
                <service.icon
                  size={28}
                  className={`transition-colors ${
                    service.highlight
                      ? "text-brand-orange"
                      : "text-gray-900 group-hover:text-brand-orange"
                  }`}
                />
              </div>
              <h3 className="font-label font-bold text-base tracking-widest mb-4">
                {service.title[0]}
                <br />
                {service.title[1]}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

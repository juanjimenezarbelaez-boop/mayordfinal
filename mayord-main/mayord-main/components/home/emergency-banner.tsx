import { Phone, Truck, Wrench } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import PhoneCallLink from "@/components/phone-call-link"

const panelsByLocale = {
  en: [
    {
      icon: Wrench,
      heading: "FLAT TIRE? NAIL IN YOUR TIRE?",
      body: "Drive in now — most repairs done in ~20 minutes. Open 7 days.",
      cta: "CALL NOW",
      featured: false,
      label: "services_card",
    },
    {
      icon: Truck,
      heading: "CAN'T DRIVE ON IT? WE COME TO YOU.",
      body: "Mobile tire assistance within ~15 minutes of Edgewater.",
      cta: "CALL FOR MOBILE SERVICE",
      featured: true,
      label: "mobile_assistance",
    },
  ],
  es: [
    {
      icon: Wrench,
      heading: "¿SE LE PONCHÓ UNA LLANTA?",
      body: "Venga ahora — la mayoría de reparaciones en ~20 minutos. Abierto 7 días.",
      cta: "LLAME AHORA",
      featured: false,
      label: "services_card",
    },
    {
      icon: Truck,
      heading: "¿NO PUEDE MANEJAR? VAMOS HASTA DONDE USTED ESTÁ.",
      body: "Asistencia móvil de llantas a ~15 minutos de Edgewater.",
      cta: "LLAME PARA SERVICIO MÓVIL",
      featured: true,
      label: "mobile_assistance",
    },
  ],
}

export default function EmergencyBanner({ locale = "en" }: { locale?: Locale }) {
  const panels = panelsByLocale[locale]
  return (
    <section className="bg-brand-dark pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {panels.map((panel) => (
            <div
              key={panel.heading}
              className={`rounded-2xl p-8 flex flex-col ${
                panel.featured
                  ? "bg-brand-orange text-white"
                  : "bg-brand-surface border border-brand-surface-light"
              }`}
            >
              <div
                className={`mb-4 ${panel.featured ? "text-white" : "text-brand-orange"}`}
              >
                <panel.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 leading-tight">
                {panel.heading}
              </h3>
              <p
                className={`font-medium mb-8 flex-1 ${
                  panel.featured ? "text-white/90" : "text-brand-text-muted"
                }`}
              >
                {panel.body}
              </p>
              <PhoneCallLink
                label={panel.label}
                className={`px-6 py-3.5 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors w-full sm:w-auto self-start ${
                  panel.featured
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-brand-orange text-white hover:bg-brand-orange-hover"
                }`}
              >
                <Phone size={18} />
                {panel.cta}
              </PhoneCallLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

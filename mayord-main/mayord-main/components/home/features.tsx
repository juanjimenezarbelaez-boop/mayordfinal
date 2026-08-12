import { CircleCheck, Settings, Users, Wrench } from "lucide-react"
import type { Locale } from "@/lib/i18n"

const featuresByLocale = {
  en: [
    {
      icon: CircleCheck,
      title: ["NEW &", "USED TIRES"],
      description: "Carefully inspected for safety and performance.",
    },
    {
      icon: Wrench,
      title: ["EXPERT", "SERVICE"],
      description: "Professional mounting, balancing and repair.",
    },
    {
      icon: Settings,
      title: ["AFFORDABLE", "PRICES"],
      description: "The best value for your money.",
    },
    {
      icon: Users,
      title: ["CUSTOMER", "SATISFACTION"],
      description: "Friendly service you can count on.",
    },
  ],
  es: [
    {
      icon: CircleCheck,
      title: ["LLANTAS NUEVAS", "Y USADAS"],
      description: "Cuidadosamente inspeccionadas para su seguridad y rendimiento.",
    },
    {
      icon: Wrench,
      title: ["SERVICIO", "EXPERTO"],
      description: "Montaje, balanceo y reparación profesional.",
    },
    {
      icon: Settings,
      title: ["PRECIOS", "ACCESIBLES"],
      description: "El mejor valor por su dinero.",
    },
    {
      icon: Users,
      title: ["SATISFACCIÓN", "DEL CLIENTE"],
      description: "Servicio amable en el que puede confiar.",
    },
  ],
}

export default function Features({ locale = "en" }: { locale?: Locale }) {
  const features = featuresByLocale[locale]

  return (
    <section className="bg-brand-dark relative z-20 -mt-16 lg:-mt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title.join(" ")}
              className="bg-brand-surface p-8 rounded-xl border border-brand-surface-light hover:border-brand-orange/50 transition-colors"
            >
              <div className="text-brand-orange mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title[0]}
                <br />
                {feature.title[1]}
              </h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

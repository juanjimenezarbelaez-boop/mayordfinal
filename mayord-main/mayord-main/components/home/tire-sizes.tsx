import { Car, Phone, Tractor, Truck } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import PhoneCallLink from "@/components/phone-call-link"

const categoriesByLocale = {
  en: [
    {
      icon: Car,
      title: "PASSENGER",
      description:
        "Reliable tires for sedans, coupes, and hatchbacks. Built for comfort and daily driving.",
      sizes: ["195/65R15", "205/55R16", "215/55R17"],
    },
    {
      icon: Truck,
      title: "SUV & TRUCK",
      description:
        "Durable options for SUVs, Crossovers, and Light Trucks. Great traction and load capacity.",
      sizes: ["265/70R17", "275/55R20", "245/65R17"],
    },
    {
      icon: Tractor,
      title: "COMMERCIAL",
      description:
        "Heavy-duty tires for commercial vans and work vehicles. Engineered for longevity and heavy loads.",
      sizes: ["LT245/75R16", "LT265/70R17", "225/75R15"],
    },
  ],
  es: [
    {
      icon: Car,
      title: "PASAJEROS",
      description:
        "Llantas confiables para sedanes, cupés y hatchbacks. Hechas para comodidad y uso diario.",
      sizes: ["195/65R15", "205/55R16", "215/55R17"],
    },
    {
      icon: Truck,
      title: "SUV Y CAMIONETA",
      description:
        "Opciones resistentes para SUVs, crossovers y camionetas ligeras. Gran tracción y capacidad de carga.",
      sizes: ["265/70R17", "275/55R20", "245/65R17"],
    },
    {
      icon: Tractor,
      title: "COMERCIAL",
      description:
        "Llantas de trabajo pesado para vans comerciales y vehículos de trabajo. Diseñadas para durabilidad y cargas pesadas.",
      sizes: ["LT245/75R16", "LT265/70R17", "225/75R15"],
    },
  ],
}

const copy = {
  en: {
    eyebrow: "FIND YOUR SIZE",
    heading: (
      <>
        OUR&nbsp;<span className="text-brand-orange">TIRES</span>
      </>
    ),
    body: "We stock a wide variety of quality new and used tires for all types of vehicles. Whether you need a replacement for your daily commuter or heavy-duty tires for your work truck, we've got you covered.",
    ctaHeading: "DON'T SEE YOUR SIZE?",
    ctaBody: "We have hundreds of tires in stock. Call us to check availability!",
    ctaButton: "CHECK INVENTORY",
  },
  es: {
    eyebrow: "ENCUENTRE SU MEDIDA",
    heading: (
      <>
        NUESTRAS&nbsp;<span className="text-brand-orange">LLANTAS</span>
      </>
    ),
    body: "Tenemos una gran variedad de llantas nuevas y usadas de calidad para todo tipo de vehículos. Ya sea que necesite un reemplazo para su carro diario o llantas resistentes para su camioneta de trabajo, lo tenemos cubierto.",
    ctaHeading: "¿NO VE SU MEDIDA?",
    ctaBody: "Tenemos cientos de llantas en inventario. ¡Llámenos para verificar disponibilidad!",
    ctaButton: "VER INVENTARIO",
  },
}

export default function TireSizes({ locale = "en" }: { locale?: Locale }) {
  const categories = categoriesByLocale[locale]
  const t = copy[locale]

  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
            {t.eyebrow}
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.heading}</h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            {t.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-brand-surface p-8 rounded-xl border border-brand-surface-light"
            >
              <div className="text-brand-orange mb-6">
                <category.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <p className="text-brand-text-muted text-sm mb-8">
                {category.description}
              </p>
              <div className="space-y-3 font-label font-medium">
                {category.sizes.map((size) => (
                  <div
                    key={size}
                    className="bg-brand-surface-light px-4 py-3 rounded-lg text-center"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-orange rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">{t.ctaHeading}</h3>
            <p className="text-white/90 font-medium">{t.ctaBody}</p>
          </div>
          <PhoneCallLink
            label="services_card"
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            <Phone size={20} />
            {t.ctaButton}
          </PhoneCallLink>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { CircleCheck } from "lucide-react"
import { images } from "@/lib/data"
import type { Locale } from "@/lib/i18n"

const highlightsByLocale = {
  en: [
    "Family-owned",
    "New tires from top brands",
    "Carefully inspected used tires",
    "Fast, reliable and friendly service",
    "Honest recommendations",
    "Proudly serving Maryland for years",
  ],
  es: [
    "Negocio familiar",
    "Llantas nuevas de las mejores marcas",
    "Llantas usadas cuidadosamente inspeccionadas",
    "Servicio rápido, confiable y amable",
    "Recomendaciones honestas",
    "Sirviendo a Maryland con orgullo por años",
  ],
}

const copy = {
  en: {
    eyebrow: "ABOUT MAYORD",
    heading: (
      <>
        DRIVEN BY
        <br />
        <span className="text-brand-orange">QUALITY</span>.
        <br />
        FOCUSED ON <span className="text-brand-orange">YOU</span>.
      </>
    ),
    body: "Mayo RD Tire Shop is a trusted local business in Maryland known for honest work and outstanding customer service. Our bright orange shop is more than just a place to fix tires—it's a place where our community comes first.",
  },
  es: {
    eyebrow: "SOBRE MAYORD",
    heading: (
      <>
        GUIADOS POR LA
        <br />
        <span className="text-brand-orange">CALIDAD</span>.
        <br />
        ENFOCADOS EN <span className="text-brand-orange">USTED</span>.
      </>
    ),
    body: "Mayo RD Tire Shop es un negocio local de confianza en Maryland, conocido por su trabajo honesto y su excelente servicio al cliente. Nuestro taller naranja es más que un lugar para arreglar llantas: es un lugar donde nuestra comunidad es lo primero.",
  },
}

export default function AboutPreview({ locale = "en" }: { locale?: Locale }) {
  const highlights = highlightsByLocale[locale]
  const t = copy[locale]

  return (
    <section className="bg-brand-dark py-24 border-t border-brand-surface-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
              {t.eyebrow}
            </h4>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.heading}
            </h2>
            <p className="text-lg text-brand-text-muted mb-10 max-w-lg leading-relaxed">
              {t.body}
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CircleCheck size={24} className="text-brand-orange flex-shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[600px] h-[500px] lg:h-full lg:absolute lg:-right-32">
              <Image
                src={images.homeAbout}
                alt="Tire close up"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center rounded-2xl lg:rounded-none"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

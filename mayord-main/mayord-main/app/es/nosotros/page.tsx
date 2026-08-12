import type { Metadata } from "next"
import Image from "next/image"
import { Camera, ChevronRight, HandHeart, MapPin, Phone, Users } from "lucide-react"
import { images, siteConfig } from "@/lib/data"
import { pageMetadata, breadcrumbSchema, jsonLdProps } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import DirectionsLink from "@/components/directions-link"

export const metadata: Metadata = pageMetadata({
  title: "Nosotros — Taller de Llantas Familiar en Edgewater, MD",
  description:
    "Mayo RD Tire Shop es un negocio familiar que sirve con orgullo a las comunidades de Edgewater y Annapolis, MD desde 2017. Cuando llama, habla con la familia. Hablamos español.",
  path: "/es/nosotros",
  locale: "es",
})

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", path: "/es" },
  { name: "Nosotros", path: "/es/nosotros" },
])

const stats = [
  { value: "Desde 2017", label: "Sirviendo a la comunidad" },
  { value: "1k+", label: "Llantas Vendidas" },
  { value: "100%", label: "Satisfacción" },
]

const values = [
  {
    icon: HandHeart,
    text: "Trabajo honesto, precios justos, todos los días",
  },
  {
    icon: Users,
    text: "Décadas de experiencia práctica, sin atajos",
  },
  {
    icon: MapPin,
    text: "Sus vecinos locales, nunca una cadena",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <script {...jsonLdProps(breadcrumbs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden bg-gray-50 text-center">
        <Image
          src={images.aboutHero}
          alt="Fachada de Mayo RD Tire Shop en Edgewater, Maryland"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-50/90 pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
            DESDE 2017
          </h4>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-brand-dark">
            SOBRE <span className="text-brand-orange">NUESTRO TALLER</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Un negocio familiar. De verdad. Propiedad y operado por la familia
            Hagans, aquí mismo en Edgewater.
          </p>
        </div>
      </section>

      {/* Family story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Family photo placeholder */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-dark flex flex-col items-center justify-center text-center px-8 border-2 border-dashed border-brand-orange/40">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/15 mb-6">
                  <Camera size={30} className="text-brand-orange" />
                </span>
                <p className="text-brand-text font-label font-bold tracking-wider mb-2">
                  FOTO FAMILIAR PRÓXIMAMENTE
                </p>
                <p className="text-brand-text-muted text-sm max-w-xs leading-relaxed">
                  Aquí irá una foto de la familia Hagans frente al taller naranja.
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-medium italic text-center">
                La familia Hagans — Mayo RD Tire Shop, Edgewater, MD
              </p>
            </div>

            {/* Story copy */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 text-balance">
                UN NEGOCIO FAMILIAR.{" "}
                <span className="text-brand-orange">DE VERDAD.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium mb-10">
                <p>
                  Mayo RD Tire Shop es un negocio familiar que sirve con orgullo a
                  las comunidades de Edgewater y Annapolis desde 2017. Construido
                  sobre el trabajo duro, la dedicación y el servicio de calidad, nos
                  enorgullece cuidar de nuestros vecinos y mantener a nuestra
                  comunidad rodando con seguridad.
                </p>
              </div>

              {/* Values row */}
              <div className="space-y-4 mb-10">
                {values.map((value) => (
                  <div key={value.text} className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-brand-orange/10">
                      <value.icon size={20} className="text-brand-orange" />
                    </span>
                    <span className="font-bold text-gray-900">{value.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-2xl lg:text-3xl font-bold text-brand-orange mb-2">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come meet the family CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text mb-4 text-balance">
            VENGA A CONOCER A LA FAMILIA.
            <br />
            <span className="text-brand-orange">ABIERTO 7 DÍAS.</span>
          </h2>
          <p className="text-brand-text-muted text-lg font-medium mb-10 max-w-xl mx-auto">
            Pase, salúdenos y déjenos cuidar de sus llantas como si fuera uno de los
            nuestros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCallLink
              label="services_card"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={20} />
              LLAME: {siteConfig.phone}
            </PhoneCallLink>
            <DirectionsLink
              label="about_page"
              className="border-2 border-brand-text hover:border-brand-orange hover:text-brand-orange text-brand-text px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
            >
              CÓMO LLEGAR
              <ChevronRight size={20} />
            </DirectionsLink>
          </div>
        </div>
      </section>
    </>
  )
}

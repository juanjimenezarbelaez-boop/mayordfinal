import type { Metadata } from "next"
import Image from "next/image"
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import PhoneCallLink from "@/components/phone-call-link"
import DirectionsLink from "@/components/directions-link"
import { images, siteConfig } from "@/lib/data"
import { pageMetadata, breadcrumbSchema, jsonLdProps } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Contacto y Cómo Llegar — Taller de Llantas en Edgewater, MD",
  description:
    "Llame a Mayo RD Tire Shop al 240-595-8547 o visítenos en 175 Mayo Rd, Edgewater, MD 21037. Sirviendo a Edgewater y Annapolis. Sin cita previa, abierto 7 días. Hablamos español.",
  path: "/es/contacto",
  locale: "es",
})

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", path: "/es" },
  { name: "Contacto", path: "/es/contacto" },
])

const contactHours = [
  { day: "Lun - Mié", time: "8:00 AM - 6:30 PM" },
  { day: "Jueves", time: "8:00 AM - 6:00 PM" },
  { day: "Viernes", time: "8:00 AM - 6:30 PM" },
  { day: "Sábado", time: "8:00 AM - 6:30 PM" },
  { day: "Domingo", time: "9:00 AM - 4:00 PM" },
]

export default function ContactoPage() {
  return (
    <div className="flex-grow bg-white">
      <script {...jsonLdProps(breadcrumbs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-brand-dark text-center border-b border-brand-surface-light">
        <Image
          src={images.contactHero}
          alt="Fachada de Mayo RD Tire Shop en Edgewater, Maryland"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/80 pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            PÓNGASE EN <span className="text-brand-orange">CONTACTO</span>
          </h1>
          <p className="text-xl sm:text-2xl text-brand-text-muted max-w-3xl mx-auto font-medium">
            Llámenos para verificar la disponibilidad de su medida de llanta, o pase
            por el taller. Sin cita previa.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            <div className="w-full lg:w-1/3 flex flex-col gap-10">
              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                  <Phone size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Llámenos</h3>
                <PhoneCallLink
                  label="services_card"
                  className="text-xl font-bold text-brand-orange hover:underline"
                >
                  {siteConfig.phone}
                </PhoneCallLink>
                <p className="text-gray-500 font-medium mt-2">Hablamos Espa&ntilde;ol</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                  <Clock size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Horario de Atención
                </h3>
                <ul className="space-y-2 text-gray-600 font-medium">
                  {contactHours.map((entry, i) => (
                    <li
                      key={entry.day}
                      className={
                        i === contactHours.length - 1
                          ? "flex justify-between pt-2"
                          : "flex justify-between border-b border-gray-100 pb-2"
                      }
                    >
                      <span
                        className={
                          i === contactHours.length - 1 ? "w-24 font-bold" : "w-24"
                        }
                      >
                        {entry.day}
                      </span>
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                  <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ubicación</h3>
                <p className="text-gray-600 font-medium mb-4">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
                <DirectionsLink
                  label="contact_page"
                  className="inline-flex items-center gap-2 text-brand-orange font-bold font-label hover:underline"
                >
                  CÓMO LLEGAR <ExternalLink size={16} />
                </DirectionsLink>
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Envíenos un Mensaje
                </h3>
                <p className="text-gray-500 mb-8 font-medium">
                  ¿Tiene una pregunta sobre una medida o servicio específico?
                  Cuéntenos y le responderemos pronto.
                </p>
                <ContactForm locale="es" />
              </div>
            </div>
          </div>

          <div className="w-full h-[500px] rounded-3xl overflow-hidden">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Mayo RD Tire Shop"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

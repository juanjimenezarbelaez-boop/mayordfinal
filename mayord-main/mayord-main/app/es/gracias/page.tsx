import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Clock, MapPin, Phone } from "lucide-react"
import { hoursEs, siteConfig } from "@/lib/data"
import { pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Gracias | Mayo RD Tire Shop",
    description: "Gracias por contactar a Mayo RD Tire Shop. Nos comunicaremos con usted en breve.",
    path: "/es/gracias",
    absoluteTitle: true,
  }),
  robots: { index: false, follow: false },
}

const THANKYOU_WHATSAPP_MESSAGE = "¡Hola! Acabo de enviar una solicitud en su sitio web."

export default function ThankYouPageEs() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark text-brand-text">
      {/* Minimal header: logo + click-to-call only */}
      <header className="border-b border-brand-surface-light bg-brand-dark/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/es">
            <Image
              src={siteConfig.logoUrl}
              alt="Mayo RD Tire Shop"
              width={160}
              height={40}
              className="h-9 w-auto object-contain sm:h-10"
              priority
            />
          </Link>
          <PhoneCallLink
            label="thank_you_es"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-4 py-2.5 font-label text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover sm:text-base"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">LLAMAR </span>
            {siteConfig.phone}
          </PhoneCallLink>
        </div>
      </header>

      {/* Confirmation */}
      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-white">
            <Check size={34} />
          </div>
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
            Gracias — <span className="text-brand-orange">Lo Recibimos.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-brand-text-muted text-pretty">
            Le responderemos lo antes posible durante el horario de tienda. ¿Necesita
            ayuda ahora mismo? Llámenos o escríbanos por WhatsApp y lo atenderemos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <PhoneCallLink
              label="thank_you_es"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
            >
              <Phone size={20} />
              LLAME {siteConfig.phone}
            </PhoneCallLink>
            <WhatsAppLink
              label="thank_you_es"
              message={THANKYOU_WHATSAPP_MESSAGE}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-surface-light px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Escríbanos por WhatsApp
            </WhatsAppLink>
          </div>

          {/* Address + hours */}
          <div className="mt-12 grid gap-6 rounded-2xl border border-brand-surface-light bg-brand-surface/50 p-6 text-left sm:grid-cols-2">
            <div>
              <p className="flex items-start gap-3 text-brand-text-muted">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                <span>{siteConfig.address.full}</span>
              </p>
              <DirectionsLink
                label="thank_you_es"
                className="mt-4 inline-flex items-center gap-2 font-label text-sm font-bold text-brand-orange hover:underline"
              >
                <MapPin size={16} />
                CÓMO LLEGAR
              </DirectionsLink>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <ul className="w-full space-y-1 text-sm">
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
          </div>

          <Link
            href="/es"
            className="mt-8 inline-block font-label text-sm font-bold uppercase tracking-wide text-brand-text-muted hover:text-white"
          >
            &larr; Volver al inicio
          </Link>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-brand-surface-light bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-brand-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-1">
            <p className="font-label font-bold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p>{siteConfig.address.full}</p>
            <p>
              <PhoneCallLink label="thank_you_es" className="hover:text-brand-orange">
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
    </div>
  )
}

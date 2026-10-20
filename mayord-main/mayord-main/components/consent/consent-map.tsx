"use client"

import { usePathname } from "next/navigation"
import { MapPin } from "lucide-react"
import { grantCategory, openConsentPreferences } from "@/lib/consent"
import { useConsent } from "@/lib/use-consent"
import { siteConfig } from "@/lib/data"

const copy = {
  en: {
    heading: "Map is off until you allow it",
    body: "Google Maps sets its own cookies. Load it with one click, or open directions directly in Google Maps.",
    load: "Load map",
    directions: "Open in Google Maps",
    settings: "Cookie settings",
  },
  es: {
    heading: "El mapa está desactivado hasta que lo permita",
    body: "Google Maps usa sus propias cookies. Cárguelo con un clic o abra las direcciones directamente en Google Maps.",
    load: "Cargar mapa",
    directions: "Abrir en Google Maps",
    settings: "Configuración de cookies",
  },
} as const

export default function ConsentMap({ title }: { title: string }) {
  const pathname = usePathname()
  const t = copy[pathname?.startsWith("/es") ? "es" : "en"]
  const consent = useConsent()

  if (consent?.functional) {
    return (
      <ConsentMap title={title} />
    )
  }

  return (
    <div className="flex h-full min-h-80 w-full flex-col items-center justify-center gap-4 bg-brand-surface p-6 text-center">
      <MapPin size={32} className="text-brand-orange" aria-hidden="true" />
      <p className="font-heading text-lg font-bold text-white text-balance">{t.heading}</p>
      <p className="max-w-sm text-sm leading-relaxed text-brand-text-muted text-pretty">{t.body}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => grantCategory("functional")}
          className="rounded-xl bg-brand-orange px-5 py-3 font-label text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {t.load}
        </button>
        <a
          href={siteConfig.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-label text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
        >
          {t.directions}
        </a>
      </div>
      <button
        type="button"
        onClick={openConsentPreferences}
        className="text-xs font-medium text-brand-text-muted underline underline-offset-4 hover:text-white"
      >
        {t.settings}
      </button>
    </div>
  )
}

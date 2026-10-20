"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShieldCheck, X } from "lucide-react"
import {
  ALL_DENIED,
  ALL_GRANTED,
  hasGlobalPrivacyControl,
  onOpenConsentPreferences,
  saveConsent,
  type ConsentCategory,
  type ConsentChoices,
} from "@/lib/consent"
import { useConsent } from "@/lib/use-consent"
import { legalRoutes } from "@/lib/legal-routes"
import type { Locale } from "@/lib/i18n"

const copy = {
  en: {
    eyebrow: "PRIVACY",
    title: "Your privacy, your call",
    body: "We use necessary cookies to run this site. With your permission we also use Google Analytics to understand visits, Google Ads to measure our ads, and Google Maps for directions. We never sell your personal information.",
    cookiePolicy: "Cookie Policy",
    privacyPolicy: "Privacy Policy",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    customize: "Customize",
    save: "Save choices",
    close: "Close cookie preferences",
    prefsTitle: "Cookie preferences",
    prefsBody: "Choose which optional cookies we can use. You can change this any time from “Cookie settings” in the footer.",
    gpc: "Global Privacy Control detected — advertising cookies stay off.",
    alwaysOn: "Always on",
    categories: {
      necessary: {
        title: "Strictly necessary",
        description: "Remembers your cookie choice and keeps the site secure.",
      },
      functional: {
        title: "Functional",
        description: "Loads embedded Google Maps so you can see directions to the shop.",
      },
      analytics: {
        title: "Analytics",
        description: "Google Analytics: aggregated stats about which pages help visitors.",
      },
      marketing: {
        title: "Marketing",
        description: "Google Ads: measures calls and requests that come from our ads.",
      },
    },
  },
  es: {
    eyebrow: "PRIVACIDAD",
    title: "Su privacidad, su decisión",
    body: "Usamos cookies necesarias para que el sitio funcione. Con su permiso también usamos Google Analytics para entender las visitas, Google Ads para medir nuestros anuncios y Google Maps para mostrar direcciones. Nunca vendemos su información personal.",
    cookiePolicy: "Política de Cookies",
    privacyPolicy: "Política de Privacidad",
    acceptAll: "Aceptar todo",
    rejectAll: "Rechazar todo",
    customize: "Personalizar",
    save: "Guardar selección",
    close: "Cerrar preferencias de cookies",
    prefsTitle: "Preferencias de cookies",
    prefsBody: "Elija qué cookies opcionales podemos usar. Puede cambiarlo cuando quiera desde “Configuración de cookies” en el pie de página.",
    gpc: "Se detectó Global Privacy Control — las cookies de publicidad permanecen desactivadas.",
    alwaysOn: "Siempre activas",
    categories: {
      necessary: {
        title: "Estrictamente necesarias",
        description: "Recuerdan su elección de cookies y mantienen el sitio seguro.",
      },
      functional: {
        title: "Funcionales",
        description: "Cargan Google Maps para que vea cómo llegar al taller.",
      },
      analytics: {
        title: "Analíticas",
        description: "Google Analytics: estadísticas agregadas sobre qué páginas ayudan a los visitantes.",
      },
      marketing: {
        title: "Marketing",
        description: "Google Ads: mide las llamadas y solicitudes que llegan por nuestros anuncios.",
      },
    },
  },
} as const

const OPTIONAL_CATEGORIES: ConsentCategory[] = ["functional", "analytics", "marketing"]

export default function CookieConsent() {
  const pathname = usePathname()
  const locale: Locale = pathname?.startsWith("/es") ? "es" : "en"
  const t = copy[locale]
  const links = legalRoutes[locale]

  const consent = useConsent()
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [draft, setDraft] = useState<ConsentChoices>(ALL_DENIED)
  const [gpc, setGpc] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setGpc(hasGlobalPrivacyControl())
    return onOpenConsentPreferences(() => {
      setPreferencesOpen(true)
    })
  }, [])

  useEffect(() => {
    if (!preferencesOpen) return
    headingRef.current?.focus()
  }, [preferencesOpen])

  useEffect(() => {
    if (preferencesOpen && consent) {
      setDraft({
        functional: consent.functional,
        analytics: consent.analytics,
        marketing: consent.marketing,
      })
    }
  }, [preferencesOpen, consent])

  useEffect(() => {
    if (!preferencesOpen || !consent) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreferencesOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [preferencesOpen, consent])

  if (consent === undefined) return null
  if (consent !== null && !preferencesOpen) return null

  const decide = (choices: ConsentChoices) => {
    saveConsent(choices)
    setPreferencesOpen(false)
  }

  const toggle = (category: ConsentCategory) => {
    if (category === "marketing" && gpc) return
    setDraft((current) => ({ ...current, [category]: !current[category] }))
  }

  const titleId = "cookie-consent-title"
  const bodyId = "cookie-consent-body"

  return (
    <section
      role={preferencesOpen ? "dialog" : "region"}
      aria-labelledby={titleId}
      aria-describedby={bodyId}
      className="fixed inset-x-3 bottom-20 z-[60] max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-2xl border border-brand-surface-light bg-brand-surface p-5 text-brand-text shadow-2xl shadow-black/60 sm:p-6 lg:inset-x-auto lg:bottom-6 lg:left-6 lg:w-[28rem]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2 font-label text-xs font-bold tracking-widest text-brand-orange">
            <ShieldCheck size={16} aria-hidden="true" />
            {t.eyebrow}
          </span>
          <h2
            id={titleId}
            ref={headingRef}
            tabIndex={-1}
            className="font-heading text-lg font-bold text-white text-balance outline-none"
          >
            {preferencesOpen ? t.prefsTitle : t.title}
          </h2>
        </div>
        {preferencesOpen && consent && (
          <button
            type="button"
            onClick={() => setPreferencesOpen(false)}
            aria-label={t.close}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-brand-text-muted transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            <X size={20} aria-hidden="true" />
          </button>
        )}
      </div>

      <p id={bodyId} className="mt-3 text-sm leading-relaxed text-brand-text-muted text-pretty">
        {preferencesOpen ? t.prefsBody : t.body}
      </p>

      {gpc && (
        <p className="mt-3 rounded-lg bg-white/5 px-3 py-2 text-sm leading-relaxed text-brand-text">
          {t.gpc}
        </p>
      )}

      {preferencesOpen && (
        <ul className="mt-5 flex flex-col divide-y divide-brand-surface-light border-y border-brand-surface-light">
          <li className="flex items-start justify-between gap-4 py-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-white">{t.categories.necessary.title}</span>
              <span className="text-sm leading-relaxed text-brand-text-muted">
                {t.categories.necessary.description}
              </span>
            </div>
            <span className="flex-shrink-0 font-label text-xs font-bold tracking-wider text-brand-orange">
              {t.alwaysOn}
            </span>
          </li>
          {OPTIONAL_CATEGORIES.map((category) => {
            const info = t.categories[category]
            const locked = category === "marketing" && gpc
            const checked = draft[category] && !locked
            const labelId = `consent-${category}-label`
            return (
              <li key={category} className="flex items-start justify-between gap-4 py-4">
                <div className="flex flex-col gap-1">
                  <span id={labelId} className="text-sm font-bold text-white">
                    {info.title}
                  </span>
                  <span className="text-sm leading-relaxed text-brand-text-muted">{info.description}</span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={checked}
                  aria-labelledby={labelId}
                  disabled={locked}
                  onClick={() => toggle(category)}
                  className={`relative mt-0.5 inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface disabled:cursor-not-allowed disabled:opacity-50 ${
                    checked ? "bg-brand-orange" : "bg-brand-surface-light"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      checked ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      )}

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => decide(ALL_DENIED)}
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-label text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
        >
          {t.rejectAll}
        </button>
        <button
          type="button"
          onClick={() => decide(ALL_GRANTED)}
          className="rounded-xl bg-brand-orange px-4 py-3 font-label text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {t.acceptAll}
        </button>
        {preferencesOpen ? (
          <button
            type="button"
            onClick={() => decide(draft)}
            className="col-span-2 rounded-xl border border-brand-orange px-4 py-3 font-label text-sm font-bold text-brand-orange transition-colors hover:bg-brand-orange/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            {t.save}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPreferencesOpen(true)}
            className="col-span-2 rounded-xl px-4 py-2 font-label text-sm font-bold text-brand-text underline decoration-brand-orange underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            {t.customize}
          </button>
        )}
      </div>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-medium text-brand-text-muted">
        <Link href={links.cookies} className="underline-offset-4 hover:text-white hover:underline">
          {t.cookiePolicy}
        </Link>
        <Link href={links.privacy} className="underline-offset-4 hover:text-white hover:underline">
          {t.privacyPolicy}
        </Link>
      </p>
    </section>
  )
}

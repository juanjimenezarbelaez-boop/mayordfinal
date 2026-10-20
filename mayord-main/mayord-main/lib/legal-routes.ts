import type { Locale } from "@/lib/i18n"

export const legalRoutes: Record<Locale, { privacy: string; cookies: string; terms: string }> = {
  en: {
    privacy: "/privacy-policy",
    cookies: "/cookie-policy",
    terms: "/terms-of-service",
  },
  es: {
    privacy: "/es/politica-de-privacidad",
    cookies: "/es/politica-de-cookies",
    terms: "/es/terminos-de-servicio",
  },
}

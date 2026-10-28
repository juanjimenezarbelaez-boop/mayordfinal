// Google Ads tag (gtag.js) configuration and conversion helpers.
//
// Only the Google Ads tag AW-18349807750 is loaded. Link-based conversions
// (WhatsApp, directions, phone calls) are fired by a single global click
// listener (see components/conversion-tracker.tsx) so every matching link on
// the site is covered without per-component wiring or double counting.

export const GA_CONVERSION_ID = "AW-18349807750"

export const CONVERSIONS = {
  whatsapp: `${GA_CONVERSION_ID}/tCdBCK-pse4cEIax761E`,
  directions: `${GA_CONVERSION_ID}/AToeCI2Vpd4cEIax761E`,
  lead: `${GA_CONVERSION_ID}/JvOCCM-3t-AcEIax761E`,
} as const

export type ConversionKind = keyof typeof CONVERSIONS

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, unknown>

function canTrack() {
  return typeof window !== "undefined" && typeof window.gtag === "function"
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (!canTrack()) return
  window.gtag!("event", name, params)
}

export function trackConversion(kind: ConversionKind) {
  if (!canTrack()) return
  window.gtag!("event", "conversion", { send_to: CONVERSIONS[kind] })
}

// Maps a link href to its conversion kind, or null if it isn't a conversion link.
export function conversionForHref(href: string): ConversionKind | null {
  const value = href.toLowerCase()
  if (value.includes("wa.me") || value.includes("whatsapp.com")) return "whatsapp"
  if (value.includes("maps.google.com") || value.includes("maps.app.goo.gl")) return "directions"
  if (value.startsWith("tel:")) return "lead"
  return null
}

// The click helpers below only send descriptive events; the Ads conversion
// itself is sent by the global click listener.
export function trackPhoneCall(label: string) {
  trackEvent("phone_call_click", { label })
}

export function trackWhatsApp(label: string) {
  trackEvent("whatsapp_click", { label })
}

export function trackDirections(label: string) {
  trackEvent("directions_click", { label })
}

// A successful lead form submission counts as a lead conversion.
export function trackFormLead(label: string) {
  trackEvent("form_submit_lead", { label })
  trackConversion("lead")
}

// Google Tag Manager is the only tag loaded on the site (container GTM-N88SGK53).
// All Google Ads conversions are configured inside GTM; the app only pushes
// custom events to window.dataLayer for the GTM triggers to pick up.

export const GTM_ID = "GTM-N88SGK53"

export const GTM_EVENTS = {
  contactFormSuccess: "mayord_contact_form_success",
  whatsappClick: "mayord_whatsapp_click",
  phoneClick: "mayord_phone_click",
  directionsClick: "mayord_directions_click",
} as const

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

export function trackWhatsApp(label: string) {
  pushDataLayer({ event: GTM_EVENTS.whatsappClick, label })
}

export function trackPhoneCall(label: string) {
  pushDataLayer({ event: GTM_EVENTS.phoneClick, label })
}

export function trackDirections(label: string) {
  pushDataLayer({ event: GTM_EVENTS.directionsClick, label })
}

export function trackFormLead(label: string) {
  pushDataLayer({ event: GTM_EVENTS.contactFormSuccess, label })
}

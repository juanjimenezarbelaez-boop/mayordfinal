export const CONSENT_COOKIE = "mayord_consent"
export const CONSENT_VERSION = 1
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180
const CHANGE_EVENT = "mayord:consent-change"
const OPEN_EVENT = "mayord:open-consent"

export type ConsentCategory = "functional" | "analytics" | "marketing"

export interface ConsentChoices {
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export interface StoredConsent extends ConsentChoices {
  v: number
  ts: number
}

export const ALL_GRANTED: ConsentChoices = { functional: true, analytics: true, marketing: true }
export const ALL_DENIED: ConsentChoices = { functional: false, analytics: false, marketing: false }

export function hasGlobalPrivacyControl(): boolean {
  if (typeof navigator === "undefined") return false
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true
}

let cachedRaw: string | null | undefined
let cachedValue: StoredConsent | null = null

function readRawCookie(): string | null {
  const match = document.cookie.split("; ").find((row) => row.startsWith(`${CONSENT_COOKIE}=`))
  return match ? match.slice(CONSENT_COOKIE.length + 1) : null
}

function parseConsent(raw: string | null): StoredConsent | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as Partial<StoredConsent>
    if (parsed.v !== CONSENT_VERSION) return null
    return {
      v: CONSENT_VERSION,
      ts: Number(parsed.ts) || 0,
      functional: parsed.functional === true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true && !hasGlobalPrivacyControl(),
    }
  } catch {
    return null
  }
}

export function readConsent(): StoredConsent | null {
  if (typeof document === "undefined") return null
  const raw = readRawCookie()
  if (raw !== cachedRaw) {
    cachedRaw = raw
    cachedValue = parseConsent(raw)
  }
  return cachedValue
}

function toGoogleConsent(choices: ConsentChoices) {
  const state = (granted: boolean) => (granted ? "granted" : "denied")
  return {
    analytics_storage: state(choices.analytics),
    ad_storage: state(choices.marketing),
    ad_user_data: state(choices.marketing),
    ad_personalization: state(choices.marketing),
    functionality_storage: state(choices.functional),
    personalization_storage: state(choices.functional),
  }
}

export function saveConsent(choices: ConsentChoices) {
  const value: StoredConsent = {
    v: CONSENT_VERSION,
    ts: Date.now(),
    functional: choices.functional,
    analytics: choices.analytics,
    marketing: choices.marketing && !hasGlobalPrivacyControl(),
  }
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    JSON.stringify(value),
  )}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`

  window.gtag?.("consent", "update", toGoogleConsent(value))
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function grantCategory(category: ConsentCategory) {
  const current = readConsent() ?? ALL_DENIED
  saveConsent({ ...current, [category]: true })
}

export function openConsentPreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function onOpenConsentPreferences(handler: () => void) {
  window.addEventListener(OPEN_EVENT, handler)
  return () => window.removeEventListener(OPEN_EVENT, handler)
}

export function subscribeConsent(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback)
  return () => window.removeEventListener(CHANGE_EVENT, callback)
}

/**
 * Inline bootstrap that runs before gtag.js processes its queue. Everything
 * non-essential starts denied (Google Consent Mode v2), then any previously
 * saved choice is re-applied. Global Privacy Control always blocks ads.
 */
export const consentBootstrapScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', false);
try {
  var gpc = navigator.globalPrivacyControl === true;
  var row = document.cookie.split('; ').find(function (r) { return r.indexOf('${CONSENT_COOKIE}=') === 0; });
  if (row) {
    var c = JSON.parse(decodeURIComponent(row.slice(${CONSENT_COOKIE.length + 1})));
    if (c && c.v === ${CONSENT_VERSION}) {
      var ads = c.marketing === true && !gpc ? 'granted' : 'denied';
      gtag('consent', 'update', {
        analytics_storage: c.analytics === true ? 'granted' : 'denied',
        ad_storage: ads,
        ad_user_data: ads,
        ad_personalization: ads,
        functionality_storage: c.functional === true ? 'granted' : 'denied',
        personalization_storage: c.functional === true ? 'granted' : 'denied'
      });
    }
  }
} catch (e) {}
`

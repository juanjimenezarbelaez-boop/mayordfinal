import type { Metadata } from "next"
import { Battery, CheckCircle2, Clock, Gauge, MapPin, Phone, RotateCcw, Star } from "lucide-react"
import { hours, siteConfig } from "@/lib/data"
import { localBusinessSchema, faqPageSchema, jsonLdProps, pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"
import LandingStickyBar from "@/components/landing/landing-sticky-bar"
import OpenStatus from "@/components/landing/open-status"

const LANDING_LABEL = "landing_tpms"
const WHATSAPP_MESSAGE = "Hi! My TPMS / tire pressure light is on. Can you help?"

export const metadata: Metadata = pageMetadata({
  title: "TPMS Sensor Replacement & Programming | Edgewater MD | Mayo RD",
  description:
    "TPMS light on? We install, program & reprogram tire pressure sensors for all makes and models in Edgewater, MD — done while you wait. Open 7 days. Call 240-595-8547.",
  path: "/tpms-service-edgewater-md",
  absoluteTitle: true,
})

const explainers = [
  {
    icon: RotateCcw,
    title: "Light on after a tire change?",
    body: "Sensors often need reprogramming to your vehicle after new tires are mounted. We'll relearn them so the light goes off.",
  },
  {
    icon: Battery,
    title: "Dead sensor battery?",
    body: "TPMS sensors last a few years, then the battery dies. We replace the failed sensor and program a new one on the spot.",
  },
  {
    icon: Gauge,
    title: "New wheels or tires?",
    body: "Fresh set of wheels? We install brand-new sensors and valve stems so every tire reports pressure correctly.",
  },
]

const included = [
  "New TPMS sensor",
  "Professional installation",
  "Programming to your vehicle",
  "Warning light reset",
]

const trust = [
  { icon: Star, label: "4.4 stars · 206 reviews" },
  { icon: Clock, label: "In & out in ~20 minutes" },
  { icon: CheckCircle2, label: "Open 7 days" },
  { icon: Gauge, label: "Family-owned" },
]

const faqs: FaqItem[] = [
  {
    question: "Can I drive with the TPMS light on?",
    answer:
      "You can drive short distances, but you shouldn't ignore it. The light means one or more tires may be underinflated — or a sensor has failed. Low pressure hurts handling, fuel economy, and tire life, and it can lead to a blowout. Best to have it checked the same day.",
  },
  {
    question: "How long does sensor replacement take?",
    answer:
      "Most TPMS sensor replacements and reprogramming are done while you wait — usually about 20 minutes. No appointment needed; just drive in or call ahead so we can confirm we have your sensor in stock.",
  },
  {
    question: "Do you program sensors for any car brand?",
    answer:
      "Yes. We install and program TPMS sensors for all makes and models — domestic, import, cars, trucks, and SUVs. We relearn the sensors to your specific vehicle so the dash light clears correctly.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Cost depends on your vehicle's sensor type, and it includes the sensor, installation, programming to your vehicle, and resetting the warning light. Call us with your year, make, and model and we'll give you the exact number.",
  },
]

export default function TpmsServiceLandingPage() {
  return (
    <div className="bg-brand-dark text-brand-text pb-20 lg:pb-0">
      <script {...jsonLdProps(localBusinessSchema())} />
      <script {...jsonLdProps(faqPageSchema(faqs))} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            TPMS Light On? <span className="text-brand-orange">We&apos;ll Fix It Today.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-text-muted text-pretty sm:text-xl">
            TPMS sensor installation, programming &amp; reprogramming for all makes and
            models, done while you wait. Call for a quick quote.
          </p>

          <OpenStatus className="mt-6 flex items-center gap-2 font-label text-base font-bold sm:text-lg" />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PhoneCallLink label={LANDING_LABEL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-5 font-label text-xl font-bold text-white transition-colors hover:bg-brand-orange-hover">
              <Phone size={24} />
              CALL NOW: {siteConfig.phone}
            </PhoneCallLink>
            <WhatsAppLink
              label={LANDING_LABEL}
              message={WHATSAPP_MESSAGE}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-surface-light px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Message us on WhatsApp
            </WhatsAppLink>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-brand-text-muted sm:text-base">
            <span className="inline-flex items-center gap-1 font-bold text-brand-orange">
              4.4
              <Star size={16} className="fill-current" />
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>206 reviews</span>
            <span aria-hidden="true">&middot;</span>
            <span>All makes &amp; models</span>
            <span aria-hidden="true">&middot;</span>
            <span>No appointment needed</span>
          </p>
        </div>
      </section>

      {/* 2. Explainer row */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            Why is my TPMS light on?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {explainers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand-surface-light bg-brand-surface/60 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-4 font-label text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-brand-text-muted text-pretty">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What's included */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-brand-orange/40 bg-brand-surface p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                  Everything included, no surprises
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <CheckCircle2 size={20} className="flex-shrink-0 text-brand-orange" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <PhoneCallLink
                label={LANDING_LABEL}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-orange px-8 py-6 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
              >
                <Phone size={20} />
                CALL FOR PRICING
              </PhoneCallLink>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust row */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <item.icon size={22} className={item.icon === Star ? "fill-current" : ""} />
                </div>
                <span className="font-label font-bold text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            TPMS questions, answered
          </h2>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 6. Map + hours + directions */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-brand-surface-light">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="Map to Mayo RD Tire Shop, 175 Mayo Rd, Edgewater, MD"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Come straight in
            </h2>
            <p className="mt-4 flex items-start gap-3 text-brand-text-muted">
              <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <span>{siteConfig.address.full}</span>
            </p>
            <p className="mt-3 flex items-start gap-3 text-brand-text-muted">
              <Phone size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <PhoneCallLink label={LANDING_LABEL} className="font-bold text-white hover:text-brand-orange">
                {siteConfig.phone}
              </PhoneCallLink>
            </p>

            <div className="mt-5 flex items-start gap-3">
              <Clock size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <ul className="w-full max-w-xs space-y-1 text-sm">
                {hours.map((row) => (
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

            <DirectionsLink
              label={LANDING_LABEL}
              className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
            >
              <MapPin size={20} />
              GET DIRECTIONS
            </DirectionsLink>
          </div>
        </div>
      </section>

      {/* Minimal footer: address, phone, hours, privacy */}
      <footer className="border-t border-brand-surface-light bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-brand-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-1">
            <p className="font-label font-bold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p>{siteConfig.address.full}</p>
            <p>
              <PhoneCallLink label={LANDING_LABEL} className="hover:text-brand-orange">
                {siteConfig.phone}
              </PhoneCallLink>{" "}
              &middot; Open 7 days &middot; Walk-ins welcome
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span>
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </span>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile sticky bottom bar */}
      <LandingStickyBar label={LANDING_LABEL} />
    </div>
  )
}

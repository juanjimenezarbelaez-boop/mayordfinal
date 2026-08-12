import type { Metadata } from "next"
import { Check, Clock, MapPin, Phone, Star, Wrench } from "lucide-react"
import { hours, siteConfig } from "@/lib/data"
import { localBusinessSchema, jsonLdProps, pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"
import LandingStickyBar from "@/components/landing/landing-sticky-bar"
import OpenStatus from "@/components/landing/open-status"

const LANDING_LABEL = "landing_mobile"
const WHATSAPP_MESSAGE = "Hi! I need mobile tire assistance. Here is my location:"

export const metadata: Metadata = pageMetadata({
  title:
    "Mobile Tire Service Edgewater & Annapolis MD | We Come To You | Mayo RD",
  description:
    "Can't drive on it? Mobile tire assistance within ~15 minutes of Edgewater, MD. Flat tire at home, work or roadside — one call and we're rolling. Open 7 days. Call 240-595-8547.",
  path: "/mobile-tire-repair-edgewater-md",
  absoluteTitle: true,
})

// 12 covered communities distributed around the radius circle.
const communities = [
  "Edgewater",
  "Mayo",
  "Riva",
  "Selby-on-the-Bay",
  "Beverly Beach",
  "Londontowne",
  "Annapolis",
  "Parole",
  "Hillsmere Shores",
  "Davidsonville",
  "Galesville",
  "Harwood",
]

const steps = [
  {
    n: "1",
    title: "Call and tell us where you are",
    body: "Home, work, a parking lot, or the roadside — give us your location and tire size.",
  },
  {
    n: "2",
    title: "We confirm price before rolling out",
    body: "You approve the number over the phone first. No surprises, ever.",
  },
  {
    n: "3",
    title: "We come and get you back on the road",
    body: "We arrive, do the work on location, and you're moving again.",
  },
]

const handled = [
  {
    icon: Wrench,
    title: "Flat tire change on location",
    body: "We swap your flat for your spare or a replacement right where you're parked.",
  },
  {
    icon: Wrench,
    title: "Quality used tire in your size",
    body: "No usable spare? We bring an inspected used tire in your size and install it.",
  },
  {
    icon: Wrench,
    title: "Valve & pressure issues",
    body: "Bad valve stems and stubborn leaks handled so you're not stranded again.",
  },
]

export default function MobileTireRepairLandingPage() {
  return (
    <div className="bg-brand-dark text-brand-text pb-20 lg:pb-0">
      <script {...jsonLdProps(localBusinessSchema())} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Stuck? <span className="text-brand-orange">We Come To You.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-text-muted text-pretty sm:text-xl">
            Mobile tire assistance within{" "}
            <span className="font-bold text-white">~15 minutes</span> of Edgewater.
            Flat tire at home, work or roadside — one call and we&apos;re rolling.
          </p>

          <OpenStatus
            className="mt-6 flex items-center gap-2 font-label text-base font-bold sm:text-lg"
            openPrefix="Available now — "
          />

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
              Share your location on WhatsApp
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
            <span>Family-Owned</span>
            <span aria-hidden="true">&middot;</span>
            <span>Open 7 Days</span>
          </p>
        </div>
      </section>

      {/* 2. Coverage: radius map + communities */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16">
          {/* stylized radius map */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-square w-full max-w-lg rounded-2xl border border-brand-surface-light bg-brand-surface/40 p-6">
              <div className="absolute inset-[8%] rounded-full border border-brand-surface-light/70" />
              <div className="absolute inset-[22%] rounded-full border border-dashed border-brand-orange/40" />
              <div className="absolute inset-[36%] rounded-full border border-brand-orange/70 bg-brand-orange/5" />

              <span className="absolute left-1/2 top-[9%] -translate-x-1/2 font-label text-xs font-bold uppercase tracking-widest text-brand-orange">
                ~15 min radius
              </span>

              {communities.map((name, i) => {
                const angle =
                  (i / communities.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / 12
                const radius = 38
                const left = 50 + radius * Math.cos(angle)
                const top = 50 + radius * Math.sin(angle)
                const isShop = name === "Edgewater"
                return (
                  <div
                    key={name}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                    style={{ top: `${top}%`, left: `${left}%` }}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isShop ? "bg-brand-orange" : "bg-brand-text-muted"
                      }`}
                    />
                    <span
                      className={`whitespace-nowrap font-label text-[10px] font-semibold uppercase tracking-wide ${
                        isShop ? "text-brand-orange" : "text-brand-text-muted"
                      }`}
                    >
                      {name}
                    </span>
                  </div>
                )
              })}

              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange shadow-lg shadow-brand-orange/30">
                  <MapPin size={26} className="text-white" fill="currentColor" />
                </div>
                <span className="whitespace-nowrap rounded-full bg-brand-dark px-3 py-1 font-label text-xs font-bold uppercase tracking-wide text-white">
                  175 Mayo Rd
                </span>
              </div>
            </div>
          </div>

          {/* copy + CTA */}
          <div className="order-1 lg:order-2">
            <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
              We cover the Edgewater &amp; Annapolis area
            </h2>
            <p className="mt-4 text-brand-text-muted text-pretty">
              If you&apos;re within about 15 minutes of our shop, we can come to you
              during shop hours, 7 days a week.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {communities.map((name) => (
                <li key={name} className="flex items-center gap-2 text-sm text-white">
                  <Check size={14} className="flex-shrink-0 text-brand-orange" />
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-brand-text-muted text-pretty">
              A little farther out? Call — we&apos;ll confirm in one minute.
            </p>
            <PhoneCallLink label={LANDING_LABEL} className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover">
              <Phone size={22} />
              CALL NOW: {siteConfig.phone}
            </PhoneCallLink>
          </div>
        </div>
      </section>

      {/* 3. How it works */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            How it works
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange font-label text-xl font-bold text-white">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-label text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-brand-text-muted text-pretty">{step.body}</p>
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="absolute -right-3 top-6 hidden text-2xl text-brand-orange sm:block"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-xl border border-brand-surface-light bg-brand-surface/40 px-5 py-4 text-brand-text-muted text-pretty">
            <span className="font-bold text-white">A service call fee applies</span> —
            it&apos;s credited toward your service. No surprises.
          </p>
          <PhoneCallLink label={LANDING_LABEL} className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover">
            <Phone size={22} />
            CALL NOW: {siteConfig.phone}
          </PhoneCallLink>
        </div>
      </section>

      {/* 4. What we handle on location */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            What we handle on location
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {handled.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-label text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-brand-text-muted text-pretty">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-xl border border-brand-orange/40 bg-brand-orange/10 px-5 py-4 text-white text-pretty">
            <span className="font-bold">Major damage?</span> We&apos;ll tell you honestly
            on the phone before you spend a dime.
          </p>
        </div>
      </section>

      {/* 5. Trust row */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 text-brand-orange" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="fill-current" />
              ))}
            </div>
            <p className="font-label text-lg font-bold text-white">
              4.4 stars &middot; 206 reviews
            </p>
          </div>
          <p className="max-w-2xl text-lg text-brand-text-muted text-pretty">
            Family-owned by the Hagans family. <span className="text-white">Hablamos Español.</span>{" "}
            Open 7 days a week.
          </p>
          <PhoneCallLink label={LANDING_LABEL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-5 font-label text-xl font-bold text-white transition-colors hover:bg-brand-orange-hover">
            <Phone size={24} />
            CALL NOW: {siteConfig.phone}
          </PhoneCallLink>
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
              Our shop
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
              className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-lg border-2 border-brand-surface-light px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
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
              &middot; Open 7 days &middot; Dispatched by phone
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

      {/* Mobile sticky bottom bar: single full-width CALL button */}
      <LandingStickyBar callOnly label={LANDING_LABEL} />
    </div>
  )
}

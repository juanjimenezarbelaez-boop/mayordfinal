import type { Metadata } from "next"
import {
  BadgeCheck,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Timer,
  Users,
} from "lucide-react"
import { hours, siteConfig } from "@/lib/data"
import { localBusinessSchema, jsonLdProps, pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"
import QuoteForm from "@/components/landing/quote-form"
import LandingStickyBar from "@/components/landing/landing-sticky-bar"

const LANDING_LABEL = "landing_used_tires"
const WHATSAPP_MESSAGE = "Hi! I'd like to check used tire availability."

export const metadata: Metadata = pageMetadata({
  title: "Used Tires Edgewater MD | Quality-Inspected & Installed | Mayo RD Tire Shop",
  description:
    "Quality-inspected used tires in Edgewater, MD — mounting & balancing included. Hundreds in stock, top brands, in and out in ~20 minutes. Call 240-595-8547 to check your size.",
  path: "/used-tires-edgewater-md",
  absoluteTitle: true,
})

const reasons = [
  {
    icon: ShieldCheck,
    title: "Every tire inspected",
    body: "We check tread depth, sidewalls, and age on every used tire before it goes on your car. No junk.",
  },
  {
    icon: BadgeCheck,
    title: "Top brands in stock",
    body: "Michelin, Goodyear, Firestone, Continental and more — hundreds of tires across popular sizes.",
  },
  {
    icon: Timer,
    title: "In and out in ~20 minutes",
    body: "Walk in, no appointment needed. Most installs are done while you wait.",
  },
  {
    icon: Users,
    title: "Family business — honest advice",
    body: "We're a local family shop. We'll tell you the truth about what you need and what you don't.",
  },
]

const reviews = [
  {
    name: "Rachel M.",
    quote: "10 minutes later I had a tire on my car.",
  },
  {
    name: "Gina S.",
    quote: "Quick in and out. Great local business.",
  },
  {
    name: "Trent J.",
    quote: "Fast, honest, and fairly priced.",
  },
]

export default function UsedTiresLandingPage() {
  return (
    <div className="bg-brand-dark text-brand-text pb-20 lg:pb-0">
      <script {...jsonLdProps(localBusinessSchema())} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Used Tires in <span className="text-brand-orange">Edgewater, MD</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-text-muted text-pretty sm:text-xl">
            Quality-inspected used tires, mounted &amp; balanced. Hundreds in
            stock — call to check your size.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PhoneCallLink
              label={LANDING_LABEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
            >
              <Phone size={20} />
              CALL {siteConfig.phone} — CHECK MY SIZE
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
            <span>Family-Owned</span>
            <span aria-hidden="true">&middot;</span>
            <span>Open 7 Days</span>
            <span aria-hidden="true">&middot;</span>
            <span>No appointment needed</span>
          </p>
        </div>
      </section>

      {/* 2. Fit anchor cards */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {["PASSENGER", "SUV / TRUCK", "COMMERCIAL / LT"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-brand-surface-light bg-brand-surface p-6 text-center"
              >
                <p className="font-label text-sm font-bold tracking-wider text-brand-text-muted">
                  {label}
                </p>
                <p className="mt-2 font-label text-lg font-bold text-white">
                  In stock, ready to install
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm font-medium text-brand-text-muted">
            Every used tire includes mounting &amp; balancing.
          </p>
        </div>
      </section>

      {/* 3. Why buy used from Mayo RD */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            Why buy used from Mayo RD
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <reason.icon size={24} />
                </div>
                <div>
                  <h3 className="font-label text-lg font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-brand-text-muted text-pretty">
                    {reason.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="rounded-2xl border border-brand-surface-light bg-brand-surface p-6"
              >
                <div className="mb-3 flex gap-0.5 text-brand-orange" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium text-white text-pretty">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-label text-sm font-bold tracking-wide text-brand-text-muted">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mini form */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
              Check availability in one text
            </h2>
            <p className="mt-4 max-w-md text-lg text-brand-text-muted text-pretty">
              Send your tire size or vehicle and we&apos;ll text you back to confirm
              we have it in stock. No pressure, no spam.
            </p>
          </div>
          <QuoteForm label={LANDING_LABEL} />
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
              Visit the shop
            </h2>
            <p className="mt-4 flex items-start gap-3 text-brand-text-muted">
              <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <span>{siteConfig.address.full}</span>
            </p>
            <p className="mt-3 flex items-start gap-3 text-brand-text-muted">
              <Phone size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <PhoneCallLink
                label={LANDING_LABEL}
                className="font-bold text-white hover:text-brand-orange"
              >
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

      {/* 7. Mobile sticky bottom bar */}
      <LandingStickyBar label={LANDING_LABEL} />
    </div>
  )
}

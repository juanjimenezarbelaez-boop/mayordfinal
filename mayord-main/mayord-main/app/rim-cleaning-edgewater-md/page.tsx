import type { Metadata } from "next"
import Link from "next/link"
import {
  Car,
  Clock,
  MapPin,
  Phone,
  Settings,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react"
import { hours, siteConfig } from "@/lib/data"
import { localBusinessSchema, jsonLdProps, pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"
import LandingStickyBar from "@/components/landing/landing-sticky-bar"
import OpenStatus from "@/components/landing/open-status"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"

const LANDING_LABEL = "landing_rim_cleaning"
const WHATSAPP_MESSAGE = "Hi! I'd like to get my rims cleaned."

export const metadata: Metadata = pageMetadata({
  title: "Rim Cleaning Edgewater MD | Restore That Showroom Shine | Mayo RD",
  description:
    "Professional rim and wheel cleaning in Edgewater, MD — brake dust, grime and curb buildup removed. No appointment, most jobs done in about 20 minutes. Call 240-595-8547.",
  path: "/rim-cleaning-edgewater-md",
  absoluteTitle: true,
})

const reasons = [
  { icon: Sparkles, title: "Brake dust buildup", body: "That dull, gritty film on your wheels is brake dust — it eats into the finish over time if left alone." },
  { icon: Car, title: "Selling or trading in", body: "Clean wheels are one of the first things buyers notice. A quick detail can boost your car's first impression." },
  { icon: Wrench, title: "Curb rash & grime", body: "Everyday grime and light curb scuffs come off with a proper deep clean, restoring that fresh-off-the-lot look." },
]

const steps = [
  { n: "1", title: "Drive in, no appointment", body: "Walk-ins welcome — just pull in and we'll get started." },
  { n: "2", title: "We deep-clean each wheel", body: "Wheel-safe cleaners lift brake dust and grime without damaging the finish." },
  { n: "3", title: "Drive off looking sharp", body: "Most jobs are done in about 20 minutes — showroom shine, same day." },
]

const faqs: FaqItem[] = [
  {
    question: "Will cleaning damage my rims' finish?",
    answer:
      "No — we use wheel-safe cleaning products suited to your rim's finish, whether it's alloy, chrome, or painted.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "No — walk-ins are always welcome. Drive in and we'll usually have your wheels cleaned in about 20 minutes.",
  },
  {
    question: "Can you remove curb rash?",
    answer:
      "Light scuffs and grime typically come off with a deep clean. Deeper gouges may need a separate repair — we'll take a look and give you an honest read.",
  },
  {
    question: "Should I combine this with other services?",
    answer:
      "Many drivers pair rim cleaning with a mounting, balancing, or rotation visit so the wheels come off looking as good as they run.",
  },
]

export default function RimCleaningLandingPage() {
  return (
    <div className="bg-brand-dark text-brand-text pb-20 lg:pb-0">
      <script {...jsonLdProps(localBusinessSchema())} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Restore That <span className="text-brand-orange">Showroom Shine.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-text-muted text-pretty sm:text-xl">
            Professional rim and wheel cleaning lifts brake dust and grime
            without damaging the finish. Most jobs done in about{" "}
            <span className="font-bold text-white">20 minutes</span>.
          </p>

          <OpenStatus className="mt-6 flex items-center gap-2 font-label text-base font-bold sm:text-lg" />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PhoneCallLink
              label={LANDING_LABEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-5 font-label text-xl font-bold text-white transition-colors hover:bg-brand-orange-hover"
            >
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
            <span>Family-Owned</span>
            <span aria-hidden="true">&middot;</span>
            <span>No appointment needed</span>
          </p>
        </div>
      </section>

      {/* 2. Why it matters */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            When it&apos;s time for a clean
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {reasons.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
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
        </div>
      </section>

      {/* 3. 3-step strip */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
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
        </div>
      </section>

      {/* 4. Trust row + review */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6">
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
          <figure className="max-w-2xl">
            <blockquote className="text-xl font-medium text-white text-pretty sm:text-2xl">
              &ldquo;Great place&hellip; friendly people and the tires were
              excellent! Recommend to anyone.&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-label text-sm font-bold tracking-wide text-brand-text-muted">
              &mdash; Joni R.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. Cross-path banner: pair with mounting */}
      <section className="border-b border-brand-surface-light bg-brand-orange/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/20 text-brand-orange">
              <Settings size={26} />
            </div>
            <div>
              <p className="font-label text-xl font-bold uppercase tracking-tight text-white">
                Getting new tires too?
              </p>
              <p className="mt-1 text-brand-text-muted text-pretty">
                Combine your rim clean with{" "}
                <Link
                  href="/tire-mounting-edgewater-md"
                  className="font-bold text-brand-orange hover:underline"
                >
                  tire mounting
                </Link>{" "}
                so your wheels roll off looking as good as new.
              </p>
            </div>
          </div>
          <PhoneCallLink
            label="mounting_from_rim_cleaning"
            className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3.5 font-label text-base font-bold text-white transition-colors hover:bg-brand-orange-hover"
          >
            <Phone size={20} />
            CALL NOW
          </PhoneCallLink>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            Common Questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 7. Map + hours + directions */}
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

      {/* Mobile sticky bottom bar */}
      <LandingStickyBar label={LANDING_LABEL} />
    </div>
  )
}

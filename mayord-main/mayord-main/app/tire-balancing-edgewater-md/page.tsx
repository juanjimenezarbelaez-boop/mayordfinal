import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle,
  Clock,
  Gauge,
  MapPin,
  Phone,
  RotateCw,
  Star,
} from "lucide-react"
import { hours, siteConfig } from "@/lib/data"
import { localBusinessSchema, jsonLdProps, pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"
import LandingStickyBar from "@/components/landing/landing-sticky-bar"
import OpenStatus from "@/components/landing/open-status"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"

const LANDING_LABEL = "landing_tire_balancing"
const WHATSAPP_MESSAGE = "Hi! My car is vibrating, can you check my tire balance?"

export const metadata: Metadata = pageMetadata({
  title: "Tire Balancing Edgewater MD | Fix Vibration Fast | Mayo RD",
  description:
    "Steering wheel shaking at highway speed? Computerized tire balancing in Edgewater, MD, most jobs done in about 20 minutes. No appointment, open 7 days. Call 240-595-8547.",
  path: "/tire-balancing-edgewater-md",
  absoluteTitle: true,
})

const signs = [
  { icon: AlertTriangle, title: "Steering wheel shakes", body: "A vibration that shows up around 50-70 mph is the classic sign of an out-of-balance wheel." },
  { icon: RotateCw, title: "Just got new tires", body: "New or rotated tires should always be balanced — skipping it causes uneven wear fast." },
  { icon: Gauge, title: "Uneven tread wear", body: "Patchy or cupped wear patterns often trace back to a wheel that's never been balanced." },
]

const steps = [
  { n: "1", title: "Drive in, no appointment", body: "Walk-ins welcome — just pull in and we'll get your car up on the lift." },
  { n: "2", title: "We spin-balance each wheel", body: "Our computerized balancer pinpoints exactly where weight needs to go." },
  { n: "3", title: "Smooth ride, guaranteed", body: "Vibration gone, tread wear even, most jobs done in about 20 minutes." },
]

const faqs: FaqItem[] = [
  {
    question: "How do I know if my tires are out of balance?",
    answer:
      "The most common sign is a vibration in the steering wheel or seat, usually noticeable between 50-70 mph. It can also show up as uneven or cupped tread wear over time.",
  },
  {
    question: "Do I need an appointment for balancing?",
    answer:
      "No — walk-ins are always welcome. Drive in and we'll usually have your wheels balanced in about 20 minutes.",
  },
  {
    question: "How often should tires be balanced?",
    answer:
      "Balance any time you get new tires, rotate your tires, or feel a vibration. Many drivers combine it with a rotation every 5,000-7,500 miles.",
  },
  {
    question: "Can bad balance damage my car?",
    answer:
      "Yes — over time it can wear out tires unevenly and put extra stress on suspension components. It's a quick fix that's worth catching early.",
  },
]

export default function TireBalancingLandingPage() {
  return (
    <div className="bg-brand-dark text-brand-text pb-20 lg:pb-0">
      <script {...jsonLdProps(localBusinessSchema())} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Feel a Vibration? <span className="text-brand-orange">Get Balanced, Fast.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-text-muted text-pretty sm:text-xl">
            Computerized wheel balancing eliminates highway-speed shake and
            extends tire life. Most jobs done in about{" "}
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

      {/* 2. Signs you need it */}
      <section className="border-b border-brand-surface-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-label text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
            Signs your wheels need balancing
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {signs.map((item) => (
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
              &ldquo;When I noticed my wheel weights had been removed and it
              produced a vibration at highway speeds, they got my tire balance
              completely fixed in minutes.&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-label text-sm font-bold tracking-wide text-brand-text-muted">
              &mdash; Christian C.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. Cross-path banner: pair with rotation */}
      <section className="border-b border-brand-surface-light bg-brand-orange/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/20 text-brand-orange">
              <RotateCw size={26} />
            </div>
            <div>
              <p className="font-label text-xl font-bold uppercase tracking-tight text-white">
                Due for a rotation too?
              </p>
              <p className="mt-1 text-brand-text-muted text-pretty">
                Pair balancing with a{" "}
                <Link
                  href="/tire-rotation-edgewater-md"
                  className="font-bold text-brand-orange hover:underline"
                >
                  tire rotation
                </Link>{" "}
                for even wear and a smoother ride.
              </p>
            </div>
          </div>
          <PhoneCallLink
            label="rotation_from_balancing"
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

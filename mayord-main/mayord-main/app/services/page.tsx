import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Cog,
  Gauge,
  Languages,
  MapPin,
  Phone,
  RotateCw,
  Settings,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Users,
  Wrench,
} from "lucide-react"
import { siteConfig } from "@/lib/data"
import { pageMetadata, breadcrumbSchema, jsonLdProps } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"
import ServiceRadiusMap from "@/components/services/service-radius-map"

export const metadata: Metadata = pageMetadata({
  title: "Tire Services in Edgewater, MD — Flat Repair, Mounting & Mobile Assistance",
  description:
    "Flat tire repair, mounting, balancing, rotation, TPMS service and mobile tire assistance in Edgewater, MD. Walk-ins welcome, most services in ~20 minutes, open 7 days. We come to you within ~15 minutes of Edgewater and Annapolis.",
  path: "/services",
})

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
])

const services = [
  {
    icon: ShoppingBag,
    name: "Tire Sales (New & Used)",
    description: "Hundreds of new & used tires in stock, ready to install today.",
    time: "~20 min",
    href: "/tires",
  },
  {
    icon: Wrench,
    name: "Flat Tire Repair",
    description: "Fast, reliable patches and plugs to get you safely back on the road.",
    time: "~20 min",
    href: "/flat-tire-repair-edgewater-md",
  },
  {
    icon: Truck,
    name: "Mobile Tire Assistance",
    description: "Can't drive on it? We come to you within ~15 min of Edgewater.",
    time: "During shop hours",
    featured: true,
    extra: "Available during shop hours • Dispatched by phone • Call for details",
    href: "/mobile-tire-service-edgewater-md",
  },
  {
    icon: Settings,
    name: "Tire Mounting",
    description: "Professional mounting done right the first time, every time.",
    time: "~20 min",
    href: "/tire-mounting-edgewater-md",
  },
  {
    icon: Gauge,
    name: "Tire Balancing",
    description: "Smooth ride, better handling, and longer tire life.",
    time: "~20 min",
    href: "/tire-balancing-edgewater-md",
  },
  {
    icon: RotateCw,
    name: "Tire Rotation",
    description: "Extend tire life and keep tread wear even. Quick in-and-out.",
    time: "~15 min",
    href: "/tire-rotation-edgewater-md",
  },
  {
    icon: Cog,
    name: "TPMS Sensor Installation & Reprogramming",
    description: "Install, program and reprogram TPMS sensors for all makes.",
    time: "~30 min",
    href: "/tpms-service-edgewater-md",
  },
  {
    icon: Gauge,
    name: "TPMS & Valve Stems",
    description: "Keep pressure readings accurate with fresh sensors and valve stems.",
    time: "~20 min",
    href: "/tpms-service-edgewater-md",
  },
  {
    icon: Sparkles,
    name: "Rim Cleaning",
    description: "Professional rim and wheel cleaning for a like-new look.",
    time: "~20 min",
    href: "/rim-cleaning-edgewater-md",
  },
]

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

const reasons = [
  { icon: Star, title: "4.4★", subtitle: "206 reviews on Google & Yelp" },
  { icon: Clock, title: "~20 min", subtitle: "In & out, most services" },
  { icon: Phone, title: "Open 7 Days", subtitle: "Walk-ins always welcome" },
  { icon: Users, title: "Family-Owned", subtitle: "& operated locally" },
  { icon: Languages, title: "Hablamos", subtitle: "Español" },
]

const faqs: FaqItem[] = [
  {
    question: "Do I need an appointment?",
    answer:
      "No — walk-ins are always welcome. Just drive in and we'll take care of you, usually in about 20 minutes. We're open 7 days a week.",
  },
  {
    question: "How long does a tire change take?",
    answer:
      "Most tire changes, repairs, and balancing are done in about 20 minutes. We pride ourselves on getting you in and out fast.",
  },
  {
    question: "Do you come to me if I can't drive on my tire?",
    answer:
      "Yes. If your tire is too damaged to drive on, our mobile tire assistance comes to you within about 15 minutes of Edgewater during shop hours. Just call and we'll dispatch a technician.",
  },
  {
    question: "How far does your mobile service go?",
    answer:
      "We cover roughly a 15-minute radius around 175 Mayo Rd — Edgewater, Mayo, Riva, Annapolis, and nearby communities. A little farther out? Call us and we'll confirm in one minute.",
  },
  {
    question: "Can you fix my TPMS light?",
    answer:
      "Absolutely. We install, program, and reprogram TPMS sensors for all makes and models to get that dashboard light off and keep your pressure readings accurate.",
  },
  {
    question: "How often should I rotate my tires?",
    answer:
      "Most drivers should rotate every 5,000-7,500 miles to keep tread wear even and extend tire life. It's a quick in-and-out service.",
  },
  {
    question: "Do you have my tire size in stock?",
    answer:
      "We keep hundreds of new and used tires in stock across popular sizes. Call us with your size and we'll confirm availability in a minute.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script {...jsonLdProps(breadcrumbs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
              MOUNTED.
              <br />
              <span className="text-brand-orange">REPAIRED.</span>
              <br />
              BALANCED.
            </h1>
            <div className="mt-8 inline-block">
              <h2 className="bg-brand-orange px-4 py-2 text-3xl font-bold uppercase italic text-white sm:text-4xl">
                WE KEEP YOU ROLLING.
              </h2>
            </div>

            <div className="mt-10 flex flex-col items-start gap-5">
              <PhoneCallLink label="services_card" className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand-orange px-8 py-4 font-label text-xl font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover">
                <Phone size={24} />
                CALL {siteConfig.phone}
              </PhoneCallLink>
              <p className="font-label text-sm font-medium uppercase tracking-wide text-brand-text-muted sm:text-base">
                No appointment needed • Most services done in ~20 minutes • Open 7
                days • We come to you within ~15 min
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="bg-black py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between gap-6 rounded-2xl border-2 border-brand-orange bg-brand-dark p-8">
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  Flat Tire?
                </h3>
                <p className="mt-2 text-brand-text-muted">
                  Drive in — most repairs done in ~20 minutes.
                </p>
              </div>
              <PhoneCallLink label="services_card" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-label font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover sm:w-auto">
                <Phone size={20} />
                Call Now
              </PhoneCallLink>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-2xl border-2 border-brand-orange bg-brand-dark p-8">
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  Can&apos;t Drive On It?
                </h3>
                <p className="mt-2 text-brand-text-muted">
                  We come to you —{" "}
                  <Link
                    href="/mobile-tire-service-edgewater-md"
                    className="font-semibold text-brand-orange hover:underline"
                  >
                    mobile tire assistance
                  </Link>{" "}
                  within ~15 minutes of Edgewater.
                </p>
              </div>
              <PhoneCallLink label="mobile_assistance" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-label font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover sm:w-auto">
                <Truck size={20} />
                Call For Mobile Service
              </PhoneCallLink>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="bg-brand-dark py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold uppercase text-white sm:text-5xl">
              OUR <span className="text-brand-orange">SERVICES</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-text-muted">
              Everything your tires need, done fast and done right — in the shop or
              on the road.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                  service.featured
                    ? "border-2 border-brand-orange bg-brand-surface shadow-[0_8px_40px_rgba(255,94,0,0.12)]"
                    : "border border-brand-surface-light bg-brand-surface/60 hover:border-brand-orange/40"
                }`}
              >
                {service.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-orange px-3 py-1 font-label text-xs font-bold uppercase tracking-widest text-white">
                    We Come To You
                  </span>
                )}
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${
                    service.featured
                      ? "bg-brand-orange/15 text-brand-orange"
                      : "bg-brand-dark text-brand-orange"
                  }`}
                >
                  <service.icon size={30} strokeWidth={1.5} />
                </div>
                <Link href={service.href} className="group/title">
                  <h3 className="font-heading text-xl font-bold uppercase leading-tight text-white transition-colors group-hover/title:text-brand-orange">
                    {service.name}
                  </h3>
                </Link>
                <p className="mt-3 flex-grow leading-relaxed text-brand-text-muted">
                  {service.description}
                </p>

                {service.extra && (
                  <p className="mt-4 rounded-lg bg-brand-dark/60 p-3 text-sm text-brand-text-muted">
                    {service.extra}
                  </p>
                )}

                <div className="mt-6 flex items-center gap-4 border-t border-brand-surface-light pt-5">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-white">
                    <Clock size={15} className="text-brand-orange" />
                    {service.time}
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <PhoneCallLink label="services_card" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-label font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover">
                    <Phone size={18} />
                    Call Now
                  </PhoneCallLink>
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-1.5 font-label text-sm font-bold uppercase tracking-wide text-brand-text-muted transition-colors hover:text-brand-orange"
                  >
                    Learn more
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We come to you */}
      <section className="border-y border-brand-surface bg-black py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl">
                STUCK NEARBY?
                <br />
                <span className="text-brand-orange">WE&apos;LL COME TO YOU.</span>
              </h2>
              <p className="mt-5 text-lg text-brand-text-muted">
                Our mobile tire assistance covers roughly a 15-minute radius around
                the shop. Communities we serve:
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3">
                {communities.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <MapPin size={18} className="flex-shrink-0 text-brand-orange" />
                    <span className="font-medium text-white">{c}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 font-label text-sm font-medium uppercase tracking-wide text-brand-text-muted">
                A little farther out? Call us — we&apos;ll confirm in one minute.
              </p>

              <PhoneCallLink label="mobile_assistance" className="mt-6 inline-flex items-center justify-center gap-3 rounded-lg bg-brand-orange px-8 py-4 font-label text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover">
                <Phone size={22} />
                CALL {siteConfig.phone}
              </PhoneCallLink>
            </div>

            <ServiceRadiusMap />
          </div>
        </div>
      </section>

      {/* Why drivers choose Mayo RD */}
      <section className="bg-brand-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase text-white sm:text-4xl">
            WHY DRIVERS CHOOSE <span className="text-brand-orange">MAYO RD</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-surface text-brand-orange">
                  <r.icon size={30} strokeWidth={1.5} />
                </div>
                <p className="font-heading text-2xl font-bold text-white">
                  {r.title}
                </p>
                <p className="mt-1 text-sm text-brand-text-muted">{r.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-surface bg-black py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold uppercase text-white sm:text-5xl">
              FREQUENTLY ASKED <span className="text-brand-orange">QUESTIONS</span>
            </h2>
          </div>
          <FaqAccordion items={faqs} />

          <div className="mt-14 text-center">
            <p className="mb-5 text-lg text-brand-text-muted">
              Still have a question? We&apos;ll answer in one minute.
            </p>
            <PhoneCallLink label="services_card" className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand-orange px-8 py-4 font-label text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover">
              <Phone size={22} />
              CALL {siteConfig.phone}
            </PhoneCallLink>
          </div>
        </div>
      </section>
    </>
  )
}

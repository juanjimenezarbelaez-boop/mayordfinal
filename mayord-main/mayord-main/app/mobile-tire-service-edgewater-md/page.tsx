import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react"
import { siteConfig } from "@/lib/data"
import { serviceAreas } from "@/lib/service-areas"
import {
  pageMetadata,
  breadcrumbSchema,
  mobileServiceSchema,
  faqPageSchema,
  jsonLdProps,
} from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import FaqAccordion, { type FaqItem } from "@/components/services/faq-accordion"

const PAGE_PATH = "/mobile-tire-service-edgewater-md"

export const metadata: Metadata = pageMetadata({
  title: "Mobile Tire Service in Edgewater & Annapolis, MD — We Come To You",
  description:
    "Flat tire and can't drive on it? Mayo RD brings mobile tire service to you across Edgewater, Annapolis, Riva & Mayo — flat changes, spare installs & used tires in your size. Call 240-595-8547, open 7 days.",
  path: PAGE_PATH,
})

const bullets = [
  "Flat tire change or safe spare install on location",
  "Used or new tire brought to you in your size",
  "Valve stem replacement while we're there",
  "Dispatched by phone during shop hours, 7 days a week",
]

const faqs: FaqItem[] = [
  {
    question: "Do you come to my location to change a tire?",
    answer:
      "Yes. That's exactly what our mobile tire service is — we come to your home, work, or wherever you're safely pulled over and change or replace the tire on the spot. Just call us with your location and tire size and we'll head your way during shop hours.",
  },
  {
    question: "How far do you travel for mobile tire service?",
    answer:
      "We cover roughly a 15-minute drive — about 10 miles — from our shop at 175 Mayo Rd in Edgewater. That includes Edgewater, Annapolis, Riva, Mayo, Davidsonville and the surrounding communities. A little farther out? Call and we'll confirm we can reach you in about a minute.",
  },
  {
    question: "How much does mobile tire service cost?",
    answer:
      "Mobile service starts with a service-call fee that's applied to the cost of your service, plus the price of the repair or tire itself. Pricing depends on your tire size and what the job needs, so we confirm the number with you by phone before we dispatch — no surprises when we arrive.",
  },
  {
    question: "How fast can you get to me?",
    answer:
      "It depends on where you are and how busy the shop is that day, but nearby areas like Riva and Mayo are typically only a few minutes out. We'll give you an honest arrival estimate when you call — we won't promise a time we can't keep.",
  },
  {
    question: "Can you bring a used tire in my size to my location?",
    answer:
      "Usually, yes. Tell us your tire size (it's printed on the sidewall, like 205/55R16) and we'll check our used and new stock before we leave, so we can bring the right tire with us whenever it's available.",
  },
  {
    question: "Do you offer mobile tire service in Annapolis?",
    answer:
      "Yes. Annapolis is one of our most common mobile-service areas — Forest Drive, Bay Ridge, West Street and the US-50 corridor are all a short drive across the South River from our shop. See our Annapolis mobile tire service page for details.",
  },
  {
    question: "What if my tire can't be repaired on site?",
    answer:
      "If a tire can't be safely repaired, we can install your spare or replace it with a used or new tire in your size right there. And if the problem is bigger than the tire — a damaged wheel or unsafe location — we'll tell you honestly and recommend a tow instead.",
  },
  {
    question: "Do you offer mobile service on Sundays?",
    answer:
      "Yes. We dispatch mobile service during shop hours seven days a week, including Sunday (9am–4pm). Call us and if we're open, we'll do our best to get to you.",
  },
]

const WHATSAPP_MESSAGE = "Hi! I need mobile tire assistance. Here is my location:"

export default function MobileTireServicePage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Mobile Tire Service", path: PAGE_PATH },
  ])

  return (
    <>
      <script {...jsonLdProps(mobileServiceSchema({ path: PAGE_PATH }))} />
      <script {...jsonLdProps(faqPageSchema(faqs))} />
      <script {...jsonLdProps(breadcrumbs)} />

      {/* ===== Above the fold: high-converting hero ===== */}
      <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-brand-orange mb-6">
                <Truck size={14} />
                Mobile Tire Service
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-balance">
                MOBILE TIRE SERVICE IN{" "}
                <span className="text-brand-orange">EDGEWATER &amp; ANNAPOLIS</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-text-muted leading-relaxed mb-8 max-w-xl text-pretty">
                Flat tire and can&apos;t drive on it? Stay where you are. We bring the
                tire and the tools to you across Edgewater, Annapolis, Riva and Mayo —
                and get you rolling again.
              </p>

              <ul className="flex flex-col gap-3 mb-10">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/15">
                      <Check size={14} className="text-brand-orange" />
                    </span>
                    <span className="font-medium text-brand-text">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneCallLink
                  label="mobile_assistance"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors text-lg"
                >
                  <Phone size={22} />
                  CALL NOW: {siteConfig.phone}
                </PhoneCallLink>
                <WhatsAppLink
                  label="mobile_assistance"
                  message={WHATSAPP_MESSAGE}
                  className="border-2 border-brand-surface-light hover:border-brand-orange hover:text-brand-orange text-brand-text px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
                >
                  Share your location on WhatsApp
                </WhatsAppLink>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-brand-text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Star size={16} className="fill-brand-orange text-brand-orange" />
                  4.4 stars · 206 reviews
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} className="text-brand-orange" />
                  Open 7 days
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-brand-orange" />
                  Hablamos Español
                </span>
              </div>
            </div>

            {/* Coverage snapshot card */}
            <div className="rounded-2xl border border-brand-surface-light bg-brand-surface/40 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange">
                  <MapPin size={24} className="text-white" fill="currentColor" />
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-white leading-none">
                    Based at 175 Mayo Rd
                  </p>
                  <p className="text-sm text-brand-text-muted mt-1">
                    Edgewater, MD 21037
                  </p>
                </div>
              </div>
              <p className="font-label text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
                We come to you within ~15 min (about 10 miles)
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-brand-text-muted">
                {[
                  "Edgewater",
                  "Annapolis",
                  "Riva",
                  "Mayo",
                  "Davidsonville",
                  "Selby-on-the-Bay",
                  "Londontowne",
                  "Beverly Beach",
                ].map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Below the fold: substantial SEO content ===== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                What is mobile tire service — and when should you call it?
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  Mobile tire service means we come to your vehicle instead of you
                  coming to us. Rather than risking a drive on a flat — or paying to tow
                  a car that just needs a tire — you call, tell us where you are, and we
                  bring the fix to your driveway, your workplace parking lot, or wherever
                  you&apos;re safely pulled over.
                </p>
                <p>
                  It&apos;s the right call when a tire is fully flat, blown, or shredded
                  and you can&apos;t safely drive to the shop. If your car is still safe
                  to drive slowly, the fastest and cheapest option is usually to bring it
                  straight to us at 175 Mayo Rd, where we have our full tire inventory on
                  hand. When in doubt, call and we&apos;ll help you decide honestly.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                What we bring, and what we can do on location
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  Our mobile setup handles the most common roadside tire problems right
                  where you are. When you call, give us your tire size — it&apos;s printed
                  on the sidewall, something like 205/55R16 — so we can load the right
                  tire before we leave. On location we can typically:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Change a flat tire and install your spare</li>
                  <li>Replace a damaged tire with a used or new tire in your size</li>
                  <li>Swap out a cracked or leaking valve stem</li>
                  <li>Get you safely back on the road without a tow</li>
                </ul>
                <p>
                  For anything that needs the full shop — mounting and balancing a set,
                  TPMS sensor programming, or rim work — we&apos;ll get you rolling and,
                  if needed, finish the job back at the shop. Learn more about everything
                  we do on our{" "}
                  <Link
                    href="/services"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    tire services
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Where we go: about 15 minutes from our Edgewater shop
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  Our mobile range is roughly a 15-minute drive — about 10 miles — from
                  175 Mayo Rd. That comfortably covers Edgewater, Annapolis, Riva, the
                  Mayo Peninsula, Davidsonville, Selby-on-the-Bay, Londontowne, Beverly
                  Beach and the neighborhoods in between. If you&apos;re a little farther
                  out, don&apos;t assume we can&apos;t help — call and we&apos;ll confirm
                  whether we can reach you in about a minute.
                </p>
                <p>
                  We&apos;ve put together local guides for the towns we serve most:{" "}
                  <Link
                    href="/mobile-tire-service/annapolis-md"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    mobile tire service in Annapolis
                  </Link>
                  ,{" "}
                  <Link
                    href="/mobile-tire-service/riva-md"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    Riva
                  </Link>
                  ,{" "}
                  <Link
                    href="/mobile-tire-service/davidsonville-md"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    Davidsonville
                  </Link>
                  , and{" "}
                  <Link
                    href="/mobile-tire-service/mayo-md"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    Mayo
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                How pricing works
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  Mobile service starts with a service-call fee that covers coming to
                  your location — and that fee is applied to the cost of your service, so
                  you&apos;re not paying twice. On top of that you pay for whatever the
                  job actually needs: a flat repair, a spare install, or a used or new
                  tire in your size.
                </p>
                <p>
                  Because the total depends on your specific tire and situation, we
                  confirm the price with you by phone before we dispatch. You approve the
                  number first — no surprise charges when we show up. It&apos;s the same
                  honest, no-nonsense pricing our neighbors know us for.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Response times and hours — honestly stated
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  We dispatch mobile service during shop hours, seven days a week:
                  Monday through Saturday from 8am (until 6:30pm most days, 6pm Thursday)
                  and Sunday from 9am to 4pm. Mobile calls are handled alongside the work
                  in the shop, so arrival times vary with how busy we are that day.
                </p>
                <p>
                  We won&apos;t promise a guaranteed response time we can&apos;t keep.
                  What we will do is give you an honest arrival estimate when you call —
                  and nearby areas like Riva and Mayo are typically only a few minutes
                  out. Call {siteConfig.phone} and we&apos;ll tell you straight.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                When we&apos;ll tell you to call a tow truck instead
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  Mobile tire service isn&apos;t always the right answer, and we&apos;ll
                  say so. If your vehicle is stopped in a live traffic lane, on a narrow
                  bridge, or anywhere it isn&apos;t safe for us to work, you need a tow or
                  police assistance first — not a tire tech. The same goes if the damage
                  goes beyond the tire, like a bent wheel or suspension damage that
                  can&apos;t be fixed on the roadside.
                </p>
                <p>
                  We&apos;d rather lose a call than send you bad advice. If a tow is the
                  safer, smarter move, we&apos;ll tell you honestly and point you in the
                  right direction. That&apos;s how we&apos;ve earned our neighbors&apos;
                  trust — and it&apos;s not going to change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-brand-dark py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-label text-xs font-bold uppercase tracking-widest text-brand-orange">
              Mobile Tire Service FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 text-balance">
              Frequently asked questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ===== Service-area links ===== */}
      <section className="bg-brand-surface/30 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center text-balance">
            Mobile tire service near you
          </h2>
          <p className="text-brand-text-muted text-center mb-10 max-w-2xl mx-auto">
            We come to these communities and everywhere in between. Tap your town for
            local details.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/mobile-tire-service/${area.slug}`}
                className="group flex items-center justify-between rounded-xl border border-brand-surface-light bg-brand-surface/50 px-6 py-5 transition-colors hover:border-brand-orange"
              >
                <span className="flex items-center gap-3">
                  <MapPin size={20} className="text-brand-orange" />
                  <span className="font-heading font-bold text-white">
                    Mobile Tire Service in {area.town}, MD
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="text-brand-text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-orange"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Stuck with a flat? Call us — we&apos;ll come to you.
          </h2>
          <p className="text-white/90 text-lg font-medium mb-8">
            Open 7 days · Dispatched during shop hours · Hablamos Español
          </p>
              <PhoneCallLink
                label="mobile_assistance"
                className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-lg font-bold font-label text-lg transition-colors"
              >
                <Phone size={22} />
                CALL {siteConfig.phone}
              </PhoneCallLink>
        </div>
      </section>
    </>
  )
}

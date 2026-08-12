import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Clock, MapPin, Phone, Wrench } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { serviceAreas, getServiceArea } from "@/lib/service-areas"
import {
  pageMetadata,
  breadcrumbSchema,
  mobileServiceSchema,
  faqPageSchema,
  jsonLdProps,
} from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import FaqAccordion from "@/components/services/faq-accordion"

const MAIN_PATH = "/mobile-tire-service-edgewater-md"

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ area: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>
}): Promise<Metadata> {
  const { area } = await params
  const data = getServiceArea(area)
  if (!data) return {}
  return pageMetadata({
    title: `Mobile Tire Service in ${data.town}, MD — Mayo RD Comes To You`,
    description: data.metaDescription,
    path: `/mobile-tire-service/${data.slug}`,
  })
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ area: string }>
}) {
  const { area } = await params
  const data = getServiceArea(area)
  if (!data) notFound()

  const path = `/mobile-tire-service/${data.slug}`

  const serviceSchema = mobileServiceSchema({
    path,
    name: `Mobile Tire Service in ${data.town}, MD`,
    description: data.metaDescription,
    areaServed: [{ "@type": "City", name: data.cityLabel }],
  })

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Mobile Tire Service", path: MAIN_PATH },
    { name: data.town, path },
  ])

  const whatsappMessage = `Hi! I need mobile tire assistance in ${data.town}. Here is my location:`

  return (
    <>
      <script {...jsonLdProps(serviceSchema)} />
      <script {...jsonLdProps(faqPageSchema(data.faqs))} />
      <script {...jsonLdProps(breadcrumbs)} />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-brand-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-brand-text-muted">
            <Link href={MAIN_PATH} className="hover:text-brand-orange transition-colors">
              Mobile Tire Service
            </Link>
            <span>/</span>
            <span className="text-brand-orange">{data.town}</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-brand-orange mb-6">
            <MapPin size={14} />
            {data.cityLabel}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-balance">
            Mobile Tire Service in{" "}
            <span className="text-brand-orange">{data.town}, MD</span>
          </h1>

          <div className="space-y-4 text-lg text-brand-text-muted leading-relaxed max-w-2xl text-pretty mb-8">
            {data.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mb-10 inline-flex items-center gap-2 rounded-lg border border-brand-surface-light bg-brand-surface/50 px-4 py-3 text-sm font-medium text-brand-text">
            <Clock size={18} className="text-brand-orange" />
            Drive time from our shop: {data.driveTime}
          </div>

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
              message={whatsappMessage}
              className="border-2 border-brand-surface-light hover:border-brand-orange hover:text-brand-orange text-brand-text px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
            >
              Share your location on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* ===== What we do (links to main + services) ===== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
            What we can do in {data.town}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            When we reach you in {data.town}, we can change a flat, install your spare,
            swap a leaking valve stem, or bring a used or new tire in your size and put
            it on right there. Have your tire size ready (it&apos;s on the sidewall, like
            205/55R16) so we can load the right tire before we head out.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Want the full picture of how it works, pricing, and coverage? See our main{" "}
            <Link
              href={MAIN_PATH}
              className="text-brand-orange font-bold hover:underline"
            >
              mobile tire service page
            </Link>
            , or browse everything we offer on our{" "}
            <Link
              href="/services"
              className="text-brand-orange font-bold hover:underline"
            >
              tire services
            </Link>{" "}
            page.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-bold text-brand-dark">
              <Wrench size={16} className="text-brand-orange" /> Flat change &amp; spare
              install
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-bold text-brand-dark">
              <MapPin size={16} className="text-brand-orange" /> Used tires in your size
            </span>
          </div>
        </div>
      </section>

      {/* ===== Area FAQ ===== */}
      <section className="bg-brand-dark py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-label text-xs font-bold uppercase tracking-widest text-brand-orange">
              {data.town} Mobile Service FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 text-balance">
              Questions from {data.town} drivers
            </h2>
          </div>
          <FaqAccordion items={data.faqs} />
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Flat tire in {data.town}? We&apos;ll come to you.
          </h2>
          <p className="text-white/90 text-lg font-medium mb-8">
            Open 7 days · Dispatched during shop hours · Hablamos Español
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PhoneCallLink
                label="mobile_assistance"
                className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-lg font-bold font-label text-lg transition-colors"
              >
                <Phone size={22} />
                CALL {siteConfig.phone}
              </PhoneCallLink>
            <Link
              href={MAIN_PATH}
              className="inline-flex items-center gap-2 text-white font-bold font-label hover:underline"
            >
              All mobile tire service areas
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

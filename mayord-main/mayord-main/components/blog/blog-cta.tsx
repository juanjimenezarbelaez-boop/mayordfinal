import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { siteConfig } from "@/lib/data"
import PhoneCallLink from "@/components/phone-call-link"

export default function BlogCta() {
  return (
    <aside className="mt-16 rounded-3xl bg-brand-dark p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-balance">
        Need tires or tire service in Edgewater?
      </h2>
      <p className="text-brand-text-muted text-lg font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
        Call Mayo RD: {siteConfig.phone} — open 7 days, and we come to you within
        about 15 minutes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <PhoneCallLink
          label="services_card"
          aria-label={`Call Mayo RD Tire Shop at ${siteConfig.phone}`}
          className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
        >
          <Phone size={20} />
          CALL: {siteConfig.phone}
        </PhoneCallLink>
        <Link
          href="/mobile-tire-service-edgewater-md"
          className="inline-flex items-center gap-2 text-brand-orange font-bold font-label hover:underline"
        >
          See our mobile tire service
          <ArrowRight size={16} />
        </Link>
      </div>
    </aside>
  )
}

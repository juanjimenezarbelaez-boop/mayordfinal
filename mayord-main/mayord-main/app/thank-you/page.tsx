import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Clock, MapPin, Phone } from "lucide-react"
import { hours, siteConfig } from "@/lib/data"
import { pageMetadata } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import WhatsAppLink from "@/components/whatsapp-link"
import DirectionsLink from "@/components/directions-link"

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Thank You | Mayo RD Tire Shop",
    description: "Thanks for reaching out to Mayo RD Tire Shop. We'll be in touch shortly.",
    path: "/thank-you",
    absoluteTitle: true,
  }),
  robots: { index: false, follow: false },
}

const THANKYOU_WHATSAPP_MESSAGE = "Hi! I just submitted a request on your website."

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark text-brand-text">
      {/* Minimal header: logo + click-to-call only */}
      <header className="border-b border-brand-surface-light bg-brand-dark/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/">
            <Image
              src={siteConfig.logoUrl}
              alt="Mayo RD Tire Shop"
              width={160}
              height={40}
              className="h-9 w-auto object-contain sm:h-10"
              priority
            />
          </Link>
          <PhoneCallLink
            label="thank_you"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-4 py-2.5 font-label text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover sm:text-base"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">CALL </span>
            {siteConfig.phone}
          </PhoneCallLink>
        </div>
      </header>

      {/* Confirmation */}
      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-white">
            <Check size={34} />
          </div>
          <h1 className="font-label text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
            Thanks — <span className="text-brand-orange">We Got It.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-brand-text-muted text-pretty">
            We&apos;ll get back to you as soon as possible during shop hours. Need help
            right now? Call us or message us on WhatsApp and we&apos;ll take care of you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <PhoneCallLink
              label="thank_you"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
            >
              <Phone size={20} />
              CALL {siteConfig.phone}
            </PhoneCallLink>
            <WhatsAppLink
              label="thank_you"
              message={THANKYOU_WHATSAPP_MESSAGE}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-surface-light px-7 py-4 font-label text-lg font-bold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Message us on WhatsApp
            </WhatsAppLink>
          </div>

          {/* Address + hours */}
          <div className="mt-12 grid gap-6 rounded-2xl border border-brand-surface-light bg-brand-surface/50 p-6 text-left sm:grid-cols-2">
            <div>
              <p className="flex items-start gap-3 text-brand-text-muted">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                <span>{siteConfig.address.full}</span>
              </p>
              <DirectionsLink
                label="thank_you"
                className="mt-4 inline-flex items-center gap-2 font-label text-sm font-bold text-brand-orange hover:underline"
              >
                <MapPin size={16} />
                GET DIRECTIONS
              </DirectionsLink>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <ul className="w-full space-y-1 text-sm">
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
          </div>

          <Link
            href="/"
            className="mt-8 inline-block font-label text-sm font-bold uppercase tracking-wide text-brand-text-muted hover:text-white"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-brand-surface-light bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-brand-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-1">
            <p className="font-label font-bold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p>{siteConfig.address.full}</p>
            <p>
              <PhoneCallLink label="thank_you" className="hover:text-brand-orange">
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
    </div>
  )
}

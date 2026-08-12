import type { Metadata } from "next"
import Image from "next/image"
import { Camera, ChevronRight, HandHeart, MapPin, Phone, Users } from "lucide-react"
import { images, siteConfig } from "@/lib/data"
import { pageMetadata, breadcrumbSchema, jsonLdProps } from "@/lib/seo"
import PhoneCallLink from "@/components/phone-call-link"
import DirectionsLink from "@/components/directions-link"

export const metadata: Metadata = pageMetadata({
  title: "About Us — Family-Owned Tire Shop in Edgewater, MD",
  description:
    "Mayo RD Tire Shop is owned and operated by the Hagans family — a proud Afro-American & Latino family serving Edgewater and Annapolis, MD. When you call, you talk to family. Hablamos Español.",
  path: "/about",
})

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
])

const stats = [
  { value: "Since 2017", label: "Serving the community" },
  { value: "1k+", label: "Tires Sold" },
  { value: "100%", label: "Satisfaction" },
]

const values = [
  {
    icon: HandHeart,
    text: "Honest work, fair pricing, every single day",
  },
  {
    icon: Users,
    text: "Decades of hands-on experience, zero shortcuts",
  },
  {
    icon: MapPin,
    text: "Your local neighbors, never a chain",
  },
]

export default function AboutPage() {
  return (
    <>
      <script {...jsonLdProps(breadcrumbs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden bg-gray-50 text-center">
        <Image
          src={images.aboutHero}
          alt="Mayo RD Tire Shop storefront in Edgewater, Maryland"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-50/90 pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
            SINCE 2017
          </h4>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-brand-dark">
            ABOUT <span className="text-brand-orange">OUR SHOP</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            A family business. For real. Owned and operated by the Hagans family,
            right here in Edgewater.
          </p>
        </div>
      </section>

      {/* Family story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Family photo placeholder */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-dark flex flex-col items-center justify-center text-center px-8 border-2 border-dashed border-brand-orange/40">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/15 mb-6">
                  <Camera size={30} className="text-brand-orange" />
                </span>
                <p className="text-brand-text font-label font-bold tracking-wider mb-2">
                  FAMILY PHOTO COMING SOON
                </p>
                <p className="text-brand-text-muted text-sm max-w-xs leading-relaxed">
                  A picture of the Hagans family out front of the orange shop
                  goes right here.
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-medium italic text-center">
                The Hagans family — Mayo RD Tire Shop, Edgewater, MD
              </p>
            </div>

            {/* Story copy */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 text-balance">
                A FAMILY BUSINESS.{" "}
                <span className="text-brand-orange">FOR REAL.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium mb-10">
                <p>
                  Mayo RD Tire Shop is a family-owned and operated business
                  proudly serving the Edgewater and Annapolis communities since
                  2017. Built on hard work, dedication, and quality service, we
                  take pride in taking care of our neighbors and keeping our
                  community moving safely.
                </p>
              </div>

              {/* Values row */}
              <div className="space-y-4 mb-10">
                {values.map((value) => (
                  <div key={value.text} className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-brand-orange/10">
                      <value.icon size={20} className="text-brand-orange" />
                    </span>
                    <span className="font-bold text-gray-900">{value.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-2xl lg:text-3xl font-bold text-brand-orange mb-2">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come meet the family CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text mb-4 text-balance">
            COME MEET THE FAMILY.
            <br />
            <span className="text-brand-orange">OPEN 7 DAYS.</span>
          </h2>
          <p className="text-brand-text-muted text-lg font-medium mb-10 max-w-xl mx-auto">
            Stop by, say hello, and let us take care of your tires like you&apos;re
            one of our own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCallLink
              label="services_card"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={20} />
              CALL: {siteConfig.phone}
            </PhoneCallLink>
            <DirectionsLink
              label="about_page"
              className="border-2 border-brand-text hover:border-brand-orange hover:text-brand-orange text-brand-text px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
            >
              GET DIRECTIONS
              <ChevronRight size={20} />
            </DirectionsLink>
          </div>
        </div>
      </section>
    </>
  )
}

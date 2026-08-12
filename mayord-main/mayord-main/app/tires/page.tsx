import type { Metadata } from "next"
import Image from "next/image"
import {
  Car,
  DollarSign,
  Package,
  Search,
  Shield,
  ThumbsUp,
} from "lucide-react"
import { images } from "@/lib/data"
import { pageMetadata, breadcrumbSchema, jsonLdProps } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "New & Used Tires in Edgewater & Annapolis, MD",
  description:
    "Huge inventory of new and quality used tires for cars, SUVs and trucks in Edgewater, MD. All sizes, all major brands, fully inspected and installed same day. Serving Annapolis and nearby communities.",
  path: "/tires",
})

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Tires", path: "/tires" },
])

const brands = ["FIRESTONE", "GOODYEAR", "MICHELIN", "CONTINENTAL"]

const qualities = [
  { icon: Search, title: "INSPECTED", description: "For your safety and confidence." },
  { icon: Package, title: "ALL BRANDS", description: "New & used, all sizes available." },
  { icon: ThumbsUp, title: "GUARANTEED QUALITY", description: "Tires ready to drive." },
]

const sizeGuide = [
  { code: "225", title: "Width (mm)", description: "Tire width from sidewall to sidewall." },
  { code: "50", title: "Aspect Ratio (%)", description: "Profile height as a percentage of the width." },
  { code: "R", title: "Construction Design", description: "R = Radial Construction." },
  { code: "17", title: "Rim Diameter", description: "Inner diameter of the rim in inches." },
  { code: "94", title: "Load Index", description: "Maximum load capacity." },
  { code: "V", title: "Speed Index", description: "Maximum safe speed capability." },
]

const benefits = [
  { icon: Shield, label: "BETTER PERFORMANCE AND SAFETY" },
  { icon: DollarSign, label: "FUEL SAVINGS & GREATER DURABILITY" },
  { icon: Car, label: "THE RIGHT TIRE MAKES A DIFFERENCE" },
]

const detailImages = [
  images.tiresDetail1,
  images.tiresDetail2,
  images.tiresDetail3,
  images.tiresDetail4,
]

export default function TiresPage() {
  return (
    <>
      <script {...jsonLdProps(breadcrumbs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden bg-brand-dark">
        <Image
          src={images.tiresHero}
          alt="New and used tires stacked at Mayo RD Tire Shop in Edgewater, Maryland"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            OUR <span className="text-brand-orange">TIRES</span>
          </h1>
          <p className="text-xl sm:text-2xl text-brand-text-muted mb-8 max-w-3xl mx-auto font-medium">
            We offer a massive inventory of high-quality new and used tires for all
            vehicle types. Reliable, affordable, and fully inspected.
          </p>
        </div>
      </section>

      {/* Quality used tires */}
      <section className="py-24 bg-brand-dark overflow-hidden border-t border-brand-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              QUALITY NEW &amp; USED TIRES
            </h2>
            <p className="text-xl text-brand-orange font-bold uppercase tracking-widest">
              INSPECTED &bull; RELIABLE &bull; INSTALLED SAME DAY
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-24">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-brand-surface-light/50 border border-brand-surface border-b-brand-orange border-b-4 px-6 md:px-8 py-3 md:py-4 rounded-xl text-xl md:text-2xl font-bold text-white tracking-widest"
              >
                {brand}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality) => (
              <div
                key={quality.title}
                className="bg-brand-surface-light p-10 rounded-[2rem] border border-brand-surface hover:border-brand-orange transition-colors text-center"
              >
                <div className="mx-auto w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-6">
                  <quality.icon size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase">
                  {quality.title}
                </h3>
                <p className="text-brand-text-muted font-medium">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tire size guide */}
      <section className="py-24 bg-white text-gray-900 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl lg:text-6xl font-bold mb-4 uppercase leading-none text-brand-dark">
                  HOW TO READ TIRE SIZE?
                </h2>
                <div className="bg-brand-dark p-6 md:p-8 rounded-3xl text-white my-10 inline-block shadow-xl border border-brand-surface border-b-[12px] border-b-brand-orange">
                  <div className="text-5xl md:text-7xl font-bold font-mono tracking-tighter flex items-end">
                    <span className="text-gray-300">225/</span>
                    <span className="text-gray-300">50</span>
                    <span className="text-brand-orange">R</span>
                    <span className="text-brand-orange">17</span>
                    <span className="ml-4 text-3xl md:text-5xl text-brand-orange font-sans opacity-80">
                      {" "}
                      94V
                    </span>
                  </div>
                </div>
                <div className="space-y-6 max-w-xl">
                  {sizeGuide.map((item) => (
                    <div key={item.code + item.title} className="flex gap-5">
                      <div className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                        {item.code}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-xl md:text-2xl uppercase tracking-wide leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 flex-grow rounded-[3rem] overflow-hidden relative min-h-[400px]">
                <Image
                  src={images.tiresTall}
                  alt="Tire Performance Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover shadow-2xl"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {detailImages.map((src, i) => (
                <div key={src} className="relative w-full h-48 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={src}
                    alt={`Tire Detail ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="mt-12 bg-brand-dark text-white p-10 md:p-14 border border-brand-surface shadow-2xl relative overflow-hidden rounded-[3rem]">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-brand-orange uppercase leading-none">
                  KNOW YOUR TIRE.
                </h3>
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-white leading-none">
                  DRIVE SAFE.
                </h3>
                <ul className="space-y-10">
                  {benefits.map((benefit) => (
                    <li key={benefit.label} className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0">
                        <benefit.icon size={32} />
                      </div>
                      <span className="font-bold text-xl md:text-2xl tracking-wide uppercase leading-tight">
                        {benefit.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

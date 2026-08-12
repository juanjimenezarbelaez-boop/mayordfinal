import type { Metadata } from "next"
import Image from "next/image"
import { Star } from "lucide-react"
import { images } from "@/lib/data"
import { realReviewsFallback } from "@/lib/reviews-fallback"
import { pageMetadata, breadcrumbSchema, jsonLdProps } from "@/lib/seo"
import ReviewsList from "@/components/reviews/reviews-list"

export const metadata: Metadata = pageMetadata({
  title: "Customer Reviews — 4.4 Stars Across Google & Yelp",
  description:
    "Read real reviews from Edgewater and Annapolis, MD drivers about Mayo RD Tire Shop's fast service, honest pricing, and quality new and used tires. Rated 4.4 stars across Google and Yelp.",
  path: "/reviews",
})

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
])

export default function ReviewsPage() {
  return (
    <>
      <script {...jsonLdProps(breadcrumbs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden bg-brand-orange text-center">
        <Image
          src={images.reviewsHero}
          alt="Mayo RD Tire Shop building in Edgewater, Maryland"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-orange/80 pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            CUSTOMER <span className="text-brand-dark">REVIEWS</span>
          </h1>
          <div className="flex justify-center items-center gap-4 text-white mb-8">
            <span className="text-5xl font-bold">
              {realReviewsFallback.averageRating.toFixed(1)}
            </span>
            <div className="flex text-brand-dark gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  size={32}
                  className={
                    i < Math.round(realReviewsFallback.averageRating)
                      ? "fill-current"
                      : "text-brand-dark/30"
                  }
                />
              ))}
            </div>
          </div>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            {realReviewsFallback.totalCount} reviews across Google &amp; Yelp — see what
            our community has to say about our fast service, honest pricing, and
            high-quality tires.
          </p>
        </div>
      </section>

      {/* Dynamic review grid (Google + Yelp) */}
      <section className="py-24 bg-gray-50">
        <ReviewsList />
      </section>
    </>
  )
}

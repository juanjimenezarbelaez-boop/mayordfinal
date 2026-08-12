import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import EmergencyBanner from "@/components/home/emergency-banner"
import ServicesPreview from "@/components/home/services-preview"
import MobileService from "@/components/home/mobile-service"
import TireSizes from "@/components/home/tire-sizes"
import AboutPreview from "@/components/home/about-preview"
import ReviewsPreview from "@/components/home/reviews-preview"
import Gallery from "@/components/home/gallery"
import LocationHours from "@/components/home/location-hours"
import MobileActionBar from "@/components/mobile-action-bar"

export const metadata: Metadata = pageMetadata({
  title:
    "Mayo RD Tire Shop | New & Used Tires, Flat Repair & Mobile Tire Service | Edgewater, MD",
  description:
    "Family-owned tire shop in Edgewater, MD. New & used tires, flat tire repair, mobile tire service within 15 minutes, TPMS sensors & more. Open 7 days. Hablamos Español. Call 240-595-8547.",
  path: "/",
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <EmergencyBanner />
      <ServicesPreview />
      <MobileService />
      <TireSizes />
      <AboutPreview />
      <ReviewsPreview />
      <Gallery />
      <LocationHours />
      <MobileActionBar />
    </>
  )
}

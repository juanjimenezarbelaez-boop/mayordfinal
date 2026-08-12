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
  title: "Mayo RD Tire Shop | Llantas Nuevas y Usadas en Edgewater, MD",
  description:
    "Llantas nuevas y usadas, reparación de ponchaduras, servicio móvil y sensores TPMS en Edgewater, MD. Negocio familiar, abierto 7 días. Hablamos español. Llame al 240-595-8547.",
  path: "/es",
  absoluteTitle: true,
  locale: "es",
})

export default function HomeEs() {
  return (
    <>
      <Hero locale="es" />
      <Features locale="es" />
      <EmergencyBanner locale="es" />
      <ServicesPreview locale="es" />
      <MobileService locale="es" />
      <TireSizes locale="es" />
      <AboutPreview locale="es" />
      <ReviewsPreview locale="es" />
      <Gallery locale="es" />
      <LocationHours locale="es" />
      <MobileActionBar locale="es" />
    </>
  )
}

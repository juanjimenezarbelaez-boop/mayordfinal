import type { Metadata } from "next"
import LegalPage from "@/components/legal/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Términos de Servicio",
  description: "Términos que rigen el uso del sitio de Mayo RD Tire Shop, cotizaciones y comunicaciones.",
  path: "/es/terminos-de-servicio",
  locale: "es",
})

export default function Page() {
  return <LegalPage doc="terms" locale="es" />
}

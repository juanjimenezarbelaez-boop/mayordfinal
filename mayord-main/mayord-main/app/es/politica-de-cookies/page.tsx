import type { Metadata } from "next"
import LegalPage from "@/components/legal/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Política de Cookies",
  description: "Qué cookies usa Mayo RD Tire Shop, para qué y cómo cambiar sus preferencias en cualquier momento.",
  path: "/es/politica-de-cookies",
  locale: "es",
})

export default function Page() {
  return <LegalPage doc="cookies" locale="es" />
}

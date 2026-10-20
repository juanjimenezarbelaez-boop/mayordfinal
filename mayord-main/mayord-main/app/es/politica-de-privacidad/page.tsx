import type { Metadata } from "next"
import LegalPage from "@/components/legal/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidad",
  description: "Cómo Mayo RD Tire Shop recopila, usa y protege su información personal y cómo ejercer sus derechos de privacidad.",
  path: "/es/politica-de-privacidad",
  locale: "es",
})

export default function Page() {
  return <LegalPage doc="privacy" locale="es" />
}

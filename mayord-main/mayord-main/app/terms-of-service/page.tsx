import type { Metadata } from "next"
import LegalPage from "@/components/legal/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms governing use of the Mayo RD Tire Shop website, quotes, and communications.",
  path: "/terms-of-service",
})

export default function Page() {
  return <LegalPage doc="terms" locale="en" />
}

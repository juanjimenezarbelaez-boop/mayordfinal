import type { Metadata } from "next"
import LegalPage from "@/components/legal/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: "Which cookies Mayo RD Tire Shop uses, why, and how to change your cookie preferences at any time.",
  path: "/cookie-policy",
})

export default function Page() {
  return <LegalPage doc="cookies" locale="en" />
}

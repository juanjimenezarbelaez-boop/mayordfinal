import type { Metadata } from "next"
import LegalPage from "@/components/legal/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Mayo RD Tire Shop collects, uses, and protects your personal information, and how to exercise your Maryland privacy rights.",
  path: "/privacy-policy",
})

export default function Page() {
  return <LegalPage doc="privacy" locale="en" />
}

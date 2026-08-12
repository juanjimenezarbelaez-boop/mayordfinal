import type { Metadata } from "next"
import Script from "next/script"
import { Work_Sans, Lexend, Space_Grotesk } from "next/font/google"
import ConditionalChrome from "@/components/conditional-chrome"
import HtmlLangSetter from "@/components/html-lang-setter"
import { GA_CONVERSION_ID, GTAG_ID } from "@/lib/gtag"
import { siteConfig } from "@/lib/data"
import { SITE_URL, OG_IMAGE, localBusinessSchema, jsonLdProps } from "@/lib/seo"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Mayo RD Tire Shop | New & Used Tires, Flat Repair & Mobile Tire Service | Edgewater, MD",
    template: "%s | Mayo RD Tire Shop",
  },
  description:
    "Family-owned tire shop in Edgewater, MD. New & used tires, flat tire repair, mobile tire service within 15 minutes, TPMS sensors & more. Open 7 days. Hablamos Español. Call 240-595-8547.",
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${siteConfig.name} storefront in Edgewater, Maryland` }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${lexend.variable} ${spaceGrotesk.variable} font-sans bg-brand-dark text-brand-text min-h-screen`}
      >
        <script {...jsonLdProps(localBusinessSchema())} />
        <HtmlLangSetter />
        <ConditionalChrome>{children}</ConditionalChrome>

        {/* Google Tag (gtag.js) — loads the Google tag / Ads conversion tag.
            Uses NEXT_PUBLIC_GTAG_ID when set, always configures the Ads id. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID || GA_CONVERSION_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${GTAG_ID ? `gtag('config', '${GTAG_ID}');` : ""}
            gtag('config', '${GA_CONVERSION_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}

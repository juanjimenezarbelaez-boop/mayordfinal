import type { Metadata } from "next"
import { Work_Sans, Lexend, Space_Grotesk } from "next/font/google"
import ConditionalChrome from "@/components/conditional-chrome"
import HtmlLangSetter from "@/components/html-lang-setter"
import CookieConsent from "@/components/consent/cookie-consent"
import { consentBootstrapScript } from "@/lib/consent"
import { GTM_ID } from "@/lib/gtag"
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
      <head>
        {/* Consent Mode v2 defaults must be queued before the GTM container loads. */}
        <script id="consent-defaults" dangerouslySetInnerHTML={{ __html: consentBootstrapScript }} />
        {/* Google Tag Manager */}
        <script
          id="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${workSans.variable} ${lexend.variable} ${spaceGrotesk.variable} font-sans bg-brand-dark text-brand-text min-h-screen`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script {...jsonLdProps(localBusinessSchema())} />
        <HtmlLangSetter />
        <ConditionalChrome>{children}</ConditionalChrome>
        <CookieConsent />
      </body>
    </html>
  )
}

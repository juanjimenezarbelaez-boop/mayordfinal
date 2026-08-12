import type { Metadata } from "next"
import { siteConfig } from "@/lib/data"
import { localeAlternates, esLocaleAlternates } from "@/lib/i18n"

/** Canonical production origin. Used for metadataBase, canonicals, and JSON-LD @id/url. */
export const SITE_URL = "https://mayord.us"

/** Default social share image (1200x630) showing the orange shop. */
export const OG_IMAGE = "/og-image.png"

/**
 * Geo coordinates for 175 Mayo Rd, Edgewater, MD 21037.
 * Verified against the pinned location in the Google Maps embed already used
 * on the contact page (lat 38.8739, lng -76.5525).
 */
export const GEO = { latitude: 38.8739, longitude: -76.5525 }

/** Stable @id so other schemas can reference the business entity. */
export const BUSINESS_ID = `${SITE_URL}/#tireshop`

/** Communities covered by the ~15-minute mobile service radius. */
export const AREAS_SERVED = [
  "Edgewater",
  "Mayo",
  "Riva",
  "Selby-on-the-Bay",
  "Beverly Beach",
  "Londontowne",
  "Annapolis",
  "Parole",
  "Hillsmere Shores",
  "Davidsonville",
  "Galesville",
  "Harwood",
]

/** Every service offered, used for the LocalBusiness hasOfferCatalog. */
export const SERVICES = [
  "Used Tires",
  "New Tires",
  "Flat Tire Repair",
  "Mobile Tire Assistance",
  "Tire Mounting",
  "Tire Balancing",
  "Tire Rotation",
  "TPMS Sensor Installation & Reprogramming",
  "TPMS & Valve Stems",
  "Rim Cleaning",
]

/** openingHoursSpecification matching the hours displayed across the site. */
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
    opens: "08:00",
    closes: "18:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Thursday",
    opens: "08:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Friday", "Saturday"],
    opens: "08:00",
    closes: "18:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "09:00",
    closes: "16:00",
  },
]

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString()
}

/** LocalBusiness (TireShop) JSON-LD for the root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TireShop",
    "@id": BUSINESS_ID,
    name: siteConfig.name,
    url: SITE_URL,
    logo: siteConfig.logoUrl,
    image: absoluteUrl(OG_IMAGE),
    telephone: "+1-240-595-8547",
    priceRange: "$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    knowsLanguage: ["en", "es"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: OPENING_HOURS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "206",
    },
    sameAs: [siteConfig.googleUrl, siteConfig.yelpUrl, siteConfig.facebookUrl],
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        geoRadius: "16000",
      },
      ...AREAS_SERVED.map((city) => ({
        "@type": "City",
        name: `${city}, MD`,
      })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tire Sales & Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  }
}

/**
 * Placeholder service-call fee used in Offer JSON-LD.
 * Matches the visible "$XX" placeholders across the site — replace with the
 * real service-call fee once confirmed.
 */
export const SERVICE_CALL_FEE_PLACEHOLDER = "0"

/** GeoCircle node covering the ~15-minute (≈16 km) mobile radius. */
function geoCircleNode() {
  return {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    geoRadius: "16000",
  }
}

/** Place node for the shop, reused as the mobile service origin location. */
function shopPlaceNode() {
  return {
    "@type": "Place",
    name: siteConfig.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
  }
}

/**
 * Service JSON-LD for the mobile tire service pages.
 * Defaults to the full GeoCircle + every covered city; pass `areaServed` to
 * scope a service-area page to a single town.
 */
export function mobileServiceSchema(opts?: {
  path?: string
  name?: string
  description?: string
  areaServed?: object[]
}) {
  const areaServed =
    opts?.areaServed ??
    [geoCircleNode(), ...AREAS_SERVED.map((city) => ({ "@type": "City", name: `${city}, MD` }))]

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile Tire Service",
    name: opts?.name ?? "Mobile Tire Assistance",
    ...(opts?.description ? { description: opts.description } : {}),
    provider: { "@id": BUSINESS_ID },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+1-240-595-8547",
        contactType: "customer service",
        availableLanguage: ["en", "es"],
      },
      serviceLocation: shopPlaceNode(),
    },
    hoursAvailable: OPENING_HOURS,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      // Placeholder service-call fee — replace with the confirmed amount.
      price: SERVICE_CALL_FEE_PLACEHOLDER,
      description:
        "Service call fee, applied to the cost of your service. Call to confirm current pricing before dispatch.",
    },
    url: absoluteUrl(opts?.path ?? "/mobile-tire-service-edgewater-md"),
  }
}

/** FAQPage JSON-LD from a list of question/answer pairs. */
export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}

/** BreadcrumbList JSON-LD from an ordered list of crumbs. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** BlogPosting JSON-LD for a single article. */
export function blogPostingSchema(post: {
  slug: string
  title: string
  excerpt: string
  dateISO: string
  image: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: siteConfig.logoUrl },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  }
}

type PageMetaInput = {
  title: string
  description: string
  path: string
  image?: string
  ogType?: "website" | "article"
  /** When true, bypass the layout title template (used for the home page). */
  absoluteTitle?: boolean
  /** Locale of this page — drives OpenGraph locale + hreflang alternates. Defaults to "en". */
  locale?: "en" | "es"
}

/** Build per-page Metadata with canonical + complete OpenGraph + Twitter card. */
export function pageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  ogType = "website",
  absoluteTitle = false,
  locale = "en",
}: PageMetaInput): Metadata {
  const languages = locale === "es" ? esLocaleAlternates(path) : localeAlternates(path)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: ogType,
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: locale === "es" ? "es_US" : "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.address.full}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

/** Small helper to render a JSON-LD script tag. */
export function jsonLdProps(schema: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  }
}

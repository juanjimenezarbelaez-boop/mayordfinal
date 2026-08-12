"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * The root layout can only render a single, static <html> tag, but the
 * Spanish section of the site lives under /es and needs lang="es" for
 * accessibility and SEO. This syncs document.documentElement.lang on every
 * route change instead.
 */
export default function HtmlLangSetter() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.lang = pathname?.startsWith("/es") ? "es" : "en"
  }, [pathname])

  return null
}

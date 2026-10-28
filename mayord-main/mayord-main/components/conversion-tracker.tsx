"use client"

import { useEffect } from "react"
import { conversionForHref, trackConversion } from "@/lib/gtag"

// Fires Google Ads conversions for WhatsApp, Google Maps and tel: links anywhere
// on the site. Runs in the capture phase and never calls preventDefault, so
// navigation to WhatsApp, Maps or the dialer is not delayed.
export default function ConversionTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!anchor) return
      const kind = conversionForHref(anchor.getAttribute("href") ?? "")
      if (kind) trackConversion(kind)
    }

    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return null
}

"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import { siteConfig } from "@/lib/data"
import { trackDirections } from "@/lib/gtag"

type DirectionsLinkProps = {
  children: ReactNode
  /** Where on the site this link lives, for analytics. */
  label?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

// Link to Google Maps directions that fires a directions_click event.
export default function DirectionsLink({
  children,
  label = "site",
  onClick,
  ...rest
}: DirectionsLinkProps) {
  return (
    <a
      href={siteConfig.directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackDirections(label)
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

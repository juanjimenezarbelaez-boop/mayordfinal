"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import { siteConfig } from "@/lib/data"
import { trackPhoneCall } from "@/lib/gtag"

type PhoneCallLinkProps = {
  children: ReactNode
  /** Where on the site this call link lives, e.g. "header", "hero", "sticky_bar". */
  label?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

// Anchor to the shop phone number that fires a labeled phone_call_click event
// (and the Google Ads conversion) on click.
export default function PhoneCallLink({
  children,
  label = "site",
  onClick,
  ...rest
}: PhoneCallLinkProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      onClick={(e) => {
        trackPhoneCall(label)
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

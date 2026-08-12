"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import { whatsappHref } from "@/lib/data"
import { trackWhatsApp } from "@/lib/gtag"

type WhatsAppLinkProps = {
  children: ReactNode
  /** Where on the site this link lives, for analytics. */
  label?: string
  /** Optional prefilled chat message. */
  message?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

// Click-to-chat WhatsApp link that fires a whatsapp_click event.
// Centralizes the wa.me href so the number lives in one place.
export default function WhatsAppLink({
  children,
  label = "site",
  message,
  onClick,
  ...rest
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackWhatsApp(label)
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

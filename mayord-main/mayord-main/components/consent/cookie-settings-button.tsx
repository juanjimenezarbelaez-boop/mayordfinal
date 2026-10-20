"use client"

import { openConsentPreferences } from "@/lib/consent"

export default function CookieSettingsButton({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <button type="button" onClick={openConsentPreferences} className={className}>
      {label}
    </button>
  )
}

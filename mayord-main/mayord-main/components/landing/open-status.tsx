"use client"

import { useEffect, useState } from "react"
import { hours } from "@/lib/data"
import type { Locale } from "@/lib/i18n"

const DAY_ORDER = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Map the shop's Eastern weekday code to a Spanish display day.
const DAY_ES: Record<string, string> = {
  Sun: "domingo",
  Mon: "lunes",
  Tue: "martes",
  Wed: "miércoles",
  Thu: "jueves",
  Fri: "viernes",
  Sat: "sábado",
}

const strings = {
  en: {
    openUntil: (close: string) => `Open today until ${close}`,
    opensToday: (open: string) => `Closed now — opens today at ${open}`,
    opensTomorrow: (open: string) => `Closed now — opens tomorrow at ${open}`,
    opensDay: (day: string, open: string) => `Closed now — opens ${day} at ${open}`,
    callToConfirm: "Call to confirm today's hours",
  },
  es: {
    openUntil: (close: string) => `Abierto hoy hasta las ${close}`,
    opensToday: (open: string) => `Cerrado ahora — abre hoy a las ${open}`,
    opensTomorrow: (open: string) => `Cerrado ahora — abre mañana a las ${open}`,
    opensDay: (day: string, open: string) => `Cerrado ahora — abre el ${day} a las ${open}`,
    callToConfirm: "Llame para confirmar el horario de hoy",
  },
}

/** Parse a label like "6:30 PM" into minutes-since-midnight. */
function toMinutes(label: string): number | null {
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return null
  let h = Number.parseInt(match[1], 10)
  const m = Number.parseInt(match[2], 10)
  const meridiem = match[3].toUpperCase()
  if (meridiem === "PM" && h !== 12) h += 12
  if (meridiem === "AM" && h === 12) h = 0
  return h * 60 + m
}

/** Current weekday + minutes-since-midnight in the shop's Eastern timezone. */
function nowInEastern(): { weekday: string; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date())

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
  const weekday = get("weekday")
  let hour = Number.parseInt(get("hour"), 10)
  if (hour === 24) hour = 0 // some runtimes emit "24" at midnight
  const minute = Number.parseInt(get("minute"), 10)
  return { weekday, minutes: hour * 60 + minute }
}

function computeStatus(locale: Locale): { open: boolean; text: string } {
  const s = strings[locale]
  const { weekday, minutes } = nowInEastern()
  const today = hours.find((row) => row.day === weekday)

  if (today) {
    const [openLabel, closeLabel] = today.time.split(" - ")
    const openMin = toMinutes(openLabel)
    const closeMin = toMinutes(closeLabel)
    if (openMin !== null && closeMin !== null) {
      if (minutes >= openMin && minutes < closeMin) {
        return { open: true, text: s.openUntil(closeLabel.trim()) }
      }
      // Before opening today
      if (minutes < openMin) {
        return { open: false, text: s.opensToday(openLabel.trim()) }
      }
    }
  }

  // Closed for the day: find the next day with hours.
  const todayIdx = DAY_ORDER.indexOf(weekday)
  for (let i = 1; i <= 7; i++) {
    const nextDay = DAY_ORDER[(todayIdx + i) % 7]
    const row = hours.find((r) => r.day === nextDay)
    if (row) {
      const openLabel = row.time.split(" - ")[0].trim()
      if (i === 1) return { open: false, text: s.opensTomorrow(openLabel) }
      const dayName = locale === "es" ? DAY_ES[nextDay] : nextDay
      return { open: false, text: s.opensDay(dayName, openLabel) }
    }
  }
  return { open: false, text: s.callToConfirm }
}

export default function OpenStatus({
  className = "",
  openPrefix = "",
  locale = "en",
}: {
  className?: string
  /** Optional text prepended only when the shop is currently open. */
  openPrefix?: string
  locale?: Locale
}) {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null)

  useEffect(() => {
    setStatus(computeStatus(locale))
    // Re-check every minute in case the visitor lingers across open/close.
    const id = setInterval(() => setStatus(computeStatus(locale)), 60_000)
    return () => clearInterval(id)
  }, [locale])

  // Stable placeholder before mount to avoid hydration mismatch.
  if (!status) {
    return (
      <p className={className} aria-hidden="true">
        <span className="inline-block h-3 w-3 rounded-full bg-brand-text-muted/50" />
        <span className="opacity-0">Open today until 6:30 PM</span>
      </p>
    )
  }

  return (
    <p className={className}>
      <span
        className={`inline-block h-3 w-3 rounded-full ${
          status.open ? "bg-green-500" : "bg-brand-text-muted"
        }`}
        aria-hidden="true"
      />
      <span className={status.open ? "text-white" : "text-brand-text-muted"}>
        {status.open && openPrefix ? openPrefix : ""}
        {status.text}
      </span>
    </p>
  )
}

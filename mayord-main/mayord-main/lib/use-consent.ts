"use client"

import { useSyncExternalStore } from "react"
import { readConsent, subscribeConsent, type StoredConsent } from "@/lib/consent"

/**
 * `undefined` while rendering on the server / before hydration, `null` when
 * the visitor hasn't made a choice yet, otherwise their stored choices.
 */
export function useConsent(): StoredConsent | null | undefined {
  return useSyncExternalStore(subscribeConsent, readConsent, () => undefined)
}

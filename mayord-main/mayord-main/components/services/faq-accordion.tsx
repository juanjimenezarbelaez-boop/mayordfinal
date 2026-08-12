"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.question}
            className={`rounded-2xl border transition-colors ${
              isOpen
                ? "border-brand-orange bg-brand-surface"
                : "border-brand-surface-light bg-brand-surface/60 hover:border-brand-orange/40"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-heading text-lg font-bold text-white">
                {item.question}
              </span>
              <ChevronDown
                size={22}
                className={`flex-shrink-0 text-brand-orange transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-brand-text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

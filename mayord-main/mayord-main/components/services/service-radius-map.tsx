import { MapPin } from "lucide-react"
import type { Locale } from "@/lib/i18n"

// Stylized (non-cartographic) radius diagram: concentric rings around the shop
// pin, communicating an approximate ~15-minute service radius around 175 Mayo Rd.
export default function ServiceRadiusMap({ locale = "en" }: { locale?: Locale }) {
  const radiusLabel = locale === "es" ? "~15 min de radio" : "~15 min radius"
  const nearby = [
    { label: "Mayo", top: "26%", left: "72%" },
    { label: "Riva", top: "20%", left: "34%" },
    { label: "Annapolis", top: "68%", left: "24%" },
    { label: "Galesville", top: "74%", left: "70%" },
  ]

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      {/* concentric radius rings */}
      <div className="absolute inset-0 rounded-full border border-brand-surface-light/70 bg-brand-surface/40" />
      <div className="absolute inset-[12%] rounded-full border border-brand-surface-light/80 bg-brand-surface/50" />
      <div className="absolute inset-[26%] rounded-full border border-dashed border-brand-orange/50" />
      <div className="absolute inset-[40%] rounded-full border border-brand-orange/70 bg-brand-orange/5" />

      {/* radius label */}
      <span className="absolute left-1/2 top-[13%] -translate-x-1/2 font-label text-xs font-bold uppercase tracking-widest text-brand-orange">
        {radiusLabel}
      </span>

      {/* nearby community markers */}
      {nearby.map((n) => (
        <div
          key={n.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
          style={{ top: n.top, left: n.left }}
        >
          <span className="h-2 w-2 rounded-full bg-brand-text-muted" />
          <span className="font-label text-[11px] font-medium uppercase tracking-wide text-brand-text-muted">
            {n.label}
          </span>
        </div>
      ))}

      {/* center pin: the shop */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange shadow-lg shadow-brand-orange/30">
          <MapPin size={26} className="text-white" fill="currentColor" />
        </div>
        <span className="whitespace-nowrap rounded-full bg-brand-dark px-3 py-1 font-label text-xs font-bold uppercase tracking-wide text-white">
          175 Mayo Rd
        </span>
      </div>
    </div>
  )
}

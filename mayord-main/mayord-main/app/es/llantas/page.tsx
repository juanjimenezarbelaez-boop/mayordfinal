import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Package, Phone, Search, ShieldCheck } from "lucide-react"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/data"
import PhoneCallLink from "@/components/phone-call-link"
import TireSizes from "@/components/home/tire-sizes"

export const metadata: Metadata = pageMetadata({
  title: "Llantas Nuevas y Usadas en Edgewater, MD",
  description:
    "Llantas nuevas y usadas de calidad para carros, SUVs y camionetas en Edgewater, MD. Cientos en inventario, instaladas el mismo día. Llame al 240-595-8547 para verificar su medida.",
  path: "/es/llantas",
  locale: "es",
})

const benefits = [
  {
    icon: Search,
    title: "INSPECCIONADAS",
    description: "Para su seguridad y tranquilidad.",
  },
  {
    icon: Package,
    title: "TODAS LAS MARCAS",
    description: "Nuevas y usadas, todas las medidas disponibles.",
  },
  {
    icon: ShieldCheck,
    title: "INSTALACIÓN EXPERTA",
    description: "Montaje y balanceo incluidos.",
  },
]

export default function LlantasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20 border-b border-brand-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
            LLANTAS NUEVAS Y <span className="text-brand-orange">USADAS</span>
          </h1>
          <p className="text-xl text-brand-orange font-bold uppercase tracking-widest">
            INSPECCIONADAS &bull; CONFIABLES &bull; INSTALADAS EL MISMO DÍA
          </p>
          <p className="mt-6 text-lg text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
            Tenemos cientos de llantas de calidad en inventario para todo tipo de
            vehículo. Llámenos con su medida y se la instalamos hoy mismo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCallLink
              label="tires_hero"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={20} />
              LLAME AHORA: {siteConfig.phone}
            </PhoneCallLink>
            <Link
              href="/es/servicios"
              className="border-2 border-brand-text hover:border-brand-orange hover:text-brand-orange text-brand-text px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
            >
              VER SERVICIOS
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-brand-surface-light bg-brand-surface p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/15">
                  <b.icon size={26} className="text-brand-orange" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-brand-text-muted">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tire size categories (already localized component) */}
      <TireSizes locale="es" />
    </>
  )
}

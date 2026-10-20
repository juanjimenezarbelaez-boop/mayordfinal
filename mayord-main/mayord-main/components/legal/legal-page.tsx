import Link from "next/link"
import CookieSettingsButton from "@/components/consent/cookie-settings-button"
import { LEGAL_LAST_UPDATED, legalContent, type LegalDocKey } from "@/lib/legal-content"
import { legalRoutes } from "@/lib/legal-routes"
import type { Locale } from "@/lib/i18n"

const nav = {
  en: { privacy: "Privacy", cookies: "Cookies", terms: "Terms", contents: "On this page", manage: "Manage cookie preferences" },
  es: { privacy: "Privacidad", cookies: "Cookies", terms: "Términos", contents: "En esta página", manage: "Gestionar preferencias de cookies" },
} as const

export default function LegalPage({ doc, locale }: { doc: LegalDocKey; locale: Locale }) {
  const content = legalContent[locale][doc]
  const t = nav[locale]
  const routes = legalRoutes[locale]
  const updated = new Date(`${LEGAL_LAST_UPDATED}T12:00:00Z`).toLocaleDateString(
    locale === "es" ? "es-US" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  )

  return (
    <main className="bg-brand-dark pb-24 pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav aria-label={t.contents} className="mb-10 flex flex-wrap gap-2">
          {(["privacy", "cookies", "terms"] as const).map((key) => (
            <Link
              key={key}
              href={routes[key]}
              aria-current={key === doc ? "page" : undefined}
              className={`rounded-full px-4 py-2 font-label text-sm font-bold transition-colors ${
                key === doc
                  ? "bg-brand-orange text-white"
                  : "border border-brand-surface-light text-brand-text-muted hover:text-white"
              }`}
            >
              {t[key]}
            </Link>
          ))}
        </nav>

        <header className="mb-12 flex max-w-3xl flex-col gap-4">
          <h1 className="font-heading text-4xl font-bold text-white text-balance sm:text-5xl">{content.title}</h1>
          <p className="font-label text-sm font-medium uppercase tracking-wider text-brand-orange">
            {content.updatedLabel}: <time dateTime={LEGAL_LAST_UPDATED}>{updated}</time>
          </p>
          <p className="text-lg leading-relaxed text-brand-text-muted text-pretty">{content.intro}</p>
        </header>

        <div className="flex flex-col gap-12 lg:flex-row">
          <aside className="lg:w-64 lg:shrink-0">
            <div className="flex flex-col gap-3 lg:sticky lg:top-28">
              <p className="font-label text-xs font-bold uppercase tracking-wider text-white">{t.contents}</p>
              <ol className="flex flex-col gap-2 text-sm">
                {content.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-brand-text-muted transition-colors hover:text-brand-orange">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="flex min-w-0 max-w-3xl flex-1 flex-col gap-10">
            {content.sections.map((section) => (
              <section key={section.id} id={section.id} className="flex scroll-mt-28 flex-col gap-4">
                <h2 className="font-heading text-2xl font-bold text-white text-balance">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="leading-relaxed text-brand-text-muted text-pretty">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed text-brand-text-muted marker:text-brand-orange">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="overflow-x-auto rounded-xl border border-brand-surface-light">
                    <table className="w-full min-w-[36rem] text-left text-sm">
                      <thead className="bg-brand-surface text-white">
                        <tr>
                          {section.table.headers.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-label font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row[0]} className="border-t border-brand-surface-light align-top">
                            {row.map((cell, i) => (
                              <td
                                key={i}
                                className={`px-4 py-3 leading-relaxed ${i === 0 ? "font-mono text-white" : "text-brand-text-muted"}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {doc === "cookies" && (
              <CookieSettingsButton
                label={t.manage}
                className="self-start rounded-xl bg-brand-orange px-6 py-3 font-label text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              />
            )}
          </article>
        </div>
      </div>
    </main>
  )
}

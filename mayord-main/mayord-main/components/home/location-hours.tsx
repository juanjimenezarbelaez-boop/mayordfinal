import { hours, hoursEs, siteConfig } from "@/lib/data"
import type { Locale } from "@/lib/i18n"
import DirectionsLink from "@/components/directions-link"

const copy = {
  en: { heading: "Location & Hours", directions: "Get directions" },
  es: { heading: "Ubicación y Horario", directions: "Cómo llegar" },
}

export default function LocationHours({ locale = "en" }: { locale?: Locale }) {
  const t = copy[locale]
  const hoursList = locale === "es" ? hoursEs : hours

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t.heading}</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 w-full text-gray-900">
            <div className="w-full bg-gray-100 overflow-hidden h-[300px] mb-6">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mayo RD Tire Shop Location"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <p className="text-xl font-bold font-heading text-brand-orange mb-1">
                  {siteConfig.address.street}
                </p>
                <p className="text-base text-gray-600">
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
              </div>
              <DirectionsLink
                label="location_hours"
                className="inline-block bg-brand-dark hover:bg-brand-orange text-white px-6 py-3 rounded-2xl font-bold transition-colors text-sm"
              >
                {t.directions}
              </DirectionsLink>
            </div>
          </div>

          <div className="lg:w-[400px] w-full text-gray-900">
            <ul className="space-y-5 font-medium text-lg text-gray-700 mb-8">
              {hoursList.map((entry) => (
                <li key={entry.day} className="flex gap-8">
                  <span className="w-16 font-semibold">{entry.day}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

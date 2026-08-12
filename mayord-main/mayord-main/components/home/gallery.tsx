import Image from "next/image"
import { images } from "@/lib/data"
import type { Locale } from "@/lib/i18n"

const galleryImagesByLocale = {
  en: [
    { src: images.gallery1, alt: "Store exterior" },
    { src: images.gallery2, alt: "Waiting area" },
    { src: images.gallery3, alt: "Mechanic working" },
    { src: images.gallery4, alt: "Stack of tires" },
  ],
  es: [
    { src: images.gallery1, alt: "Exterior del taller" },
    { src: images.gallery2, alt: "Sala de espera" },
    { src: images.gallery3, alt: "Mecánico trabajando" },
    { src: images.gallery4, alt: "Pila de llantas" },
  ],
}

const copy = {
  en: { eyebrow: "VISIT OUR SHOP", heading: "COME SEE US!" },
  es: { eyebrow: "VISITE NUESTRO TALLER", heading: "¡VENGA A VERNOS!" },
}

export default function Gallery({ locale = "en" }: { locale?: Locale }) {
  const galleryImages = galleryImagesByLocale[locale]
  const t = copy[locale]

  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
            {t.eyebrow}
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">{t.heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.alt}
              className="bg-brand-surface rounded-xl overflow-hidden aspect-square border border-brand-surface-light relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

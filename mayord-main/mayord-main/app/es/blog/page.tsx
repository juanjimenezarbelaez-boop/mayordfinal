import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { blogPosts, images } from "@/lib/data"
import { pageMetadata, breadcrumbSchema, jsonLdProps } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Consejos de Llantas y Novedades del Taller para Conductores de Maryland",
  description:
    "Consejos de llantas, recomendaciones de mantenimiento y guías de compra para conductores de Edgewater y Annapolis, MD del equipo familiar de Mayo RD Tire Shop.",
  path: "/es/blog",
  locale: "es",
})

const breadcrumbs = breadcrumbSchema([
  { name: "Inicio", path: "/es" },
  { name: "Blog", path: "/es/blog" },
])

export default function BlogEsPage() {
  return (
    <>
      <script {...jsonLdProps(breadcrumbs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden bg-brand-dark">
        <Image
          src={images.blogHero}
          alt="Consejos de mantenimiento de llantas de Mayo RD Tire Shop en Edgewater, Maryland"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40 pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white uppercase">
            NOVEDADES DEL <span className="text-brand-orange">TALLER</span>
          </h1>
          <p className="text-xl sm:text-2xl text-brand-text-muted mb-8 max-w-3xl mx-auto font-medium">
            Consejos de llantas, recomendaciones de mantenimiento y las últimas
            novedades de Mayo RD Tire Shop.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-brand-orange transition-all hover:shadow-xl flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden bg-gray-100 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-brand-orange uppercase text-xs font-bold tracking-wider">
                      <Tag size={14} /> {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-3 leading-snug group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-8 font-medium line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-brand-orange font-bold font-label uppercase tracking-wider text-sm gap-2">
                    Leer Artículo <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

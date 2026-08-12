import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { blogPosts } from "@/lib/data"

/**
 * Renders a paragraph, converting inline link tokens `{{link:/path|anchor text}}`
 * into real internal links so articles can pass ranking signals with descriptive anchors.
 */
const LINK_TOKEN = /\{\{link:([^|]+)\|([^}]+)\}\}/g
function renderRichText(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  LINK_TOKEN.lastIndex = 0
  while ((match = LINK_TOKEN.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))
    const [, href, label] = match
    nodes.push(
      <Link
        key={`${href}-${match.index}`}
        href={href}
        className="text-brand-orange font-bold hover:underline"
      >
        {label}
      </Link>,
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}
import {
  pageMetadata,
  breadcrumbSchema,
  blogPostingSchema,
  jsonLdProps,
} from "@/lib/seo"
import BlogCta from "@/components/blog/blog-cta"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    ogType: "article",
  })
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ])

  return (
    <>
      <script {...jsonLdProps(blogPostingSchema(post))} />
      <script {...jsonLdProps(breadcrumbs)} />

      <article className="bg-white">
        {/* Hero image */}
        <div className="relative h-[42vh] min-h-[320px] w-full bg-brand-dark">
          <Image
            src={post.image}
            alt={`${post.title} — Mayo RD Tire Shop, Edgewater, MD`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 pb-24">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-orange font-bold font-label text-sm hover:underline mb-8"
            >
              <ArrowLeft size={16} /> BACK TO BLOG
            </Link>

            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-brand-orange uppercase text-xs font-bold tracking-wider">
                <Tag size={14} /> {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-8 leading-tight text-balance">
              {post.title}
            </h1>

            <div className="space-y-8">
              {post.content.map((section, i) => (
                <section key={i}>
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-brand-dark mb-3">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.body.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-gray-700 text-lg leading-relaxed font-medium"
                      >
                        {renderRichText(paragraph)}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <BlogCta />
          </div>
        </div>
      </article>
    </>
  )
}

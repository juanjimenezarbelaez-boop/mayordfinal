"use client"

import { useState } from "react"
import useSWR from "swr"
import { ExternalLink, Quote, Star } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { realReviewsFallback } from "@/lib/reviews-fallback"
import type { NormalizedReview, ReviewsResponse } from "@/app/api/reviews/route"

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to load reviews")
    return res.json() as Promise<ReviewsResponse>
  })

const fallback: ReviewsResponse = realReviewsFallback

type SourceKey = "google" | "yelp"
type FilterKey = "all" | SourceKey

function GoogleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  )
}

function SourceBadge({ source }: { source: SourceKey }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
        source === "google"
          ? "bg-white text-gray-700 border border-gray-200"
          : "bg-[#FF1A1A] text-white border border-[#FF1A1A]"
      }`}
    >
      {source === "google" ? (
        <>
          <GoogleGlyph className="h-3.5 w-3.5" />
          Google
        </>
      ) : (
        <span className="font-black tracking-tight">yelp</span>
      )}
    </span>
  )
}

function SourceSummaryCard({
  source,
  rating,
  count,
  href,
}: {
  source: SourceKey
  rating: number
  count: number
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-colors hover:border-gray-300"
    >
      {source === "google" ? (
        <GoogleGlyph className="h-7 w-7 shrink-0" />
      ) : (
        <span className="text-xl font-black text-[#FF1A1A]">yelp</span>
      )}
      <div className="leading-tight">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{rating.toFixed(1)}</span>
          <div className="flex text-brand-orange">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.round(rating) ? "fill-current" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
        <p className="text-xs font-medium text-gray-500">{count} reviews</p>
      </div>
      <ExternalLink
        size={16}
        className="ml-auto text-gray-300 transition-colors group-hover:text-gray-500"
      />
    </a>
  )
}

function ReviewCard({ review }: { review: NormalizedReview }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-brand-orange">
          <Quote size={32} />
        </div>
        <SourceBadge source={review.source} />
      </div>
      <p className="text-gray-700 text-lg mb-8 flex-grow font-medium whitespace-pre-line">
        &quot;{review.quote}&quot;
      </p>
      <div>
        <h4 className="font-bold text-gray-900 leading-none">{review.author}</h4>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex text-brand-orange">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.round(review.rating) ? "fill-current" : "text-gray-300"}
              />
            ))}
          </div>
          {review.timeAgo && (
            <span className="text-xs text-gray-400">{review.timeAgo}</span>
          )}
        </div>
      </div>
    </div>
  )
}

function CardSkeleton() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col animate-pulse">
      <div className="mb-6 flex items-center justify-between">
        <div className="h-8 w-8 bg-gray-200 rounded" />
        <div className="h-6 w-20 bg-gray-200 rounded-full" />
      </div>
      <div className="space-y-3 flex-grow mb-8">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-11/12" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
      <div>
        <div className="h-4 bg-gray-200 rounded w-32 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-24" />
      </div>
    </div>
  )
}

export default function ReviewsList() {
  const [filter, setFilter] = useState<FilterKey>("all")

  const { data, isLoading } = useSWR<ReviewsResponse>("/api/reviews", fetcher, {
    fallbackData: fallback,
    revalidateOnFocus: false,
    onError: () => {},
    shouldRetryOnError: false,
  })

  const source = data && data.reviews.length > 0 ? data : fallback
  const showSkeleton = isLoading && (!data || data.reviews.length === 0)

  const hasGoogle = source.summary.google.available && source.summary.google.count > 0
  const hasYelp = source.summary.yelp.available && source.summary.yelp.count > 0

  const filters: { key: FilterKey; label: string; enabled: boolean }[] = [
    { key: "all", label: "All", enabled: true },
    { key: "google", label: "Google", enabled: hasGoogle },
    { key: "yelp", label: "Yelp", enabled: hasYelp },
  ]

  const filtered =
    filter === "all"
      ? source.reviews
      : source.reviews.filter((r) => r.source === filter)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Per-source summary + filter controls */}
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-md w-full">
          {hasGoogle && (
            <SourceSummaryCard
              source="google"
              rating={source.summary.google.rating}
              count={source.summary.google.count}
              href={siteConfig.googleUrl}
            />
          )}
          {hasYelp && (
            <SourceSummaryCard
              source="yelp"
              rating={source.summary.yelp.rating}
              count={source.summary.yelp.count}
              href={siteConfig.yelpUrl}
            />
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {filters
            .filter((f) => f.enabled)
            .map((f) => {
              const active = filter === f.key
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                    active
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {f.key === "google" && <GoogleGlyph className="h-4 w-4" />}
                  {f.key === "yelp" && (
                    <span className={`font-black ${active ? "text-white" : "text-[#FF1A1A]"}`}>
                      yelp
                    </span>
                  )}
                  {f.key !== "yelp" && f.label}
                </button>
              )
            })}
        </div>
      </div>

      {/* Review grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showSkeleton
          ? [0, 1, 2, 3, 4, 5].map((i) => <CardSkeleton key={i} />)
          : filtered.map((review) => <ReviewCard key={review.id} review={review} />)}
      </div>

      {/* Outbound CTAs */}
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={siteConfig.googleUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-[#4285F4] px-8 py-4 rounded-lg transition-colors font-bold text-gray-900 w-full sm:w-auto justify-center"
        >
          <GoogleGlyph className="h-6 w-6" />
          READ ALL REVIEWS ON GOOGLE
        </a>
        <a
          href={siteConfig.yelpUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-[#FF1A1A] px-8 py-4 rounded-lg transition-colors font-bold text-gray-900 w-full sm:w-auto justify-center"
        >
          <span className="text-xl font-black text-[#FF1A1A]">yelp</span>
          READ ALL REVIEWS ON YELP
        </a>
      </div>
    </div>
  )
}

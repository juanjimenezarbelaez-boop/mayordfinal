import { NextResponse } from "next/server"

export const revalidate = 3600 // cache upstream data for 1 hour

const GOOGLE_PLACE_ID = "ChIJYYespVTzt4kR9CiyK1xXjfY"
const YELP_BUSINESS_ID = "mayo-rd-tire-shop-edgewater-2"

export interface NormalizedReview {
  id: string
  author: string
  quote: string
  rating: number
  source: "google" | "yelp"
  avatar?: string
  timeAgo?: string
}

export interface SourceSummary {
  rating: number
  count: number
  available: boolean
}

export interface ReviewsResponse {
  averageRating: number
  totalCount: number
  reviews: NormalizedReview[]
  sources: { google: boolean; yelp: boolean }
  summary: { google: SourceSummary; yelp: SourceSummary }
}

async function fetchGoogle(): Promise<{
  rating: number
  count: number
  reviews: NormalizedReview[]
} | null> {
  const key = process.env.GCP_API_KEY_2
  if (!key) return null

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?languageCode=en`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate },
      },
    )

    if (!res.ok) return null
    const data = await res.json()

    const reviews: NormalizedReview[] = (data.reviews ?? [])
      .map((r: any, i: number): NormalizedReview | null => {
        const quote = r?.text?.text ?? r?.originalText?.text
        if (!quote) return null
        return {
          id: `google-${i}`,
          author: r?.authorAttribution?.displayName ?? "Google User",
          quote,
          rating: typeof r?.rating === "number" ? r.rating : 5,
          source: "google",
          avatar: r?.authorAttribution?.photoUri,
          timeAgo: r?.relativePublishTimeDescription,
        }
      })
      .filter(Boolean) as NormalizedReview[]

    return {
      rating: typeof data.rating === "number" ? data.rating : 0,
      count: typeof data.userRatingCount === "number" ? data.userRatingCount : 0,
      reviews,
    }
  } catch {
    return null
  }
}

async function fetchYelp(): Promise<{
  rating: number
  count: number
  reviews: NormalizedReview[]
} | null> {
  const key = process.env.YELP_API_KEY
  if (!key) return null

  try {
    const headers = { Authorization: `Bearer ${key}` }

    const [businessRes, reviewsRes] = await Promise.all([
      fetch(`https://api.yelp.com/v3/businesses/${YELP_BUSINESS_ID}`, {
        headers,
        next: { revalidate },
      }),
      fetch(`https://api.yelp.com/v3/businesses/${YELP_BUSINESS_ID}/reviews?limit=20&sort_by=yelp_sort`, {
        headers,
        next: { revalidate },
      }),
    ])

    if (!businessRes.ok) return null
    const business = await businessRes.json()
    const reviewsData = reviewsRes.ok ? await reviewsRes.json() : { reviews: [] }

    const reviews: NormalizedReview[] = (reviewsData.reviews ?? [])
      .map((r: any, i: number): NormalizedReview | null => {
        if (!r?.text) return null
        return {
          id: `yelp-${r?.id ?? i}`,
          author: r?.user?.name ?? "Yelp User",
          quote: r.text,
          rating: typeof r?.rating === "number" ? r.rating : 5,
          source: "yelp",
          avatar: r?.user?.image_url,
          timeAgo: r?.time_created,
        }
      })
      .filter(Boolean) as NormalizedReview[]

    return {
      rating: typeof business.rating === "number" ? business.rating : 0,
      count: typeof business.review_count === "number" ? business.review_count : 0,
      reviews,
    }
  } catch {
    return null
  }
}

export async function GET() {
  const [google, yelp] = await Promise.all([fetchGoogle(), fetchYelp()])

  // Import lazily to avoid a value-level circular import with this module's types.
  const { realReviewsFallback } = await import("@/lib/reviews-fallback")

  const reviews: NormalizedReview[] = []
  if (google) reviews.push(...google.reviews)
  if (yelp) reviews.push(...yelp.reviews)

  // When neither live source returns usable review data, serve the real,
  // captured Google + Yelp data so the section always reflects real numbers.
  if (reviews.length === 0) {
    return NextResponse.json(realReviewsFallback, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    })
  }

  // Weighted average across sources by their rating count.
  let ratingSum = 0
  let countSum = 0
  for (const src of [google, yelp]) {
    if (src && src.count > 0 && src.rating > 0) {
      ratingSum += src.rating * src.count
      countSum += src.count
    }
  }
  const averageRating = countSum > 0 ? Number((ratingSum / countSum).toFixed(1)) : 0

  const payload: ReviewsResponse = {
    averageRating,
    totalCount: countSum,
    reviews,
    sources: { google: Boolean(google), yelp: Boolean(yelp) },
    summary: {
      google: {
        rating: google?.rating ?? 0,
        count: google?.count ?? 0,
        available: Boolean(google),
      },
      yelp: {
        rating: yelp?.rating ?? 0,
        count: yelp?.count ?? 0,
        available: Boolean(yelp),
      },
    },
  }

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}

// Rounds live review counts down to the nearest hundred ("397" -> "300+") so the
// copy stays truthful without needing manual updates as new reviews come in.
export function formatReviewCount(count: number): string {
  if (count >= 100) return `${Math.floor(count / 100) * 100}+`
  return String(count)
}

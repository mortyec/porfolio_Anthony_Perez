/**
 * Returns a screenshot URL for a given website using WordPress mshots.
 * Free, no auth, decent caching. Width should match the rendered size.
 */
export function screenshotUrl(url: string, width = 1280): string {
  const stripped = url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(`https://${stripped}`)}?w=${width}`
}

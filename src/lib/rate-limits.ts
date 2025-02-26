/* this works well for low-traffic apps. For production, consider Redis, Upstash, or Cloudflare Turnstile for rate limiting. */
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const LIMIT = 3; // max requests allowed
const WINDOW = 60 * 2000; // 1-minute window

export default async function rateLimit(ip: string): Promise<boolean> {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  // reset count if the window has passed
  if (now - entry.timestamp > WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  // check if limit is exceeded
  if (entry.count >= LIMIT) {
    return true;
  }

  // increment count
  rateLimitMap.set(ip, { count: entry.count + 1, timestamp: entry.timestamp });
  return false;
}

/**
 * BunnyCDN configuration for static assets
 * CDN is only active on production (carspamarbella.es)
 */

export const CDN_BASE_URL = "https://mamrotspain.b-cdn.net";
const PRODUCTION_HOST = "carspamarbella.es";

/**
 * Checks if the current environment should use CDN
 * Only returns true when running on carspamarbella.es
 */
function shouldUseCdn(): boolean {
  if (typeof window === "undefined") {
    // Server-side: check for production environment
    return process.env.NODE_ENV === "production";
  }
  // Client-side: check the hostname
  return window.location.hostname === PRODUCTION_HOST;
}

/**
 * Converts a local path to a CDN URL (only on production)
 * @param path - The local path starting with "/" (e.g., "/mamrot/image.jpg")
 * @returns The full CDN URL on production, or the original path in development
 */
export function cdn(path: string): string {
  if (!shouldUseCdn()) {
    // In development, return the original path
    return path;
  }
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Encode each path segment to handle spaces and special characters in filenames
  const encodedPath = cleanPath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${CDN_BASE_URL}/${encodedPath}`;
}

// Alias for backward compatibility
export const getCdnUrl = cdn;

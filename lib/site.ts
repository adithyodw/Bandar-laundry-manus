/** Canonical site origin — keep in sync with `metadataBase` in `app/layout.tsx`. */
export const SITE_URL = "https://bandar-laundry-manus.vercel.app";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export const LOGO_ABSOLUTE = absoluteUrl("/logo-hd.png");
export const DEFAULT_OG_IMAGE = absoluteUrl("/stores/10.jpeg");

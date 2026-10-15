/** Prefix in-app links with the Vite base, so GitHub Pages and local dev share one path. */
export function sitePath(path: string): string {
  if (/^(https?:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function publicAsset(file: string): string {
  return `${import.meta.env.BASE_URL}assets/${file}`;
}

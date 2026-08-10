const DEFAULT_LOCAL_API_URL = "http://127.0.0.1:8000/api";

function normalizeBaseUrl(url: string): string {
  return url.trim().replace(/\/+$/, "");
}

export function getApiBaseUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (configuredUrl?.trim()) {
    return normalizeBaseUrl(configuredUrl);
  }

  if (process.env.NODE_ENV === "development") {
    return DEFAULT_LOCAL_API_URL;
  }

  throw new Error(
    "NEXT_PUBLIC_API_BASE_URL is not configured for the production build."
  );
}

export function apiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
}

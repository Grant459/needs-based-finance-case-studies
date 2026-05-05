export function withBasePath(path?: string): string | undefined {
  if (!path) return undefined;

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || "/";

  return `${base}${cleanPath}`.replace(/\/{2,}/g, "/");
}

export function isClient() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

export function isDevEnv() {
  return !process.env.NODE_ENV || process.env.NODE_ENV === "DEVELOPMENT";
}

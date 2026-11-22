// Prefissa un percorso di /public con il "base" configurato in astro.config.mjs
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`

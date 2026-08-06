export const features = {
  projects: true,
  articles: import.meta.env.DEV,
} as const

export type Feature = keyof typeof features

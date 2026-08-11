export const features = {
  projects: true,
  articles: true,
} as const

export type Feature = keyof typeof features

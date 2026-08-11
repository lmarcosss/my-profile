import type { Language } from '@/config/i18n'

import migratingDotnetEn from './migrating-dotnet-to-10/en-US.md?raw'
import migratingDotnetPt from './migrating-dotnet-to-10/pt-BR.md?raw'
import migratingDotnetCover from './migrating-dotnet-to-10/image.png'

export type Article = {
  slug: string
  title: Record<Language, string>
  image: {
    source: string
    alt: Record<Language, string>
  }
  content: Record<Language, string>
}

export const articles: Article[] = [
  {
    slug: 'migrating-dotnet-to-10',
    title: {
      'en-US': 'Migrating from .NET 6/7 to .NET 10',
      'pt-BR': 'Migrando de .NET 6/7 para .NET 10',
    },
    image: {
      source: migratingDotnetCover,
      alt: {
        'en-US': 'Cover image for Migrating from .NET 6/7 to .NET 10',
        'pt-BR': 'Imagem de capa de Migrando de .NET 6/7 para .NET 10',
      },
    },
    content: {
      'en-US': migratingDotnetEn,
      'pt-BR': migratingDotnetPt,
    },
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}

if (import.meta.env.DEV) {
  const article = getArticle('migrating-dotnet-to-10')
  console.assert(
    !!article?.content['en-US'] && !!article?.content['pt-BR'],
    'migrating-dotnet-to-10 must have en-US and pt-BR content',
  )
  console.assert(
    getArticle('missing-slug') === undefined,
    'unknown slug must be undefined',
  )
}

import type { Language } from '@/config/i18n'
import coverImage from '../../assets/profile-image.webp'

import helloWorldEn from './hello-world/en-US.md?raw'
import helloWorldPt from './hello-world/pt-BR.md?raw'

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
    slug: 'hello-world',
    title: {
      'en-US': 'Hello, world',
      'pt-BR': 'Olá, mundo',
    },
    image: {
      source: coverImage,
      alt: {
        'en-US': 'Cover image for Hello, world',
        'pt-BR': 'Imagem de capa de Olá, mundo',
      },
    },
    content: {
      'en-US': helloWorldEn,
      'pt-BR': helloWorldPt,
    },
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}

if (import.meta.env.DEV) {
  const hello = getArticle('hello-world')
  console.assert(
    !!hello?.content['en-US'] && !!hello?.content['pt-BR'],
    'hello-world must have en-US and pt-BR content',
  )
  console.assert(
    getArticle('missing-slug') === undefined,
    'unknown slug must be undefined',
  )
}

import type { Language } from '@/config/i18n'

import filmeFlixImage from './filme-flix/image.avif'
import pokemonEvolutionImage from './pokemon-evolution/image.jpg'

export type Project = {
  slug: string
  title: string
  description: Record<Language, string>
  image: {
    source: string
    alt: Record<Language, string>
  }
  githubUrl: string
  previewUrl?: string
  tech: string[]
}

export const projects: Project[] = [
  {
    slug: 'filme-flix',
    title: 'Filme flix',
    description: {
      'en-US': 'Flutter project using TMDB API',
      'pt-BR': 'Projeto Flutter utilizando a API do TMDB',
    },
    image: {
      source: filmeFlixImage,
      alt: {
        'en-US': 'Filme flix project cover',
        'pt-BR': 'Capa do projeto Filme flix',
      },
    },
    githubUrl: 'https://github.com/lmarcosss/filme-flix',
    tech: ['Flutter', 'Dart', 'TMDB API'],
  },
  {
    slug: 'pokemon-evolution',
    title: 'Pokemon Evolution',
    description: {
      'en-US': 'Next.js project using PokeAPI',
      'pt-BR': 'Projeto Next.js utilizando a PokeAPI',
    },
    image: {
      source: pokemonEvolutionImage,
      alt: {
        'en-US': 'Pokemon Evolution project cover',
        'pt-BR': 'Capa do projeto Pokemon Evolution',
      },
    },
    previewUrl: 'https://pokemon-evolution.devleo.tech',
    githubUrl: 'https://github.com/lmarcosss/pokemon-evolution',
    tech: ['Next.js', 'TypeScript', 'PokeAPI'],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

if (import.meta.env.DEV) {
  console.assert(
    !!getProject('filme-flix')?.image.source &&
      !!getProject('pokemon-evolution')?.image.source,
    'projects must have images',
  )
  console.assert(
    getProject('missing-slug') === undefined,
    'unknown slug must be undefined',
  )
}

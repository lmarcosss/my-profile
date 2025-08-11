import { useTranslation } from 'react-i18next'
import filmeFlixImage from '../assets/projects/movie.webp'
import pokemonEvolutionImage from '../assets/projects/pokemon.webp'
import { lazy, Suspense } from 'react'
import { Skeleton } from './ui/skeleton'

const Project = lazy(() => import('./project'))

const projects = [
  {
    title: 'Filme flix',
    description: {
      'en-US': 'Flutter project using TMDB API',
      'pt-BR': 'Projeto Flutter utilizando a API do TMDB',
    },
    image: {
      source: filmeFlixImage,
      alt: 'Filme flix project screenshot',
      className:
        'w-40 h-[20rem] bg-black my-6 border-4 border-black rounded-3xl',
    },
    githubUrl: 'https://github.com/lmarcosss/filme-flix',
    backgroundColor: 'bg-emerald-600',
  },
  {
    title: 'Pokemon Evolution',
    description: {
      'en-US': 'Next.js project using PokeAPI',
      'pt-BR': 'Projeto Next.js utilizando a PokeAPI',
    },
    image: {
      source: pokemonEvolutionImage,
      alt: 'Pokemon Evolution project screenshot',
      className:
        'w-[18rem] sm:w-[15rem] md:w-[21rem] lg:w-[24rem] my-6 rounded-xl',
    },
    githubUrl: 'https://github.com/lmarcosss/pokemon-evolution',
    backgroundColor: 'bg-yellow-500',
  },
]

export function Projects() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-start px-6">
      <h2 className="text-3xl font-semibold lg:px-8">
        {t('projects')}
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 justify-center
          items-center w-full py-6 px-0 lg:px-8"
      >
        <Suspense
          fallback={
            <>
              <Skeleton className="h-[32rem] sm:w-full rounded-xl" />
              <Skeleton className="h-[32rem] sm:w-full rounded-xl" />
            </>
          }
        >
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </Suspense>
      </div>
    </div>
  )
}

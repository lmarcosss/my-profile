import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'

import filmeFlixImage from '../assets/projects/movie.webp'
import pokemonEvolutionImage from '../assets/projects/pokemon.webp'
import { Language } from '../config/i18n'

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
      className: 'w-40 my-6 border-4 border-black rounded-3xl',
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

interface Project {
  title: string
  description: {
    'en-US': string
    'pt-BR': string
  }
  image: {
    source: string
    alt: string
    className: string
  }
  githubUrl: string
  backgroundColor: string
}

interface ProjectProps {
  project: Project
}

function Project({ project }: ProjectProps) {
  const { t, i18n } = useTranslation()

  return (
    <div
      key={project.title}
      className={`flex flex-col justify-between items-center sm:w-full rounded-lg
        h-[32rem] ${project.backgroundColor || 'bg-slate-200'}`}
    >
      <div className="flex-1 flex justify-center items-center">
        <img
          src={project.image.source}
          className={project.image.className}
          alt={project.image.alt}
        />
      </div>
      <div
        className="flex flex-col items-start w-full justify-start text-left p-4
          rounded-b-lg"
      >
        <h3 className="text-2xl font-semibold dark:text-black text-white">
          {project.title}
        </h3>
        <p className="dark:text-black text-white">
          {project.description[i18n.language as Language]}
        </p>

        <a
          className="bg-white dark:bg-black flex flex-row mt-4 items-center
            hover:text-gray-400 text-lg rounded-sm p-2"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="size-6 pr-2" />
          <span className="text-sm">{t('see-code')}</span>
        </a>
      </div>
    </div>
  )
}

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
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

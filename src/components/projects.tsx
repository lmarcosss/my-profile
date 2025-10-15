import { useTranslation } from 'react-i18next'
import filmeFlixImage from '../assets/projects/movie.png'
import pokemonEvolutionImage from '../assets/projects/pokemon.png'
import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

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
      className: 'w-80 my-6',
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
      className: `w-max rounded-xl bg-[url(${pokemonEvolutionImage})]`,
    },
    previewUrl: 'https://pokemon-evolution.devleo.tech',
    githubUrl: 'https://github.com/lmarcosss/pokemon-evolution',
    backgroundColor: 'bg-sky-600',
  },
]

export function Projects() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-start px-6 pt-16 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl -z-10" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent lg:px-8 mb-2">
          {t('projects')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full lg:ml-8 mb-8" />
      </motion.div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 justify-center
          items-stretch w-full py-6 px-0 lg:px-8"
      >
        <Suspense
          fallback={
            <>
              <div className="h-[28rem] sm:w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 animate-pulse" />
              <div className="h-[28rem] sm:w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 animate-pulse" />
            </>
          }
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Project project={project} />
            </motion.div>
          ))}
        </Suspense>
      </div>
    </div>
  )
}

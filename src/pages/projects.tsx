import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import filmeFlixImage from '../assets/projects/movie.png'
import pokemonEvolutionImage from '../assets/projects/pokemon.png'

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
      className: 'w-fit h-[370px] object-fill pt-16',
    },
    githubUrl: 'https://github.com/lmarcosss/filme-flix',
    tech: ['Flutter', 'Dart', 'TMDB API'],
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
      className: 'w-fit h-70 object-cover',
    },
    previewUrl: 'https://pokemon-evolution.devleo.tech',
    githubUrl: 'https://github.com/lmarcosss/pokemon-evolution',
    tech: ['Next.js', 'TypeScript', 'PokeAPI'],
  },
]

export function ProjectsPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en-US' | 'pt-BR'

  return (
    <section className="px-6 py-8 lg:px-14 text-left">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {t('projects')}
        </h2>
        <div className="w-20 h-px bg-gray-300 dark:bg-green-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative w-full border border-gray-300 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 bg-white dark:bg-[#0a0a0a] rounded-lg overflow-hidden transition-colors"
          >
            <div className="relative overflow-hidden flex justify-center items-center bg-gray-100 dark:bg-[#141414]">
              <img
                src={project.image.source}
                className={project.image.className}
                alt={project.image.alt}
                loading="lazy"
              />

              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-800 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description[lang]}
                </p>
              </div>

              <div className="flex gap-2 mt-6">
                <a
                  className="flex-1 border border-gray-300 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 px-3 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:text-green-500 dark:hover:text-green-500 transition-colors text-sm whitespace-nowrap"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>{t('see-code')}</span>
                </a>

                {project.previewUrl && (
                  <a
                    className="flex-1 border border-gray-300 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 px-3 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:text-green-500 dark:hover:text-green-500 transition-colors text-sm whitespace-nowrap"
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    <span>{t('see-preview')}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

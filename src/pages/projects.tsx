import { Code2, ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    title: 'Filme flix',
    description: {
      'en-US': 'Flutter project using TMDB API',
      'pt-BR': 'Projeto Flutter utilizando a API do TMDB',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex h-full flex-col border border-gray-300 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 rounded-lg overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors"
          >
            <div
              className="flex h-40 w-full items-center justify-center bg-gray-100 dark:bg-[#141414]"
              aria-hidden
            >
              <Code2 className="h-10 w-10 text-gray-400 dark:text-gray-600" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-500 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                {project.description[lang]}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 border border-gray-300 dark:border-gray-800 rounded text-xs text-gray-600 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-2">
                <a
                  className="flex-1 border border-gray-300 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:text-green-500 dark:hover:text-green-500 transition-colors text-sm whitespace-nowrap"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>{t('see-code')}</span>
                </a>

                {project.previewUrl && (
                  <a
                    className="flex-1 border border-gray-300 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:text-green-500 dark:hover:text-green-500 transition-colors text-sm whitespace-nowrap"
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

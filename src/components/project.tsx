import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'


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
  previewUrl?: string
  githubUrl: string
  backgroundColor: string
  tech: string[]
}


export function Project({ project }: { project: Project }) {
  const { i18n } = useTranslation()

  return (
    <div className="group relative w-full border border-gray-300 dark:border-gray-800 dark:group-hover:border-green-500/50 bg-white dark:bg-[#0a0a0a] rounded-lg overflow-hidden transition-colors">
      <div className="relative h-full flex flex-col">
        {/* Image section */}
        <div className="relative overflow-hidden flex-shrink-0 flex justify-center items-center bg-gray-100 dark:bg-[#0a0a0a]">
          <img
            src={project.image.source}
            className={project.image.className}
            alt={project.image.alt}
            loading="lazy"
          />

          {/* Tech badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-800 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-between p-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {project.description[i18n.language as 'en-US' | 'pt-BR']}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-6">
            <a
              className="flex-1 border border-gray-300 dark:border-gray-800 dark:hover:border-green-500/50 text-gray-700 dark:text-gray-300 px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#0f0f0f] dark:hover:text-green-500 transition-colors text-sm"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-4 h-4" />
              <span>Código</span>
            </a>

            {project.previewUrl && (
              <a
                className="border border-gray-300 dark:border-gray-800 dark:hover:border-green-500/50 text-gray-700 dark:text-gray-300 px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#0f0f0f] dark:hover:text-green-500 transition-colors text-sm"
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

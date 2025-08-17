import { Language } from '@/config/i18n'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'
import { LinkPreview } from './link-preview'

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
        h-[33rem] ${project.backgroundColor || 'bg-slate-200'}`}
    >
      <LinkPreview href={project?.previewUrl}>
        <img
          src={project.image.source}
          className={project.image.className}
          alt={project.image.alt}
          loading="lazy"
        />
      </LinkPreview>
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

export default Project

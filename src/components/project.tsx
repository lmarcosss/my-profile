import { Language } from '@/config/i18n'
import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'
import { LinkPreview } from './link-preview'
import { motion } from 'framer-motion'

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
    <motion.div
      key={project.title}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:border-white/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.backgroundColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
      </div>

      <div className="relative z-10 flex flex-col h-full min-h-[28rem]">
        {/* Image section with modern styling */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <LinkPreview href={project?.previewUrl}>
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image.source}
                className={`${project.image.className} transition-all duration-500 group-hover:brightness-110`}
                alt={project.image.alt}
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-full p-3"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLinkIcon className="w-6 h-6 text-gray-800" />
                </motion.div>
              </div>
            </motion.div>
          </LinkPreview>
        </div>

        {/* Content section with glassmorphism */}
        <div className="flex-1 flex flex-col justify-between p-6 bg-gradient-to-t from-black/20 to-transparent backdrop-blur-sm">
          <div className="space-y-3">
            <motion.h3
              className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
              {project.description[i18n.language as Language]}
            </p>
          </div>

          {/* Action buttons with modern styling */}
          <motion.div
            className="flex gap-3 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/btn"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GitHubLogoIcon className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-medium">{t('see-code')}</span>
            </motion.a>

            {project.previewUrl && (
              <motion.a
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300 group/btn"
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLinkIcon className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">Live Demo</span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent w-0 group-hover:w-full transition-all duration-1000 transform -skew-x-12" />
    </motion.div>
  )
}

export default Project

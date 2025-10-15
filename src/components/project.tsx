import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'
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
  tech: string[]
}


export function Project({ project, index }: { project: Project; index: number }) {
  const { i18n } = useTranslation()

  return (
    <motion.div
      className="group relative w-full h-min-[300px] cursor-pointer pb-8"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.backgroundColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

        {/* 3D depth layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Image section with 3D effect */}
          <div className="relative overflow-hidden rounded-t-3xl flex-shrink-0 flex justify-center items-center">
            <motion.img
              src={project.image.source}
              className={project.image.className}
              alt={project.image.alt}
              loading="lazy"
              initial={{ scale: 1, rotateY: 0 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            />

            {/* Tech badges with 3D effect */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {project.tech.map((tech: string, techIndex: number) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs font-medium text-white"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.2 + techIndex * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Preview overlay with 3D effect */}
            {project.previewUrl && (
              <motion.div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-full p-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                  <ExternalLinkIcon className="w-6 h-6 text-gray-800" />
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Content section with 3D effect */}
          <div className="flex-1 flex flex-col justify-between p-6">
            <div className="space-y-3">
              <motion.h3
                className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                whileHover={{
                  x: 5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                whileHover={{
                  x: 3,
                  transition: { duration: 0.2 }
                }}
              >
                {project.description[i18n.language as 'en-US' | 'pt-BR']}
              </motion.p>
            </div>

            {/* Action buttons with 3D effect */}
            <motion.div
              className="flex gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
            >
              <motion.a
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/btn"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GitHubLogoIcon className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">Código</span>
              </motion.a>

              {project.previewUrl && (
                <motion.a
                  className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-400/30 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:from-emerald-500/30 hover:to-green-500/30 hover:border-emerald-400/50 transition-all duration-300 group/btn"
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </motion.div>
                  <span className="text-sm font-medium">Demo</span>
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>

        {/* 3D shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-0 group-hover:w-full transition-all duration-1000 transform -skew-x-12" />
      </motion.div>
    </motion.div>
  )
}

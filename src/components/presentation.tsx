import { useTranslation } from 'react-i18next'
import { AnimatedCard } from './animated-card'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MailIcon, Sparkles, Code, Coffee } from 'lucide-react'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { useRef } from 'react'

import profileImage from '../assets/profile-image.webp'


// Floating elements component
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
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
  )
}

const urls = [
  {
    url: 'https://github.com/lmarcosss',
    icon: GitHubLogoIcon,
    name: 'GitHub',
    hoverColor: 'group-hover:text-gray-800 dark:group-hover:text-gray-200',
  },
  {
    url: 'https://www.linkedin.com/in/leo-marcos',
    icon: LinkedInLogoIcon,
    name: 'LinkedIn',
    hoverColor: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
  },
  {
    url: 'https://www.instagram.com/leomarcoss',
    icon: InstagramLogoIcon,
    name: 'Instagram',
    hoverColor: 'group-hover:text-pink-600 dark:group-hover:text-pink-400',
  },
  {
    url: 'mailto: marcosleonardosss@gmail.com',
    icon: MailIcon,
    name: 'Email',
    hoverColor: 'group-hover:text-teal-600 dark:group-hover:text-teal-400',
  },
]

export function Presentation() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="pt-12 lg:pt-20 pb-8 relative">

      {/* Floating elements */}
      <FloatingElements />

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Profile Image Section */}
          <motion.div
            className="mr-0 mb-8 lg:mr-12 lg:mb-0 lg:mt-4"
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedCard>
                <motion.img
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20
                  }}
                  src={profileImage}
                  alt={t('profile-image-alt')}
                  className="bg-[url(/src/assets/profile-image.webp)] rounded-full border-4 w-48
                    h-48 object-cover aspect-auto dark:border-black border-white
                    ring-emerald-500 ring-4 shadow-2xl"
                  style={{
                    imageRendering: 'crisp-edges',
                  }}
                />
              </AnimatedCard>

              {/* Floating icons around profile */}
              <motion.div
                className="absolute -top-4 -right-4 bg-emerald-500/20 backdrop-blur-sm rounded-full p-3 border border-emerald-400/30"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Code className="w-6 h-6 text-emerald-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-4 bg-green-500/20 backdrop-blur-sm rounded-full p-3 border border-green-400/30"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Coffee className="w-6 h-6 text-green-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:h-32 flex flex-col justify-center text-gray-900 dark:text-white text-center lg:text-left leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className=" sm:h-16 flex items-center justify-center lg:justify-start">
                {t('title-pt1')}
              </div>
              <div className="sm:h-16 flex items-center justify-center lg:justify-start">
                <span className="text-emerald-600 dark:text-emerald-500">
                  {t('title-pt2')}
                </span>
              </div>
            </motion.h1>

            {/* Description with fade in */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 sm:mb-6 mb-4 max-w-2xl text-center sm:text-justify lg:text-left leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {t('description')}
            </motion.p>

            {/* Social Links with minimal design */}
            <motion.div
              className="flex flex-wrap gap-6 pt-2 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              {urls.map(({ url, icon: Icon, name, hoverColor }, index) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event={`${name} link clicked`}
                  aria-label={`${t('url-link-aria-label')} ${name}`}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 1.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    duration: 0.1,
                    ease: "easeIn",
                    y: { duration: 0.1, ease: "easeIn" }
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group-hover:shadow-md">
                    <Icon className={`size-5 text-gray-600 dark:text-gray-300 ${hoverColor} transition-colors duration-300`} />
                  </div>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {name}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Decorative sparkles */}
            <motion.div
              className="absolute top-10 right-10 opacity-20 z-30"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-8 h-8 text-emerald-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

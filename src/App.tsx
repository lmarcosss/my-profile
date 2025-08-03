import { ThemeProvider } from './contexts/theme-provider'
import { motion } from 'framer-motion'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { MailIcon } from 'lucide-react'
import { AnimatedCard } from './components/animated-card'
import { NavigationMenuDemo } from './components/navigation-menu'
import { useTranslation } from 'react-i18next'
import './App.css'

const urls = [
  {
    url: 'https://github.com/lmarcosss',
    icon: GitHubLogoIcon,
    hover: 'hover:text-gray-400',
    name: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/leo-marcos',
    icon: LinkedInLogoIcon,
    hover: 'hover:text-blue-400',
    name: 'LinkedIn',
  },
  {
    url: 'https://www.instagram.com/leomarcoss',
    icon: InstagramLogoIcon,
    hover: 'hover:text-red-400',
    name: 'Instagram',
  },
  {
    url: 'mailto: marcosleonardosss@gmail.com',
    icon: MailIcon,
    hover: 'hover:text-cyan-400',
    name: 'Email',
  },
]

export default function App() {
  const { t } = useTranslation()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen overflow-y-auto flex flex-col justify-between">
        <header className="flex justify-end">
          <NavigationMenuDemo />
        </header>

        <div className="pt-12 lg:pt-20 pb-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="mr-0 mb-8 lg:mr-8 lg:mb-0">
                <AnimatedCard>
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                    }}
                    className="w-48 h-48 bg-[url(/src/assets/profile-image.png)] bg-center bg-cover
                      rounded-full border-4 dark:border-black border-white ring-emerald-500
                      ring-4"
                    style={{
                      imageRendering: 'crisp-edges',
                    }}
                  />
                </AnimatedCard>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                  {t('title-pt1')} <br />
                  <span className="text-emerald-500">
                    {t('title-pt2')}
                  </span>
                </h1>
                <p className="text-base lg:text-lg text-gray-400 mb-6 max-w-xl text-justify">
                  {t('description')}
                </p>
                <div
                  className="flex min-w-48 gap-4 pt-0 sm:pt-4 items-center justify-center
                    lg:justify-start"
                >
                  {urls.map(({ url, icon: Icon, hover, name }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      data-umami-event={`${name} link clicked`}
                    >
                      <Icon className={`size-7 ${hover}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-8 lg:py-4">
          <span className="text-center text-gray-500 text-sm">
            {t('copyrights')}
          </span>
        </footer>
      </div>
    </ThemeProvider>
  )
}

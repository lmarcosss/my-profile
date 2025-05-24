import { motion } from 'framer-motion'
import { ThemeProvider } from './contexts/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { TypingAnimation } from './components/typing-animation'
import { Header } from './components/header'
import { AnimatedCard } from './components/animated-card'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { MailIcon } from 'lucide-react'
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
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <div
        className="w-full h-full px-8 mb-16 flex justify-center items-start
          sm:items-center"
      >
        <div className="flex flex-col lg:gap-4">
          <div className="flex flex-wrap justify-center items-center p-2 pt-8 sm:gap-8 md:gap-16">
            <AnimatedCard>
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                }}
                className="w-48 h-48 bg-[url(/src/assets/profile-image.jpeg)] bg-center bg-cover
                  rounded-full border-4 dark:border-black border-white ring-emerald-500
                  ring-4"
                style={{
                  imageRendering: 'crisp-edges',
                }}
              />
            </AnimatedCard>

            <TypingAnimation text="Hi, I'm Leo. I'm a software developer." />
          </div>

          <div
            className="flex min-w-48 gap-8 pt-0 sm:pt-4 md:pt- items-center justify-center
              sm:justify-start"
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

      <ModeToggle />
    </ThemeProvider>
  )
}

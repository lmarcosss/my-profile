import { motion } from 'framer-motion'
import profileImage from './assets/profile-image.jpeg'
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
  },
  {
    url: 'https://www.linkedin.com/in/leo-marcos',
    icon: LinkedInLogoIcon,
    hover: 'hover:text-blue-400',
  },
  {
    url: 'https://www.instagram.com/leomarcoss',
    icon: InstagramLogoIcon,
    hover: 'hover:text-red-400',
  },
  {
    url: 'mailto: marcosleonardosss@gmail.com',
    icon: MailIcon,
    hover: 'hover:text-cyan-400',
  },
]

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <div className="w-full h-full flex flex-col justify-start items-center p-16">
        <AnimatedCard>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
            }}
            className="w-48 h-48 object-cover rounded-full border-4 border-transparent
              ring-emerald-500 ring-4 ring-none"
            src={profileImage}
            style={{
              imageRendering: 'crisp-edges',
            }}
          />
        </AnimatedCard>

        <div className="flex gap-8 p-8 items-center justify-center w-72">
          {urls.map(({ url, icon: Icon, hover }) => (
            <a key={url} href={url} target="_blank">
              <Icon className={`size-7 ${hover}`} />
            </a>
          ))}
        </div>

        <TypingAnimation text="Hi, I'm Leo. I'm a software developer." />
      </div>

      <ModeToggle />
    </ThemeProvider>
  )
}

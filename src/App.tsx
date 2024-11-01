import { motion } from 'framer-motion'
import profileImage from './assets/profile-image.jpeg'
import { ThemeProvider } from './contexts/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { TypingAnimation } from './components/typing-animation'
import { Header } from './components/header'

import './App.css'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

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
]

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
              }}
              className="w-44 h-44 object-cover rounded-full border-4 border-gray-400"
              src={profileImage}
              style={{
                imageRendering: 'crisp-edges',
              }}
            />
            <div className="flex flex-row gap-8 p-8 items-center justify-center w-72">
              {urls.map(({ url, icon: Icon, hover }) => (
                <a key={url} href={url} target="_blank">
                  <Icon className={`size-7 ${hover}`} />
                </a>
              ))}
            </div>
          </div>
          <TypingAnimation text="Hi, I'm Leo. I'm a software developer." />
        </div>
      </div>

      <ModeToggle />
    </ThemeProvider>
  )
}

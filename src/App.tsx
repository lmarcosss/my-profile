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
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from './components/ui/carousel'
import { useEffect, useState } from 'react'

const isCarouselVisible = false

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
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      // Do something on select.
    })
  }, [api])

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
                className="w-48 h-48 object-cover rounded-full border-4 border-transparent
                  ring-emerald-500 ring-4 ring-none"
                src={profileImage}
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
            {urls.map(({ url, icon: Icon, hover }) => (
              <a key={url} href={url} target="_blank">
                <Icon className={`size-7 ${hover}`} />
              </a>
            ))}
          </div>
        </div>

        {isCarouselVisible && (
          <div className="w-full flex flex-col pb-8">
            <span className="sm:text-start text-center pb-4 sm:text-3xl text-xl font-bold">
              Projects
            </span>

            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full relative"
              setApi={setApi}
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="flex aspect-square items-center justify-center p-6 bg-emerald-500">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>

      <ModeToggle />
    </ThemeProvider>
  )
}

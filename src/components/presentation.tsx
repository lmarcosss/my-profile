import { useTranslation } from 'react-i18next'
import { AnimatedCard } from './animated-card'
import { MailIcon } from 'lucide-react'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

import profileImage from '../assets/profile-image.webp'



const urls = [
  {
    url: 'https://github.com/lmarcosss',
    icon: GitHubLogoIcon,
    name: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/leo-marcos',
    icon: LinkedInLogoIcon,
    name: 'LinkedIn',
  },
  {
    url: 'https://www.instagram.com/leomarcoss',
    icon: InstagramLogoIcon,
    name: 'Instagram',
  },
  {
    url: 'mailto: marcosleonardosss@gmail.com',
    icon: MailIcon,
    name: 'Email',
  },
]

export function Presentation() {
  const { t } = useTranslation()

  return (
    <section className="pt-12 lg:pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Profile Image Section */}
          <div className="mr-0 mb-8 lg:mr-12 lg:mb-0 lg:mt-4">
            <div className="relative">
              <AnimatedCard>
                <img
                  src={profileImage}
                  alt={t('profile-image-alt')}
                  className="rounded-full border-2 w-48 h-48 object-cover dark:border-green-500 border-gray-300"
                />
              </AnimatedCard>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left min-h-[400px] flex flex-col justify-center">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center lg:text-left min-h-[120px] flex items-center">
              <span>{t('title-pt1')} <span className="text-gray-700 dark:text-green-500">{t('title-pt2')}</span></span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl text-center sm:text-justify lg:text-left min-h-[80px]">
              {t('description')}
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-2 items-center justify-center lg:justify-start">
              {urls.map(({ url, icon: Icon, name }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event={`${name} link clicked`}
                  aria-label={`${t('url-link-aria-label')} ${name}`}
                  className="group p-3 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-gray-900 dark:hover:border-green-500 transition-colors"
                >
                  <Icon className="size-5 text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

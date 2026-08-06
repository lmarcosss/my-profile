import { useTranslation } from 'react-i18next'
import { MailIcon } from 'lucide-react'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

import { AnimatedCard } from '@/components/animated-card'
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

export function Home() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-1 items-center justify-center px-6 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="md:mt-2">
          <AnimatedCard>
            <img
              src={profileImage}
              alt={t('profile-image-alt')}
              className="rounded-full border-2 w-48 h-48 object-cover dark:border-green-500 border-gray-300"
            />
          </AnimatedCard>
        </div>

        <div className="text-center md:text-left w-full md:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            <span>
              {t('title-pt1')}{' '}
              <span className="text-gray-700 dark:text-green-500">
                {t('title-pt2')}
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6">
            {t('description')}
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            {urls.map(({ url, icon: Icon, name }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event={`${name} link clicked`}
                aria-label={`${t('url-link-aria-label')} ${name}`}
                className="group p-3 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <Icon className="size-5 text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

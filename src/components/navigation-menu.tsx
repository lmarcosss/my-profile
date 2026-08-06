import brFlag from '../assets/flags/br.svg'
import usFlag from '../assets/flags/us.svg'

import { useTheme } from '@/contexts/theme-provider'
import { features, type Feature } from '@/config/features'
import { Moon, Sun, FileText, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const languages = {
  'pt-BR': {
    name: 'Português',
    flag: brFlag,
  },
  'en-US': {
    name: 'English',
    flag: usFlag,
  },
}

enum LanguagesEnum {
  PORTUGUESE = 'pt-BR',
  ENGLISH = 'en-US',
}

type Language = LanguagesEnum

const navLinks: {
  path: string
  labelKey: string
  feature?: Feature
}[] = [
  { path: '/', labelKey: 'nav-home' },
  { path: '/projects', labelKey: 'nav-projects', feature: 'projects' },
  { path: '/articles', labelKey: 'nav-articles', feature: 'articles' },
]

const visibleNavLinks = navLinks.filter(
  (link) => !link.feature || features[link.feature],
)

const CV_URL =
  'https://drive.google.com/file/d/1BRlSVcKFosO2aro4siYGK-gPAfBROZJI/view?usp=sharing'

function isNavActive(pathname: string, path: string) {
  if (path === '/') return pathname === '/'
  return pathname === path || pathname.startsWith(`${path}/`)
}

export function NavigationMenu() {
  const { setTheme, theme } = useTheme()
  const { i18n, t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-300 dark:border-gray-800"
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-green-500"
          >
            Leo.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center gap-1 mr-2">
              {visibleNavLinks.map(({ path, labelKey }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isNavActive(location.pathname, path)
                      ? 'text-green-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600'
                  }`}
                >
                  {t(labelKey)}
                </Link>
              ))}
            </nav>

            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="CV link clicked"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:border-green-500 dark:hover:border-green-500 focus:outline-none transition-colors"
              aria-label={t('curriculum-vitae-navigation')}
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm">{t('see-cv')}</span>
            </a>

            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              data-umami-event={
                theme === 'light'
                  ? 'Theme switched to dark'
                  : 'Theme switched to light'
              }
              className="p-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:border-green-500 dark:hover:border-green-500 focus:outline-none transition-colors"
              aria-label={`${t('theme-switcher')}. ${t(theme === 'light' ? 'current-light-mode' : 'current-dark-mode')}`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            <button
              onClick={() => {
                i18n.changeLanguage(
                  i18n.language === LanguagesEnum.PORTUGUESE
                    ? LanguagesEnum.ENGLISH
                    : LanguagesEnum.PORTUGUESE
                )
              }}
              data-umami-event="Language switched"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:border-green-500 dark:hover:border-green-500 focus:outline-none transition-colors"
              aria-label={`${t('language-switcher')} ${t('language-switcher-current')} ${languages[i18n.language as Language].name}`}
            >
              <img
                src={languages[i18n.language as Language].flag}
                alt="Current Language"
                width={20}
                height={15}
                className="rounded-sm object-cover w-5 h-4"
              />
              <span className="text-sm font-medium">
                {languages[i18n.language as Language].name}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:border-green-500 dark:hover:border-green-500 focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t('mobile-menu-toggle')}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 p-4 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
                <div className="flex flex-col space-y-3 w-full">
                  {visibleNavLinks.map(({ path, labelKey }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] transition-colors ${
                        isNavActive(location.pathname, path)
                          ? 'text-green-500 border-green-500'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:text-green-600 hover:border-green-600 dark:hover:text-green-600 dark:hover:border-green-600'
                      }`}
                    >
                      <span className="text-sm">{t(labelKey)}</span>
                    </Link>
                  ))}

                  <a
                    href={CV_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="CV link clicked"
                    className="flex items-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:border-green-500 dark:hover:border-green-500 focus:outline-none transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={t('curriculum-vitae-navigation')}
                  >
                    <FileText className="w-5 h-5" />
                    <span className="text-sm">{t('see-cv')}</span>
                  </a>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                      data-umami-event={
                        theme === 'light'
                          ? 'Theme switched to dark'
                          : 'Theme switched to light'
                      }
                      className="flex items-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:border-green-500 dark:hover:border-green-500 focus:outline-none transition-colors flex-1"
                      aria-label={`${t('theme-switcher')}. ${t(theme === 'light' ? 'current-light-mode' : 'current-dark-mode')}`}
                    >
                      {theme === 'light' ? (
                        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      ) : (
                        <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      )}
                      <span className="text-sm">
                        {t(theme === 'light' ? 'dark-mode' : 'light-mode')}
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        i18n.changeLanguage(
                          i18n.language === LanguagesEnum.PORTUGUESE
                            ? LanguagesEnum.ENGLISH
                            : LanguagesEnum.PORTUGUESE
                        )
                      }}
                      data-umami-event="Language switched"
                      className="flex items-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#0f0f0f] hover:border-green-500 dark:hover:border-green-500 focus:outline-none transition-colors flex-1"
                    >
                      <img
                        src={languages[i18n.language as Language].flag}
                        alt="Current Language"
                        width={20}
                        height={15}
                        className="rounded-sm object-cover w-5 h-4"
                      />
                      <span className="text-sm">
                        {languages[i18n.language as Language].name}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

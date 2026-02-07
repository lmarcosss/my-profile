
import brFlag from '../assets/flags/br.svg'
import usFlag from '../assets/flags/us.svg'

import { useTheme } from '@/contexts/theme-provider'
import { Moon, Sun, FileText, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'

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

export function NavigationMenu() {
  const { setTheme, theme } = useTheme()
  const { i18n, t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

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
          <div className="text-2xl font-bold text-gray-900 dark:text-green-500">
            Leo.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1vmTAvVfkky9odcT6wZl2dKVHQXIzT1JQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 dark:hover:border-green-500/50 transition-colors"
              aria-label={t('curriculum-vitae-navigation')}
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm">{t('see-cv')}</span>
            </a>

            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 border border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 dark:hover:border-green-500/50 transition-colors"
              aria-label={`${t('theme-switcher')} ${t(theme === 'light' ? 'current-dark-mode' : 'current-light-mode')}`}
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
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
            className="md:hidden p-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
            <div className="flex flex-col space-y-3 w-full">
              <a
                href="https://drive.google.com/file/d/1vmTAvVfkky9odcT6wZl2dKVHQXIzT1JQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileText className="w-5 h-5" />
                <span className="text-sm">{t("see-cv")}</span>
              </a>

              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="flex items-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex-1"
                >
                  {theme === 'dark' ? (
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                  <span className="text-sm">
                    {t(theme === 'dark' ? 'dark-mode' : 'light-mode')}
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
                  className="flex items-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex-1"
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
        )}
      </div>
    </header>
  )
}


import brFlag from '../assets/flags/br.svg'
import usFlag from '../assets/flags/us.svg'

import { useTheme } from '@/contexts/theme-provider'
import { Moon, Sun, FileText, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Sempre mostrar no topo
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling para baixo - esconder
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling para cima - mostrar
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20"
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo/Brand */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            LM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.a
              href="https://drive.google.com/file/d/1vmTAvVfkky9odcT6wZl2dKVHQXIzT1JQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 hover:from-emerald-500/20 hover:to-green-500/20 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('curriculum-vitae-navigation')}
            >
              <FileText className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">Ver CV</span>
            </motion.a>

            <motion.button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-3.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
              whileHover={{ scale: 1.05, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`${t('theme-switcher')} ${t(theme === 'light' ? 'current-dark-mode' : 'current-light-mode')}`}
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-blue-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-yellow-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => {
                i18n.changeLanguage(
                  i18n.language === LanguagesEnum.PORTUGUESE
                    ? LanguagesEnum.ENGLISH
                    : LanguagesEnum.PORTUGUESE
                )
              }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group w-36"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`${t('language-switcher')} ${t('language-switcher-current')} ${languages[i18n.language as Language].name}`}
            >
              <motion.img
                src={languages[i18n.language as Language].flag}
                alt="Current Language"
                width={20}
                height={15}
                className="rounded-sm object-cover w-5 h-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <span className="font-medium text-sm">
                {languages[i18n.language as Language].name}
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 p-4 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3 w-full">
                <motion.a
                  href="https://drive.google.com/file/d/1vmTAvVfkky9odcT6wZl2dKVHQXIzT1JQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 hover:from-emerald-500/20 hover:to-green-500/20 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Ver CV</span>
                </motion.a>

                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex-1 mr-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {theme === 'dark' ? (
                      <Moon className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Sun className="w-5 h-5 text-yellow-600" />
                    )}
                    <span className="font-medium">
                      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      i18n.changeLanguage(
                        i18n.language === LanguagesEnum.PORTUGUESE
                          ? LanguagesEnum.ENGLISH
                          : LanguagesEnum.PORTUGUESE
                      )
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex-1 min-w-36"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={languages[i18n.language as Language].flag}
                      alt="Current Language"
                      width={20}
                      height={15}
                      className="rounded-sm object-cover w-5 h-4"
                    />
                    <span className="font-medium">
                      {languages[i18n.language as Language].name}
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

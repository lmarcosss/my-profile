import { useTheme } from '@/contexts/theme-provider'
import { features, type Feature } from '@/config/features'
import type { Language } from '@/config/i18n'
import { Container } from '@/components/container'
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const languages: Record<Language, { name: string; short: string }> = {
  'pt-BR': { name: 'Português', short: 'PT' },
  'en-US': { name: 'English', short: 'EN' },
}

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

const iconButton =
  'inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'

function isNavActive(pathname: string, path: string) {
  if (path === '/') return pathname === '/'
  return pathname === path || pathname.startsWith(`${path}/`)
}

function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const { t } = useTranslation()
  const isLight = theme === 'light'

  return (
    <button
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      data-umami-event={
        isLight ? 'Theme switched to dark' : 'Theme switched to light'
      }
      className={iconButton}
      aria-label={`${t('theme-switcher')}. ${t(isLight ? 'current-light-mode' : 'current-dark-mode')}`}
    >
      {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  )
}

function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const current = i18n.language as Language
  const next: Language = current === 'pt-BR' ? 'en-US' : 'pt-BR'

  return (
    <button
      onClick={() => i18n.changeLanguage(next)}
      data-umami-event={
        next === 'en-US'
          ? 'Language switched to English'
          : 'Language switched to Portuguese'
      }
      className="inline-flex h-9 items-center gap-1 rounded-md px-2.5 font-mono text-xs transition-colors hover:bg-muted"
      aria-label={`${t('language-switcher')}. ${t('language-switcher-current')}: ${languages[current].name}`}
    >
      {(Object.keys(languages) as Language[]).map((lang, index) => (
        <span key={lang} className="flex items-center gap-1">
          {index > 0 && <span className="text-border">/</span>}
          <span
            className={
              lang === current
                ? 'text-foreground'
                : 'text-muted-foreground/60'
            }
          >
            {languages[lang].short}
          </span>
        </span>
      ))}
    </button>
  )
}

function CvLink({ onClick }: { onClick?: () => void }) {
  const { t } = useTranslation()

  return (
    <a
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-umami-event="CV link clicked"
      onClick={onClick}
      aria-label={t('curriculum-vitae-navigation')}
      className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      {t('see-cv')}
      <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

export function NavigationMenu() {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
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
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="font-mono text-sm font-medium tracking-tight"
            aria-label="Leonardo Marcos"
          >
            <span className="text-accent">~/</span>leo
            <span className="animate-blink text-accent motion-reduce:animate-none">
              _
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-1">
              {visibleNavLinks.map(({ path, labelKey }) => {
                const active = isNavActive(location.pathname, path)
                return (
                  <Link
                    key={path}
                    to={path}
                    aria-current={active ? 'page' : undefined}
                    className={`relative isolate rounded-md px-3 py-1.5 font-mono text-[13px] transition-colors ${
                      active
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-md bg-muted"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    {t(labelKey).toLowerCase()}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-1">
              <LanguageToggle />
              <ThemeToggle />
              <div className="ml-2">
                <CvLink />
              </div>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className={iconButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t('mobile-menu-toggle')}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border/60 md:hidden"
          >
            <Container className="py-4">
              <nav className="flex flex-col">
                {visibleNavLinks.map(({ path, labelKey }) => {
                  const active = isNavActive(location.pathname, path)
                  return (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center gap-2 rounded-md px-3 py-2.5 font-mono text-sm transition-colors ${
                        active
                          ? 'bg-muted text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span
                        className={active ? 'text-accent' : 'text-border'}
                      >
                        {'>'}
                      </span>
                      {t(labelKey).toLowerCase()}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-4 flex items-center justify-between gap-3 border-t pt-4">
                <LanguageToggle />
                <CvLink onClick={() => setIsMobileMenuOpen(false)} />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

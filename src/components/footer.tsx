import { Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/container'

const REPO_URL = 'https://github.com/lmarcosss/my-profile'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-border/60">
      <Container className="flex items-center justify-between gap-4 py-6 font-mono text-xs text-muted-foreground">
        <span>{t('copyrights', { year: currentYear })}</span>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="Source code link clicked"
          aria-label={`${t('url-link-aria-label')} GitHub (my-profile)`}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-accent"
        >
          <Github className="size-4" />
        </a>
      </Container>
    </footer>
  )
}

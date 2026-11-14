import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/container'
import { PageHeader } from '@/components/page-header'
import { articles } from '@/content/articles'
import type { Language } from '@/config/i18n'
import { trackEvent } from '@/config/umami'
import { readingTime } from '@/lib/reading-time'

function peek(md: string, max = 120) {
  const text = md.replace(/[#*_`>\-[\]()!]/g, ' ').replace(/\s+/g, ' ').trim()
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text
}

export function ArticlesPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as Language

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <PageHeader
          command="ls ./articles"
          title={t('articles')}
          count={articles.length}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
            >
              <Link
                to={`/articles/${article.slug}`}
                onClick={() => trackEvent(`Article ${article.slug} clicked`)}
                className="card-surface group flex h-full flex-col overflow-hidden"
              >
                <div className="aspect-video overflow-hidden border-b">
                  <img
                    src={article.image.source}
                    alt={article.image.alt[lang]}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="font-mono text-xs text-muted-foreground">
                    ~{readingTime(article.content[lang])} {t('min-read')}
                  </span>
                  <h2 className="flex items-start justify-between gap-3 text-lg font-semibold tracking-tight">
                    {article.title[lang]}
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </h2>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {peek(article.content[lang])}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

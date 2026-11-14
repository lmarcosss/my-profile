import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Markdown from 'react-markdown'

import { getArticle } from '@/content/articles'
import type { Language } from '@/config/i18n'
import { readingTime } from '@/lib/reading-time'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()
  const lang = i18n.language as Language
  const article = slug ? getArticle(slug) : undefined

  if (!article) {
    return <Navigate to="/articles" replace />
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      <Link
        to="/articles"
        className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
        cd ../{t('nav-articles').toLowerCase()}
      </Link>

      <header className="mb-10 mt-8 space-y-4">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-accent">~</span>
          {readingTime(article.content[lang])} {t('min-read')}
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {article.title[lang]}
        </h1>
      </header>

      <div className="mb-12 aspect-[2/1] overflow-hidden rounded-xl border">
        <img
          src={article.image.source}
          alt={article.image.alt[lang]}
          className="size-full object-cover"
        />
      </div>

      <div className="prose max-w-none prose-headings:font-semibold">
        <Markdown>{article.content[lang]}</Markdown>
      </div>
    </article>
  )
}

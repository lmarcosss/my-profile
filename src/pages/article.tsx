import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Markdown from 'react-markdown'

import { getArticle } from '@/content/articles'
import type { Language } from '@/config/i18n'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()
  const lang = i18n.language as Language
  const article = slug ? getArticle(slug) : undefined

  if (!article) {
    return <Navigate to="/articles" replace />
  }

  return (
    <article className="px-6 py-8 lg:px-14 text-left max-w-3xl mx-auto w-full">
      <Link
        to="/articles"
        className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-600 transition-colors"
      >
        ← {t('nav-articles')}
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-6 mb-6">
        {article.title[lang]}
      </h1>

      <img
        src={article.image.source}
        alt={article.image.alt[lang]}
        className="w-full max-h-80 object-cover rounded-lg border border-gray-300 dark:border-gray-800 mb-8"
      />

      <div
        className="text-gray-700 dark:text-gray-300 leading-relaxed
          [&_p]:mb-4
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_h2]:mt-8 [&_h2]:mb-3
          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:dark:text-white [&_h3]:mt-6 [&_h3]:mb-2
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
          [&_li]:mb-1
          [&_a]:text-green-600 [&_a]:underline
          [&_code]:rounded [&_code]:bg-gray-100 [&_code]:dark:bg-[#111] [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm
          [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-gray-300 [&_pre]:dark:border-gray-800 [&_pre]:bg-gray-100 [&_pre]:dark:bg-[#111] [&_pre]:p-4
          [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white"
      >
        <Markdown>{article.content[lang]}</Markdown>
      </div>
    </article>
  )
}

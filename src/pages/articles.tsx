import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { articles } from '@/content/articles'
import type { Language } from '@/config/i18n'
import { trackEvent } from '@/config/umami'

function peek(md: string, max = 120) {
  const text = md.replace(/[#*_`>\-[\]()!]/g, ' ').replace(/\s+/g, ' ').trim()
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text
}

export function ArticlesPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as Language

  return (
    <section className="px-6 py-8 lg:px-14 text-left">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {t('articles')}
        </h2>
        <div className="w-20 h-px bg-gray-300 dark:bg-green-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            onClick={() => trackEvent(`Article ${article.slug} clicked`)}
            className="group border border-gray-300 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 rounded-lg overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors"
          >
            <img
              src={article.image.source}
              alt={article.image.alt[lang]}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-500 transition-colors mb-2">
                {article.title[lang]}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {peek(article.content[lang])}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

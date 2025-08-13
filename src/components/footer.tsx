import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pb-6 lg:pb-4">
      <span className="text-center text-gray-400 text-sm">
        {t('copyrights', { year: currentYear })}
      </span>
    </footer>
  )
}

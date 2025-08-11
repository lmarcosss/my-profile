import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="pb-6 lg:pb-4">
      <span className="text-center text-gray-400 text-sm">
        {t('copyrights')}
      </span>
    </footer>
  )
}

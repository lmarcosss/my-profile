import { EyeOpenIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export function LinkPreview({
  href,
  children,
}: {
  href?: string
  children: ReactNode
}) {
  const { t } = useTranslation()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex justify-center items-center relative"
    >
      {children}
      {href && (
        <div
          className="bg-gray-900/40 w-32 h-32 rounded-md flex items-center justify-center
            flex-col absolute text-gray-200 opacity-0 hover:opacity-100
            transition-opacity duration-500"
        >
          <EyeOpenIcon className="size-24 font-semibold" />
          <span>{t('see-preview')}</span>
        </div>
      )}
    </a>
  )
}

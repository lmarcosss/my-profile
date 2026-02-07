import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const AnimatedCard = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [flipped, setFlipped] = useState(false)
  const { t } = useTranslation()

  const onToggleFlip = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="flex items-center justify-center flex-row">
      <div
        className="relative w-48 h-48 cursor-pointer"
        onClick={onToggleFlip}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center ${flipped ? 'hidden' : ''}`}
        >
          {children}
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center rounded-full bg-black text-white p-4 ${flipped ? '' : 'hidden'}`}
        >
          <span className="font-semibold text-sm text-center">
            {t('easteregg-pt1')}
            <br />
            <a
              className="underline text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=YLy-X0QWuWA"
            >
              {t('easteregg-pt2')}
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

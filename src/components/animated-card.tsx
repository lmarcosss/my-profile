import { useState, type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
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

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onToggleFlip()
    }
  }

  return (
    <div className="flex items-center justify-center flex-row">
      <motion.div
        className="relative size-48 cursor-pointer rounded-full"
        onClick={onToggleFlip}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex={0}
        aria-label={t('profile-image-alt')}
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: 'hidden' }}
          data-umami-event="Easter egg found"
        >
          {children}
        </motion.div>

        <motion.div
          className="absolute inset-0 flex size-48 items-center justify-center rounded-full border border-accent/50 bg-card p-6 text-card-foreground ring-1 ring-accent/40 ring-offset-4 ring-offset-card"
          animate={{ rotateY: flipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          initial={false}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-center font-mono text-xs leading-relaxed">
            {t('easteregg-pt1')}
            <br />
            <a
              className="text-accent underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=YLy-X0QWuWA"
              data-umami-event="Easter egg video clicked"
            >
              {t('easteregg-pt2')}
            </a>
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}

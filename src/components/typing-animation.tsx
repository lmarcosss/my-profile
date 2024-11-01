import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypingAnimationProps {
  text: string
}

export function TypingAnimation({ text }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const typingSpeed = 100

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index))

        setIndex((prev) => prev + 1)
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [index, text])

  return (
    <div className="w-72 h-32">
      <span className="text-3xl font-bold">
        {displayedText}
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          |
        </motion.span>
      </span>
    </div>
  )
}

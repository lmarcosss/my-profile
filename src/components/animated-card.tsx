import { useState } from 'react'
import { motion } from 'framer-motion'

export const AnimatedCard = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [flipped, setFlipped] = useState(false)

  const onToggleFlip = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="flex items-center justify-center flex-row">
      <motion.div
        className="relative w-48 h-48 cursor-pointer"
        onClick={onToggleFlip}
      >
        <motion.div
          className={`absolute inset-0 flex items-center justify-center rounded-lg ${
            flipped ? 'rotate-y-180' : '' }`}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: 'hidden', perspective: 1000 }}
        >
          {children}
        </motion.div>

        <motion.div
          className={`absolute inset-0 flex items-center justify-center rounded-full
            bg-slate-950 text-white ${flipped ? '' : 'rotate-y-180'} p-4 border-4
            border-transparent ring-yellow-300 ring-4 ring-none`}
          animate={{ rotateY: flipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          initial={false}
          style={{ backfaceVisibility: 'hidden', perspective: 1000 }}
        >
          <span className="font-semibold">
            You found the easter egg!
            <br />
            <a
              className="underline text-yellow-300"
              target="_blank"
              href="https://www.youtube.com/watch?v=YLy-X0QWuWA"
            >
              Follow my lead
            </a>
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}

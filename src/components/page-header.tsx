import { motion } from 'framer-motion'

export function PageHeader({
  command,
  title,
  count,
}: {
  command: string
  title: string
  count?: number
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mb-10 flex items-end justify-between gap-4 border-b pb-6"
    >
      <h1 className="sr-only">{title}</h1>
      <p
        className="font-mono text-2xl font-medium tracking-tight sm:text-3xl"
        aria-hidden
      >
        <span className="text-accent">$</span> {command}
        <span className="caret" />
      </p>
      {count !== undefined && (
        <span className="shrink-0 pb-1 font-mono text-xs text-muted-foreground">
          {count} {count === 1 ? 'item' : 'items'}
        </span>
      )}
    </motion.header>
  )
}

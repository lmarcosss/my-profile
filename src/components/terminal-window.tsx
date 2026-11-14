import type { ReactNode } from 'react'

export function TerminalWindow({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card/70 shadow-[0_20px_80px_-30px_hsl(var(--accent)/0.35)] backdrop-blur-md">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="size-3 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="size-3 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="p-6 sm:p-10">{children}</div>
    </div>
  )
}

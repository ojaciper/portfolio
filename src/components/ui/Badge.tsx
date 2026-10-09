import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export type BadgeTone = 'neutral' | 'accent' | 'outline'

type BadgeProps = {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: 'border-line bg-white/5 text-muted hover:border-line-strong hover:text-fg',
  accent: 'border-accent/30 bg-accent/10 text-accent hover:border-accent/50 hover:bg-accent/15',
  outline: 'border-line bg-transparent text-fg hover:border-line-strong hover:bg-white/5',
}

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.14em] uppercase transition-colors duration-200',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

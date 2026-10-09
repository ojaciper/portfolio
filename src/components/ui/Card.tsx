import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { fadeUp, viewportOnce } from '../../lib/motion'

type CardProps = {
  children: ReactNode
  className?: string
  interactive?: boolean
  as?: 'article' | 'div'
}

export function Card({ children, className, interactive = false, as = 'article' }: CardProps) {
  const classes = cn(
    'glass rounded-card p-6 sm:p-7',
    interactive &&
      'transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-glow',
    className,
  )

  const motionProps = {
    className: classes,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: viewportOnce,
    variants: fadeUp,
  }

  if (as === 'div') {
    return <motion.div {...motionProps}>{children}</motion.div>
  }

  return <motion.article {...motionProps}>{children}</motion.article>
}

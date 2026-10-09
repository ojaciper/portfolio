import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { fadeUp, viewportOnce } from '../../lib/motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <motion.header
      className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-title">
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-body text-muted', centered && 'mx-auto')}>{description}</p>
      ) : null}
    </motion.header>
  )
}

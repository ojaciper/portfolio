import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main'
  id?: string
  space?: 'none' | 'section'
}

const spaceClasses = {
  none: '',
  section: 'py-16 md:py-24 lg:py-28',
} as const

export function Container({
  children,
  className,
  as = 'div',
  id,
  space = 'none',
}: ContainerProps) {
  const Tag = as

  return (
    <Tag id={id} className={cn('mx-auto w-full max-w-5xl px-5 sm:px-8', spaceClasses[space], className)}>
      {children}
    </Tag>
  )
}

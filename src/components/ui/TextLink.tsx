import { ArrowUpRight } from 'lucide-react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type TextLinkProps = {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'className'>

export function TextLink({ href, children, external, className, ...props }: TextLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href)

  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-1 text-fg underline decoration-accent/40 underline-offset-4 transition duration-200 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        className,
      )}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...props}
    >
      {children}
      {isExternal ? <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /> : null}
    </a>
  )
}

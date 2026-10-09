import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md'

type ButtonBase = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonAsButton = ButtonBase &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBase> & {
    href?: never
  }

type ButtonAsLink = ButtonBase &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBase> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-inverse text-inverse-fg hover:opacity-85',
  secondary: 'border border-line-strong bg-transparent text-fg hover:bg-fg/6',
  ghost: 'text-muted hover:bg-fg/8 hover:text-fg',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
}

const baseClasses =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if ('href' in props && typeof props.href === 'string') {
    const { href, ...anchorProps } = props
    const external = /^https?:\/\//.test(href)

    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

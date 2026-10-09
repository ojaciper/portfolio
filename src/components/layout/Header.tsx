import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '../../data/profile'
import { cn } from '../../lib/cn'
import { ThemeToggle } from './ThemeToggle'

const linkClass =
  'text-sm text-muted transition-colors duration-200 hover:text-fg focus-visible:outline-none focus-visible:text-fg'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-20 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="/#hero" className={cn(linkClass, 'font-semibold text-fg')}>
          {profile.name}
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClass}
                {...(item.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-fg md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-4 md:hidden" aria-label="Primary">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-2 py-2.5 text-base text-fg hover:bg-fg/6"
                  onClick={() => setOpen(false)}
                  {...(item.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

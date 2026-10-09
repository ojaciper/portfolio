import { profile } from '../../data/profile'

const footerLinks = [
  profile.linkedinUrl ? { label: 'LinkedIn', href: profile.linkedinUrl, external: true } : null,
  profile.githubUrl ? { label: 'GitHub', href: profile.githubUrl, external: true } : null,
  profile.email ? { label: 'Email', href: `mailto:${profile.email}` } : null,
].filter((link) => link !== null)

export function Footer() {
  const year = new Date().getFullYear()
  const meta = profile.location ? `${profile.location} · © ${year}` : `© ${year}`

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-5xl gap-3 px-5 py-6 sm:px-8 md:grid-cols-3 md:items-center">
        <p className="font-sans text-sm font-medium tracking-normal text-fg">{profile.name}</p>
        <p className="text-sm text-muted md:text-center">{meta}</p>
        {footerLinks.length > 0 ? (
          <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition duration-200 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <span className="hidden md:block" />
        )}
      </div>
    </footer>
  )
}

import { Button } from '../ui'
import { profile } from '../../data/profile'

const textLinks = [
  profile.linkedinUrl ? { label: 'LinkedIn', href: profile.linkedinUrl, external: true } : null,
  profile.githubUrl ? { label: 'GitHub', href: profile.githubUrl, external: true } : null,
].filter((link) => link !== null)

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-faint uppercase">Contact</p>
        <h2
          id="contact-title"
          className="mt-4 max-w-3xl text-[clamp(2.75rem,5.4vw,4.5rem)] leading-[1.02]"
        >
          <span className="block">Let&apos;s build the app,</span>
          <span className="block">and the API behind it.</span>
        </h2>
        <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted">
          Flutter on the device. Python and FastAPI behind it.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {profile.email ? (
            <Button href={`mailto:${profile.email}`} size="sm">
              {profile.email}
            </Button>
          ) : null}
          {profile.phone ? (
            <Button href={`tel:${profile.phone.replace(/\s/g, '')}`} variant="secondary" size="sm">
              {profile.phone}
            </Button>
          ) : null}
          <Button href={profile.cvUrl} variant="secondary" size="sm" download>
            Download resume
          </Button>
        </div>

        {textLinks.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {textLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-fg transition duration-200 hover:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-muted">Email, phone, GitHub, and LinkedIn will be added here.</p>
        )}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Button } from '../ui'
import { profile } from '../../data/profile'
import { fadeUp } from '../../lib/motion'

export function Hero() {
  const showStatus = Boolean(profile.available || profile.location)

  return (
    <section id="hero" className="flex flex-1 flex-col justify-center border-b border-line">
      <motion.div
        className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 md:py-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-faint uppercase">
          {profile.eyebrow}
        </p>
        <h1 className="mt-5 text-hero" aria-label={profile.headline.join(' ')}>
          {profile.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-muted">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/#work" size="sm">
            See my work
          </Button>
          <Button href={profile.cvUrl} variant="secondary" size="sm" download>
            Download resume
          </Button>
        </div>
        {showStatus ? (
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
            {profile.available ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                {profile.available}
              </span>
            ) : null}
            {profile.location ? <span>{profile.location}</span> : null}
          </div>
        ) : null}
      </motion.div>
    </section>
  )
}

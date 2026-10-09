import { about, aboutColumns, aboutLinks, aboutStats, type TextRun } from '../../data/about'

function Paragraph({ runs }: { runs: TextRun[] }) {
  return (
    <p>
      {runs.map((run) =>
        run.emphasis ? (
          <strong key={run.text} className="font-medium text-fg">
            {run.text}
          </strong>
        ) : (
          <span key={run.text}>{run.text}</span>
        ),
      )}
    </p>
  )
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-faint uppercase">{about.eyebrow}</p>
        <h2 id="about-title" className="mt-4 max-w-3xl text-[clamp(2.15rem,4.2vw,3.2rem)] leading-[1.15]">
          {about.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[1.02rem] text-muted">{about.subtitle}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <ul className="grid sm:grid-cols-3">
            {aboutStats.map((stat, index) => (
              <li
                key={stat.value}
                className={
                  index > 0 ? 'border-t border-line px-6 py-7 sm:border-t-0 sm:border-l sm:px-8' : 'px-6 py-7 sm:px-8'
                }
              >
                <p className="font-display text-[clamp(2.35rem,4vw,3.25rem)] leading-none text-fg">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-16">
          {aboutColumns.map((paragraphs, index) => (
            <div key={paragraphs[0][0].text} className="space-y-5 text-[0.98rem] leading-relaxed text-muted">
              {paragraphs.map((runs) => (
                <Paragraph key={runs[0].text} runs={runs} />
              ))}
              {index === aboutColumns.length - 1 ? (
                <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-3">
                  {aboutLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-fg underline decoration-fg/30 underline-offset-4 transition duration-200 hover:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                        {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                        {...(link.download ? { download: true } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

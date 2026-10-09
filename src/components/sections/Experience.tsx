import { experience } from '../../data/experience'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-faint uppercase">Career</p>
        <h2 id="experience-title" className="mt-4 text-[clamp(2.15rem,4.2vw,3.2rem)] leading-[1.15]">
          Experience
        </h2>

        <ul className="mt-14 border-t border-line">
          {experience.map((item) => (
            <li key={`${item.dates}-${item.title}`} className="border-b border-line py-8 md:py-10">
              <div className="grid gap-3 md:grid-cols-[12.5rem_minmax(0,1fr)] md:gap-12">
                <p className="text-sm text-muted">{item.dates}</p>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-sans text-base font-semibold tracking-normal text-fg">{item.title}</h3>
                    {item.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent-strong">
                        <span className="size-1.5 rounded-full bg-accent-strong" aria-hidden="true" />
                        Current
                      </span>
                    ) : null}
                  </div>
                  {item.subtitle ? <p className="mt-1 text-sm text-muted">{item.subtitle}</p> : null}
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{item.summary}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

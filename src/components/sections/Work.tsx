import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { moreWork, projects, type MoreWorkItem, type Project } from '../../data/projects'
import { cn } from '../../lib/cn'

function projectNumber(project: Project) {
  const cards = projects.filter((item) => item.layout === 'card')
  const index = cards.findIndex((item) => item.slug === project.slug)
  return String(index + 1).padStart(2, '0')
}

function StoreLinks({ project }: { project: Project }) {
  if (project.links.length === 0 && project.layout === 'wide') return null

  return (
    <div className="relative z-10 mt-4 flex flex-wrap gap-2">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-3 py-1.5 text-sm text-fg transition duration-200 hover:bg-white/10"
        >
          {link.label}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      ))}
      {project.layout === 'card' ? (
        <Link
          to={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-3 py-1.5 text-sm text-fg transition duration-200 hover:bg-white/10"
        >
          Case study
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-surface p-4 transition duration-300 hover:border-line-strong sm:p-5">
      <Link
        to={`/work/${project.slug}`}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-label={`${project.title} case study`}
      />
      <div className="pointer-events-none relative flex flex-1 flex-col">
        <div className="relative flex h-36 items-center justify-center">
          {project.badge ? (
            <span className="absolute top-0 left-0 rounded-full border border-line bg-bg/70 px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] text-muted uppercase">
              {project.badge}
            </span>
          ) : null}
          {project.icon ? (
            <img
              src={project.icon}
              alt=""
              className={project.iconClass ?? 'size-16 rounded-[1.15rem] object-cover'}
            />
          ) : (
            <span
              className={cn(
                'flex size-16 items-center justify-center rounded-[1.15rem] font-display text-3xl',
                project.markClass,
              )}
            >
              {project.mark}
            </span>
          )}
        </div>

        <div className="border-t border-line pt-4">
          <p className="text-[0.68rem] font-medium tracking-[0.16em] text-faint uppercase">
            {projectNumber(project)} — {project.category}
          </p>
          <div className="mt-2.5 flex items-start justify-between gap-3">
            <div>
              <h3 className="font-sans text-lg font-semibold tracking-normal text-fg">{project.title}</h3>
              <p className="mt-0.5 text-sm text-muted">{project.role}</p>
            </div>
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition duration-200 group-hover:border-line-strong group-hover:text-fg">
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        </div>
        <div className="pointer-events-auto">
          <StoreLinks project={project} />
        </div>
      </div>
    </article>
  )
}

function MoreWorkRow({ item }: { item: MoreWorkItem }) {
  const actionClass =
    'inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition duration-200 hover:bg-fg/6 sm:self-center'

  const label = (
    <>
      {item.action}
      <ArrowUpRight className="size-3.5" aria-hidden="true" />
    </>
  )

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-line bg-surface px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6">
      <div className="min-w-0">
        <h3 className="font-sans text-base font-semibold tracking-normal text-fg">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.summary}</p>
      </div>
      {item.href ? (
        <a href={item.href} target="_blank" rel="noreferrer noopener" className={actionClass}>
          {label}
        </a>
      ) : (
        <span className={actionClass}>{label}</span>
      )}
    </article>
  )
}

export function Work() {
  const cards = projects.filter((project) => project.layout === 'card')

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-faint uppercase">Selected work</p>
        <h2 id="work-title" className="mt-4 text-[clamp(2.15rem,4.2vw,3.2rem)] leading-[1.15]">
          Apps I&apos;ve built.
        </h2>

        <div className="mt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {moreWork.length > 0 ? (
            <div className="mt-4 flex flex-col gap-3">
              {moreWork.map((item) => (
                <MoreWorkRow key={item.title} item={item} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

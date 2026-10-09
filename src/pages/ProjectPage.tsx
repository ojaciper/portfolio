import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { getProject } from '../data/projects'
import { cn } from '../lib/cn'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
        <p className="text-muted">That project is not listed.</p>
        <Link to="/#work" className="mt-6 inline-flex items-center gap-2 text-sm text-fg">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to work
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 md:py-16">
      <Link
        to="/#work"
        className="inline-flex items-center gap-2 text-sm text-muted transition duration-200 hover:text-fg"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to work
      </Link>

      <p className="mt-12 text-[0.72rem] font-medium tracking-[0.18em] text-faint uppercase">{project.category}</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(3rem,6vw,4.75rem)] leading-[0.95]">{project.title}</h1>
      {project.lead ? (
        <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-muted">{project.lead}</p>
      ) : null}

      <dl className="mt-10 grid overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-4">
        {project.meta.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              'border-line px-5 py-5',
              index > 0 && 'border-t sm:border-t-0',
              index % 2 === 1 && 'sm:border-l',
              index >= 2 && 'sm:border-t lg:border-t-0',
              index > 0 && 'lg:border-l',
            )}
          >
            <dt className="text-[0.68rem] font-medium tracking-[0.16em] text-faint uppercase">{item.label}</dt>
            <dd className="mt-2 text-sm text-fg">{item.value}</dd>
          </div>
        ))}
      </dl>

      {project.gallery.length > 0 ? (
        <figure className="mt-12 overflow-hidden rounded-2xl border border-line">
          <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} className="h-auto w-full rounded-xl" />
            ))}
          </div>
          <figcaption className="px-4 py-3 text-sm text-muted">Screens from {project.title}</figcaption>
        </figure>
      ) : null}

      {project.sections.length > 0 || project.highlights.length > 0 || project.glance || project.technologies.length > 0 ? (
        <div
          className={cn(
            'mt-14 grid items-start gap-12',
            project.sections.length > 0 || project.highlights.length > 0
              ? 'lg:grid-cols-[minmax(0,1fr)_18rem]'
              : '',
          )}
        >
          {project.sections.length > 0 || project.highlights.length > 0 ? (
            <div className="space-y-12">
              {project.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-sans text-lg font-semibold tracking-normal">{section.title}</h2>
                  <div className="mt-3 space-y-4 text-[0.98rem] leading-relaxed text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              {project.highlights.length > 0 ? (
                <section>
                  <h2 className="font-sans text-lg font-semibold tracking-normal">Highlights</h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed text-muted">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          ) : null}

          {project.glance || project.technologies.length > 0 || project.primaryLink ? (
            <aside className="rounded-2xl border border-line bg-surface/80 p-6 lg:sticky lg:top-28">
              {project.glance ? (
                <>
                  <p className="text-[0.68rem] font-medium tracking-[0.16em] text-faint uppercase">At a glance</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.glance}</p>
                </>
              ) : null}
              {project.technologies.length > 0 ? (
                <>
                  <p className="mt-6 text-[0.68rem] font-medium tracking-[0.16em] text-faint uppercase first:mt-0">
                    Built with
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="inline-flex rounded-md border border-line px-2 py-1 text-xs text-muted">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              {project.primaryLink ? (
                <Button href={project.primaryLink.href} className="mt-6 w-full" size="sm">
                  {project.primaryLink.label}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Button>
              ) : null}
            </aside>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

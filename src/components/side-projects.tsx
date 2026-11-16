import { useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  LayoutDashboard,
  Smartphone,
  Sparkles,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import {
  sideProjects,
  type SideProject,
  type SideProjectAccent,
  type SideProjectCategory,
  type SideProjectStatus,
} from '~/data/portfolio'
import { cn } from '~/lib/utils'

/** Filters only appear once the collection is big enough to need them. */
const FILTER_THRESHOLD = 6

const accentTile: Record<SideProjectAccent, string> = {
  violet:
    'bg-[color-mix(in_srgb,var(--primary)_13%,white)] text-[var(--primary-dark)]',
  teal: 'bg-[color-mix(in_srgb,var(--teal)_15%,white)] text-[color-mix(in_srgb,var(--teal)_70%,var(--ink))]',
  coral:
    'bg-[color-mix(in_srgb,var(--coral)_14%,white)] text-[color-mix(in_srgb,var(--coral)_80%,var(--ink))]',
  sky: 'bg-[color-mix(in_srgb,var(--sky)_15%,white)] text-[color-mix(in_srgb,var(--sky)_70%,var(--ink))]',
  gold: 'bg-[color-mix(in_srgb,var(--gold)_22%,white)] text-[color-mix(in_srgb,var(--gold)_55%,var(--ink))]',
}

const statusMeta: Record<SideProjectStatus, { label: string; dot: string }> = {
  live: { label: 'Live', dot: 'bg-[var(--teal)]' },
  wip: { label: 'In progress', dot: 'bg-[var(--gold)]' },
  archived: { label: 'Archived', dot: 'bg-[#b8b2a6]' },
}

const categoryMeta: Record<
  SideProjectCategory,
  { label: string; icon: LucideIcon }
> = {
  web: { label: 'Web', icon: LayoutDashboard },
  ai: { label: 'AI', icon: Sparkles },
  tool: { label: 'Tool', icon: Terminal },
  mobile: { label: 'Mobile', icon: Smartphone },
}

const MAX_CHIPS = 3

function primaryHref(project: SideProject) {
  return project.demo ?? project.source
}

function ProjectThumb({
  project,
  className,
}: {
  project: SideProject
  className?: string
}) {
  const Icon = categoryMeta[project.category].icon
  return (
    <div
      className={cn(
        'relative aspect-[16/10] overflow-hidden rounded-xl',
        accentTile[project.accent],
        className,
      )}
    >
      {project.thumbnail ? (
        <img
          className="size-full object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          loading="lazy"
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <Icon
            className="size-9 transition-transform duration-300 motion-safe:group-hover:scale-110"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  )
}

function StatusLine({ project }: { project: SideProject }) {
  const status = statusMeta[project.status]
  return (
    <div className="flex items-center justify-between text-xs font-bold text-[var(--ink-soft)]">
      <span className="inline-flex items-center gap-1.5">
        <span
          className={cn('size-[7px] rounded-full', status.dot)}
          aria-hidden="true"
        />
        {status.label}
      </span>
      <span>{project.year}</span>
    </div>
  )
}

function StackChips({ stack }: { stack: string[] }) {
  const visible = stack.slice(0, MAX_CHIPS)
  const rest = stack.length - visible.length
  return (
    <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0" aria-label="Stack">
      {visible.map((item) => (
        <li
          className="rounded-full bg-[#f3eee2] px-2 py-[3px] text-xs font-bold text-[var(--ink)]"
          key={item}
        >
          {item}
        </li>
      ))}
      {rest > 0 && (
        <li
          className="rounded-full bg-[#f3eee2] px-2 py-[3px] text-xs font-bold text-[var(--ink-soft)]"
          title={stack.slice(MAX_CHIPS).join(', ')}
        >
          +{rest}
        </li>
      )}
    </ul>
  )
}

function ProjectLinks({ project }: { project: SideProject }) {
  if (!project.demo && !project.source) return null
  return (
    <div className="relative z-10 flex gap-4">
      {project.demo && (
        <a
          className="text-link py-0!"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink aria-hidden="true" /> Demo
          <span className="sr-only"> of {project.title}</span>
        </a>
      )}
      {project.source && (
        <a
          className="text-link py-0!"
          href={project.source}
          target="_blank"
          rel="noreferrer"
        >
          <Github aria-hidden="true" /> Code
          <span className="sr-only"> for {project.title}</span>
        </a>
      )}
    </div>
  )
}

/** Title doubles as a stretched link so the whole card is clickable. */
function ProjectTitle({
  project,
  className,
}: {
  project: SideProject
  className?: string
}) {
  const href = primaryHref(project)
  return (
    <h3 className={cn('mb-1! text-[1.05rem]! font-extrabold!', className)}>
      {href ? (
        <a
          className="outline-none after:absolute after:inset-0 after:rounded-[18px] after:content-[''] focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[var(--primary-dark)]"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {project.title}
        </a>
      ) : (
        project.title
      )}
    </h3>
  )
}

const cardBase =
  'group relative rounded-[18px] border border-[var(--line)] bg-[var(--surface-strong)] p-2.5 transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgb(23_35_60/8%)]'

export function SideProjectCard({ project }: { project: SideProject }) {
  if (project.pinned) {
    return (
      <article
        className={cn(
          cardBase,
          'grid gap-4 sm:col-span-2 md:grid-cols-[1.2fr_1fr]',
        )}
      >
        <ProjectThumb
          project={project}
          className="md:aspect-auto md:h-full md:min-h-[240px]"
        />
        <div className="flex flex-col justify-center gap-3 px-1.5 pb-1.5 md:py-2 md:pr-3">
          <StatusLine project={project} />
          <div>
            <ProjectTitle project={project} className="text-xl!" />
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              {project.hook}
            </p>
          </div>
          <StackChips stack={project.stack} />
          <ProjectLinks project={project} />
        </div>
      </article>
    )
  }

  return (
    <article className={cn(cardBase, 'flex flex-col')}>
      <ProjectThumb project={project} />
      <div className="flex flex-1 flex-col gap-2.5 px-1.5 pt-3 pb-1.5">
        <StatusLine project={project} />
        <div className="flex-1">
          <ProjectTitle project={project} />
          <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
            {project.hook}
          </p>
        </div>
        <StackChips stack={project.stack} />
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

function sortProjects(list: SideProject[]) {
  return [...list].sort(
    (a, b) => Number(!!b.pinned) - Number(!!a.pinned) || b.year - a.year,
  )
}

export function SideProjectsSection() {
  const [filter, setFilter] = useState<SideProjectCategory | 'all'>('all')
  const categories = useMemo(
    () => [...new Set(sideProjects.map((p) => p.category))],
    [],
  )
  const showFilters =
    sideProjects.length >= FILTER_THRESHOLD && categories.length > 1
  const visible = sortProjects(
    filter === 'all'
      ? sideProjects
      : sideProjects.filter((p) => p.category === filter),
  )

  if (sideProjects.length === 0) return null

  return (
    <section
      id="side-projects"
      className="scroll-mt-[96px] pt-20 md:pt-28"
      aria-labelledby="side-projects-title"
    >
      <div className="section-heading max-md:flex-col max-md:items-start">
        <div>
          <p className="eyebrow">Playground</p>
          <h2 id="side-projects-title">Side projects</h2>
          <p className="m-0 max-w-[520px] text-[var(--ink-soft)]">
            Things I build to learn, experiment, or scratch my own itch.
          </p>
        </div>
        {showFilters && (
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label="Filter side projects"
          >
            {(['all', ...categories] as const).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
                className={cn(
                  'cursor-pointer rounded-full border px-3 py-1.5 text-xs font-bold transition-colors',
                  filter === key
                    ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                    : 'border-[var(--line)] bg-[var(--surface-strong)] text-[var(--ink)] hover:border-[var(--primary)]',
                )}
              >
                {key === 'all' ? 'All' : categoryMeta[key].label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <SideProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  )
}

/** Compact teaser for the homepage, linking to the full collection. */
export function SideProjectsStrip({ limit = 3 }: { limit?: number }) {
  const items = sortProjects(
    sideProjects.filter((p) => p.status !== 'archived'),
  ).slice(0, limit)
  if (items.length === 0) return null

  return (
    <aside
      className="mt-10 border-t border-[var(--line)] pt-6"
      aria-label="Other side projects"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="eyebrow m-0!">Also building</p>
        <Link className="text-link" to="/projects" hash="side-projects">
          All side projects <ArrowRight aria-hidden="true" />
        </Link>
      </div>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3">
        {items.map((project) => {
          const Icon = categoryMeta[project.category].icon
          const href = primaryHref(project)
          const content = (
            <>
              <span
                className={cn(
                  'flex size-11 shrink-0 items-center justify-center rounded-xl',
                  accentTile[project.accent],
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-extrabold text-[var(--ink)]">
                  {project.title}
                </span>
                <span className="block truncate text-[0.8rem] text-[var(--ink-soft)]">
                  {project.hook}
                </span>
              </span>
              {href && (
                <ArrowUpRight
                  className="size-4 shrink-0 text-[var(--primary-dark)]"
                  aria-hidden="true"
                />
              )}
            </>
          )
          const rowClass =
            'flex items-center gap-3 rounded-[14px] border border-[var(--line)] bg-[var(--surface-strong)] p-2.5 transition-colors hover:border-[var(--primary)]'
          return (
            <li key={project.slug}>
              {href ? (
                <a
                  className={rowClass}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <span className={rowClass}>{content}</span>
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

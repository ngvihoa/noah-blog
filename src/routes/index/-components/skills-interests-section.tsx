import {
  AppWindow,
  ArrowLeftRight,
  Asterisk,
  Atom,
  Braces,
  CircleCheck,
  Cloud,
  Code,
  CodeXml,
  Component,
  Database,
  Diamond,
  Figma,
  FileCode2,
  GitBranch,
  Github,
  Hexagon,
  Layers,
  ListChecks,
  Palette,
  PanelsTopLeft,
  Play,
  RefreshCw,
  Server,
  Smartphone,
  Sparkles,
  SquareTerminal,
  Table2,
  Terminal,
  Triangle,
  Waves,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { skills } from '~/data/portfolio'

type Skill = (typeof skills)[keyof typeof skills][number]

const skillIcons: Record<Skill, LucideIcon> = {
  HTML: CodeXml,
  'CSS / SCSS': Palette,
  JavaScript: Braces,
  TypeScript: FileCode2,
  React: Atom,
  'Next.js': AppWindow,
  'TanStack Start': Layers,
  'React Native (Expo)': Smartphone,
  'React Query': RefreshCw,
  'TanStack Table': Table2,
  'React Hook Form': ListChecks,
  Zod: Diamond,
  'Tailwind CSS': Waves,
  'shadcn/ui': Component,
  'Technical SEO': CodeXml,
  'Node.js': Hexagon,
  Express: Server,
  oRPC: ArrowLeftRight,
  Prisma: Triangle,
  Kysely: Database,
  'SQL / MySQL': Database,
  PostgreSQL: Database,
  Git: GitBranch,
  GitHub: Github,
  Figma,
  Linear: CircleCheck,
  'Visual Studio Code': Code,
  Vercel: Triangle,
  AWS: Cloud,
  'Bunny Stream': Play,
  'Google Cloud / YouTube Data API': Cloud,
  'Claude Code': Asterisk,
  Codex: Terminal,
  Gemini: Sparkles,
  Amp: Zap,
  'T3 Code': PanelsTopLeft,
  OpenCode: SquareTerminal,
}

export function SkillsInterestsSection() {
  return (
    <section
      className="section flex flex-col justify-center border-b border-[var(--line)] bg-[rgb(255_255_255/52%)] lg:min-h-svh"
      aria-label="Skills"
    >
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Toolbox</p>
            <h2>Skills I work with</h2>
          </div>
        </div>
        <div>
          {Object.entries(skills).map(([group, items]) => (
            <div
              className="grid gap-3 border-t border-[var(--line)] py-5 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-5"
              key={group}
            >
              <h3 className="m-0 text-base font-semibold first-letter:uppercase">
                {group}
              </h3>
              <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-3 p-0 lg:grid-cols-4">
                {items.map((item) => {
                  const Icon = skillIcons[item]
                  const wide = item === 'Google Cloud / YouTube Data API'

                  return (
                    <li
                      className={`min-w-0 text-sm leading-5 text-[var(--ink)] ${
                        wide ? 'col-span-2' : ''
                      }`}
                      key={item}
                    >
                      <span className="toolbox-skill inline-flex max-w-full cursor-pointer items-start gap-2 align-top">
                        <Icon
                          aria-hidden="true"
                          className="toolbox-skill__icon mt-px size-[18px] shrink-0 text-[#503487]"
                          strokeWidth={2}
                        />
                        <span className="min-w-0 break-words">{item}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

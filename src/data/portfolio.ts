export const profile = {
  name: 'Nguyễn Viết Hòa',
  shortName: 'Viết Hòa',
  alias: 'Noah',
  role: 'Software Developer',
  location: 'Ho Chi Minh City',
  email: 'nvhoa29702@gmail.com',
  github: 'https://github.com/ngvihoa',
  linkedin: 'https://www.linkedin.com/in/nvhoa29b02/',
} as const

const housenowProject = {
  slug: 'housenow',
  title: 'HouseNow',
  subtitle: 'Real estate marketplace',
  period: 'August 2024 — Present',
  context: 'Proptech · Full-time role',
  team: '4 FE · 4 BE · 3 DES · 1–2 PM',
  role: 'Frontend Developer',
  summary:
    'A proptech marketplace for buying, renting, and exploring homes in Vietnam — 25,000+ listings, short-video property browsing, home-loan services with partner banks, and a full toolkit for real estate agents, on web and mobile.',
  contributions: [
    'Helped migrate the mobile app’s webview from Next.js to TanStack Router while continuing feature work on the Next.js web client.',
    'Built HouseReels — short-video property browsing — and the agent dashboard from zero to launch.',
    'Developed paid packages, payments, and ads management (now around 10% of company revenue) and added in-app purchases to the mobile app.',
    'Designed React Query cache patterns — infinite scroll and optimistic updates — and wrote backend endpoints with Prisma and Kysely.',
    'Helped revamp a sister proptech company’s landlord app, lifting user retention by up to 50%.',
    'Raised the site’s Geolify SEO score from 54 to 74 through on-site SEO.',
    'Built internal tools for loan profiles, projects, transactions, videos, and promotions, plus dashboards for Masterise investors and agency partners.',
    'Shipped agent-facing features: customer and lead management, Homi community threads, listing creation, and feng-shui home views.',
  ],
  features: [
    'Property search with advanced filters across 25,000+ listings and project price comparison.',
    'HouseReels: browse homes through short videos.',
    'Home-loan services with installment calculators and exclusive rates from partner banks.',
    'Agent toolkit: customer and lead management, Homi community threads, listing creation, and ads.',
    'HouseNews — real estate market news — and feng-shui home views.',
    'iOS and Android apps alongside the web platform.',
  ],
  stack: [
    'Next.js',
    'TanStack Router',
    'React Query',
    'React Native',
    'Tailwind CSS',
    'Prisma',
    'Kysely',
    'MySQL',
  ],
  source: 'https://www.housenow.com.vn',
  sourceKind: 'live',
  sourceLabel: 'View live product',
  sourceLongLabel: 'Explore the live product',
  heroVisual: {
    src: '/housenow/home.png',
    alt: 'HouseNow web home with apartment search across 25,000+ listings',
    width: 1440,
    height: 900,
    caption:
      'The HouseNow web home — search across 25,000+ apartment listings.',
  },
  gallery: [
    {
      variant: 'wide',
      src: '/housenow/agent-wallet.png',
      alt: 'HouseNow Agent portal with wallet payments for membership packages and listing boosts',
      width: 1440,
      height: 900,
      caption:
        'The agent portal pairs wallet payments with membership packages and listing boosts.',
    },
    {
      variant: 'wide',
      src: '/housenow/loan.png',
      alt: 'HouseNow home-loan page with installment calculator and partner banks',
      width: 1440,
      height: 900,
      caption:
        'The home-loan page pairs an installment calculator with partner-bank offers.',
    },
  ],
} as const

const pakislotProject = {
  slug: 'paki-slot',
  title: 'PakiSlot',
  subtitle: 'Parking lot management system',
  period: 'October 2023 — May 2024',
  context: 'Computer Science capstone project',
  team: '3-person team',
  role: 'Frontend Web Developer',
  summary:
    'A management dashboard for parking operators to configure parking areas, manage day-to-day operations, and handle customer services.',
  contributions: [
    'Analysed system requirements and mapped workflows for the main use cases.',
    'Designed the web and mobile interfaces in Figma.',
    'Built the manager and employee dashboard with the Next.js App Router.',
    'Created a hardware simulator for the automatic number plate recognition flow.',
  ],
  features: [
    'Employee accounts, vehicle types, services, and customer feedback management.',
    'Customisable parking maps and customer service bookings.',
    'Vehicle check-in and check-out operations.',
  ],
  stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Figma'],
  source: 'https://github.com/capstone-k20-219',
  sourceKind: 'github',
  sourceLabel: 'View source',
  sourceLongLabel: 'Explore the repository',
  heroVisual: {
    src: '/paki-slot/m-home.png',
    alt: 'PakiSlot web dashboard with revenue, service, vehicle, and traffic charts',
    width: 1367,
    height: 941,
    caption:
      'The manager dashboard brings daily parking operations and business signals into one view.',
  },
  gallery: [
    {
      variant: 'wide',
      src: '/paki-slot/e-map.png',
      alt: 'Interactive PakiSlot parking map with occupied and empty slots',
      width: 1117,
      height: 942,
      caption: 'A live parking map makes slot status scannable at a glance.',
    },
    {
      variant: 'phone',
      src: '/paki-slot/login_screen.png',
      alt: 'PakiSlot mobile authentication screen',
      width: 849,
      height: 1863,
      caption: 'Mobile authentication experience.',
    },
    {
      variant: 'phone',
      src: '/paki-slot/splash-screen.png',
      alt: 'PakiSlot mobile splash screen',
      width: 781,
      height: 1689,
      caption: 'A focused brand moment on launch.',
    },
  ],
} as const

export const projects = [housenowProject, pakislotProject] as const

interface Experience {
  label: string
  company: string
  companyUrl?: string
  role: string
  period: string
  type: string
  highlights: string[]
  source: string
  sourceLabel: string
}

export const experiences: Experience[] = [
  {
    label: 'Experience',
    company: 'HouseNow JSC',
    companyUrl: 'https://www.housenow.com.vn',
    role: 'Frontend Developer',
    period: 'August 2024 — Present',
    type: 'Full-time',
    highlights: [
      'Helped migrate the mobile app’s webview from Next.js to TanStack Router and shipped features across the Next.js web product — advanced property search, price boards, and payments.',
      'Built HouseReels (short-video property browsing) and the agent dashboard from zero to launch, plus investor dashboards for Masterise and agency partners.',
      'Developed the paid-packages, payments, and ads-management features that now generate around 10% of company revenue; added in-app purchases to the mobile app.',
      'Helped revamp a sister proptech company’s landlord app, lifting user retention by up to 50%.',
      'Raised HouseNow’s Geolify SEO score from 54 to 74 and wrote backend endpoints with Prisma and Kysely to support the BE team.',
    ],
    source: 'https://www.housenow.com.vn',
    sourceLabel: 'Visit the live product',
  },
  {
    label: 'Earlier experience',
    company: 'Truong Minh Thinh Technology JSC',
    role: 'Frontend Intern',
    period: 'June 2023 — August 2023',
    type: 'Full-time internship',
    highlights: [
      'Set up Webpack projects with SCSS, Tailwind CSS, and custom fonts.',
      'Implemented responsive interfaces from Figma designs across two projects.',
      'Learned Angular 15 and converted a fitness website from a Webpack setup to Angular.',
      'Worked with Webpack, Angular, SlickJS, Tailwind CSS, and a professional team workflow.',
    ],
    source:
      'https://github.com/orgs/tmt-technology-jsc-frontend-internship/repositories',
    sourceLabel: 'View internship repositories',
  },
]

export const education = {
  school: 'VNU — Ho Chi Minh City University of Technology',
  degree: 'Bachelor of Computer Science',
  period: 'September 2020 — November 2024',
  gpa: '8.26 / 10',
} as const

export const skills = {
  frontend: [
    'HTML',
    'CSS / SCSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'TanStack Router',
    'React Query',
    'React Native',
    'Tailwind CSS',
  ],
  backend: ['Node.js', 'Express', 'Prisma', 'Kysely', 'SQL / MySQL'],
  tools: ['Git', 'GitHub', 'Figma', 'Linear', 'Visual Studio Code'],
  'AI coding tools': [
    'Claude Code',
    'Codex',
    'Gemini',
    'Amp',
    'T3 Code',
    'OpenCode',
  ],
} as const

export const interests = [
  'Music',
  'Strength training',
  'Photography',
  'Coding',
  'Coffee',
  'Novels',
] as const

export type SideProjectStatus = 'live' | 'wip' | 'archived'
export type SideProjectCategory = 'web' | 'ai' | 'tool' | 'mobile'
export type SideProjectAccent = 'violet' | 'teal' | 'coral' | 'sky' | 'gold'

export interface SideProject {
  slug: string
  title: string
  /** One sentence on why you built it or what you learned. */
  hook: string
  year: number
  status: SideProjectStatus
  category: SideProjectCategory
  accent: SideProjectAccent
  stack: string[]
  demo?: string
  source?: string
  /** Optional 16:10 screenshot in /public. Falls back to an icon tile. */
  thumbnail?: { src: string; alt: string }
  /** Pinned projects render as a wide card at the start of the grid. */
  pinned?: boolean
}

export const sideProjects: SideProject[] = [
  {
    slug: 'react-strudel-kit',
    title: 'React Strudel Kit',
    hook: 'A TypeScript library for composing Strudel live-coding music patterns and connecting playback directly to React controls.',
    year: 2026,
    status: 'live',
    category: 'tool',
    accent: 'violet',
    stack: ['React', 'TypeScript', 'Strudel', 'Web Audio'],
    demo: 'https://react-strudel-kit.vercel.app',
    source: 'https://github.com/ngvihoa/react-strudel-kit',
    thumbnail: {
      src: '/side-projects/react-strudel-kit.png',
      alt: 'React Strudel Kit logo',
    },
    pinned: true,
  },
  {
    slug: 'werewolf-moderator',
    title: 'Werewolf Moderator',
    hook: 'A mobile-first assistant for in-person Werewolf sessions that tracks night/day phases while keeping the moderator in control.',
    year: 2026,
    status: 'live',
    category: 'mobile',
    accent: 'coral',
    stack: ['TanStack Start', 'Supabase Realtime', 'Drizzle ORM', 'oRPC'],
    demo: 'https://werewolf-moderator-phi.vercel.app',
    source: 'https://github.com/ngvihoa/werewolf',
    thumbnail: {
      src: '/side-projects/werewolf-moderator.png',
      alt: 'Moonveil Werewolf Moderator interface showing night phase role actions',
    },
  },
  {
    slug: 'chibi-bluff',
    title: 'Chibi Bluff',
    hook: 'A mobile-first multiplayer bluffing card game with bot simulation and real-time online rooms backed by Cloudflare Durable Objects.',
    year: 2026,
    status: 'live',
    category: 'mobile',
    accent: 'gold',
    stack: ['Next.js', 'Cloudflare Workers', 'Durable Objects', 'TypeScript'],
    demo: 'https://chibi-bluff.vercel.app',
    source: 'https://github.com/ngvihoa/chibi-bluff',
    thumbnail: {
      src: '/side-projects/chibi-bluff.png',
      alt: 'Chibi Bluff mascot logo — Giang Hồ Nhí Nhố',
    },
  },
  {
    slug: 'flowtone',
    title: 'Flowtone',
    hook: 'A generative ambient soundscape mixer with multi-tab Web Locks coordination and transactional IndexedDB playlists.',
    year: 2026,
    status: 'wip',
    category: 'web',
    accent: 'teal',
    stack: ['Next.js', 'React Strudel Kit', 'IndexedDB', 'Web Locks API'],
    thumbnail: {
      src: '/side-projects/flowtone.png',
      alt: 'Flowtone editorial listening page with ambient sound presets',
    },
  },
  {
    slug: 'office-takeover',
    title: 'Office Takeover',
    hook: 'A 2D pixel-art tactical tower conquest game set in an office, complete with AI bots, custom sprite atlas packing, and procedural SFX.',
    year: 2026,
    status: 'wip',
    category: 'web',
    accent: 'sky',
    stack: ['TypeScript', 'HTML5 Canvas', 'Web Audio', 'Playwright'],
    source: 'https://github.com/ngvihoa/office-takeover',
    thumbnail: {
      src: '/side-projects/office-takeover.png',
      alt: 'Office Takeover 2D pixel-art tactical office map with Dev, Pantry, and Marketing rooms',
    },
  },
  {
    slug: 'latex-author',
    title: 'LaTeX Author Skill',
    hook: 'An agent skill for writing, compiling, and reviewing evidence-aware academic LaTeX documents in English and Vietnamese.',
    year: 2026,
    status: 'live',
    category: 'ai',
    accent: 'violet',
    stack: ['AI Agent Skill', 'LaTeX', 'Python'],
    source: 'https://github.com/ngvihoa/latex-author',
    thumbnail: {
      src: '/side-projects/latex-author.png',
      alt: 'Compiled academic LaTeX report generated by LaTeX Author Skill',
    },
  },
]

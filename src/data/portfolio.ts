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
  context: 'Product company · Proptech · Full-time role',
  team: '4 FE · 4 BE · 3 DES · 1–2 PM',
  role: 'Frontend Developer',
  summary:
    'A proptech marketplace for buying and exploring homes in Vietnam — 25,000+ listings, short-video property browsing, home-loan services, and tools for real estate agents across web and mobile.',
  contributions: [
    "Migrated the broker-facing Agent application's frontend to TanStack Start, covering **80+ route modules**, while continuing development on the Next.js website.",
    'Built HouseReels (**21K+** videos, **450K+** views) and the agent dashboard from zero to launch.',
    'Contributed to broker monetization flows, including payments, paid packages, and in-app purchases, generating around **10%** of company revenue.',
    'Contributed to broker ad-management workflows supporting **250+** campaigns.',
    'Optimized homepage rendering, with production before/after measurements showing **~25% fewer initial DOM elements** and **~40% smaller HTML documents**.',
    'Reduced Next.js build output files by **67%**, measured in comparable local builds.',
    'Contributed to backend APIs using oRPC, Prisma, and Kysely; optimized API responses, reducing average serialized payload sizes by up to **39.4%**.',
    'Optimized the end-to-end video upload flow, from file selection and transfer to processing and playback.',
    'Developed data-heavy interfaces with React Query.',
    'Helped revamp a sister automotive company’s app, improving user retention by **up to 50%**.',
    "Improved HouseNow's Geolify score from **54** to **74**.",
    'Built internal tools for loan profiles, projects, transactions, videos, and promotions, plus investor dashboards for Masterise and agency partners.',
    'Shipped property-search and agent workflows, including price boards, listing creation, lead management, community threads, and feng-shui home views.',
  ],
  stack: [
    'Next.js',
    'TanStack Start',
    'TanStack Router',
    'React Query',
    'React Native (Expo)',
    'Tailwind CSS',
    'oRPC',
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
  stack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Redux Toolkit',
    'Firebase Realtime Database',
    'Figma',
  ],
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
      'Product company building a real estate platform averaging **32K** monthly active signed-in accounts across its applications.',
      "Migrated the broker-facing Agent application's frontend to TanStack Start.",
      'Reduced Next.js build output files by **67%**, measured in comparable local builds.',
      'Built HouseReels (**21K+** videos, **450K+** views) and the agent dashboard from zero to launch, plus investor dashboards for Masterise and agency partners.',
      'Optimized the end-to-end video upload flow, from file selection and transfer to processing and playback.',
      'Contributed to broker monetization flows, including payments, paid packages, and in-app purchases, generating around **10%** of company revenue.',
      'Contributed to broker ad-management workflows supporting **250+** campaigns.',
      'Contributed to backend APIs using oRPC, Prisma, and Kysely; optimized API responses, reducing average serialized payload sizes by up to **39.4%**.',
      'Optimized homepage rendering, with production before/after measurements showing **~25% fewer initial DOM elements** and **~40% smaller HTML documents**.',
      'Helped revamp a sister automotive company’s app, improving user retention by **up to 50%**.',
      "Improved HouseNow's Geolify score from **54** to **74**.",
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
      'Converted a fitness website from a Webpack setup to Angular 15.',
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
  gpa: '8.34 / 10',
} as const

export const skills = {
  frontend: [
    'HTML',
    'CSS / SCSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'TanStack Start',
    'React Native (Expo)',
    'React Query',
    'TanStack Table',
    'React Hook Form',
    'Zod',
    'Tailwind CSS',
    'shadcn/ui',
  ],
  backend: [
    'Node.js',
    'Express',
    'oRPC',
    'Prisma',
    'Kysely',
    'SQL / MySQL',
    'PostgreSQL',
  ],
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
  /** Optional screenshot or brand artwork in /public. Falls back to an icon tile. */
  thumbnail?: { src: string; alt: string; fit?: 'cover' | 'contain' }
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
    slug: 'moonveil',
    title: 'Moonveil',
    hook: 'A mobile-first Werewolf game for online self-play and hosted in-person sessions, with secret roles, night actions, and real-time voting.',
    year: 2026,
    status: 'live',
    category: 'mobile',
    accent: 'coral',
    stack: ['TanStack Start', 'Supabase Realtime', 'Drizzle ORM', 'oRPC'],
    demo: 'https://werewolf-moderator-phi.vercel.app',
    source: 'https://github.com/ngvihoa/werewolf',
    thumbnail: {
      src: '/side-projects/moonveil-lockup.webp',
      alt: 'Moonveil logo lockup with wolf banner and wordmark',
      fit: 'contain',
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
      alt: 'Office Takeover pixel-art cabinet mascot logo lockup',
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

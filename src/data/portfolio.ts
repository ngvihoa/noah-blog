export const profile = {
  name: 'Nguyễn Viết Hòa',
  shortName: 'Viết Hòa',
  alias: 'Noah',
  role: 'Frontend Developer',
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

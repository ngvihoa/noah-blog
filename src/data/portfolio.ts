export const profile = {
  name: 'Nguyễn Viết Hòa',
  shortName: 'Viết Hòa',
  alias: 'Noah',
  role: 'Frontend Developer',
  location: 'Tay Thanh ward, Ho Chi Minh City',
  email: 'nvhoa29702@gmail.com',
  github: 'https://github.com/ngvihoa',
  linkedin: 'https://www.linkedin.com/in/nvhoa29b02/',
} as const

export const featuredProject = {
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
  source: 'https://github.com/capstone-k20-219/capstone-k20-219-frontend-web',
} as const

export const experience = {
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
} as const

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
    'Tailwind CSS',
  ],
  backend: ['Node.js', 'Express', 'SQL / MySQL'],
  tools: ['Git', 'GitHub', 'Figma', 'Visual Studio Code'],
} as const

export const interests = [
  'Music',
  'Strength training',
  'Photography',
  'Coding',
  'Coffee',
  'Novels',
] as const

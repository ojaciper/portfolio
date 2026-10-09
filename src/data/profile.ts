export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export const profile = {
  name: 'Peter Osas',
  eyebrow: 'Flutter & Mobile Developer · Python / FastAPI',
  headline: ['Building mobile apps', 'and scalable APIs', 'that solve real problems.'],
  summary:
    'I’m Peter Osas — a Flutter and mobile developer. I also build backends with Python and FastAPI.',
  cvUrl: '/cv.pdf',
  githubUrl: 'https://github.com/',
  linkedinUrl: 'https://www.linkedin.com/in/peterosas/',
  email: 'osaspeter6@gmail.com',
  phone: '+234 708 798 6360',
  available: '',
  location: '',
} as const

export const navItems: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
  ...(profile.githubUrl
    ? [{ label: 'GitHub', href: profile.githubUrl, external: true } satisfies NavItem]
    : []),
]

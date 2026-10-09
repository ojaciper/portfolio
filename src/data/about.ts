import { profile } from './profile'

export type TextRun = {
  text: string
  emphasis?: boolean
}

export type AboutStat = {
  value: string
  label: string
}

export type AboutLink = {
  label: string
  href: string
  external?: boolean
  download?: boolean
}

export const about = {
  eyebrow: 'About',
  title: 'Mobile developer, backend when it counts.',
  subtitle: 'Flutter on the device. Python and FastAPI behind it.',
} as const

export const aboutStats: AboutStat[] = [
  { value: 'Flutter', label: 'Mobile apps' },
  { value: 'FastAPI', label: 'Backend APIs' },
  { value: 'Python', label: 'Services' },
]

export const aboutColumns: TextRun[][][] = [
  [
    [
      { text: 'I build ' },
      { text: 'Flutter', emphasis: true },
      {
        text: ' apps and the services they depend on. The screen is what people touch. The API is what makes that screen trustworthy.',
      },
    ],
    [
      { text: 'I work across the product: Flutter on the device, ' },
      { text: 'Python', emphasis: true },
      { text: ' and ' },
      { text: 'FastAPI', emphasis: true },
      { text: ' behind it — the endpoints, the data, and the parts the app cannot fake.' },
    ],
  ],
  [
    [
      {
        text: 'I care about what happens after the interface is done: how errors surface, how the app behaves on a slow connection, and how the backend stays simple enough to change.',
      },
    ],
    [
      {
        text: 'The work I want is a mobile product with a real backend, not a UI sitting on a placeholder.',
      },
    ],
  ],
]

export const aboutLinks: AboutLink[] = [
  ...(profile.linkedinUrl
    ? [{ label: 'LinkedIn', href: profile.linkedinUrl, external: true } satisfies AboutLink]
    : []),
  ...(profile.githubUrl
    ? [{ label: 'GitHub', href: profile.githubUrl, external: true } satisfies AboutLink]
    : []),
  ...(profile.email
    ? [{ label: 'Email', href: `mailto:${profile.email}` } satisfies AboutLink]
    : []),
  { label: 'Download resume', href: profile.cvUrl, download: true },
]

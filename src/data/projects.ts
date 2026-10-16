import { profile } from './profile'

export type ProjectLink = {
  label: string
  href: string
}

export type ProjectMeta = {
  label: string
  value: string
}

export type ProjectSection = {
  title: string
  paragraphs: string[]
}

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  role: string
  category: string
  summary: string
  badge?: string
  mark: string
  markClass: string
  icon?: string
  iconClass?: string
  links: ProjectLink[]
  layout: 'card' | 'wide'
  wideAction?: ProjectLink
  lead: string
  meta: ProjectMeta[]
  gallery: ProjectImage[]
  glance: string
  technologies: string[]
  primaryLink?: ProjectLink
  sections: ProjectSection[]
  highlights: string[]
}

const flutterMeta: ProjectMeta[] = [
  { label: 'Role', value: 'Flutter & Mobile Developer' },
  { label: 'Platform', value: 'Flutter' },
]

function app(
  input: { slug: string; title: string; mark: string; markClass: string } & Partial<
    Pick<
      Project,
      | 'summary'
      | 'badge'
      | 'icon'
      | 'iconClass'
      | 'links'
      | 'lead'
      | 'gallery'
      | 'glance'
      | 'sections'
      | 'highlights'
      | 'primaryLink'
      | 'technologies'
      | 'meta'
    >
  >,
): Project {
  return {
    slug: input.slug,
    title: input.title,
    role: 'Flutter & Mobile Developer',
    category: 'Flutter',
    summary:
      input.summary ??
      'Screenshots and links are on the way. A short write-up of how this app was built will be added once those are ready. The case study will cover the product, the stack, and how the screens come together. Store links and pictures will sit with that write-up when they are ready.',
    mark: input.mark,
    markClass: input.markClass,
    icon: input.icon,
    iconClass: input.iconClass,
    badge: input.badge,
    links: input.links ?? [],
    layout: 'card',
    lead: input.lead ?? `Screenshots and links for ${input.title} will be added here.`,
    meta: input.meta ?? flutterMeta,
    gallery: input.gallery ?? [],
    glance: input.glance ?? `${input.title}. Pictures and store links are still to come.`,
    technologies: input.technologies ?? ['Flutter'],
    primaryLink: input.primaryLink,
    sections: input.sections ?? [],
    highlights: input.highlights ?? [],
  }
}

const ajeStore = 'https://play.google.com/store/apps/details?id=com.aje.app'

export const projects: Project[] = [
  app({
    slug: 'aje',
    title: 'Aje app',
    mark: 'A',
    markClass: 'bg-[#9a3412] text-[#f8f1e7]',
    icon: '/projects/aje/icon.png',
    badge: 'On Google Play',
    links: [{ label: 'Play Store', href: ajeStore }],
    primaryLink: { label: 'Play Store', href: ajeStore },
    summary:
      'Ajé is an escrowed peer-to-peer social market for exchanging goods and services. Members post flyers, agree a trade, and the wallet holds payment until both sides confirm.',
    lead: 'Ajé is an escrowed peer-to-peer social market. It helps people safely exchange goods and services, with deposits and withdrawals in euro, naira, USDT, Turkish lira, and US dollars.',
    glance:
      'A nearby social marketplace. Flyers, a 24-hour trade contract, and an escrow wallet that pays out only when both sides confirm.',
    gallery: [
      { src: '/projects/aje/market.png', alt: 'Ajé market screen with nearby trade posts priced in tele' },
      { src: '/projects/aje/flyer.png', alt: 'Create Flyer screen for posting a product or service on Ajé' },
      { src: '/projects/aje/proximity.png', alt: 'Ajé proximity map for finding traders nearby or farther away' },
      { src: '/projects/aje/trade.png', alt: 'Ajé trades list with ongoing, disputed, and completed filters' },
      { src: '/projects/aje/chat.png', alt: 'Ajé trade negotiation chat with a request to trade' },
      { src: '/projects/aje/wallet.png', alt: 'Ajé escrow wallet with tele balance and currency rates' },
      { src: '/projects/aje/profile.png', alt: 'Ajé profile with flyers, completed trades, and disputes' },
    ],
    sections: [
      {
        title: 'Marketplace',
        paragraphs: [
          'The Ajé community is a social marketplace for trade posts from people nearby. A member can search flyer content in their area and tap Buy or Sell to open a dialogue with the other person.',
        ],
      },
      {
        title: 'Trade',
        paragraphs: [
          'Once a dialogue starts, the two sides have 24 hours to agree terms. The trade button opens a contract for price, delivery fee, delivery location, and delivery time. One side completes it and the other confirms. When both confirm, the buyer’s wallet is charged.',
        ],
      },
      {
        title: 'Security',
        paragraphs: [
          'The charged amount is not paid out until both sides accept that the trade is complete. The seller confirms delivery and the buyer confirms receipt. Trades that are not confirmed by the agreed delivery time go to dispute resolution.',
        ],
      },
      {
        title: 'Wallet',
        paragraphs: [
          'The wallet is how members pay and get paid. It holds a token called tele, and 1 tele is a tenth of USDT. Euro, naira, tether, Turkish lira, and US dollars can buy tele. A wallet can be funded with Mastercard or a USDT transfer, and withdrawn to a local bank account or a USDT wallet.',
        ],
      },
      {
        title: 'Profile',
        paragraphs: [
          'A profile holds a business name, description, and photo, plus completed, disputed, and ongoing trades. Members create flyers for a catalogue and like flyers to save them to a wishlist.',
        ],
      },
    ],
  }),
  app({
    slug: 'zuri-flex',
    title: 'Zuri flex',
    mark: 'Z',
    markClass: 'bg-[#5b21b6] text-[#f5f3ff]',
    icon: '/projects/zuri-flex/mark.png',
    iconClass: 'size-24 rounded-[1.15rem] object-cover',
  }),
  app({ slug: 'qrater', title: 'Qrater', mark: 'Q', markClass: 'bg-[#0f766e] text-[#f0fdfa]' }),
  app({
    slug: 'ubefu',
    title: 'Ubefu',
    mark: 'U',
    markClass: 'bg-[#1e3a5f] text-[#e8eef6]',
    icon: '/projects/ubefu/icon.png',
    summary: 'Ubefu is an LMS that Ihifix uses to carry out their digital training.',
    lead: 'Ubefu is an LMS that Ihifix uses to carry out their digital training. It covers assignments, course material, live classes, and progress.',
    glance: 'Ihifix’s LMS for digital training. Classes, assignments, live sessions, and grades.',
    gallery: [
      { src: '/projects/ubefu/home.png', alt: 'Ubefu home with classes, pending assignments, and overdue work' },
      { src: '/projects/ubefu/classes.png', alt: 'Ubefu classes list with a search and pending work' },
      { src: '/projects/ubefu/assignments.png', alt: 'Ubefu assignments with work still to do and overdue items' },
      { src: '/projects/ubefu/sessions.png', alt: 'Ubefu sessions with live, upcoming, and recorded classes' },
      { src: '/projects/ubefu/notifications.png', alt: 'Ubefu notifications for posted grades and new assignments' },
      { src: '/projects/ubefu/profile.png', alt: 'Ubefu student profile with certificates, progress, and settings' },
    ],
    sections: [
      {
        title: 'Assignments and course material',
        paragraphs: [
          'Instructors post assignments, course materials, and quizzes. Students submit work in the app and get feedback on it. Class discussions sit with the course.',
        ],
      },
      {
        title: 'Live classes',
        paragraphs: [
          'An instructor can schedule a virtual session and send the link to students. The app lists what is live, what is coming up, and what was recorded, and attendance for those sessions can be tracked. Sessions can connect to Zoom, Google Meet, or Microsoft Teams.',
        ],
      },
      {
        title: 'Progress',
        paragraphs: [
          'The app follows whether a student opened a resource and how long they spent in a module. That activity sits with grades, what is still due, and what is overdue.',
        ],
      },
      {
        title: 'Other school systems',
        paragraphs: [
          'Ubefu can include these learning tools itself, or connect to a system such as Google Classroom, Canvas, or Schoology. Class lists can stay in sync, people can sign in once, and grades can pass back into the school gradebook. Learning Tools Interoperability lets outside quiz tools and content libraries open inside it. SCORM packages can be launched and tracked when a school already uses them. Instructors can also keep material in a shared library and reuse it across years or with colleagues.',
        ],
      },
      {
        title: 'Mobile',
        paragraphs: [
          'Students get a push when new work is posted. They can submit a photo of homework and join a class discussion from the phone.',
        ],
      },
    ],
  }),
]

export type MoreWorkItem = {
  title: string
  summary: string
  action: string
  href?: string
}

export const moreWork: MoreWorkItem[] = [
  {
    title: 'Open source',
    summary:
      'A reusable Flutter package will be listed here, with a link to the source once it is published.',
    action: 'View source',
  },
  {
    title: 'More on GitHub',
    summary: 'Experiments, utilities, and earlier Flutter work.',
    action: 'View GitHub',
    ...(profile.githubUrl ? { href: profile.githubUrl } : {}),
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

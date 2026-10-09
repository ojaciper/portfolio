import type { Transition, Variants } from 'framer-motion'

export const easeOutSoft: Transition['ease'] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutSoft },
  },
}

export const viewportOnce = { once: true, amount: 0.4 } as const

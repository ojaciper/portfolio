export type ExperienceItem = {
  dates: string
  title: string
  current?: boolean
  subtitle?: string
  summary: string
}

export const experience: ExperienceItem[] = [
  {
    dates: 'Mar 2026 — Present',
    title: 'De-Future Elite Technology',
    current: true,
    subtitle: 'Flutter Developer · Abuja, Nigeria',
    summary:
      'Built and deployed cross-platform mobile applications for real-world use, with a focus on performance, scalability, and maintainability. Implemented clean architecture and reusable components, and resolved bugs that improved the user experience.',
  },
  {
    dates: 'Mar 2026 — Present',
    title: 'ZuriFlux Green Tech Ltd',
    current: true,
    subtitle: 'Flutter Developer · Lagos, Nigeria · Contract',
    summary:
      'Designed and deployed Flutter applications for Android and iOS. Translated Figma designs into responsive interfaces, integrated REST APIs, and used clean architecture with Riverpod for state management.',
  },
  {
    dates: 'Nov 2022 — Mar 2023',
    title: '4000 YEARS',
    subtitle: 'Junior Flutter Developer · Lagos, Nigeria',
    summary:
      'Optimized the Aje app, improving performance by 90%. Added and upgraded features, and resolved bugs and UI issues that improved stability by 70%.',
  },
  {
    dates: 'Nov 2022',
    title: 'HNG',
    subtitle: 'Flutter Desktop Developer · Lagos, Nigeria',
    summary:
      'Collaborated on the YeildVest desktop app with Dart and Flutter. Integrated REST APIs using MVVM, improving maintainability by 80%, and converted Figma designs into a responsive desktop app.',
  },
]

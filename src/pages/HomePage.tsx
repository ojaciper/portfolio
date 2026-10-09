import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { Experience } from '../components/sections/Experience'
import { Hero } from '../components/sections/Hero'
import { Work } from '../components/sections/Work'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
    </>
  )
}

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { TechStack } from '@/components/sections/TechStack'
import { WhyMe } from '@/components/sections/WhyMe'
import { Remote } from '@/components/sections/Remote'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <WhyMe />
        <Remote />
      </main>
      <Footer />
    </>
  )
}

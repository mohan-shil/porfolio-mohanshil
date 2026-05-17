import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import SkillBars from "@/components/skill-bars"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <SkillBars />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

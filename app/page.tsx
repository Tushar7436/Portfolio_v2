import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import Blog from "@/components/sections/blog"
import CursorFollower from "@/components/ui-elements/cursor-follower"

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Full-stack developer portfolio showcasing projects, skills, and expertise in web development.",
  keywords: "full-stack developer, web development, portfolio, projects, react, next.js",
}

export default function Home() {
  return (
    <main className="relative">
      <CursorFollower />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </main>
  )
}


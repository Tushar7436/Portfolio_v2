import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/work/project-card"

export const metadata: Metadata = {
  title: "Work",
  description: "My projects",
}

const projects = [
  {
    id: "1",
    title: "Project 1",
    description: "Description of project 1",
    image: "/placeholder.jpg",
    link: "/work/project-1",
  },
  {
    id: "2",
    title: "Project 2",
    description: "Description of project 2",
    image: "/placeholder.jpg",
    link: "/work/project-2",
  },
]

export default function WorkPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 md:pt-10">
      <div className="flex flex-col gap-4">
        <Link href="/" className="w-fit">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Work</h1>
        <p className="max-w-[85%] text-lg text-muted-foreground">Here are some of my projects.</p>
      </div>
      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}


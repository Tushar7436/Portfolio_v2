"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import SectionHeading from "@/components/ui-elements/section-heading"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "An interactive dashboard for tracking personal finances, with data visualization, budget planning, and expense categorization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Content Management System",
    description: "A custom CMS built for content creators with a focus on performance and ease of use.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Analytics Tool",
    description: "A tool for analyzing social media performance across multiple platforms with custom reporting.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Python", "Django", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("featured")
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work and technical expertise"
          align="center"
        />

        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <Button
              variant={filter === "featured" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("featured")}
              className="rounded-md text-xs sm:text-sm"
            >
              Featured
            </Button>
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className="rounded-md text-xs sm:text-sm"
            >
              All Projects
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="sync">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group bg-background rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="flex gap-3 sm:gap-4">
                      <Button size="sm" className="text-xs sm:text-sm h-8 sm:h-9" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs sm:text-sm h-8 sm:h-9" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}


"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

// Project data (same as in the projects component)
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
    longDescription:
      "This e-commerce platform provides businesses with a complete solution for selling products online. It features a responsive design, secure payment processing with Stripe, comprehensive product management, user authentication, order tracking, and an intuitive admin dashboard. Built with performance and scalability in mind, it leverages Next.js for server-side rendering and optimized loading times.",
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
    longDescription:
      "This task management application helps teams collaborate efficiently with real-time updates using Socket.io. It features customizable workspaces, task assignment, due date tracking, priority levels, file attachments, and detailed progress analytics. The app includes email notifications, recurring tasks, and integrates with popular calendar services.",
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
    longDescription:
      "This finance dashboard provides users with a comprehensive view of their financial health. It features interactive charts and graphs powered by D3.js, automated expense categorization, budget planning tools, and financial goal tracking. Users can connect their bank accounts for automatic transaction imports, generate detailed reports, and receive personalized insights on spending habits.",
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
    longDescription:
      "This custom content management system was designed specifically for digital content creators, bloggers, and online publications. It features a user-friendly interface, powerful content editing tools, media management, scheduled publishing, SEO optimization tools, and detailed analytics. The system is built with GraphQL for efficient data fetching and AWS for reliable hosting and content delivery.",
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
    longDescription:
      "This social media analytics tool helps businesses and influencers track and optimize their social media presence across multiple platforms. It provides unified analytics, competitor analysis, content performance metrics, audience insights, and automated custom reports. The tool uses AI to identify trends and make content recommendations based on historical performance data.",
  },
]

export default function WorkPageClient() {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <div className="container px-4 md:px-6 mb-16">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" className="group" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Work</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A collection of projects that showcase my skills and experience in web development. Each project reflects my
          passion for creating exceptional digital experiences.
        </p>
      </div>

      {/* Projects */}
      <div className="container px-4 md:px-6">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid md:grid-cols-2 gap-12 items-center"
              style={{
                direction: index % 2 === 0 ? "ltr" : "rtl",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg" style={{ direction: "ltr" }}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-video"
                />
              </div>

              {/* Content */}
              <div className="space-y-6" style={{ direction: "ltr" }}>
                <h2 className="text-3xl font-bold">{project.title}</h2>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground">{project.longDescription}</p>

                <div className="flex gap-4 pt-4">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button size="lg" asChild>
            <Link href="/#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}


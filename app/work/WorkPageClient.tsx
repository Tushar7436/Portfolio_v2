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
    title: "Lumen Airways",
    description:
      "Front-end for Lumen Airways — polished airline booking & flight search experience.",
    image: "/lumen-airways.png",   // you might want to screenshot or add
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",   // fill in if deployed
    githubUrl: "https://github.com/Tushar7436/Lumen-Airways",
    featured: true,
    longDescription:
      "Lumen Airways is a front-end project for airline booking. It includes flight search, booking pages, responsive design, likely animation and interactive UI components. Built with modern frontend stack, this showcases UI/UX skills and layout responsiveness.",
  },
  {
    id: 2,
    title: "Flight Booking Service",
    description:
      "Backend part of the whole airline booking service, handling flight logic & APIs.",
    image: "/flight-service.png",
    tags: ["Node.js", "Express.js","MYSQL", "REST API", "Microservice","RabitMQ"],
    liveUrl: "#",
    githubUrl: "https://github.com/Tushar7436/Airline-Backend",
    featured: true,
    longDescription:
      "Flight Service is the API/backend which supports airline booking logic — flights listing, booking flows, maybe user/session management. Demonstrates backend design, data modeling, API endpoints, error handling, and integration readiness.",
  },
  {
    id: 3,
    title: "repairshop",
    description:
      "Computer Repair Shop Management System — full-stack, modern web app to manage repair tickets and operations.",
    image: "/repairshop.png",
    tags: ["Next.js", "React", "TypeScript", "Drizzle ORM", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Tushar7436/repairshop",
    featured: true,
    longDescription:
      "Repairshop is a full-stack web app built with Next.js 15 and React 19. It features management of repair shop operations (tickets, status, assignments). Uses Drizzle ORM, next15 features, maybe auth & dashboards. Shows real-world operational flows.",
  },
  {
    id: 4,
    title: "Portfolio_v2",
    description:
      "My personal portfolio site (v2) — showcases projects, experience, and developer profile.",
    image: "/portfolio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://portfolio-v2-eosin-tau-22.vercel.app/",
    githubUrl: "https://github.com/Tushar7436/Portfolio_v2",
    featured: true,
    longDescription:
      "Portfolio v2 is the second version of my personal site. Built using Next.js, React, TypeScript. It features dynamic loading of my work, polished UI, performance optimizations, responsive design, and it's intended to serve as my digital identity for job applications.",
  },
  {
    id: 5,
    title: "IEEE Student Branch VIT Bhopal",
    description:
      "Website / web-tool for IEEE Student Branch VIT Bhopal — events, announcements, membership info.",
    image: "/ieee-web.png",
    tags: ["JavaScript", "React", "Tailwind", "Recoil"],
    liveUrl: "https://ieee-c06dc.firebaseapp.com/",
    githubUrl: "https://github.com/Tushar7436/v9",
    featured: false,
    longDescription:
      "The IEEE Student Branch site for VIT Bhopal showcases events, news, volunteer sign-ups, membership information. Good example of static + interactive content, community focused, works for both desktop & mobile.",
  },
  // … you can add more
];


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


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    longDescription: string
    image: string
    tags: string[]
    liveUrl: string
    githubUrl: string
    featured: boolean
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      style={{
        direction: isEven ? "ltr" : "rtl",
      }}
    >
      {/* Image */}
      <motion.div
        className="relative overflow-hidden rounded-xl shadow-lg"
        style={{ direction: "ltr" }}
        whileInView={{
          scale: [0.9, 1],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover w-full aspect-video"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="space-y-6"
        style={{ direction: "ltr" }}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </motion.div>
  )
}


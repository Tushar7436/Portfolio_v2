"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code, Database, Globe, Palette, Zap, Settings } from "lucide-react"
import Link from "next/link"
import SectionHeading from "@/components/ui-elements/section-heading"

// Project data with dark gradients instead of images
const projects = [
    {
    id: 1,
    title: "Airline Booking Backend",
    gradient: "from-[#18181b] via-[#27272a] to-[#3f3f46]",
    icon: Database,
    tags: ["Node","Express.js",,"MYSQL", "RabbitMQ","Microservices","Pub-Sub"],
    liveUrl: "#",
    githubUrl: "https://github.com/Tushar7436/Airline-Backend",
    featured: true
  },
  {
    id: 2,
    title: "Repair Shop",
    gradient: "from-[#111827] via-[#1f2937] to-[#000000]",
    icon: Code,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSql", "Kinde"],
    liveUrl: "https://repairshop-sage.vercel.app",
    githubUrl: "https://github.com/Tushar7436/repairshop",
    featured: true
  },
  {
    id: 3,
    title: "Student Chapter",
    gradient: "from-[#0f172a] via-[#1e293b] to-[#334155]",
    icon: Globe,
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://ieee-c06dc.web.app",
    githubUrl: "https://github.com/Tushar7436/v9",
    featured: true
  },
  {
    id: 4,
    title: "Node.js Blog",
    gradient: "from-[#171717] via-[#262626] to-[#404040]",
    icon: Settings,
    tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    liveUrl: "https://blogwebsite-znrz.onrender.com/",
    githubUrl: "https://github.com/Tushar7436/BlogWebsite",
    featured: false
  },
  {
    id: 5,
    title: "G-meet",
    gradient: "from-[#1c1917] via-[#292524] to-[#44403c]",
    icon: Zap,
    tags: ["Vue.js", "Python", "Django", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("featured")
  const [currentIndex, setCurrentIndex] = useState(0)
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.featured)
  
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // mobile
      if (window.innerWidth < 1024) return 2 // tablet
      return 3 // desktop
    }
    return 3 // default for SSR
  }
  
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())
  const maxIndex = Math.max(0, filteredProjects.length - cardsPerView)

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const handleFilterChange = (newFilter: "all" | "featured") => {
    setFilter(newFilter)
    setCurrentIndex(0)
  }

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work and technical experience"
          align="center"
        />

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <Button
              variant={filter === "featured" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleFilterChange("featured")}
              className="rounded-md text-xs sm:text-sm cursor-pointer interactive-element"
            >
              Featured
            </Button>
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleFilterChange("all")}
              className="rounded-md text-xs sm:text-sm cursor-pointer interactive-element"
            >
              All Projects
            </Button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-4 sm:px-0">
          <AnimatePresence mode="sync">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                width: `${(100 * filteredProjects.length) / cardsPerView}%`
              }}
            >
              {filteredProjects.map((project) => {
                const IconComponent = project.icon
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-0"
                  >
                                      <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-[20rem] sm:h-[28rem] lg:h-[32rem]">
                    {/* Simple Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    
                    {/* SVG Icon */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <IconComponent className="w-6 h-6 text-white/80" />
                      </div>
                    </div>
                    
                    {/* Simple Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 5).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs text-white border-white/30 bg-white/10">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Simple Buttons */}
                      <div className="flex gap-3">
                        <Button 
                          size="sm" 
                          className="text-xs h-8 bg-white text-black hover:bg-gray-100 cursor-pointer interactive-element" 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (project.liveUrl && project.liveUrl !== "#") {
                              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          disabled={!project.liveUrl || project.liveUrl === "#"}
                        >
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                          {project.liveUrl && project.liveUrl !== "#" ? "Live Demo" : "Coming Soon"}
                        </Button>
                        
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs h-8 text-white border-white/50 bg-white/10 hover:bg-white/20 cursor-pointer interactive-element" 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (project.githubUrl && project.githubUrl !== "#") {
                              window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          disabled={!project.githubUrl || project.githubUrl === "#"}
                        >
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          {project.githubUrl && project.githubUrl !== "#" ? "Code" : "Private"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {filteredProjects.length > cardsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </>
          )}
        </div>

        {/* Dot Indicators */}
        {filteredProjects.length > cardsPerView && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(filteredProjects.length / cardsPerView) }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
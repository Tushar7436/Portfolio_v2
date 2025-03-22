"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/ui-elements/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Skill data
const technicalSkills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React & Next.js", level: 90 },
  { name: "Node.js & Express", level: 85 },
  { name: "HTML & CSS", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "SQL & NoSQL Databases", level: 80 },
  { name: "RESTful APIs", level: 90 },
  { name: "GraphQL", level: 75 },
  { name: "AWS & Vercel", level: 80 },
  { name: "Git & GitHub", level: 90 },
]

const softSkills = [
  { name: "Problem Solving", level: 95 },
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Time Management", level: 85 },
  { name: "Adaptability", level: 90 },
  { name: "Attention to Detail", level: 95 },
  { name: "Project Management", level: 80 },
  { name: "Critical Thinking", level: 90 },
  { name: "Creativity", level: 85 },
  { name: "Leadership", level: 80 },
]

const tools = [
  { name: "VS Code", level: 95 },
  { name: "Docker", level: 80 },
  { name: "Figma", level: 85 },
  { name: "Postman", level: 90 },
  { name: "GitHub Actions", level: 80 },
  { name: "Jest & Testing Library", level: 85 },
  { name: "Webpack", level: 75 },
  { name: "Chrome DevTools", level: 90 },
  { name: "npm/yarn", level: 95 },
  { name: "Slack & Notion", level: 90 },
]

// Custom animated progress component
const AnimatedProgress = ({ value, className }: { value: number; className?: string }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-full bg-secondary ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-primary/80 to-primary flex items-center justify-end pr-2"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{
          duration: 1.5,
          ease: [0.34, 1.56, 0.64, 1],
          delay: 0.2,
        }}
        style={{
          boxShadow: "0 0 10px rgba(var(--primary), 0.5)",
        }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
          }}
        />
      </motion.div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical and soft skills"
          align="center"
        />

        <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
          <TabsList className="w-full mb-8 sm:mb-12 flex flex-wrap sm:grid sm:grid-cols-3 gap-2 sm:gap-0">
            <TabsTrigger value="technical" className="flex-1 text-xs sm:text-sm whitespace-normal h-auto py-2">
              Technical Skills
            </TabsTrigger>
            <TabsTrigger value="soft" className="flex-1 text-xs sm:text-sm whitespace-normal h-auto py-2">
              Soft Skills
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex-1 text-xs sm:text-sm whitespace-normal h-auto py-2">
              Tools & Technologies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {technicalSkills.map((skill, index) => {
                const SkillProgress = () => {
                  const [progress, setProgress] = useState(0)

                  useEffect(() => {
                    const timer = setTimeout(
                      () => {
                        setProgress(skill.level)
                      },
                      300 + index * 100,
                    )

                    return () => clearTimeout(timer)
                  }, [])

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <motion.span
                          className="text-muted-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                          {Math.round(progress)}%
                        </motion.span>
                      </div>
                      <AnimatedProgress value={progress} className="h-2" />
                    </motion.div>
                  )
                }

                return <SkillProgress key={skill.name} />
              })}
            </div>
          </TabsContent>

          <TabsContent value="soft" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {softSkills.map((skill, index) => {
                const SkillProgress = () => {
                  const [progress, setProgress] = useState(0)

                  useEffect(() => {
                    const timer = setTimeout(
                      () => {
                        setProgress(skill.level)
                      },
                      300 + index * 100,
                    )

                    return () => clearTimeout(timer)
                  }, [])

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <motion.span
                          className="text-muted-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                          {Math.round(progress)}%
                        </motion.span>
                      </div>
                      <AnimatedProgress value={progress} className="h-2" />
                    </motion.div>
                  )
                }

                return <SkillProgress key={skill.name} />
              })}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {tools.map((skill, index) => {
                const SkillProgress = () => {
                  const [progress, setProgress] = useState(0)

                  useEffect(() => {
                    const timer = setTimeout(
                      () => {
                        setProgress(skill.level)
                      },
                      300 + index * 100,
                    )

                    return () => clearTimeout(timer)
                  }, [])

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <motion.span
                          className="text-muted-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                          {Math.round(progress)}%
                        </motion.span>
                      </div>
                      <AnimatedProgress value={progress} className="h-2" />
                    </motion.div>
                  )
                }

                return <SkillProgress key={skill.name} />
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


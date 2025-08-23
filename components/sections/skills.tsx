"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/ui-elements/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Skill data
const skillCategories = {
  technical: [
    { name: "JavaScript", level: 61 },
    { name: "React.js", level: 72 },
    { name: "Node.js & Express", level: 62 },
    { name: "HTML & CSS", level: 78 },
    { name: "Problem solving", level: 78 },
    { name: "SQL", level: 70 },
    { name: "Next.js", level: 70 },
    { name: "NoSQL", level: 70 }
  ],
  soft: [
    { name: "Problem Solving", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Teamwork", level: 85 },
    { name: "Time Management", level: 85 },
    { name: "Adaptability", level: 90 },
    { name: "Attention to Detail", level: 85 },
  ],
  tools: [
    { name: "AWS & Vercel", level: 76 },
    { name: "Git & GitHub", level: 76 },
    { name: "Docker", level: 62 },
    { name: "Figma", level: 53 },
    { name: "Postman", level: 73 },
    { name: "Chrome DevTools", level: 73 }
  ]
}

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

// Skill item component
const SkillItem = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(skill.level), 300 + index * 100)
    return () => clearTimeout(timer)
  }, [skill.level, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm sm:text-base">{skill.name}</span>
        <motion.span
          className="text-muted-foreground text-sm"
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

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionHeading
            title="Skills and Knowledge"
            subtitle="A overview of my technical and soft skills"
            align="center"
          />

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="w-full mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <TabsTrigger value="technical" className="text-sm ">
                Technical Skills
              </TabsTrigger>
              <TabsTrigger value="soft" className="text-sm ">
                Soft Skills
              </TabsTrigger>
              <TabsTrigger value="tools" className="text-sm ">
                Tools & Technologies
              </TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {skills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
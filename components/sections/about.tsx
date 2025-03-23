"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "@/components/ui-elements/section-heading"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading title="About Me" subtitle="Get to know the person behind the code" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer portrait"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full-Stack Developer with a passion for creating exceptional digital experiences
            </h3>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a full-stack developer with Knowledge in building modern web applications using React, Next.js, and
                Node.js. My journey in web development began 2 years ago, and I've been passionate about creating
                intuitive, high-performance applications ever since.
              </p>
              <p>
                I specialize in translating complex problems into elegant solutions, with a focus on clean code,
                performance optimization, and exceptional user experiences. Whether working on the frontend or backend,
                I bring the same level of dedication and attention to detail.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical articles and mentoring.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => {
                // Create an anchor element
                const link = document.createElement("a")
                // Set the file path
                link.href = "/Tushar_Agarwal_Resume.pdf"
                // Set the download attribute with filename
                link.setAttribute("download", "Tushar_Agarwal_Resume.pdf")
                // Append to body
                document.body.appendChild(link)
                // Trigger click
                link.click()
                // Clean up
                document.body.removeChild(link)
              }}
            >
              <FileText className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


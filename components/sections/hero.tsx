"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ScrollIndicator from "@/components/ui-elements/scroll-indicator"
import RevealText from "@/components/ui-elements/reveal-text"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-0">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Background grid pattern */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      <div className="container relative z-10 px-3 sm:px-4 md:px-6 w-full max-w-full overflow-hidden">
        <div className="max-w-4xl">
          <RevealText delay={0.1} fromDirection="left">
            <p className="text-primary font-medium mb-4">Full-Stack Developer</p>
          </RevealText>

          <div className="overflow-hidden">
            <RevealText delay={0.3} fromDirection="bottom">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 break-words">
                Crafting digital experiences with code & creativity
              </h1>
            </RevealText>
          </div>

          <div className="overflow-hidden">
            <RevealText delay={0.6} fromDirection="bottom">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                I build modern, high-performance web applications that deliver exceptional user experiences.
              </p>
            </RevealText>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/work">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get In Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="hidden sm:block">
        <ScrollIndicator />
      </div>
    </section>
  )
}


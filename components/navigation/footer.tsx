"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp, Bot } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Footer() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Only handle hash links on the current page
    if (path.startsWith("/#")) {
      e.preventDefault()
      const sectionId = path.replace("/#", "")
      const element = document.getElementById(sectionId)

      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Update URL without causing a page reload
        window.history.pushState(null, "", path)
      }
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-primary">Tushar</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Full-stack developer specializing in creating exceptional digital experiences with modern web
              technologies.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://github.com/Tushar7436" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-transparent cursor-default">
                <Bot className="h-5 w-5 text-muted-foreground" />
                <span className="sr-only">Bot</span>
              </div>
              <Button size="icon" variant="ghost" asChild>
                <Link
                  href="https://www.linkedin.com/in/tushar-agarwal-ba0186263/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=tushar7436@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "/#about")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  onClick={(e) => handleNavClick(e, "/#projects")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  onClick={(e) => handleNavClick(e, "/#skills")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  onClick={(e) => handleNavClick(e, "/#blog")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            ©{new Date().getFullYear()} All rights reserved.
          </p>

          {/* Back to Top Button */}
          <Button variant="ghost" size="sm" onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center gap-2">
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}


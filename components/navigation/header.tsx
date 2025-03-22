"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/#projects" },
  { name: "Skills", path: "/#skills" },
  { name: "Blog", path: "/#blog" },
  { name: "Contact", path: "/#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Only handle hash links on the current page
    if (path.startsWith("/#")) {
      e.preventDefault()
      const sectionId = path.replace("/#", "")
      const element = document.getElementById(sectionId)

      if (element) {
        // Close mobile menu if open
        if (mobileMenuOpen) {
          setMobileMenuOpen(false)
        }

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2 sm:py-3" : "bg-transparent py-2 sm:py-4 md:py-6",
      )}
    >
      <div className="container px-2 sm:px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold">
            <span className="text-primary">Tushar</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path && "text-primary",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            <ModeToggle />

            <Button className="hidden md:flex" asChild>
              <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
                Hire Me
              </Link>
            </Button>

            <button
              className="md:hidden p-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 64px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t fixed w-full top-[64px] left-0 overflow-auto"
          >
            <div className="container px-4 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors hover:text-primary",
                    pathname === item.path && "text-primary",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-6" asChild>
                <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
                  Hire Me
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


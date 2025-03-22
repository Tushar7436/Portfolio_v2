"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Preloader from "./preloader"

export default function PreloaderWrapper() {
  const [isLoading, setIsLoading] = useState(false) // Default to false until we check storage

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisitedBefore = sessionStorage.getItem("hasVisitedBefore")

    if (!hasVisitedBefore) {
      // First visit - show preloader
      setIsLoading(true)

      // Mark that user has visited the site
      sessionStorage.setItem("hasVisitedBefore", "true")

      // Hide preloader after the site is fully loaded
      const handleLoad = () => {
        setTimeout(() => {
          setIsLoading(false)
        }, 8000) // Display preloader for 8 seconds
      }

      // Check if document is already loaded
      if (document.readyState === "complete") {
        handleLoad()
      } else {
        window.addEventListener("load", handleLoad)
        return () => window.removeEventListener("load", handleLoad)
      }
    }
    // If hasVisitedBefore exists, isLoading remains false and preloader doesn't show
  }, [])

  return <AnimatePresence mode="wait">{isLoading ? <Preloader /> : null}</AnimatePresence>
}


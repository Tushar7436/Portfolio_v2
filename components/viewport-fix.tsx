"use client"

import { useEffect } from "react"

export default function ViewportFix() {
  useEffect(() => {
    // Fix for mobile viewport height (addresses the 100vh issue on mobile browsers)
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    // Set initial value
    setVh()

    // Update on resize and orientation change
    window.addEventListener("resize", setVh)
    window.addEventListener("orientationchange", setVh)

    return () => {
      window.removeEventListener("resize", setVh)
      window.removeEventListener("orientationchange", setVh)
    }
  }, [])

  return null
}


"use client"

import { motion, useAnimation } from "framer-motion"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"

interface RevealTextProps {
  children: ReactNode
  delay?: number
  fromDirection?: "bottom" | "left" | "right"
}

export default function RevealText({ children, delay = 0, fromDirection = "bottom" }: RevealTextProps) {
  const controls = useAnimation()
  const [isClient, setIsClient] = useState(false)

  // Set initial animation values based on direction
  const getInitialValues = () => {
    switch (fromDirection) {
      case "left":
        return { x: -100, y: 0, opacity: 0 }
      case "right":
        return { x: 100, y: 0, opacity: 0 }
      case "bottom":
      default:
        return { y: 100, x: 0, opacity: 0 }
    }
  }

  // Set target animation values (all directions resolve to the same end state)
  const targetValues = { x: 0, y: 0, opacity: 1 }

  useEffect(() => {
    setIsClient(true)

    // Start animation after the specified delay
    const timer = setTimeout(() => {
      controls.start(targetValues)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [controls, delay, targetValues])

  // Only render the motion div on the client to prevent hydration issues
  if (!isClient) {
    return <div style={{ opacity: 0 }}>{children}</div>
  }

  return (
    <motion.div
      initial={getInitialValues()}
      animate={controls}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {children}
    </motion.div>
  )
}


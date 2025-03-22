"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "var(--primary-light)",
      mixBlendMode: "difference",
      opacity: 0.25,
    },
  }

  useEffect(() => {
    const textElements = document.querySelectorAll("h1, h2, h3, p, button, a")

    const mouseEnterText = () => setCursorVariant("text")
    const mouseLeaveText = () => setCursorVariant("default")

    textElements.forEach((element) => {
      element.addEventListener("mouseenter", mouseEnterText)
      element.addEventListener("mouseleave", mouseLeaveText)
    })

    return () => {
      textElements.forEach((element) => {
        element.removeEventListener("mouseenter", mouseEnterText)
        element.removeEventListener("mouseleave", mouseLeaveText)
      })
    }
  }, [])

  return (
    <motion.div
      className="cursor-follower hidden md:block fixed top-0 left-0 w-8 h-8 bg-primary rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  )
}


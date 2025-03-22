"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Greetings in different Indian languages
const greetings = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "வணக்கம்", language: "Tamil" },
  { text: "నమస్కారం", language: "Telugu" },
  { text: "ನಮಸ್ಕಾರ", language: "Kannada" },
  { text: "നമസ്കാരം", language: "Malayalam" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", language: "Punjabi" },
  { text: "નમસ્તે", language: "Gujarati" },
  { text: "নমস্কার", language: "Bengali" },
  { text: "नमस्कार", language: "Marathi" },
  { text: "ଜୟ ଜଗନ୍ନାଥ", language: "Odia" },
]

export default function Preloader() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  // Cycle through greetings with slower speed
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length)
      }, 1500) // Slower transitions

      return () => clearInterval(interval)
    }
  }, [loading])

  // Simulate loading progress
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prevProgress) => {
          const increment = Math.random() * 5 + 3 // Slower progress increments
          const newProgress = Math.min(prevProgress + increment, 100)
          return newProgress
        })
      } else {
        // Finish loading after reaching 100%
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [progress])

  // Hide preloader after loading is complete
  if (!loading) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1.2,
          ease: "easeInOut",
        },
      }}
    >
      <div className="relative w-full max-w-[90%] sm:max-w-md px-4">
        <div className="mb-16 text-center">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="relative h-32 flex flex-col items-center justify-center"
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">{greetings[currentIndex].text}</h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Loading assets</span>
          <span>{Math.round(progress)}%</span>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </motion.div>
  )
}


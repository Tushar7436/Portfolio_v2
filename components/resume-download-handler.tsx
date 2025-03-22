"use client"

import { useEffect } from "react"

export default function ResumeDownloadHandler() {
  useEffect(() => {
    // Add event listener to handle resume download button clicks
    const handleResumeDownload = () => {
      // Check if the browser supports the download attribute
      const isDownloadSupported = "download" in document.createElement("a")

      // Get all resume download buttons
      const resumeButtons = document.querySelectorAll('a[href$="Tushar-Agarwal-Resume.pdf"]')

      resumeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          // If download attribute is not supported, handle manually
          if (!isDownloadSupported) {
            e.preventDefault()
            window.open(button.getAttribute("href"), "_blank")
          }

          // Track download event (optional)
          console.log("Resume download initiated")
        })
      })
    }

    // Run once when component mounts
    if (typeof window !== "undefined") {
      // Wait for DOM to be fully loaded
      if (document.readyState === "complete") {
        handleResumeDownload()
      } else {
        window.addEventListener("load", handleResumeDownload)
        return () => window.removeEventListener("load", handleResumeDownload)
      }
    }
  }, [])

  return null
}


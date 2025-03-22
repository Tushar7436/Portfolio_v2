import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Work | Full-Stack Developer Portfolio",
  description: "Explore my projects and case studies showcasing my skills in web development.",
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-background">{children}</div>
}


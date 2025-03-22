"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/ui-elements/section-heading"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Building Performant Next.js Applications",
    excerpt: "Learn how to optimize your Next.js applications for maximum performance and better user experience.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Performance",
    slug: "building-performant-nextjs-applications",
  },
  {
    id: 2,
    title: "The Power of Server Components in Next.js",
    excerpt: "Explore how Server Components can revolutionize the way you build React applications with Next.js.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 22, 2023",
    readTime: "6 min read",
    category: "Next.js",
    slug: "power-of-server-components-nextjs",
  },
  {
    id: 3,
    title: "Creating Smooth Animations with Framer Motion",
    excerpt: "A comprehensive guide to implementing beautiful, performant animations in your React applications.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 10, 2023",
    readTime: "10 min read",
    category: "Animation",
    slug: "smooth-animations-framer-motion",
  },
  {
    id: 4,
    title: "Mastering TypeScript for React Development",
    excerpt: "Discover how TypeScript can improve your React development workflow and help catch errors early.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 5, 2023",
    readTime: "7 min read",
    category: "TypeScript",
    slug: "mastering-typescript-react-development",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background styling similar to hero section */}
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

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Latest Articles"
          subtitle="Insights and tutorials on web development and design"
          align="center"
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-10 sm:mt-16">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-[-0.5px] hidden md:block"></div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/20 md:hidden"></div>

          {/* Timeline Items */}
          <div className="space-y-10 sm:space-y-12">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="relative">
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 sm:left-8 md:left-1/2 top-0 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary shadow-glow transform md:translate-x-[-8px] translate-y-[24px] z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />

                {/* Date Badge - Mobile */}
                <div className="md:hidden flex items-center mb-3 ml-12 sm:ml-16">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">{post.date}</span>
                </div>

                {/* Content Container */}
                <motion.div
                  className={`md:w-[calc(50%-40px)] ml-12 sm:ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                  initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Date Badge - Desktop */}
                  <div className="hidden md:flex items-center mb-3 text-primary">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{post.date}</span>
                  </div>

                  {/* Article Card */}
                  <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <Badge className="text-xs">{post.category}</Badge>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-2">
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                      <Button variant="ghost" size="sm" className="group text-xs sm:text-sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* View All Articles Button */}
          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button size="lg" variant="outline" className="text-sm sm:text-base" asChild>
              <Link href="https://blogwebsite-840l.onrender.com/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View All Articles
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


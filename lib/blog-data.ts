export type BlogPost = {
  title: string
  description: string
  date: string
  readTime: string
  category: string
}

// Blog post data source
export const postsBySlug: Record<string, BlogPost> = {
  "building-performant-nextjs-applications": {
    title: "Building Performant Next.js Applications",
    description:
      "In this article, we dive into strategies for optimizing images, leveraging the App Router for streaming and caching, using dynamic imports for code-splitting, and profiling to find bottlenecks. We'll also cover server-side rendering trade-offs and how to use route segment caching effectively.",
    date: "June 15, 2025",
    readTime: "2 min read",
    category: "Performance",
  },
  "power-of-server-components-nextjs": {
    title: "The Power of Server Components in Next.js",
    description:
      "Server Components enable rendering on the server with zero client JS by default. We'll explore how to compose Server and Client Components, pass props safely, fetch data without waterfalls, and reduce bundle size while maintaining great UX.",
    date: "May 22, 2025",
    readTime: "3 min read",
    category: "Next.js",
  },
  "smooth-animations-framer-motion": {
    title: "Creating Smooth Animations with Framer Motion",
    description:
      "Learn patterns for layout animations, entrance transitions, and gesture-based interactions. We'll balance motion with performance by limiting reflow, using transform properties, and coordinating variants across components.",
    date: "April 10, 2025",
    readTime: "1 min read",
    category: "Animation",
  },
  "mastering-JavaScript-react-development": {
    title: "Mastering JavaScript for Rocket Development",
    description:
      "Deepen your JavaScript fundamentals to write clearer, safer React code. Topics include immutability, async patterns, error handling, and avoiding common pitfalls that lead to bugs and performance issues.",
    date: "March 5, 2025",
    readTime: "2 min read",
    category: "JavaScript",
  },
}

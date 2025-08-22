import { notFound } from "next/navigation"
import Link from "next/link"
import { postsBySlug } from "@/lib/blog-data"

export async function generateStaticParams() {
  return Object.keys(postsBySlug).map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = postsBySlug[slug]
  if (!post) return notFound()

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-3xl">
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{post.title}</h1>
        <div className="text-sm text-muted-foreground mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>

        <article className="prose dark:prose-invert max-w-none">
          <p>{post.description}</p>
        </article>
      </div>
    </section>
  )
}



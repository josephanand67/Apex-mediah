'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: '0',
    title: 'Introducing the 11-Book Series: Foundations for Emotional Intelligence',
    excerpt: 'Management mentor Joseph Anand launches an 11-book collection focusing on mental calmness, stress control, and human thinking in the age of AI. Learn how emotional intelligence becomes your anchor in uncertain times.',
    author: 'Joseph Anand',
    date: 'May 2026',
    readTime: '7 min read',
    category: 'Emotional Intelligence',
    slug: 'foundations-emotional-intelligence-series',
  },
  {
    id: '1',
    title: 'The Gap Between Stimulus and Response: Finding Your Power',
    excerpt: 'In this foundational piece, we explore the transformative power of the pause—that crucial moment between what happens and how we respond. Discover how expanding this gap can revolutionize your emotional resilience.',
    author: 'Joseph Anand',
    date: 'June 18, 2025',
    readTime: '8 min read',
    category: 'Emotional Intelligence',
    slug: 'gap-stimulus-response',
  },
]

export function BlogSection() {
  return (
    <section className="bg-gradient-to-b from-cream via-cream to-soft-gold/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-3">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl">
            Insights on emotional intelligence, leadership, and personal growth
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              prefetch={true}
              className="group flex flex-col rounded-xl bg-card border border-border shadow-md hover:shadow-xl hover:border-gold/30 transition-all duration-300 p-6 h-full"
            >
              {/* Category */}
              <span className="inline-block w-fit px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-3 flex-1">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-charcoal/50">
                    <p>{post.author}</p>
                    <p>{post.date} • {post.readTime}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300 px-8 py-3"
          >
            <Link href="/blog" prefetch={true}>
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

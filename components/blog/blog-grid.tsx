'use client'

import Link from 'next/link'
import { memo } from 'react'
import { Calendar, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DecorativeLine } from '@/components/premium-effects'

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
    excerpt: 'Management mentor Joseph Anand launches an 11-book collection focusing on mental calmness, stress control, and human thinking in the age of AI. Learn how emotional intelligence becomes your anchor in uncertain times, and why human emotions cannot be replaced by artificial intelligence.',
    author: 'Joseph Anand',
    date: 'May 2026',
    readTime: '7 min read',
    category: 'Emotional Intelligence',
    slug: 'foundations-emotional-intelligence-series',
  },
  {
    id: '1',
    title: 'The Gap Between Stimulus and Response: Finding Your Power',
    excerpt: 'In this foundational piece, we explore the transformative power of the pause—that crucial moment between what happens and how we respond. Discover how expanding this gap can revolutionize your emotional resilience and decision-making.',
    author: 'Joseph Anand',
    date: 'June 18, 2025',
    readTime: '8 min read',
    category: 'Emotional Intelligence',
    slug: 'gap-stimulus-response',
  },
  {
    id: '2',
    title: 'Presence as a Lived Capacity, Not a Concept',
    excerpt: 'Presence is often discussed but rarely understood. This article reveals how presence shapes perception, steadies emotion, and restores choice in moments where reactions usually take over. Learn the neuroscience behind presence.',
    author: 'Joseph Anand',
    date: 'June 12, 2025',
    readTime: '10 min read',
    category: 'Mindfulness',
    slug: 'presence-lived-capacity',
  },
  {
    id: '3',
    title: 'Understanding the Architecture of Desire in Modern Life',
    excerpt: 'We live in the most stimulating era in human history. This deep dive explores the hidden architecture of desire and why traditional pleasure-seeking often leads to dissatisfaction. Uncover the path to lasting fulfillment.',
    author: 'Joseph Anand',
    date: 'June 5, 2025',
    readTime: '12 min read',
    category: 'Personal Development',
    slug: 'architecture-desire',
  },
  {
    id: '4',
    title: 'Leadership in Uncertain Times: Your Anchor is Emotional Intelligence',
    excerpt: 'Organizations face unprecedented volatility. Discover how emotional intelligence becomes your anchor during change and how leaders can transform adversity into opportunity through EQ-driven decision making.',
    author: 'Joseph Anand',
    date: 'May 28, 2025',
    readTime: '9 min read',
    category: 'Leadership',
    slug: 'leadership-uncertain-times',
  },
  {
    id: '5',
    title: 'The Human Edge in the Age of AI: Why Emotional Intelligence Matters More Than Ever',
    excerpt: 'As artificial intelligence reshapes the workplace, emotional intelligence becomes the ultimate competitive advantage. Explore how human connection, creativity, and empathy will define the future of work and leadership.',
    author: 'Joseph Anand',
    date: 'May 21, 2025',
    readTime: '11 min read',
    category: 'AI & Future of Work',
    slug: 'human-edge-ai',
  },
  {
    id: '6',
    title: 'Transforming Conflict Into Connection Through Emotional Awareness',
    excerpt: 'Conflict is inevitable, but how you navigate it determines the quality of your relationships. Learn emotional intelligence techniques and frameworks for turning conflict into deeper understanding and stronger bonds.',
    author: 'Joseph Anand',
    date: 'May 14, 2025',
    readTime: '7 min read',
    category: 'Relationships',
    slug: 'conflict-connection',
  },
  {
    id: '7',
    title: 'Purpose-Driven Living: Designing Alignment in Your Life and Work',
    excerpt: 'In a world engineered for distraction, direction has become rare. Discover how to design alignment deliberately and move from scattered ambition to coherent contribution. A framework for purposeful living.',
    author: 'Joseph Anand',
    date: 'May 7, 2025',
    readTime: '10 min read',
    category: 'Purpose',
    slug: 'purpose-driven-living',
  },
  {
    id: '8',
    title: 'Building High-Performance Teams Through Emotional Intelligence',
    excerpt: 'Team performance is fundamentally about emotional dynamics. Learn how leaders can leverage emotional intelligence to create psychologically safe environments where teams thrive and innovation flourishes.',
    author: 'Joseph Anand',
    date: 'April 30, 2025',
    readTime: '9 min read',
    category: 'Team Development',
    slug: 'high-performance-teams',
  },
  {
    id: '9',
    title: 'The Role of Perception in Shaping Your Reality',
    excerpt: 'Perception isn\'t neutral observation—it\'s an active construction influenced by stress, identity, and emotion. Understand how perception shapes your reality and how you can shift your perception to unlock new possibilities.',
    author: 'Joseph Anand',
    date: 'April 23, 2025',
    readTime: '8 min read',
    category: 'Psychology',
    slug: 'perception-reality',
  },
]

function BlogCard({ post }: { post: BlogPost }) {
  const categoryColors = {
    'Emotional Intelligence': 'bg-blue/10 text-blue',
    'Mindfulness': 'bg-purple/10 text-purple',
    'Personal Development': 'bg-gold/10 text-gold',
    'Leadership': 'bg-orange/10 text-orange',
    'AI & Future of Work': 'bg-teal/10 text-teal',
    'Relationships': 'bg-pink/10 text-pink',
    'Purpose': 'bg-emerald/10 text-emerald',
    'Team Development': 'bg-indigo/10 text-indigo',
    'Psychology': 'bg-violet/10 text-violet',
  }

  return (
    <article className="group h-full flex flex-col">
      <div className="flex-1 rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-gold/30 p-8 flex flex-col h-full">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <span className={`inline-block px-3 py-1 ${categoryColors[post.category as keyof typeof categoryColors] || categoryColors['Emotional Intelligence']} text-xs font-semibold uppercase tracking-wider rounded-full`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-charcoal/50 text-sm">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-charcoal/70 leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="pt-6 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-charcoal/60 text-sm">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <span className="flex items-center gap-1 text-charcoal/60 text-sm">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <p className="text-gold text-sm font-semibold">
            Read Article
          </p>
        </div>
      </div>
    </article>
  )
}

export const BlogGrid = memo(function BlogGrid() {
  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Read & Learn
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Latest Blog Posts
          </h2>
          <DecorativeLine className="mx-auto max-w-xs mb-6" />
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Explore thought-provoking articles on emotional intelligence, leadership, and personal transformation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-navy text-cream hover:bg-gold hover:text-navy"
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>

        {/* Newsletter CTA */}
        <div className="rounded-xl bg-navy text-cream p-12 text-center mt-16">
          <h3 className="font-serif text-3xl font-bold mb-4">Subscribe for New Articles</h3>
          <p className="text-cream/70 mb-8 max-w-2xl mx-auto">
            Get notified when new articles are published. Subscribe to receive insights on emotional intelligence, leadership, and personal growth directly to your inbox.
          </p>
          <Button className="bg-gold text-navy hover:bg-gold/90">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>
  )
})

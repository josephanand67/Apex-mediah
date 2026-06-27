'use client'

import Link from 'next/link'
import { memo } from 'react'
import { Calendar, MapPin, Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DecorativeLine } from '@/components/premium-effects'

interface NewsItem {
  id: string
  title: string
  description: string
  date: string
  location?: string
  type: 'announcement' | 'speaking' | 'media' | 'release'
  slug: string
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Joseph Anand Launches New EQ Series at Global Leadership Summit',
    description: 'Joseph Anand unveiled the highly anticipated EQ Advantage series at the Global Leadership Summit, featuring four comprehensive books designed for the age of AI. The launch marks a significant milestone in emotional intelligence education.',
    date: 'June 20, 2025',
    location: 'Virtual & In-Person',
    type: 'announcement',
    slug: 'eq-series-launch',
  },
  {
    id: '2',
    title: 'Speaking Engagement: Transform Your Leadership Through Emotional Intelligence',
    description: 'Join Joseph Anand for an exclusive keynote presentation exploring how emotional intelligence can transform your approach to leadership and decision-making in today&apos;s complex business environment.',
    date: 'July 10, 2025',
    location: 'Chicago, Illinois',
    type: 'speaking',
    slug: 'transform-leadership-keynote',
  },
  {
    id: '3',
    title: 'Featured in Forbes: "The Human Edge in the Age of AI"',
    description: 'Joseph Anand shares insights on how emotional intelligence serves as the ultimate competitive advantage in an increasingly automated world. Read the full feature in Forbes magazine.',
    date: 'June 12, 2025',
    type: 'media',
    slug: 'forbes-human-edge',
  },
  {
    id: '4',
    title: 'New Book Release: "The EQ Advantage in The Age of AI"',
    description: 'The long-awaited series is now available across all major platforms. Each of the four books addresses emotional intelligence through different lenses, offering practical wisdom for modern life.',
    date: 'June 5, 2025',
    type: 'release',
    slug: 'eq-advantage-release',
  },
  {
    id: '5',
    title: 'Upcoming Workshop: Building High-Performance Teams Through EQ',
    description: 'Joseph Anand will facilitate an interactive workshop exploring how leaders can leverage emotional intelligence to build cohesive, high-performing teams that thrive in competitive environments.',
    date: 'July 25-26, 2025',
    location: 'San Francisco, California',
    type: 'speaking',
    slug: 'high-performance-workshop',
  },
  {
    id: '6',
    title: 'Joseph Anand Named to Top 50 Leadership Influencers List',
    description: 'Recognized for his contributions to leadership development and emotional intelligence education, Joseph Anand has been honored among the most influential voices in modern leadership.',
    date: 'May 30, 2025',
    type: 'announcement',
    slug: 'top-50-influencers',
  },
]

function NewsCard({ item }: { item: NewsItem }) {
  const typeColors = {
    announcement: 'bg-blue/10 text-blue',
    speaking: 'bg-purple/10 text-purple',
    media: 'bg-orange/10 text-orange',
    release: 'bg-gold/10 text-gold',
  }

  const typeLabels = {
    announcement: 'Announcement',
    speaking: 'Speaking Event',
    media: 'Media Feature',
    release: 'Book Release',
  }

  return (
    <article className="group h-full flex flex-col">
      <div className="flex-1 rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-gold/30 p-8 flex flex-col h-full">
        {/* Type Badge and Date */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <span className={`inline-block px-3 py-1 ${typeColors[item.type]} text-xs font-semibold uppercase tracking-wider rounded-full`}>
            {typeLabels[item.type]}
          </span>
          <span className="flex items-center gap-1 text-charcoal/50 text-sm">
            <Calendar className="h-4 w-4" />
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Location (if applicable) */}
        {item.location && (
          <div className="flex items-center gap-2 text-charcoal/60 text-sm mb-4">
            <MapPin className="h-4 w-4 text-gold" />
            {item.location}
          </div>
        )}

        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed mb-6 flex-1 line-clamp-3">
          {item.description}
        </p>

        {/* Footer */}
        <div className="pt-6 border-t border-border">
          <div className="flex items-center gap-2 text-gold text-sm font-semibold">
            <Newspaper className="h-4 w-4" />
            Read More
          </div>
        </div>
      </div>
    </article>
  )
}

export const NewsGrid = memo(function NewsGrid() {
  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Recent News & Announcements
          </h2>
          <DecorativeLine className="mx-auto max-w-xs mb-6" />
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Follow Joseph Anand&apos;s latest news, speaking engagements, and important announcements
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="rounded-xl bg-navy text-cream p-12 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-cream/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, speaking engagements, and insights directly to your inbox.
          </p>
          <Button className="bg-gold text-navy hover:bg-gold/90">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>
  )
})

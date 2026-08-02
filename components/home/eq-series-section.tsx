'use client'

import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DecorativeLine } from '@/components/premium-effects'

interface EQBook {
  id: string
  slug: string
  title: string
  coverImage: string
  amazonUrl: string
  barnesAndNobleUrl: string
  partridgeUrl: string
}

const eqBooks: EQBook[] = [
  {
    id: 'eq-project-leadership',
    slug: 'mastering-project-leadership',
    title: 'Mastering Project Leadership Through Emotional Intelligence',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_36_03%20AM-X5KkcGIkgO5pprUOLeMXKgSR7YQfj9.png',
    amazonUrl: 'https://a.co/d/0hMa1rX5',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/the-eq-advantage-in-the-age-of-ai-joseph-anand/1149485107?ean=9781543785487',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872988-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-critical-life-skill',
    slug: 'emotional-intelligence-critical-life-skill',
    title: 'Emotional Intelligence: A Critical Life Skill for All Ages',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_42_10%20AM-eO7ziTOwZmRgFAqXx7hBqV44IgXkWX.png',
    amazonUrl: 'https://a.co/d/052PQGLM',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/the-eq-advantage-in-the-age-of-ai-joseph-anand/1149575636?ean=9781543785524',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872990-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-human-edge',
    slug: 'reclaiming-human-edge',
    title: 'Reclaiming The Human Edge with Emotional Intelligence',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_40_29%20AM-mb6A4EYSaTCBPViHk3sNSaOn7Tr1hs.png',
    amazonUrl: 'https://a.co/d/0boQXVEf',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/the-eq-advantage-in-the-age-of-ai-joseph-anand/1149526811?ean=9781543785500',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872989-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-young-humans',
    slug: 'emotional-intelligence-companion-young-humans',
    title: 'Emotional Intelligence: A Companion Edition for Young Humans',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_34_03%20AM-33g245q3JgrNnc412yhIuhBdHcLRug.png',
    amazonUrl: 'https://a.co/d/0gwKfKB6',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/the-eq-advantage-in-the-age-of-ai-joseph-anand/1149767974?ean=9781543785746',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872991-the-eq-advantage-in-the-age-of-ai',
  },
]

function EQBookCard({ book }: { book: EQBook }) {
  return (
    <div className="group h-full">
      <div className="relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow duration-150 border border-border hover:border-gold/30 h-full flex flex-col">
        {/* Book Cover */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-white flex items-center justify-center">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="transition-transform duration-150 group-hover:scale-102"
            loading="lazy"
            quality={95}
            style={{
              objectFit: 'cover',
              objectPosition: 'right center'
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          <h3 className="font-serif font-semibold text-navy text-sm leading-snug line-clamp-2 mb-3">
            {book.title}
          </h3>

          {/* Learn More link */}
          <div className="mt-auto pt-3 border-t border-border">
            <Link
              href={`/shop/${book.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold/80 transition-colors duration-150 group/link"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const EQSeriesSection = memo(function EQSeriesSection() {
  return (
    <section className="relative py-16 bg-soft-gold/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Latest Series
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            EQ Series
          </h2>
          <DecorativeLine className="mx-auto my-6 max-w-xs" />
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Explore Joseph Anand&apos;s acclaimed EQ Advantage series, helping readers develop emotional intelligence, leadership, self-awareness, and human-centered skills in the age of AI.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          {eqBooks.map((book) => (
            <EQBookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  )
})

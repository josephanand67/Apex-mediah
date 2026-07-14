'use client'

import { memo } from 'react'
import Image from 'next/image'
import { DecorativeLine } from '@/components/premium-effects'
import { BuyNowDropdown } from '@/components/buy-now-dropdown'

interface EQBook {
  id: string
  title: string
  coverImage: string
  amazonUrl: string
  barnesAndNobleUrl: string
  partridgeUrl: string
}

const eqBooks: EQBook[] = [
  {
    id: 'eq-project-leadership',
    title: 'Mastering Project Leadership Through Emotional Intelligence',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_36_03%20AM-X5KkcGIkgO5pprUOLeMXKgSR7YQfj9.png',
    amazonUrl: 'https://www.amazon.com/Mastering-Project-Leadership-Through-Emotional-Intelligence-ebook/dp/B0D5Z8X9K2',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/mastering-project-leadership-through-emotional-intelligence-joseph-anand/1144567890',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872988-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-critical-life-skill',
    title: 'Emotional Intelligence: A Critical Life Skill for All Ages',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_42_10%20AM-eO7ziTOwZmRgFAqXx7hBqV44IgXkWX.png',
    amazonUrl: 'https://www.amazon.com/Emotional-Intelligence-Critical-Life-Skill-All-Ages-ebook/dp/B0D5Z8X9L4',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/emotional-intelligence-a-critical-life-skill-for-all-ages-joseph-anand/1144567891',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872990-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-human-edge',
    title: 'Reclaiming The Human Edge with Emotional Intelligence',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_40_29%20AM-mb6A4EYSaTCBPViHk3sNSaOn7Tr1hs.png',
    amazonUrl: 'https://www.amazon.com/Reclaiming-Human-Edge-Emotional-Intelligence-ebook/dp/B0D5Z8X9M1',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/reclaiming-the-human-edge-with-emotional-intelligence-joseph-anand/1144567892',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872989-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-young-humans',
    title: 'Emotional Intelligence: A Companion Edition for Young Humans',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_34_03%20AM-33g245q3JgrNnc412yhIuhBdHcLRug.png',
    amazonUrl: 'https://www.amazon.com/Emotional-Intelligence-Companion-Edition-Young-Humans-ebook/dp/B0D5Z8X9N8',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/emotional-intelligence-a-companion-edition-for-young-humans-joseph-anand/1144567893',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872991-the-eq-advantage-in-the-age-of-ai',
  },
]

function EQBookCard({ book }: { book: EQBook }) {
  return (
    <div className="group h-full">
      <div className="relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow duration-150 border border-border hover:border-gold/30 h-full flex flex-col">
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
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-serif font-bold text-navy text-sm line-clamp-2 mb-3">
            {book.title}
          </h3>

          {/* Buy Now Dropdown */}
          <div className="mt-auto pt-3 border-t border-border">
            <BuyNowDropdown
              amazonUrl={book.amazonUrl}
              barnesNobleUrl={book.barnesAndNobleUrl}
              partridgeUrl={book.partridgeUrl}
              size="sm"
              fullWidth
            />
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {eqBooks.map((book) => (
            <EQBookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  )
})

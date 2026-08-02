'use client'

import { memo } from 'react'
import { DecorativeLine } from '@/components/premium-effects'
import { BookCard } from '@/components/book-card'
import { books } from '@/lib/books-data'

const EQ_SLUGS = [
  'mastering-project-leadership',
  'emotional-intelligence-critical-life-skill',
  'reclaiming-human-edge',
  'emotional-intelligence-companion-young-humans',
]

const eqBooks = books.filter((b) => EQ_SLUGS.includes(b.slug))

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
          {eqBooks.map((book, index) => (
            <BookCard key={book.slug} book={book} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

'use client'

import { memo } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BookCard, FeaturedBookCard } from '@/components/book-card'
import { getFeaturedBooks } from '@/lib/books-data'
import { ScrollReveal, DecorativeLine } from '@/components/premium-effects'

export const FeaturedBooksSection = memo(function FeaturedBooksSection() {
  const featuredBooks = getFeaturedBooks()
  const mainFeatured = featuredBooks[0]
  const otherFeatured = featuredBooks.slice(1, 4)

  return (
    <section className="relative py-20 bg-soft-gold/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Published Works
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            Explore the Books
          </h2>
          <DecorativeLine className="mx-auto my-6 max-w-xs" />
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            A collection of 12 transformative books covering emotional intelligence, personal growth, and purpose-driven living.
          </p>
        </ScrollReveal>

        {/* Featured Book */}
        {mainFeatured && (
          <ScrollReveal delay={50} className="mb-12">
            <FeaturedBookCard book={mainFeatured} />
          </ScrollReveal>
        )}

        {/* Other Featured Books */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherFeatured.map((book, index) => (
            <ScrollReveal key={book.slug} delay={100 + index * 30}>
              <BookCard book={book} index={index} />
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal delay={200} className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-200"
          >
            <Link href="/books" prefetch={true}>
              View All 12 Books
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
})

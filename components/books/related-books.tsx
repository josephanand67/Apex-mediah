'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { memo } from 'react'
import { BookCard } from '@/components/book-card'
import { books } from '@/lib/books-data'
import { ScrollReveal } from '@/components/premium-effects'

interface RelatedBooksProps {
  currentSlug: string
  category: string
}

export const RelatedBooks = memo(function RelatedBooks({ currentSlug, category }: RelatedBooksProps) {
  const relatedBooks = books
    .filter((book) => book.slug !== currentSlug)
    .filter((book) => book.category === category || book.featured)
    .slice(0, 3)

  if (relatedBooks.length === 0) return null

  return (
    <section className="py-20 bg-soft-gold/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex items-center justify-between mb-12">
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Continue Reading
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy">
              Related Books
            </h2>
          </div>
          <Link
            href="/books"
            prefetch={true}
            className="hidden sm:inline-flex items-center text-navy hover:text-gold transition-colors font-medium"
          >
            View All Books
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedBooks.map((book, index) => (
            <BookCard key={book.slug} book={book} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/books"
            prefetch={true}
            className="inline-flex items-center text-navy hover:text-gold transition-colors font-medium"
          >
            View All Books
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
})

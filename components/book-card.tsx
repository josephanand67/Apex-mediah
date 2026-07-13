'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { memo } from 'react'
import type { Book } from '@/lib/books-data'
import { BuyNowDropdown } from '@/components/buy-now-dropdown'

interface BookCardProps {
  book: Book
  index?: number
}

export const BookCard = memo(function BookCard({ book }: BookCardProps) {
  return (
    <div className="group relative">
      <Link href={`/books/${book.slug}`} prefetch={true}>
        <div className="relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow duration-150 border border-border hover:border-gold/30">
          {/* Book Cover */}
          <div className="relative aspect-[3/4] overflow-hidden bg-white flex items-center justify-center">
            <Image
              src={book.coverImage}
              alt={`${book.title} by Joseph Anand`}
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
            
            {/* Featured Badge */}
            {book.featured && (
              <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </div>

          {/* Book Info */}
          <div className="p-6">
            <span className="text-xs font-medium text-gold uppercase tracking-wider">
              {book.category}
            </span>
            <h4 className="mt-2 font-serif text-xl font-semibold text-navy group-hover:text-gold transition-colors">
              {book.title}
            </h4>
            <p className="mt-2 text-sm text-charcoal/70 line-clamp-2">
              {book.description}
            </p>
            <div className="mt-4 flex items-center text-sm font-medium text-navy group-hover:text-gold transition-colors">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
})

interface FeaturedBookCardProps {
  book: Book
}

export const FeaturedBookCard = memo(function FeaturedBookCard({ book }: FeaturedBookCardProps) {
  return (
    <div className="group relative">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center bg-card rounded-2xl p-8 lg:p-12 shadow-xl border border-border hover:border-gold/30 transition-colors duration-150">
        {/* Book Cover */}
        <div className="relative">
          <div className="absolute inset-0 bg-gold/10 rounded-lg blur-xl" />
          <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-lg shadow-2xl overflow-hidden bg-white flex items-center justify-center">
            <Image
              src={book.coverImage}
              alt={`${book.title} by Joseph Anand`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="transition-transform duration-150 group-hover:scale-102"
              priority
              quality={95}
              style={{ 
                objectFit: 'cover',
                objectPosition: 'right center'
              }}
            />
          </div>
        </div>

        {/* Book Info */}
        <div>
          <span className="inline-block text-xs font-semibold text-gold uppercase tracking-widest mb-4">
            Featured Book
          </span>
          <h2 className="font-serif text-4xl font-bold text-navy mb-4">
            {book.title}
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            {book.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/books/${book.slug}`}
              prefetch={true}
              className="inline-flex items-center px-6 py-3 bg-navy text-cream font-medium rounded-lg hover:bg-gold hover:text-navy transition-colors duration-100"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <BuyNowDropdown
              amazonUrl={book.amazonUrl}
              barnesNobleUrl={book.barnesNobleUrl}
              partridgeUrl={book.partridgeUrl}
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
})

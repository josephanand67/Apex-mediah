'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Pen } from 'lucide-react'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { books } from '@/lib/books-data'
import { BuyNowDropdown } from '@/components/buy-now-dropdown'

const BookGridItem = memo(function BookGridItem({ 
  book 
}: { 
  book: typeof books[0]
}) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:border-gold/30 hover:shadow-lg transition-shadow duration-200 group">
      {/* Book Cover */}
      <Link href={`/books/${book.slug}`} prefetch={true}>
        <div className="relative aspect-[3/4] overflow-hidden bg-white flex items-center justify-center">
          <Image
            src={book.coverImage}
            alt={`${book.title} by Joseph Anand`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover hover:scale-102 transition-transform duration-150"
            loading="lazy"
            quality={95}
            style={{ 
              objectFit: 'cover',
              objectPosition: 'right center'
            }}
          />
          {book.featured && (
            <div className="absolute top-2 right-2 bg-gold text-navy text-xs font-semibold px-2 py-0.5 rounded-full">
              Featured
            </div>
          )}
        </div>
      </Link>
      
      {/* Book Info */}
      <div className="p-3">
        <span className="text-xs font-medium text-gold uppercase tracking-wider">
          {book.category}
        </span>
        <h4 className="mt-1 font-serif font-semibold text-navy">
          {book.title}
        </h4>
        <p className="mt-1 text-charcoal/70 text-sm line-clamp-1">
          {book.subtitle}
        </p>
        <div className="mt-3">
          <BuyNowDropdown
            amazonUrl={book.amazonUrl}
            barnesNobleUrl={book.barnesNobleUrl}
            size="sm"
            fullWidth
          />
        </div>
      </div>
    </div>
  )
})

export const ShopGrid = memo(function ShopGrid() {
  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* All Books */}
        <h2 className="font-serif text-2xl font-bold text-navy mb-6">
          All Books
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <BookGridItem key={book.slug} book={book} />
          ))}
        </div>

        {/* Signed Copy Request */}
        <div className="mt-16 bg-navy rounded-xl p-6 md:p-10 text-center">
          <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Pen className="h-7 w-7 text-gold" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-cream mb-3">
            Request a Signed Copy
          </h3>
          <p className="text-cream/70 max-w-xl mx-auto mb-6">
            Want a personalized, signed copy of any book? Contact us directly and we will arrange a special signed edition just for you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold text-navy hover:bg-cream hover:text-navy transition-colors duration-150"
          >
            <Link href="/contact" prefetch={true}>
              Request Signed Copy
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
})

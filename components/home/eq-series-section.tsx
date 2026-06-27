'use client'

import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BuyNowDropdown } from '@/components/buy-now-dropdown'
import { DecorativeLine } from '@/components/premium-effects'

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
    title: 'The EQ ADVANTAGE In The Age of AI: Mastering Project Leadership Through Emotional Intelligence',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_36_03%20AM-pjozexnLWe6aLRkzjMszDB2TGPxyih.png',
    amazonUrl: 'https://www.amazon.com/s?k=eq+advantage+project+leadership+joseph+anand',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/the-eq-advantage-in-the-age-of-ai-joseph-anand/1149485107?ean=9781543785494',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872988-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-critical-life-skill',
    title: 'The EQ ADVANTAGE In The Age of AI: Emotional Intelligence A Critical Life Skill for all Ages',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_42_10%20AM-Js37TbVPfeqPd4LXCW1TPYB47hmcaf.png',
    amazonUrl: 'https://www.amazon.com/s?k=eq+advantage+critical+life+skill+joseph+anand',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/the-eq-advantage-in-the-age-of-ai-joseph-anand/1149575636?ean=9781543785531',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872990-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-human-edge',
    title: 'The EQ ADVANTAGE In The Age of AI: Reclaiming The Human Edge with Emotional Intelligence',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_40_29%20AM-DkXAazLBtm92a0T3WdCrc5r1Z3Ps8l.png',
    amazonUrl: 'https://www.amazon.com/s?k=eq+advantage+human+edge+joseph+anand',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/the-eq-advantage-in-the-age-of-ai-joseph-anand/1149526811?ean=9781543785517',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872989-the-eq-advantage-in-the-age-of-ai',
  },
  {
    id: 'eq-young-humans',
    title: 'The EQ ADVANTAGE In The Age of AI: Emotional Intelligence A Companion Edition For Young Humans',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_34_03%20AM-wTSvOS2J691Mo6IKiQBoojhIH1qgW7.png',
    amazonUrl: 'https://www.amazon.com/s?k=eq+advantage+young+humans+joseph+anand',
    barnesAndNobleUrl: 'https://www.barnesandnoble.com/w/the-eq-advantage-in-the-age-of-ai-joseph-anand/1149767974?ean=9781543785739',
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

          {/* Buy Now Button */}
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

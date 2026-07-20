'use client'

import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream">
      {/* Static Background - no animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid gap-8 sm:gap-10 lg:gap-16 lg:grid-cols-2 items-center lg:items-center">
          {/* Content - displayed second on mobile, first on desktop */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-full mb-6">
              Author &bull; Speaker &bull; Coach
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
              Joseph <span className="text-gold">Anand</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-charcoal/80 leading-relaxed max-w-xl">
              Transforming lives through emotional intelligence, leadership development, and purpose-driven coaching with over 40 years of global experience.
            </p>

            <div className="mt-8 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent max-w-xs" />

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100 text-sm sm:text-base px-6 sm:px-8"
              >
                <Link href="/books" prefetch={true}>
                  Explore Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-cream transition-colors duration-100 text-sm sm:text-base px-6 sm:px-8"
              >
                <Link href="/about" prefetch={true}>Meet Joseph</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
              <Link
                href="/events"
                prefetch={true}
                className="inline-flex items-center text-xs sm:text-sm font-medium text-navy hover:text-gold transition-colors group"
              >
                <span className="p-2 rounded-full bg-gold/10 mr-2">
                  <Play className="h-4 w-4" />
                </span>
                Watch Videos
              </Link>
              <Link
                href="/books"
                prefetch={true}
                className="inline-flex items-center text-xs sm:text-sm font-medium text-navy hover:text-gold transition-colors group"
              >
                <span className="p-2 rounded-full bg-gold/10 mr-2">
                  <Calendar className="h-4 w-4" />
                </span>
                Browse Books
              </Link>
            </div>
          </div>

          {/* Image - displayed first on mobile, last on desktop */}
          <div className="relative w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/5]">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl" />
              <div className="absolute inset-0 rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/images/author-portrait.png"
                  alt="Joseph Anand - Author, Speaker, Executive Coach"
                  fill
                  className="object-cover object-center sm:object-top"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 500px"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gold/10 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-14 h-14 border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-navy/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
})

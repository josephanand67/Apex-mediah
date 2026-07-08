'use client'

import { BookOpen } from 'lucide-react'
import { memo } from 'react'
import { ScrollReveal } from '@/components/premium-effects'

export const BlogHero = memo(function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-cream/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold uppercase tracking-widest rounded-full mb-6">
            <BookOpen className="h-4 w-4" />
            Insights & Articles
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
            The Blog
          </h1>
          <p className="mt-6 text-xl text-cream/70 leading-relaxed max-w-2xl mx-auto">
            Explore insights on emotional intelligence, leadership, personal growth, and living a purpose-driven life.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
})

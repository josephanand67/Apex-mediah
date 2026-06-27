'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { ScrollReveal } from '@/components/premium-effects'

export const FeaturedVideoSection = memo(function FeaturedVideoSection() {
  const videoId = 'nOHJ_jn03ho'

  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <ScrollReveal>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Featured Interview
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
              Watch Joseph Share His Insights
            </h2>
            <p className="mt-6 text-charcoal/80 leading-relaxed text-lg">
              Discover the wisdom and experience that Joseph brings to his coaching, speaking, and writing. 
              In this featured interview, he shares insights on emotional intelligence, leadership, and 
              living a purpose-driven life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100"
              >
                <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer">
                  View All Media
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-cream transition-colors duration-100"
              >
                <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-5 w-5" />
                  YouTube Channel
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Video Embed */}
          <ScrollReveal delay={100} className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="Featured Interview with Joseph Anand"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
})

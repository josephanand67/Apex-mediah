'use client'

import Link from 'next/link'
import { ExternalLink, Youtube } from 'lucide-react'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { ScrollReveal } from '@/components/premium-effects'

export const FeaturedVideoSection = memo(function FeaturedVideoSection() {
  const videoId = 'nOHJ_jn03ho'

  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Featured Interview
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy">
            In Conversation with Joseph
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100} className="relative max-w-4xl mx-auto">
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
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
        </ScrollReveal>

        <ScrollReveal delay={150} className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300"
          >
            <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" />
              Subscribe on YouTube
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
})

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import { ScrollReveal, DecorativeLine } from '@/components/premium-effects'

const pastEvents = [
  {
    id: 1,
    title: "Author's Spotlight Session Featuring Dr. Joseph Anand",
    description: "A featured spotlight session exploring Joseph Anand's books, ideas, leadership insights, and personal journey as an author.",
    videoUrl: 'https://www.youtube.com/watch?v=nOHJ_jn03ho&t=9s',
    thumbnailUrl: 'https://img.youtube.com/vi/nOHJ_jn03ho/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'The P Series Book Launch Singapore',
    description: 'A special launch event celebrating the release of The P Series and sharing the inspiration behind the books.',
    videoUrl: 'https://www.youtube.com/watch?v=LDsrBBCPgqY&t=1336s',
    thumbnailUrl: 'https://img.youtube.com/vi/LDsrBBCPgqY/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'The P Series Book Launch Singapore Highlight Video',
    description: 'Highlights and memorable moments from The P Series Book Launch event in Singapore.',
    videoUrl: 'https://www.youtube.com/watch?v=awhbwDxuLXU',
    thumbnailUrl: 'https://img.youtube.com/vi/awhbwDxuLXU/maxresdefault.jpg',
  },
]

export const PastEvents = memo(function PastEvents() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
            Watch & Learn
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Past Events
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Highlights from recent author appearances, book launches, and featured sessions.
          </p>
          <DecorativeLine className="mt-6 mx-auto max-w-xs" />
        </ScrollReveal>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 50}>
              <Link
                href={event.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={event.thumbnailUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/40 transition-colors duration-200" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                      <Play className="h-6 w-6 text-navy ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-navy/80 rounded-full">
                    <span className="text-xs font-medium text-cream">Video</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-navy group-hover:text-gold transition-colors line-clamp-2 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 line-clamp-2 mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-gold">
                    Watch Event
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
})

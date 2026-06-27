'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { EventCard } from '@/components/event-card'
import { getUpcomingEvents } from '@/lib/events-data'
import { ScrollReveal } from '@/components/premium-effects'

export const UpcomingEventsSection = memo(function UpcomingEventsSection() {
  const upcomingEvents = getUpcomingEvents().slice(0, 3)

  return (
    <section className="py-24 bg-soft-gold/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Upcoming Events
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            Join the Journey
          </h2>
          <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto">
            Participate in transformative workshops, masterclasses, and seminars designed to enhance your emotional intelligence and leadership skills.
          </p>
        </ScrollReveal>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.slug} event={event} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal delay={100} className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300"
          >
            <Link href="/events" prefetch={true}>
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
})

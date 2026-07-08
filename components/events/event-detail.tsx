'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, MapPin, Video, Users, ExternalLink } from 'lucide-react'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollReveal } from '@/components/premium-effects'
import type { Event } from '@/lib/events-data'

interface EventDetailProps {
  event: Event
}

export const EventDetail = memo(function EventDetail({ event }: EventDetailProps) {
  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const typeIcon = {
    zoom: Video,
    'in-person': Users,
    hybrid: Users,
  }
  const TypeIcon = typeIcon[event.type]

  return (
    <section className="pt-32 pb-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/events"
            prefetch={true}
            className="inline-flex items-center text-navy hover:text-gold transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Events
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Event Info */}
          <ScrollReveal className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gold/10 text-gold text-sm font-semibold uppercase tracking-wider rounded-full">
                <TypeIcon className="h-4 w-4" />
                {event.type} Event
              </span>
              {event.isPast && (
                <span className="px-4 py-1.5 bg-charcoal/10 text-charcoal text-sm font-semibold uppercase tracking-wider rounded-full">
                  Past Event
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              {event.title}
            </h1>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-charcoal/80">
                <Calendar className="h-5 w-5 text-gold" />
                {formattedDate}
              </div>
              <div className="flex items-center gap-2 text-charcoal/80">
                <Clock className="h-5 w-5 text-gold" />
                {event.time}
              </div>
              <div className="flex items-center gap-2 text-charcoal/80">
                <MapPin className="h-5 w-5 text-gold" />
                {event.location}
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-charcoal/80">
              <p className="leading-relaxed">
                {event.description}
              </p>
              <h3 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">
                What You Will Learn
              </h3>
              <ul className="space-y-3">
                <li>Practical strategies for developing emotional intelligence</li>
                <li>Techniques for effective leadership and team management</li>
                <li>Methods for personal growth and self-awareness</li>
                <li>Tools for building meaningful relationships</li>
                <li>Approaches to purpose-driven living and decision making</li>
              </ul>
              <h3 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">
                Who Should Attend
              </h3>
              <p>
                This event is ideal for executives, managers, entrepreneurs, coaches, and anyone seeking to enhance their emotional intelligence and leadership capabilities.
              </p>
            </div>
          </ScrollReveal>

          {/* Registration Card */}
          <ScrollReveal delay={100}>
            <div className="sticky top-32 bg-card rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">
                {event.isPast ? 'Event Completed' : 'Register for This Event'}
              </h3>

              {!event.isPast ? (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    Register Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <p className="text-charcoal/70 mb-4">
                    This event has already taken place.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-cream"
                  >
                    <Link href="/events" prefetch={true}>View Upcoming Events</Link>
                  </Button>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-charcoal/60 text-center">
                  Questions? Contact us at{' '}
                  <Link href="/contact" prefetch={true} className="text-gold hover:underline">
                    anaman@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
})

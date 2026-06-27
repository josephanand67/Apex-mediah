'use client'

import Link from 'next/link'
import { Calendar, Clock, MapPin, ArrowRight, Video, Users } from 'lucide-react'
import { memo } from 'react'
import type { Event } from '@/lib/events-data'

interface EventCardProps {
  event: Event
  index?: number
}

export const EventCard = memo(function EventCard({ event }: EventCardProps) {
  // Use UTC date parsing to avoid hydration mismatch between server/client timezones
  const [year, month, day] = event.date.split('-').map(Number)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dateObj = new Date(Date.UTC(year, month - 1, day))
  const dayOfWeek = days[dateObj.getUTCDay()]
  const formattedDate = `${dayOfWeek}, ${months[month - 1]} ${day}, ${year}`

  const typeIcon = {
    zoom: Video,
    'in-person': Users,
    hybrid: Users,
  }
  const TypeIcon = typeIcon[event.type]

  return (
    <div className="group">
      <Link href={`/events/${event.slug}`} prefetch={true}>
        <div className="relative overflow-hidden rounded-xl bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-border hover:border-gold/30">
          {/* Event Type Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider rounded-full">
              <TypeIcon className="h-3 w-3" />
              {event.type}
            </span>
            {event.isPast && (
              <span className="px-3 py-1 bg-charcoal/10 text-charcoal text-xs font-semibold uppercase tracking-wider rounded-full">
                Past Event
              </span>
            )}
          </div>

          {/* Event Title */}
          <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors mb-3">
            {event.title}
          </h3>

          {/* Event Description */}
          <p className="text-charcoal/70 text-sm line-clamp-2 mb-4">
            {event.description}
          </p>

          {/* Event Details */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-charcoal/80">
              <Calendar className="h-4 w-4 text-gold" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2 text-sm text-charcoal/80">
              <Clock className="h-4 w-4 text-gold" />
              {event.time}
            </div>
            <div className="flex items-center gap-2 text-sm text-charcoal/80">
              <MapPin className="h-4 w-4 text-gold" />
              {event.location}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center text-sm font-medium text-navy group-hover:text-gold transition-colors">
            {event.isPast ? 'View Details' : 'Register Now'}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </div>
  )
})

interface CountdownTimerProps {
  targetDate: string
}

export const CountdownTimer = memo(function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime()
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const timeLeft = calculateTimeLeft()

  return (
    <div className="flex gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-navy text-cream font-serif text-2xl font-bold rounded-lg w-16 h-16 flex items-center justify-center">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-xs text-charcoal/70 uppercase mt-1 block">
            {unit}
          </span>
        </div>
      ))}
    </div>
  )
})

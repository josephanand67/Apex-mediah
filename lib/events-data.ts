export interface Event {
  slug: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'zoom' | 'in-person' | 'hybrid'
  registrationUrl?: string
  isPast: boolean
  image?: string
}

export const events: Event[] = [
  {
    slug: 'emotional-intelligence-masterclass-2024',
    title: 'Emotional Intelligence Masterclass',
    description: 'Join Joseph Anand for an immersive masterclass on developing emotional intelligence for personal and professional success. Learn practical strategies to enhance self-awareness, manage emotions, and build stronger relationships.',
    date: '2024-12-15',
    time: '10:00 AM EST',
    location: 'Virtual - Zoom',
    type: 'zoom',
    registrationUrl: '#',
    isPast: false,
  },
  {
    slug: 'leadership-transformation-workshop',
    title: 'Leadership Transformation Workshop',
    description: 'A comprehensive workshop designed for executives and leaders seeking to transform their leadership approach through emotional intelligence and positive psychology principles.',
    date: '2025-01-20',
    time: '2:00 PM EST',
    location: 'Virtual - Zoom',
    type: 'zoom',
    registrationUrl: '#',
    isPast: false,
  },
  {
    slug: 'purpose-driven-living-seminar',
    title: 'Purpose-Driven Living Seminar',
    description: 'Discover your life purpose and learn how to align your daily actions with your deepest values in this transformative seminar led by Dr. Joseph Anand.',
    date: '2025-02-10',
    time: '11:00 AM EST',
    location: 'Virtual - Zoom',
    type: 'zoom',
    registrationUrl: '#',
    isPast: false,
  },
  {
    slug: 'mindfulness-and-presence-retreat',
    title: 'Mindfulness & Presence Retreat',
    description: 'An intensive virtual retreat focused on developing presence and mindfulness practices for enhanced well-being and professional effectiveness.',
    date: '2025-03-05',
    time: '9:00 AM EST',
    location: 'Virtual - Zoom',
    type: 'zoom',
    registrationUrl: '#',
    isPast: false,
  },
]

export function getEventBySlug(slug: string): Event | undefined {
  return events.find(event => event.slug === slug)
}

export function getUpcomingEvents(): Event[] {
  return events.filter(event => !event.isPast)
}

export function getPastEvents(): Event[] {
  return events.filter(event => event.isPast)
}

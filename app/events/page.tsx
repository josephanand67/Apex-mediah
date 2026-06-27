import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { EventsHero } from '@/components/events/events-hero'
import { PastEvents } from '@/components/events/past-events'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Watch highlights from Joseph Anand\'s author appearances, book launches, and featured speaking sessions.',
}

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <EventsHero />
        <PastEvents />
      </main>
      <Footer />
    </>
  )
}

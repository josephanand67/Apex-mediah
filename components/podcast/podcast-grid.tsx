'use client'

import Link from 'next/link'
import { memo } from 'react'
import { Play, Headphones, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DecorativeLine } from '@/components/premium-effects'

interface PodcastEpisode {
  id: string
  title: string
  description: string
  guests?: string[]
  duration: string
  releaseDate: string
  episodeNumber: number
  slug: string
  spotifyUrl?: string
  appleUrl?: string
  youtubeUrl?: string
}

const podcastEpisodes: PodcastEpisode[] = [
  {
    id: '1',
    title: 'The Gap Between Stimulus and Response',
    description: 'In this episode, we explore the transformative power of the pause—that crucial moment between what happens and how we respond. Discover how expanding this gap can revolutionize your emotional resilience.',
    duration: '42 min',
    releaseDate: 'June 18, 2025',
    episodeNumber: 12,
    slug: 'stimulus-response-gap',
    spotifyUrl: '#',
    appleUrl: '#',
    youtubeUrl: '#',
  },
  {
    id: '2',
    title: 'Building Your Emotional Intelligence Foundation',
    description: 'Join Joseph as he walks through the fundamental components of emotional intelligence and shares practical strategies for developing each dimension. Perfect for anyone beginning their EQ journey.',
    guests: ['Dr. Sarah Mitchell'],
    duration: '58 min',
    releaseDate: 'June 11, 2025',
    episodeNumber: 11,
    slug: 'building-eq-foundation',
    spotifyUrl: '#',
    appleUrl: '#',
    youtubeUrl: '#',
  },
  {
    id: '3',
    title: 'Leadership in Uncertain Times',
    description: 'Explore how emotional intelligence becomes your anchor during organizational change and market volatility. Learn from real case studies of leaders who transformed adversity into opportunity.',
    duration: '65 min',
    releaseDate: 'June 4, 2025',
    episodeNumber: 10,
    slug: 'leadership-uncertain-times',
    spotifyUrl: '#',
    appleUrl: '#',
    youtubeUrl: '#',
  },
  {
    id: '4',
    title: 'Purpose-Driven Leadership & Organizational Impact',
    description: 'Discover how aligning your personal purpose with organizational vision creates extraordinary results. Joseph shares frameworks for designing work that matters and attracts top talent.',
    guests: ['Michael Chen', 'Lisa Rodriguez'],
    duration: '71 min',
    releaseDate: 'May 28, 2025',
    episodeNumber: 9,
    slug: 'purpose-driven-leadership',
    spotifyUrl: '#',
    appleUrl: '#',
    youtubeUrl: '#',
  },
  {
    id: '5',
    title: 'The Human Edge in the Age of AI',
    description: 'As artificial intelligence reshapes the workplace, emotional intelligence becomes more valuable than ever. Explore how human connection, creativity, and empathy will define the future of work.',
    duration: '53 min',
    releaseDate: 'May 21, 2025',
    episodeNumber: 8,
    slug: 'human-edge-ai',
    spotifyUrl: '#',
    appleUrl: '#',
    youtubeUrl: '#',
  },
  {
    id: '6',
    title: 'Transforming Conflict Into Connection',
    description: 'Conflict is inevitable, but how you navigate it determines your relationships. Learn emotional intelligence techniques for turning conflict into deeper understanding and stronger bonds.',
    duration: '48 min',
    releaseDate: 'May 14, 2025',
    episodeNumber: 7,
    slug: 'conflict-connection',
    spotifyUrl: '#',
    appleUrl: '#',
    youtubeUrl: '#',
  },
]

function PodcastCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <article className="group h-full flex flex-col">
      <div className="flex-1 rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-gold/30 p-8 flex flex-col h-full">
        {/* Episode Number and Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider rounded-full">
            Episode {episode.episodeNumber}
          </span>
          <span className="text-charcoal/50 text-sm">
            {episode.releaseDate}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors line-clamp-2">
          {episode.title}
        </h3>

        {/* Guests */}
        {episode.guests && episode.guests.length > 0 && (
          <div className="flex items-center gap-2 text-charcoal/60 text-sm mb-4">
            <Users className="h-4 w-4 text-gold" />
            <span className="line-clamp-1">With {episode.guests.join(', ')}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed mb-6 flex-1 line-clamp-4">
          {episode.description}
        </p>

        {/* Footer */}
        <div className="pt-6 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="flex items-center gap-2 text-charcoal/60 text-sm">
              <Clock className="h-4 w-4" />
              {episode.duration}
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              asChild
              size="sm"
              className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors flex-1"
            >
              <Link href={episode.spotifyUrl || '#'} target="_blank">
                <Play className="mr-2 h-4 w-4" />
                Listen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

export const PodcastGrid = memo(function PodcastGrid() {
  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Listen Now
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Latest Episodes
          </h2>
          <DecorativeLine className="mx-auto max-w-xs mb-6" />
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Subscribe and listen on Spotify, Apple Podcasts, YouTube, and all major platforms
          </p>
        </div>

        {/* Platform Links */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            asChild
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-cream"
          >
            <Link href="#" target="_blank">
              <Headphones className="mr-2 h-4 w-4" />
              Spotify
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-cream"
          >
            <Link href="#" target="_blank">
              <Headphones className="mr-2 h-4 w-4" />
              Apple Podcasts
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-cream"
          >
            <Link href="#" target="_blank">
              <Play className="mr-2 h-4 w-4" />
              YouTube
            </Link>
          </Button>
        </div>

        {/* Episodes Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {podcastEpisodes.map((episode) => (
            <PodcastCard key={episode.id} episode={episode} />
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="rounded-xl bg-gradient-to-r from-navy to-navy/90 text-cream p-12 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Subscribe for New Episodes</h3>
          <p className="text-cream/70 mb-8 max-w-2xl mx-auto">
            Get notified when new episodes are released. Available on all major podcast platforms including Spotify, Apple Podcasts, Google Podcasts, and more.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-gold text-navy hover:bg-gold/90">
              Subscribe on Spotify
            </Button>
            <Button className="bg-gold text-navy hover:bg-gold/90">
              Subscribe on Apple
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

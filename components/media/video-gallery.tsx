'use client'

import { Play, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'
import { ScrollReveal } from '@/components/premium-effects'

const videos = [
  {
    id: 'nOHJ_jn03ho',
    title: 'The Power of Emotional Intelligence',
    description: 'Joseph discusses how emotional intelligence transforms leadership and personal relationships.',
    category: 'Interview',
  },
  {
    id: 'nOHJ_jn03ho',
    title: 'Living with Purpose',
    description: 'A deep conversation about finding and following your life purpose in today\'s world.',
    category: 'Speaking',
  },
  {
    id: 'nOHJ_jn03ho',
    title: 'Leadership in the Modern Era',
    description: 'Insights on what it takes to be an effective leader in rapidly changing times.',
    category: 'Masterclass',
  },
  {
    id: 'nOHJ_jn03ho',
    title: 'Transforming Pain into Growth',
    description: 'How to use adversity as a catalyst for personal transformation.',
    category: 'Podcast',
  },
  {
    id: 'nOHJ_jn03ho',
    title: 'The Art of Presence',
    description: 'Mastering the skill of being fully present in work and life.',
    category: 'Workshop',
  },
  {
    id: 'nOHJ_jn03ho',
    title: 'Building Emotional Resilience',
    description: 'Strategies for developing mental and emotional strength.',
    category: 'Interview',
  },
]

const VideoCard = memo(function VideoCard({ 
  video 
}: { 
  video: typeof videos[0]
}) {
  return (
    <div className="group">
      <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Video Thumbnail */}
        <Link
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video bg-navy"
        >
          <Image
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-navy ml-1" fill="currentColor" />
            </div>
          </div>
        </Link>

        {/* Video Info */}
        <div className="p-6">
          <span className="text-xs font-semibold text-gold uppercase tracking-wider">
            {video.category}
          </span>
          <h3 className="mt-2 font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">
            {video.title}
          </h3>
          <p className="mt-2 text-sm text-charcoal/70 line-clamp-2">
            {video.description}
          </p>
          <Link
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm font-medium text-navy hover:text-gold transition-colors"
          >
            Watch Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
})

export const VideoGallery = memo(function VideoGallery() {
  return (
    <section className="py-20 bg-soft-gold/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Video Library
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy">
            More Videos
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  )
})

import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Play, Users, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Podcast episodes data
const podcastEpisodes = [
  {
    id: '1',
    title: 'The Gap Between Stimulus and Response',
    description: 'In this episode, we explore the transformative power of the pause—that crucial moment between what happens and how we respond. Discover how expanding this gap can revolutionize your emotional resilience.',
    fullContent: 'In this foundational episode, we dive deep into one of the most transformative concepts in emotional intelligence: the gap between stimulus and response.\n\nTopics covered:\n• The neuroscience of the pause\n• Why the gap is where freedom lives\n• Practical exercises for expanding your pause\n• Real-world applications in leadership and relationships\n• How this one shift can change your entire life\n\nThis episode provides a comprehensive foundation for understanding emotional intelligence.',
    duration: '42 min',
    releaseDate: 'June 18, 2025',
    episodeNumber: 12,
    slug: 'stimulus-response-gap',
    spotifyUrl: 'https://open.spotify.com/show/joseph-anand-podcast',
    appleUrl: 'https://podcasts.apple.com/podcast/joseph-anand',
    youtubeUrl: 'https://youtube.com/@josephanand9341',
  },
  {
    id: '2',
    title: 'Building Your Emotional Intelligence Foundation',
    description: 'Join Joseph as he walks through the fundamental components of emotional intelligence and shares practical strategies for developing each dimension. Perfect for anyone beginning their EQ journey.',
    fullContent: 'In this practical episode, Joseph Anand walks you through the fundamental components of emotional intelligence and shares concrete strategies for developing each dimension.\n\nYou\'ll learn:\n• The five core pillars of emotional intelligence\n• Self-awareness practices for authentic growth\n• Techniques for managing difficult emotions\n• Empathy development strategies\n• Building healthy relationships through EQ\n• Practical daily habits for EQ development\n\nGuest: Dr. Sarah Mitchell, EQ researcher and educator.',
    duration: '58 min',
    releaseDate: 'June 11, 2025',
    episodeNumber: 11,
    slug: 'building-eq-foundation',
    guests: ['Dr. Sarah Mitchell'],
    spotifyUrl: 'https://open.spotify.com/show/joseph-anand-podcast',
    appleUrl: 'https://podcasts.apple.com/podcast/joseph-anand',
    youtubeUrl: 'https://youtube.com/@josephanand9341',
  },
  {
    id: '3',
    title: 'Leadership in Uncertain Times',
    description: 'Explore how emotional intelligence becomes your anchor during organizational change and market volatility. Learn from real case studies of leaders who transformed adversity into opportunity.',
    fullContent: 'When the world feels uncertain, emotional intelligence becomes your greatest asset. In this episode, Joseph explores how leaders can use EQ to navigate change and volatility.\n\nThis episode includes:\n• How EQ serves as an anchor during crisis\n• Case studies of transformation through EQ\n• Building resilience in your teams\n• Decision-making under pressure\n• Communication strategies during change\n• Creating psychological safety during uncertainty\n\nPerfect for leaders navigating complex organizational challenges.',
    duration: '65 min',
    releaseDate: 'June 4, 2025',
    episodeNumber: 10,
    slug: 'leadership-uncertain-times',
    spotifyUrl: 'https://open.spotify.com/show/joseph-anand-podcast',
    appleUrl: 'https://podcasts.apple.com/podcast/joseph-anand',
    youtubeUrl: 'https://youtube.com/@josephanand9341',
  },
  {
    id: '4',
    title: 'Purpose-Driven Leadership & Organizational Impact',
    description: 'Discover how aligning your personal purpose with organizational vision creates extraordinary results. Joseph shares frameworks for designing work that matters and attracts top talent.',
    fullContent: 'When your personal purpose aligns with your organizational mission, extraordinary things happen. In this episode, Joseph shares frameworks for designing work that matters.\n\nKey topics:\n• Discovering your authentic purpose\n• Aligning personal values with organizational vision\n• Building cultures where people care\n• Attracting and retaining top talent\n• Creating meaningful work experiences\n• Impact and legacy through purpose-driven leadership\n\nGuests: Michael Chen and Lisa Rodriguez, organizational transformation leaders.',
    duration: '71 min',
    releaseDate: 'May 28, 2025',
    episodeNumber: 9,
    slug: 'purpose-driven-leadership',
    guests: ['Michael Chen', 'Lisa Rodriguez'],
    spotifyUrl: 'https://open.spotify.com/show/joseph-anand-podcast',
    appleUrl: 'https://podcasts.apple.com/podcast/joseph-anand',
    youtubeUrl: 'https://youtube.com/@josephanand9341',
  },
  {
    id: '5',
    title: 'The Human Edge in the Age of AI',
    description: 'As artificial intelligence reshapes the workplace, emotional intelligence becomes more valuable than ever. Explore how human connection, creativity, and empathy will define the future of work.',
    fullContent: 'Artificial intelligence is reshaping the world of work, but it also reveals what makes us uniquely human. In this forward-looking episode, Joseph explores the human edge in an AI-driven world.\n\nYou\'ll discover:\n• Skills that AI cannot replicate\n• The competitive advantage of emotional intelligence\n• How creativity thrives with human connection\n• Preparing for the future of work\n• Building human-centered organizations\n• The business case for EQ in an AI era\n\nThis episode is essential listening for anyone preparing for the future of work.',
    duration: '53 min',
    releaseDate: 'May 21, 2025',
    episodeNumber: 8,
    slug: 'human-edge-ai',
    spotifyUrl: 'https://open.spotify.com/show/joseph-anand-podcast',
    appleUrl: 'https://podcasts.apple.com/podcast/joseph-anand',
    youtubeUrl: 'https://youtube.com/@josephanand9341',
  },
  {
    id: '6',
    title: 'Transforming Conflict Into Connection',
    description: 'Conflict is inevitable in any organization. Learn powerful emotional intelligence strategies for transforming tension into deeper understanding and stronger relationships.',
    fullContent: 'Conflict is not something to avoid—it\'s an opportunity for growth and deeper connection. In this practical episode, Joseph shares emotional intelligence strategies for transforming conflict.\n\nTopics include:\n• Understanding the roots of conflict\n• Emotional regulation during difficult conversations\n• Empathetic listening techniques\n• Communication frameworks for resolution\n• Building trust after conflict\n• Creating psychological safety for honest dialogue\n• Turning conflict into collaboration\n\nThese practical strategies apply to leadership, teams, and personal relationships.',
    duration: '47 min',
    releaseDate: 'May 14, 2025',
    episodeNumber: 7,
    slug: 'transforming-conflict',
    spotifyUrl: 'https://open.spotify.com/show/joseph-anand-podcast',
    appleUrl: 'https://podcasts.apple.com/podcast/joseph-anand',
    youtubeUrl: 'https://youtube.com/@josephanand9341',
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const episode = podcastEpisodes.find(e => e.slug === params.slug)
  return {
    title: episode?.title || 'Podcast Episode',
    description: episode?.description || 'Listen to Joseph Anand\'s podcast',
  }
}

export default function PodcastDetailPage({ params }: { params: { slug: string } }) {
  const episode = podcastEpisodes.find(e => e.slug === params.slug)

  if (!episode) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-cream pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-navy mb-4">Episode Not Found</h1>
              <p className="text-xl text-charcoal/70 mb-8">The podcast episode you're looking for doesn't exist.</p>
              <Link href="/podcast">
                <Button className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300">
                  Back to Podcast
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/podcast"
            className="inline-flex items-center gap-2 text-gold hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Podcast
          </Link>

          {/* Episode Header */}
          <article className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            {/* Episode Number and Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 bg-blue/10 text-blue text-sm font-semibold uppercase rounded-full">
                Episode {episode.episodeNumber}
              </span>
              <div className="flex flex-wrap items-center gap-6 text-charcoal/60 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {episode.releaseDate}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {episode.duration}
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl font-bold text-navy mb-6">
              {episode.title}
            </h1>

            {/* Guests if any */}
            {episode.guests && episode.guests.length > 0 && (
              <div className="flex items-center gap-2 pb-8 border-b border-navy/10 mb-8">
                <Users className="h-5 w-5 text-charcoal/60" />
                <span className="text-charcoal/70">
                  {episode.guests.length === 1 ? 'Guest:' : 'Guests:'} {episode.guests.join(', ')}
                </span>
              </div>
            )}

            {/* Play Button and Platforms */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12 p-8 bg-navy/5 rounded-lg">
              <Link href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gold text-navy hover:bg-navy hover:text-cream transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="h-5 w-5" />
                  Listen on Spotify
                </Button>
              </Link>
              <Link href={episode.appleUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gold text-navy hover:bg-navy hover:text-cream transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="h-5 w-5" />
                  Listen on Apple Podcasts
                </Button>
              </Link>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-charcoal/80 leading-relaxed whitespace-pre-wrap">
                {episode.fullContent}
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-soft-gold/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-navy mb-3">
                Subscribe to the Podcast
              </h3>
              <p className="text-charcoal/70 mb-6">
                Never miss an episode. Subscribe on your favorite platform to get the latest insights on emotional intelligence and leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300">
                    Subscribe on YouTube
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-cream">
                    More Episodes
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}

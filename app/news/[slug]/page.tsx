import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

// News items data
const newsItems = [
  {
    id: '1',
    title: 'Joseph Anand Launches New EQ Series at Global Leadership Summit',
    description: 'Joseph Anand unveiled the highly anticipated EQ Advantage series at the Global Leadership Summit, featuring four comprehensive books designed for the age of AI. The launch marks a significant milestone in emotional intelligence education.',
    fullContent: 'Joseph Anand has officially launched his groundbreaking EQ Advantage series at the prestigious Global Leadership Summit. This momentous occasion brings together thought leaders, educators, and organizations committed to advancing emotional intelligence.\n\nThe four-book series addresses emotional intelligence through different lenses:\n• Project Leadership Excellence\n• Life Skills for All Ages\n• Reclaiming the Human Edge with AI\n• A Companion Edition for Young Humans\n\nEach book is meticulously crafted to provide practical wisdom and actionable frameworks for developing emotional intelligence in an increasingly complex world.',
    date: 'June 20, 2025',
    location: 'Virtual & In-Person',
    type: 'announcement',
    slug: 'eq-series-launch',
    cta: 'Explore EQ Series',
    ctaLink: '/books',
  },
  {
    id: '2',
    title: 'Speaking Engagement: Transform Your Leadership Through Emotional Intelligence',
    description: 'Join Joseph Anand for an exclusive keynote presentation exploring how emotional intelligence can transform your approach to leadership and decision-making in today\'s complex business environment.',
    fullContent: 'Joseph Anand will deliver a transformative keynote presentation on the power of emotional intelligence in modern leadership. This exclusive engagement brings proven frameworks and actionable insights to organizational leaders and teams.\n\nDuring this presentation, Joseph will share:\n• Core principles of emotional intelligence for leaders\n• Practical strategies for decision-making under pressure\n• How to build emotionally intelligent teams\n• Real-world case studies of EQ transformation\n\nThis is an invaluable opportunity to learn directly from a leading expert in emotional intelligence and leadership development.',
    date: 'July 10, 2025',
    location: 'Chicago, Illinois',
    type: 'speaking',
    slug: 'transform-leadership-keynote',
    cta: 'Contact for Details',
    ctaLink: '/contact',
  },
  {
    id: '3',
    title: 'Featured in Forbes: "The Human Edge in the Age of AI"',
    description: 'Joseph Anand shares insights on how emotional intelligence serves as the ultimate competitive advantage in an increasingly automated world. Read the full feature in Forbes magazine.',
    fullContent: 'In a comprehensive feature in Forbes magazine, Joseph Anand explores why emotional intelligence has become the ultimate competitive advantage in the age of artificial intelligence.\n\nKey topics covered in the feature:\n• How AI amplifies the need for human connection\n• The business case for emotional intelligence\n• Future skills that machines cannot replicate\n• Organizational strategies for developing EQ\n\nThis insightful article highlights why companies and individuals who prioritize emotional intelligence will thrive in an AI-driven future.',
    date: 'June 12, 2025',
    type: 'media',
    slug: 'forbes-human-edge',
    cta: 'Read Full Article',
    ctaLink: '/contact',
  },
  {
    id: '4',
    title: 'New Book Release: "The EQ Advantage in The Age of AI"',
    description: 'The long-awaited series is now available across all major platforms. Each of the four books addresses emotional intelligence through different lenses, offering practical wisdom for modern life.',
    fullContent: 'The highly anticipated EQ Advantage series is now available on all major platforms including Amazon, Apple Books, Barnes & Noble, and more.\n\nThe complete series includes:\n1. EQ Advantage: Project Leadership Excellence\n2. EQ Advantage: Critical Life Skill for All Ages\n3. EQ Advantage: Reclaiming the Human Edge\n4. EQ Advantage: Companion Edition for Young Humans\n\nEach book is designed to be read independently while building upon the complete framework of emotional intelligence development.',
    date: 'June 5, 2025',
    type: 'release',
    slug: 'eq-advantage-release',
    cta: 'Shop Now',
    ctaLink: '/books',
  },
  {
    id: '5',
    title: 'Upcoming Workshop: Building High-Performance Teams Through EQ',
    description: 'Joseph Anand will facilitate an interactive workshop exploring how leaders can leverage emotional intelligence to build cohesive, high-performing teams that thrive in competitive environments.',
    fullContent: 'Join an interactive two-day workshop with Joseph Anand on building high-performance teams through emotional intelligence.\n\nWorkshop highlights:\n• Assessment of current team emotional dynamics\n• Frameworks for psychological safety\n• Conflict resolution through emotional awareness\n• Communication strategies for high-performance teams\n• Creating sustainable team culture\n\nThis hands-on workshop is perfect for leadership teams, department heads, and anyone responsible for team performance.',
    date: 'July 25-26, 2025',
    location: 'San Francisco, California',
    type: 'speaking',
    slug: 'high-performance-workshop',
    cta: 'Register Now',
    ctaLink: '/contact',
  },
  {
    id: '6',
    title: 'Joseph Anand Named to Top 50 Leadership Influencers List',
    description: 'Recognized for his contributions to leadership development and emotional intelligence education, Joseph Anand has been honored among the most influential voices in modern leadership.',
    fullContent: 'Joseph Anand has been recognized among the Top 50 Leadership Influencers by a leading global leadership development organization.\n\nThis prestigious honor recognizes:\n• 40+ years of global leadership experience\n• Pioneering work in emotional intelligence education\n• Contribution to thousands of leaders worldwide\n• Innovation in developing transformational frameworks\n• Thought leadership across multiple platforms\n\nThis recognition underscores Joseph\'s commitment to advancing emotional intelligence and leadership excellence.',
    date: 'May 30, 2025',
    type: 'announcement',
    slug: 'top-50-influencers',
    cta: 'Learn More',
    ctaLink: '/about',
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = newsItems.find(n => n.slug === params.slug)
  return {
    title: item?.title || 'News',
    description: item?.description || 'Joseph Anand news and updates',
  }
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = newsItems.find(n => n.slug === params.slug)

  if (!item) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-cream pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-navy mb-4">News Not Found</h1>
              <p className="text-xl text-charcoal/70 mb-8">The news item you're looking for doesn't exist.</p>
              <Link href="/news">
                <Button className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300">
                  Back to News
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const typeLabel = {
    announcement: 'Announcement',
    speaking: 'Speaking Event',
    media: 'Media Feature',
    release: 'Book Release',
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gold hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to News
          </Link>

          {/* Article Header */}
          <article className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            {/* Type and Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 bg-blue/10 text-blue text-sm font-semibold uppercase rounded-full">
                {typeLabel[item.type as keyof typeof typeLabel]}
              </span>
              <div className="flex flex-wrap items-center gap-6 text-charcoal/60 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
                {item.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                )}
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl font-bold text-navy mb-6">
              {item.title}
            </h1>

            {/* Divider */}
            <div className="pb-8 border-b border-navy/10 mb-8" />

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-charcoal/80 leading-relaxed whitespace-pre-wrap">
                {item.fullContent}
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-soft-gold/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-navy mb-3">
                Stay Connected
              </h3>
              <p className="text-charcoal/70 mb-6">
                Keep up with the latest news and updates from Joseph Anand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={item.ctaLink}>
                  <Button className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300">
                    {item.cta}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-cream">
                    Subscribe to Updates
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

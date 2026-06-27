import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Blog posts data
const blogPosts = [
  {
    id: '0',
    title: 'Introducing the 11-Book Series: Foundations for Emotional Intelligence',
    excerpt: 'Management mentor Joseph Anand launches an 11-book collection focusing on mental calmness, stress control, and human thinking in the age of AI. Learn how emotional intelligence becomes your anchor in uncertain times, and why human emotions cannot be replaced by artificial intelligence.',
    content: `Management mentor Joseph Anand is promoting emotional intelligence through his 11-book series "Foundations for Emotional Intelligence", focusing on mental calmness, stress control, and human thinking in the age of AI.

📚 What the Books Focus On
The collection is designed to help people build emotional intelligence through practical insights:
• Building self-confidence and personality skills
• Managing stress and anxiety in modern workplaces
• Using simple life-based lessons for clearer thinking
• Combining neuroscience, psychology, leadership, and life experience

🧩 Key Psychological Insight
Understanding how stress affects the brain is crucial. When we face pressure, stress activates the "fight or flight" response—similar to encountering danger like a lion in the wild.

When stressed, the prefrontal cortex (the brain's rational thinking area) slows down. This causes people to:
• React quickly without thinking
• Speak without considering consequences
• Lose calm judgment and clarity

🤖 AI vs Humans (Important Point)
Artificial intelligence is undoubtedly useful for operations and productivity. It can automate tasks and improve efficiency. However, AI cannot replace what makes us human:
• Emotions and emotional depth
• Empathy and human connection
• Personal intuition and wisdom

Therefore, emotional awareness becomes more important in the AI era. As technology advances, uniquely human qualities like emotional intelligence become the true competitive advantage.

🧘 Main Advice from the Author
Dr. Joseph Anand emphasizes several key principles for navigating modern life:
• Stay calm even in high-pressure environments
• Do not overwork just to "prove your worth"
• Build awareness of your emotions before reacting automatically
• Strong emotional intelligence improves career success and personal wellbeing

🏛️ Public Views
Leaders and policymakers recognize the critical importance of these themes. Singapore Member of Parliament Vikram Nair, who attended the book launch, highlighted:
• The need for human limits on AI power
• The importance of management skills that go beyond technical expertise
• How understanding people—not just systems—becomes increasingly valuable as careers advance

The 11-book collection represents a comprehensive approach to developing the emotional intelligence that will define success in the age of AI. By combining neuroscience, psychology, and real-world experience, Dr. Anand provides readers with practical tools to build calmness, clarity, and confidence in an uncertain world.`,
    author: 'Joseph Anand',
    date: 'May 2026',
    readTime: '7 min read',
    category: 'Emotional Intelligence',
    slug: 'foundations-emotional-intelligence-series',
  },
  {
    id: '1',
    title: 'The Gap Between Stimulus and Response: Finding Your Power',
    excerpt: 'In this foundational piece, we explore the transformative power of the pause—that crucial moment between what happens and how we respond. Discover how expanding this gap can revolutionize your emotional resilience and decision-making.',
    content: 'In this comprehensive article, we explore the transformative power of the pause—that crucial moment between what happens and how we respond. Drawing from neuroscience, psychology, and lived experience, discover how expanding this gap can revolutionize your emotional resilience and decision-making.\n\nThe pause is where freedom lives. This article walks you through practical exercises, real-world examples, and frameworks for developing this critical capacity.',
    author: 'Joseph Anand',
    date: 'June 18, 2025',
    readTime: '8 min read',
    category: 'Emotional Intelligence',
    slug: 'gap-stimulus-response',
  },
  {
    id: '2',
    title: 'Presence as a Lived Capacity, Not a Concept',
    excerpt: 'Presence is often discussed but rarely understood. This article reveals how presence shapes perception, steadies emotion, and restores choice in moments where reactions usually take over. Learn the neuroscience behind presence.',
    content: 'Presence is not something you think about—it\'s something you embody. In this deep-dive article, we explore how presence shapes perception, steadies emotion, and restores choice in moments where reactions usually take over.\n\nLearn the neuroscience behind presence, discover proven techniques for cultivating it, and understand why presence has become the foundation of emotional intelligence in modern life.',
    author: 'Joseph Anand',
    date: 'June 12, 2025',
    readTime: '10 min read',
    category: 'Mindfulness',
    slug: 'presence-lived-capacity',
  },
  {
    id: '3',
    title: 'Understanding the Architecture of Desire in Modern Life',
    excerpt: 'We live in the most stimulating era in human history. This deep dive explores the hidden architecture of desire and why traditional pleasure-seeking often leads to dissatisfaction. Uncover the path to lasting fulfillment.',
    content: 'We live in the most stimulating era in human history. Every scroll, every notification, every purchase promises pleasure. And yet, satisfaction remains elusive. This comprehensive article explores the hidden architecture of desire and why traditional pleasure-seeking often leads to dissatisfaction.\n\nUnderstand the neurobiology of desire, learn how to work with desire rather than against it, and discover the path to lasting fulfillment.',
    author: 'Joseph Anand',
    date: 'June 5, 2025',
    readTime: '12 min read',
    category: 'Personal Development',
    slug: 'architecture-desire',
  },
  {
    id: '4',
    title: 'Leadership in Uncertain Times: Your Anchor is Emotional Intelligence',
    excerpt: 'Organizations face unprecedented volatility. Discover how emotional intelligence becomes your anchor during change and how leaders can transform adversity into opportunity through EQ-driven decision making.',
    content: 'In times of uncertainty, organizations face unprecedented volatility. Traditional leadership approaches often fall short. This article reveals how emotional intelligence becomes your anchor during change and how leaders can transform adversity into opportunity through EQ-driven decision making.\n\nExplore proven frameworks, case studies, and practical strategies for leading with emotional intelligence.',
    author: 'Joseph Anand',
    date: 'May 28, 2025',
    readTime: '9 min read',
    category: 'Leadership',
    slug: 'leadership-uncertain-times',
  },
  {
    id: '5',
    title: 'The Human Edge in the Age of AI: Why Emotional Intelligence Matters More Than Ever',
    excerpt: 'As artificial intelligence reshapes the workplace, emotional intelligence becomes the ultimate competitive advantage. Explore how human connection, creativity, and empathy will define the future of work and leadership.',
    content: 'As artificial intelligence reshapes the workplace, emotional intelligence becomes the ultimate competitive advantage. This forward-looking article explores how human connection, creativity, and empathy will define the future of work and leadership.\n\nDiscover why AI capabilities amplify the need for emotional intelligence and learn how to prepare yourself for the future of work.',
    author: 'Joseph Anand',
    date: 'May 21, 2025',
    readTime: '11 min read',
    category: 'AI & Future of Work',
    slug: 'human-edge-ai',
  },
  {
    id: '6',
    title: 'Transforming Conflict Into Connection Through Emotional Awareness',
    excerpt: 'Conflict is inevitable, but how you navigate it determines the quality of your relationships. Learn emotional intelligence techniques and frameworks for turning conflict into deeper understanding and stronger bonds.',
    content: 'Conflict is inevitable, but how you navigate it determines the quality of your relationships. This practical article shares emotional intelligence techniques and frameworks for turning conflict into deeper understanding and stronger bonds.\n\nLearn conflict resolution strategies that honor all parties and create space for genuine connection.',
    author: 'Joseph Anand',
    date: 'May 14, 2025',
    readTime: '7 min read',
    category: 'Relationships',
    slug: 'conflict-connection',
  },
  {
    id: '7',
    title: 'Purpose-Driven Living: Designing Alignment in Your Life and Work',
    excerpt: 'In a world engineered for distraction, direction has become rare. Discover how to design alignment deliberately and move from scattered ambition to coherent contribution. A framework for purposeful living.',
    content: 'In a world engineered for distraction, direction has become rare. This article introduces a framework for designing alignment deliberately and moving from scattered ambition to coherent contribution.\n\nLearn how to identify your true purpose, align it with your work, and create a life of intentional contribution.',
    author: 'Joseph Anand',
    date: 'May 7, 2025',
    readTime: '10 min read',
    category: 'Purpose',
    slug: 'purpose-driven-living',
  },
  {
    id: '8',
    title: 'Building High-Performance Teams Through Emotional Intelligence',
    excerpt: 'Team performance is fundamentally about emotional dynamics. Learn how leaders can leverage emotional intelligence to create psychologically safe environments where teams thrive and innovation flourishes.',
    content: 'Team performance is fundamentally about emotional dynamics, not just task execution. This article reveals how leaders can leverage emotional intelligence to create psychologically safe environments where teams thrive and innovation flourishes.\n\nDiscover the EQ foundations of high-performance teams and actionable strategies for team leaders.',
    author: 'Joseph Anand',
    date: 'April 30, 2025',
    readTime: '9 min read',
    category: 'Team Development',
    slug: 'high-performance-teams',
  },
  {
    id: '9',
    title: 'The Role of Perception in Shaping Your Reality',
    excerpt: 'Perception isn\'t neutral observation—it\'s an active construction influenced by stress, identity, and emotion. Understand how perception shapes your reality and how you can shift your perception to unlock new possibilities.',
    content: 'Perception isn\'t neutral observation—it\'s an active construction influenced by stress, identity, and emotion. This article explores how perception shapes your reality and provides practical methods for shifting your perception to unlock new possibilities.\n\nUnderstand the neuroscience of perception and learn techniques for conscious perception management.',
    author: 'Joseph Anand',
    date: 'April 23, 2025',
    readTime: '8 min read',
    category: 'Psychology',
    slug: 'perception-reality',
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  return {
    title: post?.title || 'Blog Post',
    description: post?.excerpt || 'Read more on Joseph Anand\'s blog',
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-cream pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-navy mb-4">Article Not Found</h1>
              <p className="text-xl text-charcoal/70 mb-8">The blog post you're looking for doesn't exist.</p>
              <Link href="/blog">
                <Button className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300">
                  Back to Blog
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
            href="/blog"
            className="inline-flex items-center gap-2 text-gold hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            {/* Category and Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 bg-blue/10 text-blue text-sm font-semibold uppercase rounded-full">
                {post.category}
              </span>
              <div className="flex flex-wrap items-center gap-6 text-charcoal/60 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl font-bold text-navy mb-6">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-2 pb-8 border-b border-navy/10 mb-8">
              <User className="h-5 w-5 text-charcoal/60" />
              <span className="text-charcoal/70">{post.author}</span>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-charcoal/80 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-soft-gold/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-navy mb-3">
                Ready to Transform Your Emotional Intelligence?
              </h3>
              <p className="text-charcoal/70 mb-6">
                Explore Joseph Anand's books and resources to deepen your understanding of emotional intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/books">
                  <Button className="bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300">
                    Explore Books
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-cream">
                    Get in Touch
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

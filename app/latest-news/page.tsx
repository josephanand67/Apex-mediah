'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function LatestNewsPage() {
  return (
    <div className="min-h-screen bg-cream pb-12">
      {/* Back Arrow Navigation */}
      <div className="sticky top-0 z-10 bg-cream border-b border-navy/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-12">
        <h1 className="text-4xl font-bold text-navy mb-4">Latest News</h1>
        <p className="text-navy/70 mb-12">Featured Press Coverage and News from Dr. Joseph Anand</p>
        
        <div className="space-y-8">
          {/* Featured Press Section */}
          <div className="bg-white rounded-lg border-l-4 border-gold p-6">
            <h2 className="text-3xl font-bold text-navy mb-4">As Featured in The Press</h2>
            <p className="text-navy/70 leading-relaxed">
              Dr. Joseph Anand's P Series books on Human Development was launched in Singapore. Tamil Murasu, a Tamil language newspaper covered the book launch event.
            </p>
          </div>

          {/* Article 1 */}
          <article className="bg-white rounded-lg border border-navy/10 overflow-hidden hover:shadow-md transition-shadow">
            {/* Banner Image */}
            <div className="relative w-full h-80 bg-navy/10">
              <Image
                src="/images/press-feature-tamil.avif"
                alt="Press Feature - Dr. Joseph Anand Book Launch"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 rounded text-sm font-medium bg-gold text-navy">
                  PRESS COVERAGE
                </span>
                <time className="text-navy/60 text-sm">Tamil Murasu</time>
              </div>
              
              <h2 className="text-3xl font-bold text-navy mb-3">A Calm Mind Helps Discover Solutions</h2>
              <div className="flex items-center gap-2 text-navy/70 mb-6 pb-6 border-b border-navy/10">
                <span>By K. Janarthanan</span>
              </div>

              <div className="text-navy/70 leading-relaxed space-y-5">
                <p className="text-lg">
                  A positive attitude and a peaceful state of mind can help us find solutions to problems instead of getting trapped in them.
                </p>
                
                <p>
                  Speaking at a public event, Dr. Joseph Anand explained that when the mind is calm, the brain functions more effectively and our ability to think clearly improves.
                </p>

                <p>
                  He pointed out that when we become anxious, fearful, or emotionally disturbed, our thinking narrows. However, by remaining calm, we activate the brain's prefrontal cortex, enabling better reasoning, decision-making, creativity, and problem-solving.
                </p>

                <p>
                  He emphasized that we should not allow circumstances to control our emotions. Instead, we should consciously develop the habit of pausing, observing the situation objectively, and then responding wisely.
                </p>

                <div className="bg-soft-gold p-6 rounded-lg my-6 border-l-4 border-gold">
                  <p className="text-navy font-semibold italic text-lg">
                    "Instead of allowing problems to dominate our minds, we should train our minds to discover solutions." — Dr. Joseph Anand
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-navy mb-3">According to him, cultivating a positive mindset helps us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Make better decisions.</li>
                    <li>Improve relationships.</li>
                    <li>Handle challenges more effectively.</li>
                    <li>Reduce stress and anxiety.</li>
                    <li>Discover opportunities even in difficult situations.</li>
                  </ul>
                </div>

                <p>
                  He encouraged participants to practice these principles regularly so that they become natural habits in everyday life.
                </p>

                <p>
                  Dr. Joseph Anand also interacted personally with attendees, discussed ideas from his books, and signed copies for readers. The event highlighted the practical application of emotional intelligence in day-to-day life and showcased how maintaining mental clarity can lead to better problem-solving.
                </p>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-lg border border-navy/10 p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded text-sm font-medium bg-soft-gold text-navy">
                EMOTIONAL INTELLIGENCE
              </span>
              <span className="text-navy/60 text-sm font-medium">May 2026 • 5 min read</span>
            </div>

            <h2 className="text-3xl font-bold text-navy mb-3">A Calm Mind, Clear Thinking: A Collection of Books for Emotional Intelligence</h2>
            
            <div className="flex items-center gap-2 text-navy/70 mb-8 pb-6 border-b border-navy/10">
              <span>By Joseph Anand</span>
            </div>

            <div className="text-navy/70 leading-relaxed space-y-6">
              <p className="text-lg">
                Published in May 2026, this feature spotlights a new 11-book collection written by management consultant Dr. Joseph Anand. The series was created to help people deal with anxiety, workplace pressure, and the uncertainty driven by rapid advances in artificial intelligence.
              </p>

              <div className="bg-soft-gold/30 p-6 rounded-lg border-l-4 border-gold">
                <p className="font-semibold text-navy mb-3 text-lg">Key Message</p>
                <p>
                  Dr. Joseph Anand emphasizes that when people face stress and uncertainty, their ability to think clearly often decreases. He believes that maintaining calmness is the first step toward solving problems, even when solutions are not immediately obvious.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy text-lg mb-3">The 11-Book Series</h3>
                <p className="mb-3">
                  The collection is positioned as a foundation for developing emotional intelligence. According to Dr. Anand, the books are based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Neuroscience</li>
                  <li>Psychology</li>
                  <li>Leadership experience</li>
                  <li>Real-life experiences</li>
                </ul>
                <p>
                  Written in simple language and built around memorable life lessons, the books are designed to help readers build:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Self-confidence</li>
                  <li>Personal effectiveness</li>
                  <li>Leadership skills</li>
                  <li>Emotional awareness</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-navy text-lg mb-3">Stress and the Brain</h3>
                <p>
                  Dr. Anand explains that stressful situations affect the brain's prefrontal cortex, the area responsible for calm reasoning and decision-making. When people are under pressure, this part of the brain becomes less effective, causing impulsive reactions and poor judgment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy text-lg mb-3">Artificial Intelligence and Human Skills</h3>
                <p className="mb-3">
                  While AI can improve efficiency and automate tasks, Dr. Anand argues that it cannot replace uniquely human qualities such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Emotions</li>
                  <li>Empathy</li>
                  <li>Self-awareness</li>
                  <li>Emotional intelligence</li>
                </ul>
                <p className="mt-3">
                  He encourages people to understand their emotions and respond consciously rather than reacting automatically under pressure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy text-lg mb-3">Personal Reflection</h3>
                <p>
                  During the event, Dr. Anand reflected on caring for his late wife during her illness, sharing how calmness and emotional resilience helped him navigate a deeply difficult period in life.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy text-lg mb-3">Insights from Leadership</h3>
                <p>
                  Singapore Member of Parliament Vikram Nair attended the book launch and highlighted the importance of human judgment and leadership in an AI-driven world. He noted that technical skills may help people start their careers, but management and interpersonal skills become increasingly important as they advance professionally.
                </p>
              </div>

              <div className="bg-soft-gold p-6 rounded-lg border-l-4 border-gold">
                <p className="text-navy font-semibold italic text-lg">
                  "Calmness is the first step toward solving problems—even when the solution is not yet in sight." — Dr. Joseph Anand
                </p>
              </div>

              <div className="bg-cream p-6 rounded-lg border border-navy/10">
                <h3 className="font-semibold text-navy text-lg mb-3">Main Takeaway</h3>
                <p>
                  In a world increasingly shaped by AI and workplace pressure, emotional intelligence, self-awareness, and calm thinking remain essential human strengths. Dr. Joseph Anand's book series aims to help readers develop these qualities and navigate challenges with confidence and clarity.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

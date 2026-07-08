'use client'

export default function LatestNewsPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
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
          <div className="bg-white rounded-lg border border-navy/10 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 rounded text-sm font-medium bg-gold text-navy">
                PRESS
              </span>
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">A Calm Mind Helps Discover Solutions</h2>
            <p className="text-navy/60 text-sm mb-4">By K. Janarthanan</p>
            <div className="text-navy/70 leading-relaxed space-y-4">
              <p>
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
              <div className="bg-soft-gold p-4 rounded-lg my-4 border-l-4 border-gold">
                <p className="text-navy font-semibold italic">
                  "Instead of allowing problems to dominate our minds, we should train our minds to discover solutions." — Dr. Joseph Anand
                </p>
              </div>
              <p className="font-semibold text-navy">Cultivating a positive mindset helps us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Make better decisions.</li>
                <li>Improve relationships.</li>
                <li>Handle challenges more effectively.</li>
                <li>Reduce stress and anxiety.</li>
                <li>Discover opportunities even in difficult situations.</li>
              </ul>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-lg border border-navy/10 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 rounded text-sm font-medium bg-soft-gold text-navy">
                EMOTIONAL INTELLIGENCE
              </span>
              <span className="text-navy/60 text-sm">May 2026 • 5 min read</span>
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">A Calm Mind, Clear Thinking: A Collection of Books for Emotional Intelligence</h2>
            <p className="text-navy/60 text-sm mb-4">By Joseph Anand</p>
            <div className="text-navy/70 leading-relaxed space-y-4">
              <p>
                Published in May 2026, this feature spotlights a new 11-book collection written by management consultant Dr. Joseph Anand. The series was created to help people deal with anxiety, workplace pressure, and the uncertainty driven by rapid advances in artificial intelligence.
              </p>
              <div className="bg-soft-gold/30 p-4 rounded-lg border-l-4 border-gold">
                <p className="font-semibold text-navy mb-2">Key Message</p>
                <p>
                  Dr. Joseph Anand emphasizes that when people face stress and uncertainty, their ability to think clearly often decreases. He believes that maintaining calmness is the first step toward solving problems, even when solutions are not immediately obvious.
                </p>
              </div>
              <p className="font-semibold text-navy">The 11-Book Series</p>
              <p>
                The collection is positioned as a foundation for developing emotional intelligence. According to Dr. Anand, the books are based on neuroscience, psychology, leadership experience, and real-life experiences.
              </p>
              <p>
                Written in simple language and built around memorable life lessons, the books are designed to help readers build self-confidence, personal effectiveness, leadership skills, and emotional awareness.
              </p>
              <p className="font-semibold text-navy mt-4">Stress and the Brain</p>
              <p>
                Dr. Anand explains that stressful situations affect the brain's prefrontal cortex, the area responsible for calm reasoning and decision-making. When people are under pressure, this part of the brain becomes less effective, causing impulsive reactions and poor judgment.
              </p>
              <p className="font-semibold text-navy mt-4">Artificial Intelligence and Human Skills</p>
              <p>
                While AI can improve efficiency and automate tasks, Dr. Anand argues that it cannot replace uniquely human qualities such as emotions, empathy, self-awareness, and emotional intelligence.
              </p>
              <div className="bg-soft-gold p-4 rounded-lg my-4 border-l-4 border-gold">
                <p className="text-navy font-semibold italic">
                  "Calmness is the first step toward solving problems—even when the solution is not yet in sight." — Dr. Joseph Anand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

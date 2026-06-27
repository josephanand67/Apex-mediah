import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, User, Tag, Newspaper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Latest News',
  description:
    'A Calm Mind, Clear Thinking — Dr. Joseph Anand launches an 11-book collection to help people build emotional intelligence amid workplace pressure and the rise of AI.',
}

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Article */}
        <article className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
          <div className="relative rounded-2xl bg-card shadow-xl border border-border p-6 sm:p-10 md:p-12">
            {/* Category */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 text-gold text-xs font-semibold uppercase tracking-widest rounded-full mb-5">
              <Tag className="h-3.5 w-3.5" />
              Emotional Intelligence
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-navy leading-tight text-balance">
              A Calm Mind, Clear Thinking: A Collection of Books for Emotional Intelligence
            </h1>

            {/* Publication info */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 pb-8 border-b border-border text-sm text-charcoal/60">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-gold" />
                By Joseph Anand
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold" />
                May 2026
              </span>
              <span className="flex items-center gap-2">
                <Newspaper className="h-4 w-4 text-gold" />
                5 min read
              </span>
            </div>

            {/* Content */}
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal/80">
              <p className="text-xl text-charcoal font-medium leading-relaxed">
                Published in May 2026, this feature spotlights a new 11-book collection written by
                management consultant Dr. Joseph Anand. The series was created to help people deal with
                anxiety, workplace pressure, and the uncertainty driven by rapid advances in artificial
                intelligence.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy pt-4">Key Message</h2>
              <p>
                Dr. Joseph Anand emphasizes that when people face stress and uncertainty, their ability to
                think clearly often decreases. He believes that maintaining calmness is the first step
                toward solving problems, even when solutions are not immediately obvious.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy pt-4">The 11-Book Series</h2>
              <p>
                The collection is positioned as a foundation for developing emotional intelligence.
                According to Dr. Anand, the books are based on:
              </p>
              <ul className="space-y-3 pl-1">
                {['Neuroscience', 'Psychology', 'Leadership experience', 'Real-life experiences'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
              <p>
                Written in simple language and built around memorable life lessons, the books are designed
                to help readers build:
              </p>
              <ul className="space-y-3 pl-1">
                {[
                  'Self-confidence',
                  'Personal effectiveness',
                  'Leadership skills',
                  'Emotional awareness',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy pt-4">Stress and the Brain</h2>
              <p>
                Dr. Anand explains that stressful situations affect the brain&apos;s prefrontal cortex, the
                area responsible for calm reasoning and decision-making. When people are under pressure,
                this part of the brain becomes less effective, causing impulsive reactions and poor
                judgment.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy pt-4">
                Artificial Intelligence and Human Skills
              </h2>
              <p>
                While AI can improve efficiency and automate tasks, Dr. Anand argues that it cannot replace
                uniquely human qualities such as:
              </p>
              <ul className="space-y-3 pl-1">
                {['Emotions', 'Empathy', 'Self-awareness', 'Emotional intelligence'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                He encourages people to understand their emotions and respond consciously rather than
                reacting automatically under pressure.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy pt-4">Personal Reflection</h2>
              <p>
                During the event, Dr. Anand reflected on caring for his late wife during her illness,
                sharing how calmness and emotional resilience helped him navigate a deeply difficult period
                in life.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy pt-4">Additional Remarks</h2>
              <p>
                Singapore Member of Parliament Vikram Nair attended the book launch and highlighted the
                importance of human judgment and leadership in an AI-driven world. He noted that technical
                skills may help people start their careers, but management and interpersonal skills become
                increasingly important as they advance professionally.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy pt-4">Main Takeaway</h2>
              <p>
                In a world increasingly shaped by AI and workplace pressure, emotional intelligence,
                self-awareness, and calm thinking remain essential human strengths. Dr. Joseph Anand&apos;s
                book series aims to help readers develop these qualities and navigate challenges with
                confidence and clarity.
              </p>

              <blockquote className="border-l-4 border-gold bg-soft-gold/20 rounded-r-lg px-6 py-5 italic text-navy font-serif text-xl">
                &ldquo;Calmness is the first step toward solving problems&mdash;even when the solution is not
                yet in sight.&rdquo;
              </blockquote>
            </div>
          </div>
        </article>


      </main>
      <Footer />
    </>
  )
}

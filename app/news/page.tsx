import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
        {/* Featured in the Press */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 text-gold text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              <Newspaper className="h-3.5 w-3.5" />
              Featured in the Press
            </div>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-tight text-balance">
              As Featured in The Press
            </h2>
            <p className="mt-3 text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              Dr. Joseph Anand&apos;s P Series books on Human Development was launched in Singapore. Tamil
              Murasu, a Tamil language newspaper covered the book launch event.
            </p>
          </div>

          <figure className="flex flex-col items-center">
            <div className="w-full overflow-hidden rounded-2xl bg-card shadow-xl border border-border p-3 sm:p-4">
              <Image
                src="/images/press-feature-tamil.jpeg"
                alt="Newspaper feature on Dr. Joseph Anand's 11-book collection for emotional intelligence, published in a Tamil-language national newspaper."
                width={1600}
                height={1000}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-charcoal/50 italic">
              Press coverage of the book launch event, featuring Dr. Joseph Anand.
            </figcaption>
          </figure>
        </section>

        {/* English Translation */}
        <article className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative rounded-2xl bg-card shadow-xl border border-border p-6 sm:p-10 md:p-12">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/10 text-navy text-xs font-semibold uppercase tracking-widest rounded-full mb-5">
              <Newspaper className="h-3.5 w-3.5" />
              English Translation
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
              A Calm Mind Helps Discover Solutions
            </h2>

            {/* Byline */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 pb-8 border-b border-border text-sm text-charcoal/60">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-gold" />
                By K. Janarthanan
              </span>
            </div>

            {/* Content */}
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal/80">
              <p className="text-xl text-charcoal font-medium leading-relaxed">
                A positive attitude and a peaceful state of mind can help us find solutions to problems
                instead of getting trapped in them.
              </p>

              <p>
                Speaking at a public event, Dr. Joseph Anand explained that when the mind is calm, the brain
                functions more effectively and our ability to think clearly improves.
              </p>

              <p>
                He pointed out that when we become anxious, fearful, or emotionally disturbed, our thinking
                narrows. However, by remaining calm, we activate the brain&apos;s prefrontal cortex,
                enabling better reasoning, decision-making, creativity, and problem-solving.
              </p>

              <p>
                He emphasized that we should not allow circumstances to control our emotions. Instead, we
                should consciously develop the habit of pausing, observing the situation objectively, and
                then responding wisely.
              </p>

              <p>According to him, cultivating a positive mindset helps us:</p>
              <ul className="space-y-3 pl-1">
                {[
                  'Make better decisions.',
                  'Improve relationships.',
                  'Handle challenges more effectively.',
                  'Reduce stress and anxiety.',
                  'Discover opportunities even in difficult situations.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                He encouraged participants to practice these principles regularly so that they become
                natural habits in everyday life.
              </p>

              <p>
                Dr. Joseph Anand also interacted personally with attendees, discussed ideas from his books,
                and signed copies for readers.
              </p>

              <blockquote className="border-l-4 border-gold bg-soft-gold/20 rounded-r-lg px-6 py-5 italic text-navy font-serif text-xl">
                &ldquo;Instead of allowing problems to dominate our minds, we should train our minds to
                discover solutions.&rdquo;
                <span className="mt-3 block text-base not-italic font-semibold text-charcoal/70">
                  &mdash; Dr. Joseph Anand
                </span>
              </blockquote>

              <p>
                The article also mentions that many people attended the event, interacted with the author,
                and appreciated his practical insights on positive thinking and mental well-being. A
                photograph accompanying the article shows Dr. Joseph Anand signing books and speaking with
                attendees.
              </p>
            </div>
          </div>
        </article>

        {/* Article */}
        <article className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8 pb-20 lg:pb-28">
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

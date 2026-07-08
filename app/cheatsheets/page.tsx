import { Metadata } from 'next'
import { Download, FileText, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cheat Sheets | Joseph Anand',
  description: 'Download exclusive EQ cheat sheets, worksheets, and resources for emotional intelligence and personal growth.',
}

const cheatsheets = [
  {
    id: 1,
    title: 'EQ Foundations Cheat Sheet',
    description: 'A quick reference guide to the fundamentals of Emotional Intelligence, including self-awareness, self-regulation, motivation, empathy, and social skills.',
    category: 'Emotional Intelligence',
    downloadLink: '#',
  },
  {
    id: 2,
    title: 'Leadership Communication Worksheet',
    description: 'Practical worksheet for mastering communication in project leadership through emotional intelligence principles.',
    category: 'Leadership',
    downloadLink: '#',
  },
  {
    id: 3,
    title: 'Emotional Awareness Tracker',
    description: 'Daily tracker to monitor your emotions, triggers, and responses. Perfect for developing self-awareness skills.',
    category: 'Self-Awareness',
    downloadLink: '#',
  },
  {
    id: 4,
    title: 'Conflict Resolution Guide',
    description: 'Step-by-step guide to resolving conflicts using emotional intelligence principles for better outcomes.',
    category: 'Conflict Resolution',
    downloadLink: '#',
  },
  {
    id: 5,
    title: 'Stress Management Toolkit',
    description: 'Comprehensive toolkit for managing stress and building resilience through EQ techniques.',
    category: 'Stress Management',
    downloadLink: '#',
  },
  {
    id: 6,
    title: 'EQ in the Workplace',
    description: 'Guide to applying emotional intelligence in professional settings to improve relationships and performance.',
    category: 'Professional Development',
    downloadLink: '#',
  },
]

export default function CheatsheetsPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Back Arrow Navigation */}
      <div className="sticky top-0 z-10 bg-background border-b border-navy/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center mb-16 pt-32">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-navy mb-4">
          Cheat Sheets & Resources
        </h1>
        <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
          Download exclusive guides, worksheets, and resources to accelerate your emotional intelligence journey and master personal growth.
        </p>
      </section>

      {/* Cheatsheets Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cheatsheets.map((sheet) => (
            <div
              key={sheet.id}
              className="group h-full bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-gold transition-all duration-300 flex flex-col"
            >
              {/* Category Badge */}
              <span className="inline-block w-fit px-3 py-1 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
                {sheet.category}
              </span>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {sheet.title}
              </h3>
              <p className="text-charcoal/60 text-sm mb-6 flex-grow">
                {sheet.description}
              </p>

              {/* Download Button */}
              <button className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-navy text-cream rounded-lg hover:bg-gold hover:text-navy transition-colors duration-200 font-medium group/btn">
                <Download className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                <span>Download PDF</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-border text-center">
        <h2 className="font-serif text-3xl font-bold text-navy mb-4">
          Want Even More Resources?
        </h2>
        <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
          Join the Inner Circle to get exclusive access to all resources, early book releases, and community insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors"
            size="lg"
          >
            <Link href="/#inner-circle">Join Inner Circle</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-cream"
            size="lg"
          >
            <Link href="/books">Explore Books</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

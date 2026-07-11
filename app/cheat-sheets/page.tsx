import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Download, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Cheat Sheets | Joseph Anand',
  description: 'Download practical cheat sheets on emotional intelligence, leadership, and personal development.',
}

const cheatSheets = [
  {
    id: 1,
    title: 'Emotional Intelligence Quick Guide',
    description: 'Master the fundamentals of emotional intelligence with this comprehensive quick reference guide.',
    category: 'Emotional Intelligence',
    downloadUrl: '#',
  },
  {
    id: 2,
    title: 'Leadership Principles Checklist',
    description: 'A practical checklist for developing and maintaining effective leadership practices.',
    category: 'Leadership',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: 'Positive Psychology Practices',
    description: 'Daily practices and techniques to build resilience and well-being.',
    category: 'Personal Development',
    downloadUrl: '#',
  },
  {
    id: 4,
    title: 'Coaching Conversation Framework',
    description: 'Structure your coaching conversations with this proven framework.',
    category: 'Coaching',
    downloadUrl: '#',
  },
]

export default function CheatSheetsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-cream to-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Quick Reference
            </span>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl font-bold text-navy">
              Cheat Sheets
            </h1>
            <p className="mt-6 text-xl text-charcoal/70 max-w-2xl mx-auto">
              Download practical guides to support your journey in emotional intelligence and personal growth.
            </p>
          </div>
        </section>

        {/* Cheat Sheets Grid */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {cheatSheets.map((sheet) => (
                <div
                  key={sheet.id}
                  className="rounded-lg border border-navy/10 bg-cream/50 p-8 hover:border-gold/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="h-8 w-8 text-gold" />
                    <span className="text-xs font-semibold text-gold uppercase tracking-widest">
                      {sheet.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">
                    {sheet.title}
                  </h3>
                  <p className="text-charcoal/70 mb-6">
                    {sheet.description}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100"
                  >
                    <a href={sheet.downloadUrl}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-cream">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              More Resources Coming Soon
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Subscribe to our newsletter to get notified when new cheat sheets are available.
            </p>
            <Button
              asChild
              className="bg-gold text-navy hover:bg-cream transition-colors duration-100"
            >
              <Link href="/#newsletter">Join the Inner Circle</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

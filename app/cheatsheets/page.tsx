import { Metadata } from 'next'
import { Download, FileText, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cheat Sheets | Joseph Anand',
  description: 'Download exclusive EQ cheat sheets, worksheets, and resources for emotional intelligence and personal growth.',
}

const cheatsheets = [
  {
    id: 1,
    title: 'Pause On Purpose - 12 Core Practices Cheat Sheet',
    description: 'A comprehensive visual guide to the 12 core practices of the Pause On Purpose framework. Master the power of pause in different situations with this quick reference.',
    category: 'Emotional Intelligence',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5958285307021037120-wbTG55tGAAVnUX6DCQApIy2is03Qxe.jpg',
    downloadLink: '/api/download/pause-on-purpose',
    featured: true,
  },
  {
    id: 2,
    title: 'Leadership Communication Worksheet',
    description: 'Practical worksheet for mastering communication in project leadership through emotional intelligence principles.',
    category: 'Leadership',
    downloadLink: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Emotional Awareness Tracker',
    description: 'Daily tracker to monitor your emotions, triggers, and responses. Perfect for developing self-awareness skills.',
    category: 'Self-Awareness',
    downloadLink: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Conflict Resolution Guide',
    description: 'Step-by-step guide to resolving conflicts using emotional intelligence principles for better outcomes.',
    category: 'Conflict Resolution',
    downloadLink: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Stress Management Toolkit',
    description: 'Comprehensive toolkit for managing stress and building resilience through EQ techniques.',
    category: 'Stress Management',
    downloadLink: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'EQ in the Workplace',
    description: 'Guide to applying emotional intelligence in professional settings to improve relationships and performance.',
    category: 'Professional Development',
    downloadLink: '#',
    featured: false,
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

      {/* Featured Cheatsheet */}
      {cheatsheets.find((sheet) => sheet.featured) && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-card border-2 border-gold rounded-2xl p-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <Image
                  src={cheatsheets.find((sheet) => sheet.featured)?.image || ''}
                  alt="Pause On Purpose Cheatsheet"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="inline-block w-fit px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
                  Featured Resource
                </span>
                <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                  {cheatsheets.find((sheet) => sheet.featured)?.title}
                </h2>
                <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
                  {cheatsheets.find((sheet) => sheet.featured)?.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={cheatsheets.find((sheet) => sheet.featured)?.downloadLink}
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gold text-navy rounded-lg hover:bg-gold/90 transition-colors duration-200 font-semibold group"
                  >
                    <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Download PDF</span>
                  </a>
                  <Link
                    href="/#inner-circle"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-navy text-navy rounded-lg hover:bg-navy hover:text-cream transition-colors duration-200 font-semibold"
                  >
                    <span>Join Inner Circle</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}



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

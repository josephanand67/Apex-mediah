import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BooksHero } from '@/components/books/books-hero'
import { BooksGrid } from '@/components/books/books-grid'

export const metadata: Metadata = {
  title: 'Books',
  description: 'Explore the 12 transformative books by Joseph Anand covering emotional intelligence, personal growth, leadership, and purpose-driven living.',
}

export default function BooksPage() {
  return (
    <>
      <Navbar />
      
      {/* Back Arrow Navigation */}
      <div className="sticky top-0 z-10 bg-background border-b border-navy/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      <main>
        <BooksHero />
        <BooksGrid />
      </main>
      <Footer />
    </>
  )
}

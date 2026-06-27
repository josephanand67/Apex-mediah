import type { Metadata } from 'next'
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
      <main>
        <BooksHero />
        <BooksGrid />
      </main>
      <Footer />
    </>
  )
}

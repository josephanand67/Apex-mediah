import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BookDetail } from '@/components/books/book-detail'
import { RelatedBooks } from '@/components/books/related-books'
import { books, getBookBySlug } from '@/lib/books-data'

interface BookPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }))
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params
  const book = getBookBySlug(slug)
  
  if (!book) {
    return {
      title: 'Book Not Found',
    }
  }

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: `${book.title} | Joseph Anand`,
      description: book.description,
    },
  }
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params
  const book = getBookBySlug(slug)

  if (!book) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <BookDetail book={book} />
        <RelatedBooks currentSlug={slug} category={book.category} />
      </main>
      <Footer />
    </>
  )
}

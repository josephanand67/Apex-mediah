import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, PenLine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: "Articles, guides, and insights on emotional intelligence, leadership, and personal growth from Joseph Anand. Coming soon.",
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-navy overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cream/5 rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 text-gold rounded-2xl mb-8">
              <PenLine className="h-8 w-8" />
            </div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Blog</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream text-balance">
              Coming Soon
            </h1>
            <p className="mt-6 text-lg text-cream/70 leading-relaxed text-pretty">
              We&apos;re preparing valuable articles, guides, and insights. Check back soon.
            </p>
            <Link
              href="/"
              prefetch={true}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-cream transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

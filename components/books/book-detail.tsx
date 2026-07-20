'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Share2, BookOpen } from 'lucide-react'
import { memo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/premium-effects'
import { BuyNowDropdown } from '@/components/buy-now-dropdown'
import { useToast } from '@/components/ui/use-toast'
import type { Book } from '@/lib/books-data'

interface BookDetailProps {
  book: Book
}

export const BookDetail = memo(function BookDetail({ book }: BookDetailProps) {
  const [isSharing, setIsSharing] = useState(false)
  const { toast } = useToast()

  const handleShare = async () => {
    setIsSharing(true)
    try {
      const shareData = {
        title: book.title,
        text: `${book.title} by Joseph Anand - ${book.subtitle}`,
        url: typeof window !== 'undefined' ? window.location.href : '',
      }

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        // Fallback: Copy URL to clipboard
        await navigator.clipboard.writeText(shareData.url)
        toast({
          title: 'Copied!',
          description: 'Page link copied to clipboard',
        })
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('[v0] Share error:', error)
        // Fallback: Copy to clipboard if share fails
        try {
          await navigator.clipboard.writeText(window.location.href)
          toast({
            title: 'Copied!',
            description: 'Page link copied to clipboard',
          })
        } catch (clipboardError) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Unable to share',
          })
        }
      }
    } finally {
      setIsSharing(false)
    }
  }
  return (
    <section className="pt-32 pb-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/books"
            prefetch={true}
            className="inline-flex items-center text-navy hover:text-gold transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Books
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Book Cover */}
          <ScrollReveal className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={book.coverImage}
                  alt={`${book.title} by Joseph Anand`}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  priority
                  quality={95}
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'right center'
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Book Info */}
          <ScrollReveal delay={100}>
            <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
              {book.category}
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
              {book.title}
            </h1>
            
            <p className="text-xl text-gold font-accent italic mb-6">
              {book.subtitle}
            </p>

            <div className="prose prose-lg max-w-none text-charcoal/80 mb-8">
              <p className="leading-relaxed">
                {book.description}
              </p>
              <p className="leading-relaxed mt-4">
                In this transformative book, Joseph Anand draws upon his 40+ years of experience in leadership and personal development to guide readers through a journey of self-discovery and growth. Each chapter offers practical wisdom and actionable insights that can be immediately applied to your personal and professional life.
              </p>
            </div>

            {/* Author Note */}
            <div className="bg-soft-gold/50 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy mb-2">Author&apos;s Note</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    &ldquo;I wrote this book to share the wisdom gathered through decades of helping leaders and individuals transform their lives. My hope is that it serves as a guide on your own journey toward purpose and fulfillment.&rdquo;
                  </p>
                  <p className="mt-2 text-gold font-medium text-sm">— Joseph Anand</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <BuyNowDropdown
                amazonUrl={book.amazonUrl}
                barnesNobleUrl={book.barnesNobleUrl}
                partridgeUrl={book.partridgeUrl}
                size="lg"
                fullWidth={true}
              />
              <Button
                onClick={handleShare}
                disabled={isSharing}
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-cream transition-all duration-300 w-full sm:w-auto"
              >
                <Share2 className="mr-2 h-4 w-4" />
                {isSharing ? 'Sharing...' : 'Share'}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
})

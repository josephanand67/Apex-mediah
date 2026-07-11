'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { VerifyNewsletterContent } from './verify-content'

export default function VerifyNewsletterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="rounded-lg bg-white p-8 shadow-sm border border-navy/10 text-center">
                <Loader className="mx-auto h-16 w-16 text-gold animate-spin mb-6" />
                <h1 className="text-3xl font-serif font-bold text-navy mb-2">
                  Verifying Your Email
                </h1>
                <p className="text-lg text-charcoal/70">
                  Please wait while we confirm your subscription...
                </p>
              </div>
            }
          >
            <VerifyNewsletterContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  )
}

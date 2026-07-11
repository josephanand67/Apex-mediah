'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function VerifyNewsletterPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      setMessage('Invalid or missing verification link.')
      return
    }

    // In a production app, you would send the token to your backend to verify
    // For now, we'll simulate a successful verification
    const verifyEmail = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // In production, send token to backend:
        // const response = await fetch('/api/newsletter/verify', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ token })
        // })
        
        setStatus('success')
        setMessage('Your email has been confirmed! You are now subscribed to the Inner Circle newsletter.')
      } catch (error) {
        setStatus('error')
        setMessage('Unable to verify your email. Please try again or contact support.')
      }
    }

    verifyEmail()
  }, [token])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-8 shadow-sm border border-navy/10 text-center">
            {status === 'verifying' && (
              <>
                <Loader className="mx-auto h-16 w-16 text-gold animate-spin mb-6" />
                <h1 className="text-3xl font-serif font-bold text-navy mb-2">
                  Verifying Your Email
                </h1>
                <p className="text-lg text-charcoal/70">
                  Please wait while we confirm your subscription...
                </p>
              </>
            )}

            {status === 'success' && (
              <>
                <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-6" />
                <h1 className="text-3xl font-serif font-bold text-navy mb-4">
                  Thank You for Joining!
                </h1>
                <p className="text-lg text-charcoal/70 mb-8">
                  {message}
                </p>
                <p className="text-base text-charcoal/60 mb-8">
                  You&apos;ll now receive exclusive insights on emotional intelligence, leadership wisdom, and transformative practices.
                </p>
                <Button
                  asChild
                  className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100"
                >
                  <Link href="/">Return to Home</Link>
                </Button>
              </>
            )}

            {status === 'error' && (
              <>
                <AlertCircle className="mx-auto h-16 w-16 text-red-600 mb-6" />
                <h1 className="text-3xl font-serif font-bold text-navy mb-4">
                  Verification Failed
                </h1>
                <p className="text-lg text-charcoal/70 mb-8">
                  {message}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100"
                  >
                    <Link href="/">Return to Home</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-navy text-navy hover:bg-cream"
                  >
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

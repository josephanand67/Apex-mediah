'use client'

import { ArrowRight, Mail, CheckCircle, Loader } from 'lucide-react'
import { memo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollReveal } from '@/components/premium-effects'
import { useToast } from '@/hooks/use-toast'

export const NewsletterSection = memo(function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      toast({
        variant: 'destructive',
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
      })
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        toast({
          title: 'Thank You for Joining!',
          description: 'Check your email to confirm your subscription.',
        })

        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        toast({
          variant: 'destructive',
          title: 'Subscription Failed',
          description: data.error || 'Failed to process your subscription. Please try again.',
        })
      }
    } catch (error) {
      console.error('Newsletter error:', error)
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="inner-circle" className="py-16 bg-cream relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Stay Connected
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            Join the Inner Circle
          </h2>
          <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto text-lg">
            Receive exclusive insights on emotional intelligence, leadership wisdom, and transformative practices directly in your inbox.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {submitted ? (
            <div className="mt-10 max-w-lg mx-auto p-6 bg-white rounded-lg border border-gold/20">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-navy mb-2">
                Thank You for Joining!
              </h3>
              <p className="text-charcoal/70 mb-4">
                Check your email to confirm your subscription. We&apos;ve also sent you a notification, and you&apos;ll start receiving our exclusive content soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/40" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="pl-12 h-14 bg-card border-border focus:border-gold focus:ring-gold text-base disabled:opacity-50"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-14 px-8 bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader className="mr-2 h-5 w-5 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          )}
          <p className="mt-4 text-sm text-charcoal/50">
            No spam. Unsubscribe anytime. Your privacy is respected.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
})

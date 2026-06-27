'use client'

import { ArrowRight, Mail } from 'lucide-react'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollReveal } from '@/components/premium-effects'

export const NewsletterSection = memo(function NewsletterSection() {
  return (
    <section className="py-16 bg-cream relative overflow-hidden">
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
          <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/40" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-12 h-14 bg-card border-border focus:border-gold focus:ring-gold text-base"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100"
            >
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          <p className="mt-4 text-sm text-charcoal/50">
            No spam. Unsubscribe anytime. Your privacy is respected.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
})

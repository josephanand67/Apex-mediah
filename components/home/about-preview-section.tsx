'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { expertise } from '@/lib/site-config'
import { ScrollReveal, FloatingParticles, DecorativeLine } from '@/components/premium-effects'

export const AboutPreviewSection = memo(function AboutPreviewSection() {
  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      {/* Simplified background */}
      <FloatingParticles count={8} />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal className="relative order-2 lg:order-1 w-full">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-square rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/author-portrait.png"
                  alt="Joseph Anand - Executive Coach & Author"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 bg-gold/15 rounded-2xl -z-10" />
              <div className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 border-2 border-gold/20 rounded-full -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 lg:order-2 w-full">
            <ScrollReveal>
              <span className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest block">
                About Joseph
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                A Lifetime of Leadership & Transformation
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <DecorativeLine className="my-6 max-w-xs" />
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Joseph Anand is an Engineer and accomplished project management professional in the Energy and Oil & Gas Industry with 40 years of experience leading diverse teams in successfully delivering complex multi-billion-dollar mega projects across the globe.
              </p>
              <p className="mt-4 text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Beyond managing mega projects, Joseph is an engaging, articulate and highly energetic facilitator, transformative coach, and inspiring public speaker committed to helping people identify and realize their maximum potential.
              </p>
            </ScrollReveal>

            {/* Expertise Tags */}
            <ScrollReveal delay={150}>
              <div className="mt-8 flex flex-wrap gap-2">
                {expertise.slice(0, 6).map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-card border border-border text-navy text-xs sm:text-sm font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100 w-full sm:w-auto text-sm sm:text-base"
                >
                  <Link href="/about" prefetch={true}>
                    Learn More About Joseph
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
})

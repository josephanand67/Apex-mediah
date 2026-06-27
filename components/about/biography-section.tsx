'use client'

import { Quote } from 'lucide-react'
import { memo } from 'react'
import { expertise } from '@/lib/site-config'
import { ScrollReveal } from '@/components/premium-effects'

export const BiographySection = memo(function BiographySection() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Bio */}
        <div className="grid lg:grid-cols-3 gap-12">
          <ScrollReveal className="lg:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">
              Professional Journey
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal/80">
              <p className="leading-relaxed">
                Joseph Anand is an Engineer and accomplished project management professional in the Energy and Oil & Gas Industry with 40 years of experience leading diverse teams in successfully delivering complex multi-billion-dollar mega projects across the globe.
              </p>
              <p className="leading-relaxed mt-6">
                Beyond managing mega projects, Joseph is an engaging, articulate and highly energetic facilitator, transformative coach, and inspiring public speaker committed to helping people identify and realize their maximum potential in personal and professional arenas.
              </p>
              <p className="leading-relaxed mt-6">
                Joseph has over 40 years of global experience leading large-scale projects and developing leaders. He engages people in deep and reflective learning conversations that stimulate them to rediscover themselves, reaffirm their values, and start living a purpose-driven life.
              </p>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={100} className="relative">
            <div className="sticky top-32 bg-navy rounded-2xl p-8 text-cream">
              <Quote className="h-10 w-10 text-gold/50 mb-4" />
              <p className="font-accent italic text-xl leading-relaxed">
                &ldquo;My mission is to help people identify and realize their purpose, maximize their potential, and achieve meaningful transformation.&rdquo;
              </p>
              <p className="mt-6 text-gold font-semibold">
                &mdash; Joseph Anand
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Expertise */}
        <ScrollReveal className="mt-20">
          <h3 className="font-serif text-2xl font-bold text-navy mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((item) => (
              <div
                key={item}
                className="bg-soft-gold/50 rounded-xl p-6 text-center hover:bg-gold/20 transition-colors duration-300"
              >
                <span className="text-navy font-medium">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
})

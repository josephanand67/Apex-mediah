'use client'

import { memo } from 'react'
import { ScrollReveal } from '@/components/premium-effects'

const milestones = [
  {
    year: '1984',
    title: 'Engineering Career Begins',
    description: 'Started career as a Mechanical Engineer in the Energy and Oil & Gas Industry.',
  },
  {
    year: '1990s',
    title: 'Global Project Leadership',
    description: 'Led diverse teams in delivering complex multi-billion-dollar mega projects across the globe.',
  },
  {
    year: '2000s',
    title: 'Leadership Development Focus',
    description: 'Began focusing on leadership development and coaching, helping executives reach their potential.',
  },
  {
    year: '2010s',
    title: 'Advanced Studies',
    description: 'Completed Master of Applied Positive Psychology & Coaching Psychology, followed by PhD in Coaching Psychology.',
  },
  {
    year: '2020s',
    title: 'Author & Thought Leader',
    description: 'Published 12 transformative books on emotional intelligence, personal growth, and purpose-driven living.',
  },
  {
    year: 'Present',
    title: 'Global Impact',
    description: 'Continuing to transform lives through coaching, speaking, and writing worldwide.',
  },
]

export const TimelineSection = memo(function TimelineSection() {
  return (
    <section className="py-24 bg-soft-gold/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            The Journey
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy">
            A Lifetime of Excellence
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy/20 hidden lg:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                  <span className="inline-block px-4 py-1 bg-gold text-navy text-sm font-bold rounded-full mb-4">
                    {milestone.year}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-cream hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

'use client'

import { Quote } from 'lucide-react'
import { memo } from 'react'

const testimonials = [
  {
    quote: "Joseph Anand's Paradoxes offers a thoughtful exploration of the contradictions that shape human experience. Rather than promising easy answers, the book invites readers to examine the tensions between certainty and doubt, success and failure, stability and change.",
    author: "Michael Reynolds",
  },
  {
    quote: "In a world filled with quick fixes and motivational slogans, Paradoxes takes a different path. Joseph Anand explores how many of life's most meaningful outcomes emerge not from avoiding challenges but from engaging with them.",
    author: "Sarah Whitmore",
  },
  {
    quote: "Pause on Purpose reminds us that some of life's most important decisions are made not in moments of action, but in moments of reflection. A meaningful framework for responding to challenges with greater intention.",
    author: "David Parker",
  },
  {
    quote: "Rather than promoting productivity shortcuts or quick fixes, Pause on Purpose explores a deeper human capacity: the ability to remain present under pressure.",
    author: "Emily Carter",
  },
  {
    quote: "Perception examines one of the most influential yet often overlooked forces shaping human behavior. It reveals how perception quietly influences the decisions we make, the conflicts we encounter, and the realities we believe.",
    author: "Jonathan Hayes",
  },
  {
    quote: "Perception offers a compelling examination of how stress, identity, memory, and emotion shape what feels true. Readers interested in leadership, self-awareness, and decision-making will find a rich source of reflection and insight.",
    author: "Rachel Morgan",
  },
]

const TestimonialCard = memo(function TestimonialCard({ 
  testimonial, 
  index 
}: { 
  testimonial: typeof testimonials[0]
  index: number 
}) {
  return (
    <div
      className="group relative bg-gradient-to-b from-cream/10 to-cream/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 lg:p-8 border border-cream/10 hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Quote icon */}
      <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-8 h-8 md:w-10 md:h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
        <Quote className="h-4 w-4 md:h-5 md:w-5 text-navy" />
      </div>

      {/* Quote text */}
      <blockquote className="text-cream/80 leading-relaxed text-sm md:text-base lg:text-lg font-light italic flex-grow pt-2">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-cream/10">
        <p className="font-semibold text-cream text-sm md:text-base">
          {testimonial.author}
        </p>
        <p className="text-xs md:text-sm text-gold/70 mt-1">
          Reader
        </p>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-br-2xl">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-gold/10 to-transparent" />
      </div>
    </div>
  )
})

export const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section className="py-20 bg-navy relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-cream">
            What Readers Are Saying
          </h2>
          <p className="mt-4 text-cream/70 max-w-2xl mx-auto">
            Thoughtful reflections on Joseph Anand&apos;s work exploring perception, emotional intelligence, growth, and human potential.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

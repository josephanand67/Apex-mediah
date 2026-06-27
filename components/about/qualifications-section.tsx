'use client'

import { GraduationCap, Award, BadgeCheck } from 'lucide-react'
import { memo } from 'react'
import { qualifications, certifications } from '@/lib/site-config'
import { ScrollReveal } from '@/components/premium-effects'

export const QualificationsSection = memo(function QualificationsSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Credentials
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy">
            Qualifications & Certifications
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Qualifications */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy">
                Academic Qualifications
              </h3>
            </div>
            <div className="space-y-4">
              {qualifications.map((qual) => (
                <div
                  key={qual}
                  className="flex items-start gap-4 p-4 bg-soft-gold/30 rounded-xl"
                >
                  <BadgeCheck className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-navy font-medium">{qual}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy">
                Professional Certifications
              </h3>
            </div>
            <div className="grid gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:border-gold/30 transition-colors"
                >
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-sm text-charcoal">{cert}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
})

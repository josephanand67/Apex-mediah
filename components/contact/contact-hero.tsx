import { Mail } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 text-navy text-sm font-semibold uppercase tracking-widest rounded-full mb-6">
          <Mail className="h-4 w-4" />
          Get In Touch
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
          Contact Joseph
        </h1>
        <p className="mt-6 text-xl text-navy/70 leading-relaxed max-w-2xl mx-auto">
          Whether you&apos;re interested in speaking engagements, coaching, media opportunities, or have a question, we&apos;d love to hear from you.
        </p>
      </div>
    </section>
  )
}

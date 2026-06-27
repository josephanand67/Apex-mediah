import { Play } from 'lucide-react'

export function EventsHero() {
  return (
    <section className="relative pt-32 pb-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 text-navy text-sm font-semibold uppercase tracking-widest rounded-full mb-6">
          <Play className="h-4 w-4" />
          Video Gallery
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
          Events & Appearances
        </h1>
        <p className="mt-6 text-xl text-navy/70 leading-relaxed max-w-2xl mx-auto">
          Watch highlights from book launches, author spotlights, and speaking sessions featuring Joseph Anand.
        </p>
      </div>
    </section>
  )
}

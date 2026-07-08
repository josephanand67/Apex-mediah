import { ShoppingBag } from 'lucide-react'

export function ShopHero() {
  return (
    <section className="relative pt-32 pb-20 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold uppercase tracking-widest rounded-full mb-6">
          <ShoppingBag className="h-4 w-4" />
          Shop
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
          The Book Shop
        </h1>
        <p className="mt-6 text-xl text-cream/70 leading-relaxed max-w-2xl mx-auto">
          Browse and purchase Joseph Anand&apos;s transformative books on emotional intelligence, leadership, and personal growth.
        </p>
      </div>
    </section>
  )
}

import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-semibold uppercase tracking-widest rounded-full mb-6">
              About Joseph
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
              Transforming Lives Through{' '}
              <span className="text-gold">Wisdom & Experience</span>
            </h1>
            <p className="mt-6 text-xl text-cream/70 leading-relaxed">
              With over four decades of global leadership experience, Joseph Anand has dedicated his life to helping individuals and organizations unlock their full potential.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/images/author-portrait.png"
                alt="Joseph Anand - Author, Speaker, Executive Coach"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

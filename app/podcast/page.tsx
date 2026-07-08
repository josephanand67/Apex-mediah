'use client'

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-12 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-navy mb-4">Podcast</h1>
        <div className="bg-white rounded-lg border border-navy/10 p-12">
          <div className="mb-6">
            <div className="inline-block bg-soft-gold text-navy px-4 py-2 rounded-full text-lg font-semibold mb-4">
              Coming Soon
            </div>
          </div>
          <p className="text-2xl font-semibold text-navy mb-3">Exciting Audio Content Coming Soon</p>
          <p className="text-navy/70 text-lg leading-relaxed mb-8">
            We're launching an engaging podcast series featuring industry experts, thought leaders, and inspiring conversations. Get ready to listen to fresh perspectives and valuable insights.
          </p>
          <div className="space-y-3">
            <p className="text-navy/60">Be the first to know when our podcast episodes go live!</p>
            <a href="/#newsletter" className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
              Notify Me When Available
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-12 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-navy mb-4">Blog</h1>
        <div className="bg-white rounded-lg border border-navy/10 p-12">
          <div className="mb-6">
            <div className="inline-block bg-soft-gold text-navy px-4 py-2 rounded-full text-lg font-semibold mb-4">
              Coming Soon
            </div>
          </div>
          <p className="text-2xl font-semibold text-navy mb-3">Exciting Content Coming Your Way</p>
          <p className="text-navy/70 text-lg leading-relaxed mb-8">
            We're working on bringing you insightful articles, expert tips, and valuable resources. Stay tuned for our blog launch!
          </p>
          <div className="space-y-3">
            <p className="text-navy/60">Subscribe to stay updated when new articles are published.</p>
            <a href="/#newsletter" className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
              Notify Me When Ready
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

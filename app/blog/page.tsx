'use client'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Apex Media",
      date: "2024-01-15",
      excerpt: "Learn the fundamentals of Apex Media and how to maximize your content strategy.",
      content: "Apex Media provides powerful tools for content creators. In this post, we'll explore the core features and best practices for getting started.",
      category: "Getting Started"
    },
    {
      id: 2,
      title: "Advanced Content Strategies",
      date: "2024-01-10",
      excerpt: "Discover advanced techniques to take your content to the next level.",
      content: "Building on the basics, this guide covers advanced content strategies that have helped top creators scale their audiences.",
      category: "Strategy"
    },
    {
      id: 3,
      title: "SEO Tips for Content Creators",
      date: "2024-01-05",
      excerpt: "Optimize your content for search engines and reach a wider audience.",
      content: "SEO is crucial for content visibility. Learn practical tips to improve your search rankings and attract organic traffic.",
      category: "SEO"
    }
  ]

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy mb-4">Blog</h1>
        <p className="text-navy/70 mb-12">Latest insights and tips from the Apex Media team</p>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg border border-navy/10 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <span className="inline-block bg-soft-gold text-navy px-3 py-1 rounded text-sm font-medium">{post.category}</span>
                <time className="text-navy/60 text-sm">{new Date(post.date).toLocaleDateString()}</time>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">{post.title}</h2>
              <p className="text-navy/70 mb-4">{post.excerpt}</p>
              <p className="text-navy/60 text-sm">{post.content}</p>
              <a href="#" className="inline-block mt-4 text-gold font-semibold hover:underline">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

export default function LatestNewsPage() {
  const newsItems = [
    {
      id: 1,
      headline: "New Features Released",
      date: "2024-01-18",
      summary: "Exciting new features have been added to the Apex Media platform.",
      details: "We're thrilled to announce the release of our latest features designed to improve your workflow and boost productivity. These updates include enhanced analytics, better collaboration tools, and improved user interface.",
      importance: "high"
    },
    {
      id: 2,
      headline: "Community Milestone: 10,000 Users",
      date: "2024-01-15",
      summary: "Our community has reached an incredible milestone of 10,000 active users.",
      details: "Thank you to all our users for making this possible. We're committed to continuing to improve and innovate to serve our growing community.",
      importance: "high"
    },
    {
      id: 3,
      headline: "Upcoming Webinar Series",
      date: "2024-01-12",
      summary: "Join us for a series of educational webinars covering platform best practices.",
      details: "Starting next month, we'll be hosting weekly webinars where industry experts share tips, tricks, and success stories. Sign up to reserve your spot.",
      importance: "medium"
    },
    {
      id: 4,
      headline: "Platform Performance Improvements",
      date: "2024-01-10",
      summary: "We've optimized the platform for faster load times and better reliability.",
      details: "Behind the scenes, our team has been working on infrastructure improvements to ensure you have the best experience possible.",
      importance: "medium"
    }
  ]

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy mb-4">Latest News</h1>
        <p className="text-navy/70 mb-12">Stay updated with the latest news and announcements</p>
        
        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-navy/10 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                  item.importance === 'high' 
                    ? 'bg-gold text-navy' 
                    : 'bg-soft-gold text-navy'
                }`}>
                  {item.importance === 'high' ? 'Breaking News' : 'News'}
                </span>
                <time className="text-navy/60 text-sm">{new Date(item.date).toLocaleDateString()}</time>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-2">{item.headline}</h2>
              <p className="text-navy/70 mb-3">{item.summary}</p>
              <p className="text-navy/60">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

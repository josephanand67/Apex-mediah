'use client'

export default function PodcastPage() {
  const episodes = [
    {
      id: 1,
      title: "Episode 1: Content Creation Fundamentals",
      date: "2024-01-16",
      duration: "45 min",
      host: "John Anderson",
      description: "In this inaugural episode, we explore the fundamentals of content creation and discuss what it takes to build a successful media presence.",
      links: {
        spotify: "#",
        apple: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      title: "Episode 2: Interview with Industry Expert",
      date: "2024-01-09",
      duration: "52 min",
      host: "Sarah Johnson",
      description: "We sit down with a leading industry expert to discuss trends, challenges, and opportunities in the media landscape.",
      links: {
        spotify: "#",
        apple: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      title: "Episode 3: Tools & Technologies",
      date: "2024-01-02",
      duration: "38 min",
      host: "Mike Chen",
      description: "Explore the latest tools and technologies that are revolutionizing content creation and audience engagement.",
      links: {
        spotify: "#",
        apple: "#",
        youtube: "#"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy mb-4">Podcast</h1>
        <p className="text-navy/70 mb-12">Listen to our latest episodes featuring industry insights and expert interviews</p>
        
        <div className="space-y-8">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-white rounded-lg border border-navy/10 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="inline-block bg-soft-gold text-navy px-3 py-1 rounded text-sm font-medium mr-2">Podcast</span>
                  <span className="text-navy/60 text-sm">{episode.duration}</span>
                </div>
                <time className="text-navy/60 text-sm">{new Date(episode.date).toLocaleDateString()}</time>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-2">{episode.title}</h2>
              <p className="text-navy/70 mb-3">Host: <span className="font-semibold">{episode.host}</span></p>
              <p className="text-navy/60 mb-4">{episode.description}</p>
              
              <div className="flex gap-3 flex-wrap">
                <a href={episode.links.spotify} className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-cream rounded-lg hover:bg-navy/90 transition-colors text-sm font-medium">
                  Listen on Spotify
                </a>
                <a href={episode.links.apple} className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-cream rounded-lg hover:bg-navy/90 transition-colors text-sm font-medium">
                  Listen on Apple Podcasts
                </a>
                <a href={episode.links.youtube} className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-cream rounded-lg hover:bg-navy/90 transition-colors text-sm font-medium">
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

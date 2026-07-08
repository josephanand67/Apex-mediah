'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Download, BookOpen, Newspaper, RadioIcon, Headphones, ChevronRight } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
  category: string
}

interface NewsItem {
  id: number
  headline: string
  date: string
  summary: string
  importance: string
}

interface PodcastEpisode {
  id: number
  title: string
  date: string
  duration: string
  host: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Apex Media",
    date: "2024-01-15",
    excerpt: "Learn the fundamentals of Apex Media and how to maximize your content strategy.",
    category: "Getting Started"
  },
  {
    id: 2,
    title: "Advanced Content Strategies",
    date: "2024-01-10",
    excerpt: "Discover advanced techniques to take your content to the next level.",
    category: "Strategy"
  },
  {
    id: 3,
    title: "SEO Tips for Content Creators",
    date: "2024-01-05",
    excerpt: "Optimize your content for search engines and reach a wider audience.",
    category: "SEO"
  }
]

const newsItems: NewsItem[] = [
  {
    id: 1,
    headline: "New Features Released",
    date: "2024-01-18",
    summary: "Exciting new features have been added to the Apex Media platform.",
    importance: "high"
  },
  {
    id: 2,
    headline: "Community Milestone: 10,000 Users",
    date: "2024-01-15",
    summary: "Our community has reached an incredible milestone of 10,000 active users.",
    importance: "high"
  },
  {
    id: 3,
    headline: "Upcoming Webinar Series",
    date: "2024-01-12",
    summary: "Join us for a series of educational webinars covering platform best practices.",
    importance: "medium"
  }
]

const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 1,
    title: "Episode 1: Content Creation Fundamentals",
    date: "2024-01-16",
    duration: "45 min",
    host: "John Anderson"
  },
  {
    id: 2,
    title: "Episode 2: Interview with Industry Expert",
    date: "2024-01-09",
    duration: "52 min",
    host: "Sarah Johnson"
  },
  {
    id: 3,
    title: "Episode 3: Tools & Technologies",
    date: "2024-01-02",
    duration: "38 min",
    host: "Mike Chen"
  }
]

export function QuickLinksDropdown() {
  const [activeTab, setActiveTab] = useState<'main' | 'blog' | 'news' | 'podcast'>('main')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 text-navy hover:text-gold">
          Quick Links
          <ChevronRight className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-96 bg-cream border-navy/20 p-0 max-h-96 overflow-y-auto">
        {activeTab === 'main' ? (
          <>
            <DropdownMenuItem asChild>
              <Link href="/cheatsheets" className="flex items-center gap-2 cursor-pointer px-4 py-2">
                <Download className="h-4 w-4 text-gold" />
                <span>Cheat Sheets</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/books" className="flex items-center gap-2 cursor-pointer px-4 py-2">
                <BookOpen className="h-4 w-4 text-gold" />
                <span>Books</span>
              </Link>
            </DropdownMenuItem>
            <div className="border-t border-navy/10 my-2" />
            <DropdownMenuItem asChild>
              <button
                onClick={() => setActiveTab('blog')}
                className="w-full text-left flex items-center justify-between gap-2 cursor-pointer px-4 py-2"
              >
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-gold" />
                  <span>Blog</span>
                </div>
                <ChevronRight className="h-4 w-4 text-navy/50" />
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                onClick={() => setActiveTab('news')}
                className="w-full text-left flex items-center justify-between gap-2 cursor-pointer px-4 py-2"
              >
                <div className="flex items-center gap-2">
                  <RadioIcon className="h-4 w-4 text-gold" />
                  <span>Latest News</span>
                </div>
                <ChevronRight className="h-4 w-4 text-navy/50" />
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                onClick={() => setActiveTab('podcast')}
                className="w-full text-left flex items-center justify-between gap-2 cursor-pointer px-4 py-2"
              >
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-gold" />
                  <span>Podcast</span>
                </div>
                <ChevronRight className="h-4 w-4 text-navy/50" />
              </button>
            </DropdownMenuItem>
          </>
        ) : activeTab === 'blog' ? (
          <>
            <div className="px-4 py-3 border-b border-navy/10 flex items-center justify-between">
              <h3 className="font-semibold text-navy text-sm">Blog Posts</h3>
              <button
                onClick={() => setActiveTab('main')}
                className="text-navy/60 hover:text-navy transition-colors"
              >
                ←
              </button>
            </div>
            {blogPosts.map((post) => (
              <DropdownMenuItem key={post.id} asChild>
                <Link
                  href="/blog"
                  className="flex flex-col gap-1 cursor-pointer px-4 py-3 border-b border-navy/5 hover:bg-soft-gold/30"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-navy leading-tight flex-1">{post.title}</p>
                    <span className="text-xs bg-soft-gold text-navy px-2 py-1 rounded whitespace-nowrap">{post.category}</span>
                  </div>
                  <p className="text-xs text-navy/60">{new Date(post.date).toLocaleDateString()}</p>
                  <p className="text-xs text-navy/70 line-clamp-2">{post.excerpt}</p>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem asChild>
              <Link
                href="/blog"
                className="flex items-center justify-center gap-2 cursor-pointer px-4 py-2 text-gold font-semibold text-sm hover:bg-soft-gold/20"
              >
                View All Blog Posts →
              </Link>
            </DropdownMenuItem>
          </>
        ) : activeTab === 'news' ? (
          <>
            <div className="px-4 py-3 border-b border-navy/10 flex items-center justify-between">
              <h3 className="font-semibold text-navy text-sm">Latest News</h3>
              <button
                onClick={() => setActiveTab('main')}
                className="text-navy/60 hover:text-navy transition-colors"
              >
                ←
              </button>
            </div>
            {newsItems.map((item) => (
              <DropdownMenuItem key={item.id} asChild>
                <Link
                  href="/latest-news"
                  className="flex flex-col gap-1 cursor-pointer px-4 py-3 border-b border-navy/5 hover:bg-soft-gold/30"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-navy leading-tight flex-1">{item.headline}</p>
                    <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${
                      item.importance === 'high' ? 'bg-gold text-navy' : 'bg-soft-gold text-navy'
                    }`}>
                      {item.importance === 'high' ? 'Breaking' : 'News'}
                    </span>
                  </div>
                  <p className="text-xs text-navy/60">{new Date(item.date).toLocaleDateString()}</p>
                  <p className="text-xs text-navy/70 line-clamp-2">{item.summary}</p>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem asChild>
              <Link
                href="/latest-news"
                className="flex items-center justify-center gap-2 cursor-pointer px-4 py-2 text-gold font-semibold text-sm hover:bg-soft-gold/20"
              >
                View All News →
              </Link>
            </DropdownMenuItem>
          </>
        ) : activeTab === 'podcast' ? (
          <>
            <div className="px-4 py-3 border-b border-navy/10 flex items-center justify-between">
              <h3 className="font-semibold text-navy text-sm">Podcast Episodes</h3>
              <button
                onClick={() => setActiveTab('main')}
                className="text-navy/60 hover:text-navy transition-colors"
              >
                ←
              </button>
            </div>
            {podcastEpisodes.map((episode) => (
              <DropdownMenuItem key={episode.id} asChild>
                <Link
                  href="/podcast"
                  className="flex flex-col gap-1 cursor-pointer px-4 py-3 border-b border-navy/5 hover:bg-soft-gold/30"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-navy leading-tight flex-1">{episode.title}</p>
                    <span className="text-xs bg-soft-gold text-navy px-2 py-1 rounded whitespace-nowrap">{episode.duration}</span>
                  </div>
                  <p className="text-xs text-navy/60">Host: {episode.host}</p>
                  <p className="text-xs text-navy/60">{new Date(episode.date).toLocaleDateString()}</p>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem asChild>
              <Link
                href="/podcast"
                className="flex items-center justify-center gap-2 cursor-pointer px-4 py-2 text-gold font-semibold text-sm hover:bg-soft-gold/20"
              >
                Listen to All Episodes →
              </Link>
            </DropdownMenuItem>
          </>
        ) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

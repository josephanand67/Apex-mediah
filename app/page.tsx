import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { VideoBannerSection } from '@/components/home/video-banner-section'
import { FeaturedBooksSection } from '@/components/home/featured-books-section'
import { EQSeriesSection } from '@/components/home/eq-series-section'
import { WhereToFindBooksSection } from '@/components/home/where-to-find-books-section'
import { FeaturedVideoSection } from '@/components/home/featured-video-section'
import { AboutPreviewSection } from '@/components/home/about-preview-section'
import { TestimonialsSection } from '@/components/testimonials'
import { ContactSection } from '@/components/home/contact-section'
import { BlogSection } from '@/components/home/blog-section'
import { NewsletterSection } from '@/components/home/cta-sections'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoBannerSection />
        <AboutPreviewSection />
        <FeaturedBooksSection />
        <EQSeriesSection />
        <FeaturedVideoSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
        <WhereToFindBooksSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

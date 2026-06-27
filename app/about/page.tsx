import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AboutHero } from '@/components/about/about-hero'
import { BiographySection } from '@/components/about/biography-section'
import { TimelineSection } from '@/components/about/timeline-section'
import { QualificationsSection } from '@/components/about/qualifications-section'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Joseph Anand - Author, Speaker, Executive Coach, and Emotional Intelligence Expert with 40+ years of global leadership experience.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <BiographySection />
        <TimelineSection />
        <QualificationsSection />
      </main>
      <Footer />
    </>
  )
}

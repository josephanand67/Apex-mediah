import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForms } from '@/components/contact/contact-forms'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Joseph Anand for speaking engagements, coaching inquiries, media requests, or general questions.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactForms />
      </main>
      <Footer />
    </>
  )
}

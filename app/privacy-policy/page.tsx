import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Joseph Anand',
  description: 'Privacy Policy for Joseph Anand official website. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cream/5 rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold uppercase tracking-widest rounded-full mb-6">
              <Shield className="h-4 w-4" />
              Legal
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream">
              Privacy Policy
            </h1>
            <p className="mt-4 text-cream/70">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/"
              prefetch={true}
              className="inline-flex items-center text-sm text-navy hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border space-y-8">
                
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Introduction</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Welcome to the official website of Joseph Anand. We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website and use our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Information We Collect</h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We may collect the following types of information:
                  </p>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-2 ml-4">
                    <li><strong>Contact Form Submissions:</strong> When you use our contact form, we collect your name, email address, and any message content you provide.</li>
                    <li><strong>Newsletter Subscriptions:</strong> If you subscribe to our newsletter, we collect your email address to send you updates, insights, and promotional content.</li>
                    <li><strong>Website Analytics:</strong> We use analytics tools to collect anonymous data about how visitors use our website, including pages visited, time spent on the site, and device information.</li>
                    <li><strong>Cookies:</strong> Our website may use cookies to enhance your browsing experience and remember your preferences.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-2 ml-4">
                    <li>To respond to your inquiries and communicate with you</li>
                    <li>To send newsletters and updates if you have subscribed</li>
                    <li>To improve our website and user experience</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To fulfill any other purpose for which you provide information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Data Storage and Protection</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Your personal information is stored securely and is only accessible to authorized personnel. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Third-Party Services</h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Our website may use third-party services that collect and process your information. These services include:
                  </p>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-2 ml-4">
                    <li><strong>Vercel:</strong> Website hosting and deployment</li>
                    <li><strong>Analytics Providers:</strong> To track website usage and performance</li>
                    <li><strong>Email Service Providers:</strong> To manage newsletter subscriptions and communications</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    These third-party services have their own privacy policies, and we encourage you to review them.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Your Rights</h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-2 ml-4">
                    <li>The right to access the personal information we hold about you</li>
                    <li>The right to request correction of inaccurate information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to unsubscribe from our newsletter at any time</li>
                    <li>The right to opt-out of certain data collection practices</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Changes to This Policy</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on this page with a new effective date.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Contact Us</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <p className="mt-4 text-navy font-medium">
                    Email: <a href="mailto:anaman@gmail.com" className="text-gold hover:underline">anaman@gmail.com</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

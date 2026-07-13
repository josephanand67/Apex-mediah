import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Joseph Anand',
  description: 'Terms of Service for Joseph Anand official website. Read our terms and conditions for using this website.',
}

export default function TermsOfServicePage() {
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
              <FileText className="h-4 w-4" />
              Legal
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream">
              Terms of Service
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
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Agreement to Terms</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Welcome to the official website of Joseph Anand. By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Website Usage</h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    By using this website, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-2 ml-4">
                    <li>Use the website only for lawful purposes</li>
                    <li>Not engage in any activity that disrupts or interferes with the website</li>
                    <li>Not attempt to gain unauthorized access to any part of the website</li>
                    <li>Not use automated systems or software to extract data from the website</li>
                    <li>Provide accurate information when submitting forms or communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Intellectual Property Rights</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of Joseph Anand or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of Joseph Anand.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Content Ownership</h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    You may not:
                  </p>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-2 ml-4">
                    <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission</li>
                    <li>Use any content for commercial purposes without prior authorization</li>
                    <li>Modify or create derivative works based on the website content</li>
                    <li>Remove any copyright or proprietary notices from the materials</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    Personal, non-commercial use of the website content is permitted, provided you maintain all copyright and other proprietary notices.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">User Responsibilities</h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    As a user of this website, you are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-2 ml-4">
                    <li>Maintaining the confidentiality of any account information</li>
                    <li>All activities that occur under your account or IP address</li>
                    <li>Ensuring that your use of the website does not violate any applicable laws</li>
                    <li>Respecting the intellectual property rights of others</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">External Links Disclaimer</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    This website may contain links to external websites that are not owned or controlled by Joseph Anand. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that Joseph Anand shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    In no event shall Joseph Anand, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Disclaimer</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Changes to Terms</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We reserve the right to modify or replace these Terms of Service at any time. It is your responsibility to check this page periodically for changes. Your continued use of the website following the posting of any changes constitutes acceptance of those changes.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Governing Law</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    These Terms shall be governed and construed in accordance with applicable laws, without regard to conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-4">Contact Us</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="mt-4 text-navy font-medium">
                    Email: <a href="mailto:contact@josephanand.com" className="text-gold hover:underline">contact@josephanand.com</a>
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

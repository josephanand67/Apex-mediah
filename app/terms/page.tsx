import { Metadata } from "next"
import { FadeIn } from "@/components/animations"
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: "Terms of Service | Joseph Anand",
  description: "Terms of service for Joseph Anand's website.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: January 1, 2024
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground/80">
                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Acceptance of Terms
                  </h2>
                  <p className="leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Intellectual Property
                  </h2>
                  <p className="leading-relaxed">
                    All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of Joseph Anand and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Use of Website
                  </h2>
                  <p className="leading-relaxed mb-4">
                    You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others. You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the website in any way that violates applicable laws</li>
                    <li>Attempt to gain unauthorized access to any part of the website</li>
                    <li>Interfere with the proper working of the website</li>
                    <li>Use automated systems to access the website without permission</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Disclaimer
                  </h2>
                  <p className="leading-relaxed">
                    The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="leading-relaxed">
                    In no event shall Joseph Anand be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use this website.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Changes to Terms
                  </h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Contact Information
                  </h2>
                  <p className="leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at{' '}
                    <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                      {siteConfig.email}
                    </a>.
                  </p>
                </section>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

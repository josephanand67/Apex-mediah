import { Metadata } from "next"
import { FadeIn } from "@/components/animations"
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: "Privacy Policy | Joseph Anand",
  description: "Privacy policy for Joseph Anand's website.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
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
                    Introduction
                  </h2>
                  <p className="leading-relaxed">
                    Joseph Anand (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Information We Collect
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We may collect information you provide directly to us, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and email address when you subscribe to our newsletter</li>
                    <li>Contact information when you submit inquiries</li>
                    <li>Information provided when registering for events</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Send you newsletters and updates about new books and events</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Process event registrations</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Data Security
                  </h2>
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Your Rights
                  </h2>
                  <p className="leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Contact Us
                  </h2>
                  <p className="leading-relaxed">
                    If you have any questions about this privacy policy, please contact us at{' '}
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

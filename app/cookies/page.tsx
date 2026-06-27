import { Metadata } from "next"
import { FadeIn } from "@/components/animations"
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: "Cookie Policy | Joseph Anand",
  description: "Cookie policy for Joseph Anand's website.",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cookie Policy
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
                    What Are Cookies
                  </h2>
                  <p className="leading-relaxed">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    How We Use Cookies
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Session Cookies</h3>
                      <p className="text-sm">Temporary cookies that expire when you close your browser.</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Persistent Cookies</h3>
                      <p className="text-sm">Remain on your device for a set period or until manually deleted.</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                      <p className="text-sm">Set by third-party services we use, such as analytics providers.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Managing Cookies
                  </h2>
                  <p className="leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, if you block or delete cookies, some features of our website may not function properly.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Contact Us
                  </h2>
                  <p className="leading-relaxed">
                    If you have any questions about our use of cookies, please contact us at{' '}
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

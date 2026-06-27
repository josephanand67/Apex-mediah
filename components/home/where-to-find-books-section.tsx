'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '@/components/premium-effects'

const platforms = [
  {
    name: 'Amazon',
    url: 'https://www.amazon.com/stores/Joseph-Anand/author/B0GMD1F13S?ref=ap_rdr&shoppingPortalEnabled=true',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    width: 120,
    height: 36,
  },
  {
    name: 'Goodreads',
    url: 'https://www.goodreads.com/author/list/48919926.Joseph_Anand',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Goodreads_logo_-_SuperTinyIcons.svg',
    width: 40,
    height: 40,
    text: 'goodreads',
  },
  {
    name: 'Barnes & Noble',
    url: 'https://www.barnesandnoble.com/search?attributes.contributorId=32783170&contributorName=Joseph%20Anand',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Barnes_%26_Noble_logo.svg',
    width: 180,
    height: 40,
  },
]

export function WhereToFindBooksSection() {
  return (
    <section className="py-12 bg-cream">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Where to Find Joseph Anand&apos;s Books
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Explore Joseph Anand&apos;s books across your favorite reading platforms.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 p-6 rounded-xl transition-all duration-300 hover:bg-navy/5 hover-lift"
                aria-label={`Visit Joseph Anand's ${platform.name} page`}
              >
                <div className="flex items-center gap-3 transition-transform duration-300 group-hover:scale-105">
                  {platform.name === 'Goodreads' ? (
                    <>
                      <div className="w-10 h-10 relative">
                        <Image
                          src={platform.logo}
                          alt={platform.name}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="font-serif text-2xl font-bold text-[#553B08] group-hover:text-[#7A5A1A] transition-colors">
                        goodreads
                      </span>
                    </>
                  ) : platform.name === 'Amazon' ? (
                    <div className="flex flex-col items-center">
                      <span className="font-sans text-3xl font-bold text-[#232F3E] tracking-tight group-hover:text-[#FF9900] transition-colors">
                        amazon
                      </span>
                      <div className="h-1 w-16 bg-[#FF9900] rounded-full mt-0.5" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="font-serif text-2xl font-bold text-[#2D5C2E] group-hover:text-[#3D7C3E] transition-colors">
                        Barnes & Noble
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-center text-sm text-charcoal/60 mt-6">
            Choose your preferred retailer to discover Joseph Anand&apos;s latest books.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

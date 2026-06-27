'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Youtube, Linkedin, Instagram, Mail, MapPin } from 'lucide-react'
import { siteConfig, footerAdditionalLinks } from '@/lib/site-config'
import { memo } from 'react'

const footerLinks = {
  quickLinks: [
    { name: 'About', href: '/about' },
    { name: 'Books', href: '/books' },
    { name: 'Events', href: '/events' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Latest News', href: '/news' },
    { name: 'Podcast', href: '/podcast' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
}

function FooterComponent() {
  return (
    <footer className="bg-navy text-cream">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" prefetch={true}>
              <Image
                src={siteConfig.logo}
                alt="L.I.F.E. manifested LLP"
                width={280}
                height={94}
                className="h-24 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-cream/70 leading-relaxed">
              Author, Speaker, Executive Coach, and Emotional Intelligence Expert helping leaders and individuals unlock their full potential.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-100 hover:bg-gold hover:text-navy"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-100 hover:bg-gold hover:text-navy"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-100 hover:bg-gold hover:text-navy"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-100 hover:bg-gold hover:text-navy"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold mt-0.5" />
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <span className="text-sm text-cream/70">Global</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/50">
              &copy; {new Date().getFullYear()} L.I.F.E. manifested LLP. All rights reserved.
            </p>
            <p className="text-sm text-cream/50">
              Living Intentionally for Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterComponent)

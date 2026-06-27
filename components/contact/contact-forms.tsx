'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Youtube, Linkedin, Instagram, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/lib/site-config'
import { ScrollReveal, FloatingParticles, DecorativeLine } from '@/components/premium-effects'

export function ContactForms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.comment.trim()) {
      newErrors.comment = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('loading')
    
    try {
      // Send email via API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', comment: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingParticles count={12} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-navy mb-6">
              Get In Touch
            </h2>
            <p className="text-charcoal/70 mb-8">
              Have a question or want to connect? Send a message and we will get back to you shortly.
            </p>
            
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-charcoal/70 hover:text-gold transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                {siteConfig.email}
              </a>
            </div>

            <div className="flex gap-3">
              <Link
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-all hover-lift"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-all hover-lift"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-all hover-lift"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-all hover-lift"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={100} className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 shadow-xl hover-glow">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-navy mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-charcoal/70">
                    Your message has been sent successfully. We will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`h-12 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`h-12 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className={`min-h-[150px] ${errors.comment ? 'border-red-500' : ''}`}
                    />
                    {errors.comment && (
                      <p className="text-sm text-red-500 mt-1">{errors.comment}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
                      <AlertCircle className="h-5 w-5" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300 hover-lift"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

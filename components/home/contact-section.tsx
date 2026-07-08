'use client'

import { useState, memo } from 'react'
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const ContactSection = memo(function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.comment) {
      return
    }

    setStatus('loading')

    try {
      const subject = encodeURIComponent(`Website Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.comment}`
      )
      
      window.location.href = `mailto:mictechydigitalcreator@gmail.com?subject=${subject}&body=${body}`
      
      setTimeout(() => {
        setStatus('success')
        setFormData({ name: '', email: '', comment: '' })
      }, 500)
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    if (status === 'error' || status === 'success') {
      setStatus('idle')
    }
  }

  return (
    <section className="py-14 bg-soft-gold/30">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-navy">
            Contact Us
          </h2>
          <p className="mt-3 text-charcoal/70 max-w-xl mx-auto">
            Have a question, feedback, or inquiry? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-2">
              Name <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/40" />
              <Input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="pl-12 h-12 bg-white border-border rounded-xl focus:border-gold focus:ring-gold"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-navy mb-2">
              Email <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/40" />
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="pl-12 h-12 bg-white border-border rounded-xl focus:border-gold focus:ring-gold"
              />
            </div>
          </div>

          {/* Comment Field */}
          <div>
            <label htmlFor="contact-comment" className="block text-sm font-medium text-navy mb-2">
              Comment <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-charcoal/40" />
              <textarea
                id="contact-comment"
                name="comment"
                required
                rows={4}
                value={formData.comment}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">Your message has been sent successfully.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">Something went wrong. Please try again.</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full h-12 bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-200 rounded-xl"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
})

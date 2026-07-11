'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Download, FileText, Loader } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const cheatSheets = [
  {
    id: 1,
    title: 'Pause on Purpose',
    description: '12 Core Practices to Master the Power of Pause. Learn proven techniques for conscious response in different situations.',
    category: 'Mindfulness & Leadership',
    image: '/images/pause-on-purpose-cheatsheet.jpg',
    isPdfSheet: true,
  },
  {
    id: 2,
    title: 'Emotional Intelligence Quick Guide',
    description: 'Master the fundamentals of emotional intelligence with this comprehensive quick reference guide.',
    category: 'Emotional Intelligence',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: 'Leadership Principles Checklist',
    description: 'A practical checklist for developing and maintaining effective leadership practices.',
    category: 'Leadership',
    downloadUrl: '#',
  },
  {
    id: 4,
    title: 'Positive Psychology Practices',
    description: 'Daily practices and techniques to build resilience and well-being.',
    category: 'Personal Development',
    downloadUrl: '#',
  },
]

export default function CheatSheetsPage() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null)

  const downloadPDF = async (sheet: typeof cheatSheets[0]) => {
    if (!sheet.isPdfSheet) return

    setDownloadingId(sheet.id)
    try {
      // Create a new PDF document
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      // Fetch the image
      const img = new window.Image()
      img.crossOrigin = 'anonymous'
      img.src = sheet.image

      img.onload = () => {
        // Get page dimensions
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()

        // Calculate dimensions to fit the image on the page
        const imgWidth = pageWidth - 20 // 10mm margins on sides
        const imgHeight = (img.height / img.width) * imgWidth

        // Center the image horizontally
        const x = 10
        const y = (pageHeight - imgHeight) / 2

        // Add the image to the PDF
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(img, 0, 0)
          const imgData = canvas.toDataURL('image/jpeg')
          pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight)
        }

        // Save the PDF
        pdf.save(`${sheet.title.replace(/\s+/g, '-').toLowerCase()}.pdf`)
        setDownloadingId(null)
      }

      img.onerror = () => {
        console.error('Failed to load image')
        setDownloadingId(null)
      }
    } catch (error) {
      console.error('Error generating PDF:', error)
      setDownloadingId(null)
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-cream to-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Quick Reference
            </span>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl font-bold text-navy">
              Cheat Sheets
            </h1>
            <p className="mt-6 text-xl text-charcoal/70 max-w-2xl mx-auto">
              Download practical guides to support your journey in emotional intelligence and personal growth.
            </p>
          </div>
        </section>

        {/* Cheat Sheets Grid */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {cheatSheets.map((sheet) => (
                <div key={sheet.id} className="bg-cream/50 rounded-lg border border-navy/10 overflow-hidden hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    {/* Image Preview */}
                    {sheet.image && (
                      <div className="md:col-span-2">
                        <div className="relative rounded-lg overflow-hidden bg-white border border-navy/10">
                          <Image
                            src={sheet.image}
                            alt={sheet.title}
                            width={800}
                            height={600}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <FileText className="h-8 w-8 text-gold flex-shrink-0" />
                          <span className="text-xs font-semibold text-gold uppercase tracking-widest text-right ml-2">
                            {sheet.category}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                          {sheet.title}
                        </h3>
                        <p className="text-charcoal/70 mb-6 text-sm leading-relaxed">
                          {sheet.description}
                        </p>
                      </div>

                      {/* Download Button */}
                      <Button
                        onClick={() => downloadPDF(sheet)}
                        disabled={downloadingId === sheet.id}
                        className="w-full bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100 disabled:opacity-50"
                      >
                        {downloadingId === sheet.id ? (
                          <>
                            <Loader className="mr-2 h-4 w-4 animate-spin" />
                            Generating PDF...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-cream">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              More Resources Coming Soon
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Subscribe to our newsletter to get notified when new cheat sheets are available.
            </p>
            <Button
              asChild
              className="bg-gold text-navy hover:bg-cream transition-colors duration-100"
            >
              <Link href="/#newsletter">Join the Inner Circle</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

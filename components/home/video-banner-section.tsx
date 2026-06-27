'use client'

import { memo, useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'

const YOUTUBE_VIDEO_ID = 'LDsrBBCPgqY'

export const VideoBannerSection = memo(function VideoBannerSection() {
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Detect when component is in viewport to trigger autoplay
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleToggleMute = () => {
    setIsMuted(prev => {
      const newMuted = !prev
      // Send message to YouTube iframe to toggle mute
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: newMuted ? 'mute' : 'unMute',
          }),
          '*'
        )
      }
      return newMuted
    })
  }

  // YouTube embed URL with autoplay enabled from the start
  const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1&controls=0&showinfo=0&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`

  return (
    <section className="py-6 md:py-10 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest rounded-full mb-2">
            Featured Video
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-1">
            The P-Series Book Launch
          </h2>
          <p className="text-charcoal/70 max-w-xl mx-auto text-sm">
            11 Books. One Journey. A Human Development Series for a Complex World.
          </p>
        </div>
        
        {/* Video Container - autoplay immediately */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-navy">
          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-gold/40 rounded-tl-lg z-10 pointer-events-none" />
          <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-gold/40 rounded-tr-lg z-10 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-gold/40 rounded-bl-lg z-10 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-gold/40 rounded-br-lg z-10 pointer-events-none" />
          
          {/* YouTube iframe - loads and autoplays immediately */}
          {isVisible && (
            <iframe
              ref={iframeRef}
              src={embedUrl}
              title="The P-Series Book Launch"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="eager"
            />
          )}
          
          {/* Sound toggle button - always visible */}
          <div className="absolute bottom-3 right-3 z-20">
            <Button
              onClick={handleToggleMute}
              size="sm"
              className="bg-gold hover:bg-gold/90 text-navy rounded-full px-3 py-1.5 shadow-lg transition-transform duration-100 hover:scale-105"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 mr-1.5" />
                  <span className="text-xs font-medium">Enable Sound</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 mr-1.5" />
                  <span className="text-xs font-medium">Mute</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

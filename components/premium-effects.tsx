'use client'

import { useEffect, useRef, useState, memo } from 'react'

// Minimal floating particles - CSS only, no JS animation
export const FloatingParticles = memo(function FloatingParticles({ 
  count = 4, 
  className = '' 
}: { 
  count?: number
  className?: string 
}) {
  // Use static positions to avoid hydration mismatch
  const particles = [
    { left: '15%', top: '20%', delay: '0s' },
    { left: '75%', top: '35%', delay: '2s' },
    { left: '40%', top: '70%', delay: '4s' },
    { left: '85%', top: '80%', delay: '6s' },
  ].slice(0, Math.min(count, 4))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gold/10 rounded-full animate-particle"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}
    </div>
  )
})

// Ultra-fast scroll reveal using CSS only
export const ScrollReveal = memo(function ScrollReveal({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Immediate check on mount
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(12px)',
        transition: `opacity 0.3s ease ${delay}ms, transform 0.3s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
})

// Static decorative line
export const DecorativeLine = memo(function DecorativeLine({ className = '' }: { className?: string }) {
  return (
    <div className={`h-px bg-gradient-to-r from-transparent via-gold to-transparent ${className}`} />
  )
})

// Removed for performance
export const FloatingShapes = memo(function FloatingShapes() {
  return null
})

// Static text
export const AnimatedText = memo(function AnimatedText({ 
  text, 
  className = '',
  as: Component = 'p'
}: { 
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}) {
  return <Component className={className}>{text}</Component>
})

// Simple glass card
export const GlassCard = memo(function GlassCard({ 
  children, 
  className = '',
  hover = true
}: { 
  children: React.ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div className={`
      bg-white/80 rounded-xl p-6 border border-gold/10
      ${hover ? 'hover:shadow-md transition-shadow duration-150' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
})

// Simple counter - instant display
export const AnimatedCounter = memo(function AnimatedCounter({ 
  value, 
  suffix = '',
  className = '' 
}: { 
  value: number
  suffix?: string
  className?: string
}) {
  return (
    <span className={className}>
      {value}{suffix}
    </span>
  )
})

// Empty components
export const GlowingOrbs = memo(function GlowingOrbs() {
  return null
})

export const MotionBackground = memo(function MotionBackground({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return <div className={`relative ${className}`}>{children}</div>
})

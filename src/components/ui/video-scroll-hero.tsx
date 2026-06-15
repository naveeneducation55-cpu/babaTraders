'use client'

import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface VideoScrollHeroProps {
  videoSrc?: string
  startScale?: number
}

export function VideoScrollHero({ videoSrc, startScale = 0.3 }: VideoScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [scrollScale, setScrollScale] = useState(startScale)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (shouldReduceMotion) {
      setScrollScale(1)
      setScrollProgress(1)
      return
    }

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const containerHeight = containerRef.current.offsetHeight
      const windowHeight = window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const maxScroll = containerHeight - windowHeight
      const progress = Math.min(scrolled / maxScroll, 1)
      setScrollProgress(progress)
      setScrollScale(startScale + progress * (1 - startScale))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [shouldReduceMotion, startScale])

  const shouldAnimate = !shouldReduceMotion

  return (
    <div ref={containerRef} style={{ position: 'relative', height: '200vh', backgroundColor: '#0F172A' }}>

      {/* Sticky container — stays fixed while scroll drives scale */}
      <div style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', zIndex: 10 }}>

        {/* Background grid — always full screen */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }} />

        {/* Gold glow */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '55%', height: '70%',
          background: 'radial-gradient(ellipse at top right, rgba(184,134,11,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Vertical accent lines */}
        {[15, 50, 85].map((left, i) => (
          <div key={i} aria-hidden="true" style={{
            position: 'absolute', top: 0, bottom: 0, left: `${left}%`,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(184,134,11,0.1), transparent)',
          }} />
        ))}

        {/* Scaling content card */}
        <div style={{
          transform: shouldAnimate ? `scale(${scrollScale})` : 'scale(1)',
          transformOrigin: 'center center',
          willChange: 'transform',
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Video or static background */}
          {videoSrc ? (
            <video
              autoPlay loop muted playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #0F172A 0%, #1a2744 50%, #0F172A 100%)',
            }} />
          )}

          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)' }} />

          {/* Hero content */}
          <div style={{
            position: 'relative', zIndex: 2,
            textAlign: 'center',
            padding: '2rem',
            opacity: shouldAnimate ? Math.min(scrollProgress * 2, 1) : 1,
            transform: shouldAnimate ? `translateY(${(1 - Math.min(scrollProgress * 2, 1)) * 30}px)` : 'none',
            transition: 'none',
          }}>

            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              marginBottom: '1.5rem',
              opacity: shouldAnimate ? Math.min(scrollProgress * 3, 1) : 1,
            }}>
              <span style={{ display: 'block', width: '2rem', height: '1px', backgroundColor: '#B8860B' }} />
              <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#B8860B' }}>
                Trusted Since 2005
              </span>
              <span style={{ display: 'block', width: '2rem', height: '1px', backgroundColor: '#B8860B' }} />
            </div>

            {/* Main heading */}
            <h1 style={{
              fontFamily: 'var(--font-manrope)', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              lineHeight: 0.92, letterSpacing: '-0.03em',
              color: '#ffffff', margin: '0 0 1rem',
            }}>
              BABA<br />
              <span style={{ color: '#B8860B' }}>TRADERS</span>
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: 'var(--font-manrope)', fontWeight: 600,
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: 'rgba(255,255,255,0.75)',
              margin: '0 auto 0.75rem',
              maxWidth: '560px',
              letterSpacing: '-0.01em',
            }}>
              Trusted Netting Solutions Since 2005
            </p>

            {/* Business types */}
            <p style={{
              fontFamily: 'var(--font-manrope)', fontWeight: 700,
              fontSize: '0.65rem', letterSpacing: '0.2em',
              textTransform: 'uppercase' as const, color: '#B8860B',
              marginBottom: '0.5rem',
            }}>
              Importer · Exporter · Distributor · Wholesaler
            </p>

            {/* Markets */}
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.38)', letterSpacing: '0.04em',
              marginBottom: '2.5rem',
            }}>
              Serving India, Nepal &amp; Bhutan
            </p>

            {/* CTAs — fade in later in scroll */}
            <div style={{
              display: 'flex', flexWrap: 'wrap' as const,
              gap: '1rem', justifyContent: 'center',
              opacity: shouldAnimate ? Math.max(0, (scrollProgress - 0.3) * 3) : 1,
              marginBottom: '3rem',
            }}>
              
               <a href="tel:+919876543210"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2rem', borderRadius: '9999px',
                  backgroundColor: '#B8860B', color: '#fff',
                  fontFamily: 'var(--font-manrope)', fontWeight: 800,
                  fontSize: '0.9rem', letterSpacing: '0.04em',
                  textDecoration: 'none', minHeight: '52px',
                  boxShadow: '0 4px 24px rgba(184,134,11,0.4)',
                }}
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2rem', borderRadius: '9999px',
                  backgroundColor: 'transparent',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  color: '#fff',
                  fontFamily: 'var(--font-manrope)', fontWeight: 700,
                  fontSize: '0.9rem', letterSpacing: '0.04em',
                  textDecoration: 'none', minHeight: '52px',
                }}
              >
                💬 WhatsApp Us
              </a>
            </div>

            {/* Stats — fade in last */}
            <div style={{
              display: 'flex', justifyContent: 'center',
              gap: '3rem', flexWrap: 'wrap' as const,
              opacity: shouldAnimate ? Math.max(0, (scrollProgress - 0.5) * 4) : 1,
            }}>
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '50+', label: 'Products' },
                { value: '3', label: 'Countries Served' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {stat.value}
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.375rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to bottom, transparent, #F8F7F4)',
          zIndex: 3, pointerEvents: 'none',
          opacity: scrollProgress > 0.8 ? (scrollProgress - 0.8) * 5 : 0,
        }} />
      </div>
    </div>
  )
}
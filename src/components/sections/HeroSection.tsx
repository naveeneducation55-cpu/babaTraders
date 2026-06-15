'use client'

import { useEffect, useState } from 'react'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { company } from '@/content/company'
import { phoneUrl, whatsappUrl } from '@/content/contact'
import { tokens } from '@/styles/tokens'

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const fade = (delay: string) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.7s ease ${delay}`,
  })

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        backgroundColor: tokens.color.primary,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          ...tokens.gridTexture,
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />

      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '55%', height: '70%',
          background: 'radial-gradient(ellipse at top right, rgba(184,134,11,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Vertical lines — hidden on mobile */}
      <div className="hide-mobile">
        {[15, 50, 85].map((left, i) => (
          <div key={i} aria-hidden="true" style={{
            position: 'absolute', top: 0, bottom: 0,
            left: `${left}%`, width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(184,134,11,0.1), transparent)',
          }} />
        ))}
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '80px',
          background: `linear-gradient(to bottom, transparent, ${tokens.color.background})`,
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="container-xl hero-pad" style={{ position: 'relative', zIndex: 3 }}>

        {/* Eyebrow */}
        <div style={{ ...fade('0.1s'), marginBottom: '1.5rem' }}>
          <span className="gold-line">Trusted Since {company.established}</span>
        </div>

        {/* Heading */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
          marginBottom: '1rem',
        }}>
          <h1
            className="hero-title"
            style={{
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.black,
              lineHeight: tokens.lineHeight.none,
              letterSpacing: tokens.letterSpacing.tighter,
              color: tokens.color.textInverse,
              margin: 0,
            }}
          >
            BABA
            <span style={{ color: tokens.color.accent }}> TRADERS</span>
          </h1>
        </div>

        {/* Tagline */}
        <div style={{ ...fade('0.4s'), marginBottom: '0.75rem' }}>
          <p style={{
            fontFamily: tokens.font.heading,
            fontWeight: tokens.fontWeight.semibold,
            fontSize: 'clamp(1rem, 3vw, 1.75rem)',
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: tokens.letterSpacing.snug,
            lineHeight: tokens.lineHeight.snug,
            maxWidth: '560px',
          }}>
            {company.tagline}
          </p>
        </div>

        {/* Business types */}
        <div style={{ ...fade('0.55s'), marginBottom: '0.5rem' }}>
          <p style={{
            fontFamily: tokens.font.heading,
            fontWeight: tokens.fontWeight.bold,
            fontSize: tokens.fontSize.eyebrow,
            letterSpacing: tokens.letterSpacing.widest,
            textTransform: 'uppercase' as const,
            color: tokens.color.accent,
          }}>
            {company.businessTypes.join(' • ')}
          </p>
        </div>

        {/* Markets */}
        <div style={{ ...fade('0.65s'), marginBottom: '2rem' }}>
          <p style={{
            fontFamily: tokens.font.body,
            fontSize: tokens.fontSize.bodySm,
            color: 'rgba(255,255,255,0.38)',
            letterSpacing: tokens.letterSpacing.wide,
          }}>
            Serving {company.markets.join(', ')}
          </p>
        </div>

        {/* CTAs */}
        <div style={{ ...fade('0.75s') }} className="cta-group">
          <a
            href={phoneUrl}
            aria-label="Call Now"
            style={{
              display: 'inline-flex', alignItems: 'center',
              justifyContent: 'center', gap: '0.625rem',
              padding: '0.875rem 2rem',
              borderRadius: tokens.radius.pill,
              backgroundColor: tokens.color.accent,
              color: tokens.color.textInverse,
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.black,
              fontSize: tokens.fontSize.body,
              letterSpacing: tokens.letterSpacing.wide,
              textDecoration: 'none',
              minHeight: '52px',
              boxShadow: tokens.shadow.gold,
              transition: tokens.transition.normal,
            }}
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            style={{
              display: 'inline-flex', alignItems: 'center',
              justifyContent: 'center', gap: '0.625rem',
              padding: '0.875rem 2rem',
              borderRadius: tokens.radius.pill,
              backgroundColor: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.22)',
              color: tokens.color.textInverse,
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.bold,
              fontSize: tokens.fontSize.body,
              letterSpacing: tokens.letterSpacing.wide,
              textDecoration: 'none',
              minHeight: '52px',
              transition: tokens.transition.normal,
            }}
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
        style={{
          position: 'absolute', bottom: '1.5rem', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4, background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem',
          color: 'rgba(255,255,255,0.28)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease 1.2s',
        }}
      >
        <span style={{
          fontSize: tokens.fontSize.eyebrow,
          letterSpacing: tokens.letterSpacing.eyebrow,
          textTransform: 'uppercase' as const,
          fontFamily: tokens.font.body,
        }}>
          SCROLL
        </span>
        <ChevronDown size={16} />
      </button>
    </section>
  )
}
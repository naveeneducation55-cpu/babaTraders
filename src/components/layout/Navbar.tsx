'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { navLinks } from '@/content/navigation'
import { company } from '@/content/company'
import { phoneUrl, whatsappUrl, phoneDisplay } from '@/content/contact'
import { usePathname } from 'next/navigation'
import { tokens } from '@/styles/tokens'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <style>{`
        .nav-link:hover { color: #B8860B !important; }
        .nav-cta-call:hover { background: rgba(255,255,255,0.15) !important; }
        .footer-link:hover { color: #B8860B !important; }
        @media (min-width: 768px) {
          .mobile-only { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-ctas { display: flex !important; }
        }
      `}</style>

      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          backgroundColor: tokens.color.primary,
          boxShadow: scrolled ? tokens.shadow.nav : 'none',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          transition: tokens.transition.normal,
        }}
      >
        <div className="container-xl">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}>

            {/* Logo */}
            <Link href="/" className="no-underline" aria-label={`${company.name} - Home`}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{
                  fontFamily: tokens.font.heading,
                  fontWeight: tokens.fontWeight.black,
                  fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                  letterSpacing: '0.18em',
                  color: tokens.color.textInverse,
                  lineHeight: 1,
                }}>
                  {company.name}
                </span>
                <span style={{
                  fontFamily: tokens.font.heading,
                  fontWeight: tokens.fontWeight.semibold,
                  fontSize: '0.55rem',
                  letterSpacing: '0.22em',
                  color: tokens.color.accent,
                  lineHeight: 1,
                  textTransform: 'uppercase' as const,
                }}>
                  Est. {company.established}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="desktop-nav"
              style={{ display: 'none', alignItems: 'center', gap: '2rem' }}
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link no-underline"
                  style={{
                    fontFamily: tokens.font.body,
                    fontWeight: tokens.fontWeight.medium,
                    fontSize: tokens.fontSize.bodySm,
                    letterSpacing: tokens.letterSpacing.wide,
                    color: pathname === link.href
                      ? tokens.color.accent
                      : 'rgba(255,255,255,0.75)',
                    borderBottom: pathname === link.href
                      ? `1px solid ${tokens.color.accent}`
                      : '1px solid transparent',
                    paddingBottom: '2px',
                    transition: tokens.transition.fast,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div
              className="desktop-ctas"
              style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}
            >
              <a
                href={phoneUrl}
                aria-label={`Call us at ${phoneDisplay}`}
                className="nav-cta-call"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 1.125rem',
                  borderRadius: tokens.radius.pill,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: tokens.color.textInverse,
                  fontFamily: tokens.font.body,
                  fontWeight: tokens.fontWeight.semibold,
                  fontSize: tokens.fontSize.tiny,
                  textDecoration: 'none',
                  transition: tokens.transition.fast,
                  whiteSpace: 'nowrap' as const,
                }}
              >
                <Phone size={13} />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 1.125rem',
                  borderRadius: tokens.radius.pill,
                  backgroundColor: tokens.color.whatsapp,
                  color: tokens.color.textInverse,
                  fontFamily: tokens.font.body,
                  fontWeight: tokens.fontWeight.bold,
                  fontSize: tokens.fontSize.tiny,
                  textDecoration: 'none',
                  transition: tokens.transition.fast,
                  whiteSpace: 'nowrap' as const,
                }}
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-only"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: tokens.radius.md,
                padding: '0.5rem',
                color: tokens.color.textInverse,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px',
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 99 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute', inset: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Drawer */}
          <nav style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: 'min(280px, 85vw)',
            backgroundColor: tokens.color.primary,
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}>
            {/* Drawer header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0 1.25rem',
              height: '68px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0,
            }}>
              <span style={{
                color: tokens.color.textInverse,
                fontFamily: tokens.font.heading,
                fontWeight: tokens.fontWeight.black,
                letterSpacing: '0.15em',
                fontSize: '0.85rem',
              }}>
                {company.name}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  background: 'none', border: 'none',
                  cursor: 'pointer', padding: '0.25rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  minWidth: '36px', minHeight: '36px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <div style={{
              flex: 1,
              padding: '1.25rem',
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
            }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="no-underline"
                  style={{
                    padding: '0.875rem 1rem',
                    borderRadius: tokens.radius.md,
                    color: pathname === link.href
                      ? tokens.color.accent
                      : 'rgba(255,255,255,0.75)',
                    backgroundColor: pathname === link.href
                      ? 'rgba(184,134,11,0.08)'
                      : 'transparent',
                    fontFamily: tokens.font.body,
                    fontWeight: tokens.fontWeight.medium,
                    fontSize: tokens.fontSize.body,
                    display: 'block',
                    borderLeft: pathname === link.href
                      ? `2px solid ${tokens.color.accent}`
                      : '2px solid transparent',
                    transition: tokens.transition.fast,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div style={{
              padding: '1.25rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0,
            }}>
              <a
                href={phoneUrl}
                aria-label={`Call us at ${phoneDisplay}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem',
                  borderRadius: tokens.radius.pill,
                  backgroundColor: tokens.color.textInverse,
                  color: tokens.color.primary,
                  fontFamily: tokens.font.heading,
                  fontWeight: tokens.fontWeight.black,
                  fontSize: tokens.fontSize.bodySm,
                  textDecoration: 'none',
                  minHeight: '48px',
                }}
              >
                <Phone size={16} />
                {phoneDisplay}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem',
                  borderRadius: tokens.radius.pill,
                  backgroundColor: tokens.color.whatsapp,
                  color: tokens.color.textInverse,
                  fontFamily: tokens.font.heading,
                  fontWeight: tokens.fontWeight.black,
                  fontSize: tokens.fontSize.bodySm,
                  textDecoration: 'none',
                  minHeight: '48px',
                }}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

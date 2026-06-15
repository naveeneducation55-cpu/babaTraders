import { Phone, MessageCircle } from 'lucide-react'
import { phoneUrl, whatsappUrl, phoneDisplay, contact } from '@/content/contact'
import { company } from '@/content/company'
import { tokens } from '@/styles/tokens'

export function ContactCTASection() {
  return (
    <section
      className="section-pad"
      style={{
        backgroundColor: tokens.color.primary,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gold radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-20%', left: '50%',
          transform: 'translateX(-50%)',
          width: '60%', height: '80%',
          background: 'radial-gradient(ellipse, rgba(184,134,11,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          ...tokens.gridTexture,
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-xl"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        {/* Gold accent line */}
        <div style={{
          width: '3rem', height: '2px',
          backgroundColor: tokens.color.accent,
          margin: '0 auto 2rem',
          borderRadius: tokens.radius.pill,
        }} />

        <h2 style={{
          fontFamily: tokens.font.heading,
          fontWeight: tokens.fontWeight.black,
          fontSize: tokens.fontSize.h2,
          color: tokens.color.textInverse,
          lineHeight: tokens.lineHeight.tight,
          letterSpacing: tokens.letterSpacing.tighter,
          marginBottom: '1rem',
        }}>
          Ready to Place a<br />
          <span style={{ color: tokens.color.accent }}>Bulk Order?</span>
        </h2>

        <p style={{
          fontFamily: tokens.font.body,
          fontSize: tokens.fontSize.bodyLg,
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '480px',
          margin: '0 auto 0.75rem',
          lineHeight: tokens.lineHeight.relaxed,
        }}>
          Contact {company.name} directly for wholesale pricing, specifications and bulk supply enquiries.
        </p>

        <p style={{
          fontFamily: tokens.font.heading,
          fontWeight: tokens.fontWeight.semibold,
          fontSize: tokens.fontSize.eyebrow,
          letterSpacing: tokens.letterSpacing.wider,
          textTransform: 'uppercase' as const,
          color: tokens.color.accent,
          marginBottom: '2.5rem',
        }}>
          {contact.hours.days} · {contact.hours.open} – {contact.hours.close}
        </p>

        {/* CTAs */}
        <div
          className="cta-group"
          style={{ justifyContent: 'center' }}
        >
          <a
            href={phoneUrl}
            aria-label={`Call us at ${phoneDisplay}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              borderRadius: tokens.radius.pill,
              backgroundColor: tokens.color.accent,
              color: tokens.color.textInverse,
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.black,
              fontSize: tokens.fontSize.body,
              letterSpacing: tokens.letterSpacing.wide,
              textDecoration: 'none',
              boxShadow: tokens.shadow.gold,
              minHeight: '56px',
              transition: tokens.transition.normal,
            }}
          >
            <Phone size={20} />
            Call Now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              borderRadius: tokens.radius.pill,
              backgroundColor: tokens.color.whatsapp,
              color: tokens.color.textInverse,
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.black,
              fontSize: tokens.fontSize.body,
              letterSpacing: tokens.letterSpacing.wide,
              textDecoration: 'none',
              boxShadow: '0 6px 32px rgba(37,211,102,0.3)',
              minHeight: '56px',
              transition: tokens.transition.normal,
            }}
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>
        <p style={{
          fontFamily: tokens.font.body,
          fontSize: tokens.fontSize.tiny,
          color: 'rgba(255,255,255,0.25)',
          marginTop: '1.5rem',
        }}>
          {phoneDisplay}
        </p>
      </div>
    </section>
  )
}
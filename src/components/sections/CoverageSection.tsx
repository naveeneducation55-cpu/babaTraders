'use client'

import { SectionHeading } from '@/components/shared/SectionHeading'
import { tokens } from '@/styles/tokens'

const regions = [
  {
    country: 'India',
    flag: '🇮🇳',
    detail: 'Pan-India distribution with focus on North Bengal, Northeast India and major wholesale markets.',
  },
  {
    country: 'Nepal',
    flag: '🇳🇵',
    detail: 'Supplying wholesalers and distributors across Nepal from our Siliguri base.',
  },
  {
    country: 'Bhutan',
    flag: '🇧🇹',
    detail: 'Reliable supply partner for Bhutanese importers and distributors.',
  },
]

export function CoverageSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: tokens.color.background }}
    >
      <div className="container-xl">
        <SectionHeading
          eyebrow="Our Reach"
          title="Serving India, Nepal & Bhutan"
          description="Strategically based in Siliguri — the gateway to Northeast India, Nepal and Bhutan."
        />
        <div className="grid-responsive-3">
          {regions.map((r, i) => (
            <div
              key={i}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = tokens.color.borderGold
                el.style.boxShadow = tokens.shadow.cardHover
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = tokens.color.border
                el.style.boxShadow = tokens.shadow.card
                el.style.transform = 'translateY(0)'
              }}
              style={{
                backgroundColor: tokens.color.surface,
                borderRadius: tokens.radius.cardLg,
                border: `1px solid ${tokens.color.border}`,
                padding: '2rem 1.5rem',
                textAlign: 'center',
                boxShadow: tokens.shadow.card,
                transition: tokens.transition.spring,
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                lineHeight: 1,
              }}>
                {r.flag}
              </div>
              <h3 style={{
                fontFamily: tokens.font.heading,
                fontWeight: tokens.fontWeight.black,
                fontSize: '1.15rem',
                color: tokens.color.primary,
                marginBottom: '0.625rem',
                letterSpacing: tokens.letterSpacing.snug,
              }}>
                {r.country}
              </h3>
              <p style={{
                fontFamily: tokens.font.body,
                fontSize: tokens.fontSize.caption,
                color: tokens.color.textSecondary,
                lineHeight: tokens.lineHeight.relaxed,
                margin: 0,
              }}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontFamily: tokens.font.body,
          fontSize: tokens.fontSize.bodySm,
          color: tokens.color.textSecondary,
        }}>
          Headquartered at{' '}
          <strong style={{ color: tokens.color.primary }}>
            Siliguri, West Bengal
          </strong>
          {' '}— the commercial hub connecting India, Nepal and Bhutan.
        </p>
      </div>
    </section>
  )
}
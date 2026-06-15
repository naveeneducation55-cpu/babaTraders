'use client'

import { industries } from '@/content/company'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { tokens } from '@/styles/tokens'

export function IndustriesSection() {
  return (
    <section
      className="section-pad"
      style={{
        backgroundColor: tokens.color.primary,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          ...tokens.gridTexture,
          pointerEvents: 'none',
        }}
      />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="Industries Served"
          title="Who We Supply To"
          description="Serving a wide range of sectors across India, Nepal and Bhutan."
          light
        />
        <div className="grid-responsive-2">
          {industries.map((ind, i) => (
            <div
              key={i}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.backgroundColor = 'rgba(184,134,11,0.07)'
                el.style.borderColor = tokens.color.borderGold
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.backgroundColor = 'rgba(255,255,255,0.04)'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: tokens.radius.card,
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                transition: tokens.transition.normal,
              }}
            >
              <div style={{
                width: '6px', height: '6px',
                borderRadius: tokens.radius.circle,
                backgroundColor: tokens.color.accent,
                marginTop: '0.5rem',
                flexShrink: 0,
              }} />
              <div>
                <h3 style={{
                  fontFamily: tokens.font.heading,
                  fontWeight: tokens.fontWeight.bold,
                  fontSize: tokens.fontSize.body,
                  color: tokens.color.textInverse,
                  marginBottom: '0.375rem',
                }}>
                  {ind.name}
                </h3>
                <p style={{
                  fontFamily: tokens.font.body,
                  fontSize: tokens.fontSize.caption,
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: tokens.lineHeight.normal,
                  margin: 0,
                }}>
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
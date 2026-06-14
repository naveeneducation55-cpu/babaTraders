'use client'
import { industries } from '@/content/company'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { tokens } from '@/styles/tokens'

export function IndustriesSection() {
  return (
    <section style={{
      backgroundColor: tokens.color.primary,
      padding: tokens.spacing.sectionMd,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        ...tokens.gridTexture,
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="Industries Served"
          title="Who We Supply To"
          description="Serving a wide range of sectors across India, Nepal and Bhutan."
          light
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(260px, 1fr))',
          gap: '1rem',
        }}>
          {industries.map((ind, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: tokens.radius.card,
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                transition: tokens.transition.normal,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.backgroundColor = `rgba(184,134,11,0.07)`
                el.style.borderColor = tokens.color.borderGold
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.backgroundColor = 'rgba(255,255,255,0.04)'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
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
                  fontSize: tokens.fontSize.tiny,
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: tokens.lineHeight.normal,
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
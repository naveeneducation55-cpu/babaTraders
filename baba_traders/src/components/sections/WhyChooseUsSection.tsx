'use client'

import { useState } from 'react'
import { whyChooseUs } from '@/content/company'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ShieldCheck, Package, MapPin, Star, Users, Phone } from 'lucide-react'
import { tokens } from '@/styles/tokens'

const icons: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  'package': Package,
  'map-pin': MapPin,
  'star': Star,
  'users': Users,
  'phone': Phone,
}

function FeatureCard({ item }: { item: typeof whyChooseUs[0] }) {
  const [hovered, setHovered] = useState(false)
  const Icon = icons[item.icon] ?? ShieldCheck

  return (
    <>
      <style>{`
        @keyframes goldPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,134,11,0.4), 0 8px 32px rgba(184,134,11,0.2); }
          50% { box-shadow: 0 0 0 4px rgba(184,134,11,0.1), 0 16px 48px rgba(184,134,11,0.35); }
        }
        .feature-card-glow {
          animation: goldPulse 2s ease-in-out infinite;
        }
      `}</style>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={hovered ? 'feature-card-glow' : ''}
        style={{
          borderRadius: tokens.radius.card,
          padding: '2rem',
          border: hovered ? `1.5px solid ${tokens.color.accent}` : `1px solid ${tokens.color.border}`,
          backgroundColor: hovered ? tokens.color.accent : tokens.color.surface,
          transition: tokens.transition.spring,
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Shine on hover */}
        {hovered && (
          <div style={{
            position: 'absolute',
            top: '-50%', left: '-60%',
            width: '40%', height: '200%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            transform: 'skewX(-20deg)',
            pointerEvents: 'none',
          }} />
        )}

        {/* Icon */}
        <div style={{
          width: '48px', height: '48px',
          borderRadius: tokens.radius.md,
          backgroundColor: hovered ? 'rgba(255,255,255,0.2)' : tokens.color.accentMuted,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.25rem',
          transition: tokens.transition.normal,
        }}>
          <Icon
            size={22}
            color={hovered ? tokens.color.textInverse : tokens.color.accent}
            style={{ transition: 'color 0.3s ease' }}
          />
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: tokens.font.heading,
          fontWeight: tokens.fontWeight.black,
          fontSize: tokens.fontSize.h4,
          color: hovered ? tokens.color.textInverse : tokens.color.primary,
          marginBottom: '0.625rem',
          letterSpacing: tokens.letterSpacing.snug,
          transition: 'color 0.3s ease',
        }}>
          {item.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: tokens.font.body,
          fontSize: tokens.fontSize.caption,
          color: hovered ? 'rgba(255,255,255,0.85)' : tokens.color.textSecondary,
          lineHeight: tokens.lineHeight.relaxed,
          transition: 'color 0.3s ease',
        }}>
          {item.description}
        </p>

        {/* Bottom gold line when not hovered */}
        {!hovered && (
          <div style={{
            position: 'absolute',
            bottom: 0, left: '2rem', right: '2rem',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${tokens.color.accent}, transparent)`,
            opacity: 0.3,
            borderRadius: tokens.radius.pill,
          }} />
        )}
      </div>
    </>
  )
}

export function WhyChooseUsSection() {
  return (
    <section style={{ backgroundColor: tokens.color.background, padding: tokens.spacing.sectionMd }}>
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on Trust, Backed by Experience"
          description="Over 20 years, BABA TRADERS has been the preferred wholesale partner for dealers and distributors across South Asia."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {whyChooseUs.map((item, i) => (
            <FeatureCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
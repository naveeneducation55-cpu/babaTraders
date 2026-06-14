import { tokens } from '@/styles/tokens'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div style={{ textAlign: isCenter ? 'center' : 'left', marginBottom: '2rem' }}>
      {eyebrow && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <span style={{ display: 'block', width: '2rem', height: '1px', backgroundColor: tokens.color.accent }} />
          <span style={{
            fontFamily: tokens.font.heading,
            fontWeight: tokens.fontWeight.bold,
            fontSize: tokens.fontSize.eyebrow,
            letterSpacing: tokens.letterSpacing.eyebrow,
            textTransform: 'uppercase' as const,
            color: tokens.color.accent,
          }}>
            {eyebrow}
          </span>
          <span style={{ display: 'block', width: '2rem', height: '1px', backgroundColor: tokens.color.accent }} />
        </div>
      )}
      <h2 style={{
        fontFamily: tokens.font.heading,
        fontWeight: tokens.fontWeight.black,
        fontSize: tokens.fontSize.h2,
        lineHeight: tokens.lineHeight.tight,
        letterSpacing: tokens.letterSpacing.tight,
        color: light ? tokens.color.textInverse : tokens.color.primary,
        margin: 0,
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          fontFamily: tokens.font.body,
          fontWeight: tokens.fontWeight.regular,
          fontSize: tokens.fontSize.bodyLg,
          color: light ? 'rgba(255,255,255,0.5)' : tokens.color.textSecondary,
          marginTop: '1rem',
          lineHeight: tokens.lineHeight.relaxed,
          maxWidth: '38rem',
          marginLeft: isCenter ? 'auto' : 0,
          marginRight: isCenter ? 'auto' : 0,
        }}>
          {description}
        </p>
      )}
    </div>
  )
}
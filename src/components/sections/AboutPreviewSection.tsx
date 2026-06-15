import { company } from '@/content/company'
import { tokens } from '@/styles/tokens'

export function AboutPreviewSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: tokens.color.primary }}
    >
      <div className="container-xl">
        <div className="about-grid">

          {/* Left — Content */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              marginBottom: '1.25rem',
            }}>
              <span style={{ display: 'block', width: '2rem', height: '1px', backgroundColor: tokens.color.accent }} />
              <span style={{
                fontFamily: tokens.font.heading,
                fontWeight: tokens.fontWeight.bold,
                fontSize: tokens.fontSize.eyebrow,
                letterSpacing: tokens.letterSpacing.eyebrow,
                textTransform: 'uppercase' as const,
                color: tokens.color.accent,
              }}>
                About Us
              </span>
              <span style={{ display: 'block', width: '2rem', height: '1px', backgroundColor: tokens.color.accent }} />
            </div>

            <h2 style={{
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.black,
              fontSize: tokens.fontSize.h2,
              color: tokens.color.textInverse,
              lineHeight: tokens.lineHeight.tight,
              letterSpacing: tokens.letterSpacing.tight,
              marginBottom: '1.25rem',
            }}>
              Two Decades of<br />
              <span style={{ color: tokens.color.accent }}>Trusted Supply</span>
            </h2>

            <p style={{
              fontFamily: tokens.font.body,
              fontSize: tokens.fontSize.body,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: tokens.lineHeight.loose,
              marginBottom: '2rem',
              maxWidth: '480px',
            }}>
              {company.description}
            </p>

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
              marginBottom: '2rem',
            }}>
              {[...company.markets, ...company.businessTypes].map((tag) => (
                <span key={tag} style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: tokens.radius.pill,
                  border: `1px solid ${tokens.color.borderGold}`,
                  color: tokens.color.accent,
                  fontFamily: tokens.font.heading,
                  fontWeight: tokens.fontWeight.semibold,
                  fontSize: tokens.fontSize.tiny,
                  letterSpacing: tokens.letterSpacing.wide,
                  textTransform: 'uppercase' as const,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2rem',
                borderRadius: tokens.radius.pill,
                backgroundColor: tokens.color.accent,
                color: tokens.color.textInverse,
                fontFamily: tokens.font.heading,
                fontWeight: tokens.fontWeight.black,
                fontSize: tokens.fontSize.bodySm,
                textDecoration: 'none',
                letterSpacing: tokens.letterSpacing.wide,
                boxShadow: tokens.shadow.gold,
              }}
            >
              Learn More About Us →
            </a>
          </div>

          {/* Right — Stat blocks */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}>
            {[
              { val: '2005', label: 'Established', gold: false },
              { val: '3',    label: 'Countries Served', gold: true },
              { val: '50+',  label: 'Products', gold: false },
              { val: '20+',  label: 'Years Experience', gold: true },
            ].map((item) => (
              <div key={item.label} style={{
                backgroundColor: item.gold ? tokens.color.accent : 'rgba(255,255,255,0.05)',
                border: item.gold ? 'none' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: tokens.radius.card,
                padding: '1.75rem 1.25rem',
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: tokens.font.heading,
                  fontWeight: tokens.fontWeight.black,
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                  color: tokens.color.textInverse,
                  lineHeight: tokens.lineHeight.none,
                  letterSpacing: tokens.letterSpacing.tighter,
                  marginBottom: '0.4rem',
                }}>
                  {item.val}
                </p>
                <p style={{
                  fontFamily: tokens.font.body,
                  fontSize: tokens.fontSize.tiny,
                  color: item.gold ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
                  letterSpacing: tokens.letterSpacing.wider,
                  textTransform: 'uppercase' as const,
                  margin: 0,
                }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
import { tokens } from '@/styles/tokens'

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumb?: { label: string; href?: string }[]
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section
      className="page-header-pad"
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

      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, right: 0,
          width: '40%', height: '100%',
          background: `radial-gradient(ellipse at top right, ${tokens.color.accentMuted} 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
            <ol style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.375rem',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              alignItems: 'center',
            }}>
              {breadcrumb.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  {i > 0 && (
                    <span style={{
                      color: 'rgba(255,255,255,0.2)',
                      fontSize: tokens.fontSize.tiny,
                    }}>
                      /
                    </span>
                  )}
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: tokens.fontSize.tiny,
                        textDecoration: 'none',
                        fontFamily: tokens.font.body,
                        transition: tokens.transition.fast,
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      aria-current="page"
                      style={{
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: tokens.fontSize.tiny,
                        fontFamily: tokens.font.body,
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 style={{
          fontFamily: tokens.font.heading,
          fontWeight: tokens.fontWeight.black,
          fontSize: tokens.fontSize.h1,
          color: tokens.color.textInverse,
          lineHeight: tokens.lineHeight.tight,
          letterSpacing: tokens.letterSpacing.tighter,
          marginBottom: description ? '0.875rem' : 0,
        }}>
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p style={{
            fontFamily: tokens.font.body,
            fontSize: tokens.fontSize.bodyLg,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '560px',
            lineHeight: tokens.lineHeight.relaxed,
            margin: 0,
          }}>
            {description}
          </p>
        )}

        {/* Gold underline */}
        <div style={{
          width: '3rem',
          height: '2px',
          backgroundColor: tokens.color.accent,
          borderRadius: tokens.radius.pill,
          marginTop: '1.5rem',
        }} />
      </div>
    </section>
  )
}
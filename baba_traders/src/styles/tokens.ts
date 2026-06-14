export const tokens = {

  // ─── COLORS ───────────────────────────────────────────
  color: {
    primary:        '#0F172A',   // Deep Navy — dominant
    primaryLight:   '#1E293B',   // Lighter navy for hover states
    accent:         '#B8860B',   // Premium Gold — use sparingly
    accentLight:    '#FFD700',   // Bright gold for animations
    accentMuted:    'rgba(184,134,11,0.1)',  // Gold tint for backgrounds
    background:     '#F8F7F4',   // Warm Ivory — page background
    surface:        '#FFFFFF',   // Card / section surface
    footer:         '#060F1E',   // Darkest — footer only
    text:           '#1E293B',   // Primary text
    textSecondary:  '#64748B',   // Muted text
    textInverse:    '#FFFFFF',   // Text on dark backgrounds
    textGold:       '#B8860B',   // Gold text
    border:         '#E5E7EB',   // Default border
    borderGold:     'rgba(184,134,11,0.4)',  // Gold border on hover
    whatsapp:       '#25D366',   // WhatsApp green
    overlay:        'rgba(15,23,42,0.6)',    // Dark overlay
  },

  // ─── FONTS ────────────────────────────────────────────
  font: {
    heading: 'var(--font-manrope), sans-serif',
    body:    'var(--font-inter), sans-serif',
  },

  // ─── FONT SIZES ───────────────────────────────────────
  fontSize: {
    display:  'clamp(3.5rem, 10vw, 8.5rem)',   // Hero H1
    h1:       'clamp(2.25rem, 5vw, 4rem)',      // Page header
    h2:       'clamp(1.875rem, 4vw, 3rem)',     // Section headings
    h3:       '1.05rem',                        // Card headings
    h4:       '1rem',                           // Sub headings
    body:     '1rem',                           // Body text
    bodyLg:   '1.1rem',                         // Large body
    bodySm:   '0.875rem',                       // Small body
    caption:  '0.82rem',                        // Captions
    eyebrow:  '0.65rem',                        // Section labels
    tiny:     '0.72rem',                        // Tiny labels
  },

  // ─── FONT WEIGHTS ─────────────────────────────────────
  fontWeight: {
    black:    800,
    bold:     700,
    semibold: 600,
    medium:   500,
    regular:  400,
  },

  // ─── LINE HEIGHTS ─────────────────────────────────────
  lineHeight: {
    none:     1,
    tight:    1.1,
    snug:     1.3,
    normal:   1.6,
    relaxed:  1.7,
    loose:    1.8,
  },

  // ─── LETTER SPACING ───────────────────────────────────
  letterSpacing: {
    tighter:  '-0.03em',
    tight:    '-0.02em',
    snug:     '-0.01em',
    normal:   '0em',
    wide:     '0.04em',
    wider:    '0.1em',
    widest:   '0.22em',
    eyebrow:  '0.25em',
  },

  // ─── SECTION SPACING ──────────────────────────────────
  spacing: {
    sectionXl: '7rem 0',
    sectionLg: '5rem 0',
    sectionMd: '4rem 0',
    sectionSm: '2.5rem 0',
    containerPadding: '0 1.5rem',
  },

  // ─── BORDER RADIUS ────────────────────────────────────
  radius: {
    sm:     '0.5rem',
    md:     '0.75rem',
    card:   '1.25rem',
    cardLg: '1.5rem',
    pill:   '9999px',
    circle: '50%',
  },

  // ─── SHADOWS ──────────────────────────────────────────
  shadow: {
    card:      '0 2px 12px rgba(15,23,42,0.04)',
    cardHover: '0 16px 48px rgba(15,23,42,0.12)',
    gold:      '0 4px 24px rgba(184,134,11,0.4)',
    goldHover: '0 0 0 1px rgba(184,134,11,0.4), 0 16px 48px rgba(184,134,11,0.2)',
    nav:       '0 2px 24px rgba(15,23,42,0.3)',
  },

  // ─── TRANSITIONS ──────────────────────────────────────
  transition: {
    fast:   'all 0.15s ease',
    normal: 'all 0.3s ease',
    slow:   'all 0.5s ease',
    spring: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
  },

  // ─── GRID TEXTURE (reused in hero/dark sections) ──────
  gridTexture: {
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
    backgroundSize: '72px 72px',
  },

} as const

export type Tokens = typeof tokens
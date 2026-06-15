interface PlaceholderImageProps {
  label?: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  className?: string
}

export function PlaceholderImage({ label = 'Product Image', aspectRatio = 'landscape', className }: PlaceholderImageProps) {
  const ratios: Record<string, string> = {
    square: '1/1', video: '16/9', portrait: '3/4', landscape: '4/3',
  }
  return (
    <div
      className={className}
      style={{
        aspectRatio: ratios[aspectRatio],
        background: 'linear-gradient(135deg, #0F172A 0%, #1e293b 50%, #0F172A 100%)',
        borderRadius: '1rem',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '0.75rem', position: 'relative', overflow: 'hidden',
      }}
      role="img" aria-label={label}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.22 }}>
        <rect x="3" y="3" width="34" height="34" rx="6" stroke="white" strokeWidth="1.5"/>
        <circle cx="13" cy="15" r="3.5" stroke="white" strokeWidth="1.5"/>
        <path d="M3 28L12 18L19 26L26 17L37 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
        {label}
      </span>
    </div>
  )
}
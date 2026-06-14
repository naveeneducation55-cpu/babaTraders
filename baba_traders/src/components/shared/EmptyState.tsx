interface EmptyStateProps {
  title?: string
  description?: string
}

export function EmptyState({ title = 'Coming Soon', description = 'Products are being added. Contact us for enquiries.' }: EmptyStateProps) {
  return (
    <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
      <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
        <svg width="24" height="24" fill="none" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
          <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        </svg>
      </div>
      <h3 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#64748B', maxWidth: '280px', margin: '0 auto' }}>{description}</p>
    </div>
  )
}
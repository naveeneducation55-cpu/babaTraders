import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Category } from '@/types/category'
import { ROUTES } from '@/constants/routes'
import { PlaceholderImage } from './PlaceholderImage'
import { tokens } from '@/styles/tokens'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <>
      <style>{`
        .cat-card {
          background: ${tokens.color.surface};
          border-radius: ${tokens.radius.card};
          border: 1px solid ${tokens.color.border};
          overflow: hidden;
          transition: ${tokens.transition.spring};
          box-shadow: ${tokens.shadow.card};
          height: 100%;
        }
        .cat-card:hover {
          transform: translateY(-4px);
          box-shadow: ${tokens.shadow.cardHover};
          border-color: ${tokens.color.borderGold};
        }
      `}</style>
      <Link
        href={ROUTES.CATEGORY(category.slug)}
        className="block no-underline"
        aria-label={`Browse ${category.name}`}
      >
        <div className="cat-card">
          <PlaceholderImage label={category.name} aspectRatio="landscape" />
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
              <h3 style={{
                fontFamily: tokens.font.heading,
                fontWeight: tokens.fontWeight.black,
                fontSize: tokens.fontSize.h3,
                color: tokens.color.primary,
                lineHeight: tokens.lineHeight.snug,
                letterSpacing: tokens.letterSpacing.snug,
                margin: 0,
              }}>
                {category.name}
              </h3>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: tokens.radius.circle,
                backgroundColor: tokens.color.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <ArrowUpRight size={14} color={tokens.color.textInverse} />
              </div>
            </div>
            <p style={{
              fontFamily: tokens.font.body,
              fontSize: tokens.fontSize.caption,
              color: tokens.color.textSecondary,
              lineHeight: tokens.lineHeight.normal,
              margin: '0 0 1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {category.shortDescription}
            </p>
            {category.productCount && (
              <p style={{
                fontFamily: tokens.font.heading,
                fontWeight: tokens.fontWeight.bold,
                fontSize: tokens.fontSize.tiny,
                color: tokens.color.accent,
                letterSpacing: tokens.letterSpacing.wider,
                textTransform: 'uppercase' as const,
              }}>
                {category.productCount}+ Products
              </p>
            )}
          </div>
        </div>
      </Link>
    </>
  )
}
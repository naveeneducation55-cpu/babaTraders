import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Product } from '@/types/product'
import { ROUTES } from '@/constants/routes'
import { PlaceholderImage } from './PlaceholderImage'
import { tokens } from '@/styles/tokens'

export function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <style>{`
        .prod-card {
          background: ${tokens.color.surface};
          border-radius: ${tokens.radius.card};
          border: 1px solid ${tokens.color.border};
          overflow: hidden;
          transition: ${tokens.transition.spring};
          box-shadow: ${tokens.shadow.card};
          height: 100%;
          position: relative;
        }
        .prod-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: ${tokens.radius.card};
          padding: 1.5px;
          background: linear-gradient(135deg, ${tokens.color.accent}, ${tokens.color.accentLight}, ${tokens.color.accent}, #996515);
          background-size: 300% 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: goldRotate 2s linear infinite;
          pointer-events: none;
          z-index: 1;
        }
        .prod-card:hover::before {
          opacity: 1;
        }
        .prod-card:hover {
          transform: translateY(-4px);
          box-shadow: ${tokens.shadow.goldHover};
          border-color: transparent;
        }
        @keyframes goldRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <Link
        href={ROUTES.PRODUCT(product.category, product.slug)}
        className="block no-underline h-full"
        aria-label={`View ${product.name}`}
      >
        <div className="prod-card">
          <PlaceholderImage label={product.name} aspectRatio="landscape" />
          <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
            <h3 style={{
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.bold,
              fontSize: tokens.fontSize.h3,
              color: tokens.color.primary,
              lineHeight: tokens.lineHeight.snug,
              letterSpacing: tokens.letterSpacing.snug,
              margin: '0 0 0.5rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {product.name}
            </h3>
            <p style={{
              fontFamily: tokens.font.body,
              fontSize: tokens.fontSize.caption,
              color: tokens.color.textSecondary,
              lineHeight: tokens.lineHeight.normal,
              margin: '0 0 1.25rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {product.shortDescription ?? 'Contact us for product details.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{
                fontFamily: tokens.font.heading,
                fontWeight: tokens.fontWeight.bold,
                fontSize: tokens.fontSize.tiny,
                color: tokens.color.accent,
                letterSpacing: tokens.letterSpacing.wider,
                textTransform: 'uppercase' as const,
              }}>
                View Details
              </span>
              <ArrowUpRight size={13} color={tokens.color.accent} />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
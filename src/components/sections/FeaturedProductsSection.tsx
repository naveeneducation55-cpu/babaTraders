import { getFeaturedProducts } from '@/content/products'
import { ProductCard } from '@/components/shared/ProductCard'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { tokens } from '@/styles/tokens'

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts()
  if (featured.length === 0) return null

  return (
    <section
      className="section-pad"
      style={{ backgroundColor: tokens.color.surface }}
    >
      <div className="container-xl">
        <SectionHeading
          eyebrow="Featured Products"
          title="Popular Netting Products"
          description="A selection from our wholesale range. Contact us for bulk pricing and availability."
        />
        <div className="grid-responsive-3">
          {featured.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.5rem',
              borderRadius: tokens.radius.pill,
              backgroundColor: tokens.color.primary,
              color: tokens.color.textInverse,
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.black,
              fontSize: tokens.fontSize.bodySm,
              letterSpacing: tokens.letterSpacing.wide,
              textDecoration: 'none',
              boxShadow: tokens.shadow.card,
              transition: tokens.transition.normal,
            }}
          >
            Browse All Products →
          </a>
        </div>
      </div>
    </section>
  )
}
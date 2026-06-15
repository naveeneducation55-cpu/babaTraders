import { categories } from '@/content/categories'
import { CategoryCard } from '@/components/shared/CategoryCard'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { EmptyState } from '@/components/shared/EmptyState'
import { tokens } from '@/styles/tokens'

export function ProductCategoriesSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: tokens.color.background }}
    >
      <div className="container-xl">
        <SectionHeading
          eyebrow="Our Products"
          title="Product Categories"
          description="From mosquito net rolls to agricultural filter nets — a complete range of netting solutions for bulk and wholesale buyers."
        />
        {categories.length === 0 ? (
          <EmptyState
            title="Categories Coming Soon"
            description="Our product catalogue is being updated. Contact us directly for enquiries."
          />
        ) : (
          <>
            <div className="grid-responsive-4">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a
                href="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2.25rem',
                  borderRadius: tokens.radius.pill,
                  border: `1.5px solid ${tokens.color.primary}`,
                  color: tokens.color.primary,
                  fontFamily: tokens.font.heading,
                  fontWeight: tokens.fontWeight.bold,
                  fontSize: tokens.fontSize.bodySm,
                  letterSpacing: tokens.letterSpacing.wide,
                  textDecoration: 'none',
                  transition: tokens.transition.normal,
                }}
              >
                View All Products →
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
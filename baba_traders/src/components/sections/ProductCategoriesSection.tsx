import { categories } from '@/content/categories'
import { CategoryCard } from '@/components/shared/CategoryCard'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { EmptyState } from '@/components/shared/EmptyState'

export function ProductCategoriesSection() {
  return (
    <section style={{ backgroundColor: '#F8F7F4', padding: '2.5rem 0 1.5rem' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
            <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
              <a
                href="/products"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2.25rem', borderRadius: '9999px', border: '1.5px solid #0F172A', color: '#0F172A', fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.04em', textDecoration: 'none' }}
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
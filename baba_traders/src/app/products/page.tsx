import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { CategoryCard } from '@/components/shared/CategoryCard'
import { ContactCTASection } from '@/components/sections/ContactCTASection'
import { categories } from '@/content/categories'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'Products | BABA TRADERS',
  description: 'Browse our complete range of mosquito nets, agricultural filter nets, insect protection nets and foldable readymade nets. Wholesale and bulk supply available.',
  alternates: { canonical: `${siteConfig.url}/products` },
}

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="Complete range of netting solutions for wholesale and bulk buyers across India, Nepal and Bhutan."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Products' },
        ]}
      />
      <section style={{ backgroundColor: '#F8F7F4', padding: '5rem 0 7rem' }}>
        <div className="container-xl">
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#64748B', marginBottom: '2.5rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {categories.length} Categories — contact us for bulk pricing
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTASection />
    </>
  )
}
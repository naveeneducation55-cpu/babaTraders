import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/layout/PageHeader'
import { ProductCard } from '@/components/shared/ProductCard'
import { EmptyState } from '@/components/shared/EmptyState'
import { ContactCTASection } from '@/components/sections/ContactCTASection'
import { categories, getCategoryBySlug } from '@/content/categories'
import { getProductsByCategory } from '@/content/products'
import { siteConfig } from '@/content/site'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}
  return {
    title: category.name + ' Supplier | BABA TRADERS',
    description: category.description,
    alternates: { canonical: siteConfig.url + '/products/' + slug },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const products = getProductsByCategory(slug)

  return (
    <>
      <PageHeader
        title={category.name}
        description={category.shortDescription}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: category.name },
        ]}
      />
      <section style={{ backgroundColor: '#F8F7F4', padding: '5rem 0 7rem' }}>
        <div className="container-xl">
          {products.length === 0 ? (
            <EmptyState
              title="Products Coming Soon"
              description="This category is being updated. Contact us for availability."
            />
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      <ContactCTASection />
    </>
  )
}
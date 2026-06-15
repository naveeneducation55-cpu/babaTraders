import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MessageCircle, Check, ArrowLeft } from 'lucide-react'
import { products, getProductBySlug, getRelatedProducts } from '@/content/products'
import { getCategoryBySlug } from '@/content/categories'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { ProductCard } from '@/components/shared/ProductCard'
import { ContactCTASection } from '@/components/sections/ContactCTASection'
import { phoneUrl, whatsappUrl } from '@/content/contact'
import { siteConfig } from '@/content/site'

interface Props {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} | BABA TRADERS`,
    description: product.shortDescription ?? product.description ?? 'Contact us for product details.',
    alternates: { canonical: `${siteConfig.url}/products/${product.category}/${slug}` },
  }
}

export default async function ProductPage({ params }: Props) {
  const { category: categorySlug, slug } = await params
  const product = getProductBySlug(slug)
  if (!product || product.category !== categorySlug) notFound()

  const category = getCategoryBySlug(product.category)
  const related = getRelatedProducts(product, 3)

  return (
    <>
      <div style={{ backgroundColor: '#0F172A', paddingTop: '6rem', paddingBottom: '1.5rem' }}>
        <div className="container-xl">
          <nav aria-label="Breadcrumb">
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, alignItems: 'center' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                ...(category ? [{ label: category.name, href: `/products/${product.category}` }] : []),
                { label: product.name },
              ].map((item, i, arr) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>/</span>}
                  {'href' in item
                    ? <a href={item.href} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'none', fontFamily: 'var(--font-inter)' }}>{item.label}</a>
                    : <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', fontFamily: 'var(--font-inter)' }} aria-current="page">{item.label}</span>
                  }
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <section style={{ backgroundColor: '#F8F7F4', padding: '2rem 0' }}>
        <div className="container-xl">
          <Link
            href={`/products/${product.category}`}
            className="inline-flex items-center gap-2 no-underline"
            style={{ color: '#64748B', fontSize: '0.85rem', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}
          >
            <ArrowLeft size={15} />
            Back to {category?.name ?? 'Products'}
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            {/* Image */}
            <PlaceholderImage label={product.name} aspectRatio="landscape" />

            {/* Info */}
            <div>
              {category && (
                <Link href={`/products/${product.category}`} style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', textDecoration: 'none', display: 'block', marginBottom: '0.75rem' }}>
                  {category.name}
                </Link>
              )}
              <h1 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#0F172A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                {product.name}
              </h1>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: '#64748B', lineHeight: 1.8, marginBottom: '2rem' }}>
                {product.description ?? product.shortDescription ?? 'Contact us for product details.'}
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <a href={phoneUrl} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', borderRadius: '9999px', backgroundColor: '#0F172A', color: '#fff', fontFamily: 'var(--font-manrope)', fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none', minHeight: '52px' }}>
                  <Phone size={17} /> Call to Enquire
                </a>
                <a href={`${whatsappUrl}?text=Hi, I am interested in ${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', borderRadius: '9999px', backgroundColor: '#25D366', color: '#fff', fontFamily: 'var(--font-manrope)', fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none', minHeight: '52px' }}>
                  <MessageCircle size={17} /> WhatsApp Enquiry
                </a>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 800, fontSize: '1rem', color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.01em' }}>Key Features</h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {product.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#64748B' }}>
                        <Check size={15} color="#B8860B" style={{ marginTop: '2px', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Specs */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 800, fontSize: '1.5rem', color: '#0F172A', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Specifications</h2>
              <div style={{ backgroundColor: '#fff', borderRadius: '1.25rem', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#F8F7F4' : '#fff' }}>
                        <td style={{ padding: '0.875rem 1.5rem', fontFamily: 'var(--font-manrope)', fontWeight: 700, color: '#0F172A', width: '35%' }}>{key}</td>
                        <td style={{ padding: '0.875rem 1.5rem', fontFamily: 'var(--font-inter)', color: '#64748B' }}>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 800, fontSize: '1.5rem', color: '#0F172A', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>Applications</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {product.applications.map((app, i) => (
                  <span key={i} style={{ padding: '0.5rem 1.25rem', backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '9999px', fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#64748B' }}>
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <div style={{ marginTop: '5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 800, fontSize: '1.5rem', color: '#0F172A', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Related Products</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactCTASection />
    </>
  )
}
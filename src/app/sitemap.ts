import { MetadataRoute } from 'next'
import { siteConfig } from '@/content/site'
import { categories } from '@/content/categories'
import { products } from '@/content/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: base + '/about', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: base + '/products', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: base + '/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  const categoryPages = categories.map((c) => ({
    url: base + '/products/' + c.slug,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const productPages = products.map((p) => ({
    url: base + '/products/' + p.category + '/' + p.slug,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...categoryPages, ...productPages]
}

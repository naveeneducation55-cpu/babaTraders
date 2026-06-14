import { siteConfig } from '@/content/site'

export const DEFAULT_METADATA = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Mosquito Net & Agricultural Net Supplier Since 2005`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website' as const,
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Mosquito Net & Agricultural Net Supplier Since 2005`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: `${siteConfig.name} | Mosquito Net & Agricultural Net Supplier Since 2005`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
}

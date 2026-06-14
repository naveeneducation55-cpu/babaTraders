import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { DEFAULT_METADATA } from '@/constants/seo'
import { siteConfig } from '@/content/site'
import { contact } from '@/content/contact'
import { company } from '@/content/company'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = DEFAULT_METADATA

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  url: siteConfig.url,
  foundingDate: company.established.toString(),
  description: company.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.address.street + ', ' + contact.address.ward,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.pincode,
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contact.phone,
    contactType: 'sales',
    areaServed: ['IN', 'NP', 'BT'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  url: siteConfig.url,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.address.street + ', ' + contact.address.ward,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.pincode,
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:15',
    closes: '21:15',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable + ' ' + inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className="bg-[#F8F7F4] text-[#1E293B] antialiased"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

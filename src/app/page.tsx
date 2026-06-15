import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatisticsSection } from '@/components/sections/StatisticsSection'
import { ProductCategoriesSection } from '@/components/sections/ProductCategoriesSection'
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { CoverageSection } from '@/components/sections/CoverageSection'
import { ContactCTASection } from '@/components/sections/ContactCTASection'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'BABA TRADERS | Mosquito Net & Agricultural Net Supplier Since 2005',
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <ProductCategoriesSection />
      <FeaturedProductsSection />
      <AboutPreviewSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <CoverageSection />
      <ContactCTASection />
    </>
  )
}

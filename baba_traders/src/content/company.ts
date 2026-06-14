import { Company } from '@/types/company'

export const company: Company = {
  name: 'BABA TRADERS',
  tagline: 'Trusted Netting Solutions Since 2005',
  established: 2005,
  description:
    'BABA TRADERS has been a trusted name in the netting industry since 2005. As a leading importer, exporter, distributor and wholesaler, we supply premium mosquito nets, agricultural filter nets and insect protection nets across India, Nepal and Bhutan. Our commitment to quality and reliability has made us a preferred partner for wholesalers, dealers and distributors across the region.',
  businessTypes: ['Importer', 'Exporter', 'Distributor', 'Wholesaler'],
  markets: ['India', 'Nepal', 'Bhutan'],
  logo: undefined,
}

export const statistics = [
  { value: '20+', label: 'Years Experience', suffix: '' },
  { value: '50+', label: 'Products', suffix: '' },
  { value: '3', label: 'Countries Served', suffix: '' },
]

export const whyChooseUs = [
  {
    icon: 'shield-check',
    title: 'Trusted Since 2005',
    description:
      'Over two decades of experience supplying quality netting products to businesses across South Asia.',
  },
  {
    icon: 'package',
    title: 'Bulk Supply Ready',
    description:
      'Equipped to handle large wholesale orders for distributors, dealers and agricultural businesses.',
  },
  {
    icon: 'map-pin',
    title: 'Pan India Distribution',
    description:
      'Strong distribution network covering India, Nepal and Bhutan with reliable delivery.',
  },
  {
    icon: 'star',
    title: 'Premium Quality',
    description:
      'Carefully sourced products meeting the demands of agricultural and domestic markets.',
  },
  {
    icon: 'users',
    title: 'B2B Focused',
    description:
      'Dedicated service for wholesalers, dealers and distributors seeking reliable bulk supply.',
  },
  {
    icon: 'phone',
    title: 'Direct Communication',
    description:
      'Reach us directly via call or WhatsApp for fast enquiries and order discussions.',
  },
]

export const industries = [
  { name: 'Agriculture', description: 'Crop protection and filter nets for farms' },
  { name: 'Wholesale & Distribution', description: 'Bulk supply for regional distributors' },
  { name: 'Retail', description: 'Branded and readymade nets for retail stores' },
  { name: 'Horticulture', description: 'Shade nets and insect barriers for nurseries' },
  { name: 'Aquaculture', description: 'Protective netting for fish farms' },
  { name: 'Construction', description: 'Protective mesh for building projects' },
]

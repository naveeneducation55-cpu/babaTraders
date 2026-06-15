import { Product } from '@/types/product'

export const products: Product[] = [
  // MOSQUITO NET ROLLS
  {
    id: 'mnr-001',
    name: 'Premium Fiberglass Mosquito Net Roll',
    slug: 'premium-fiberglass-mosquito-net-roll',
    category: 'mosquito-net-rolls',
    shortDescription: 'High-grade fiberglass net roll for long-lasting mosquito protection.',
    description:
      'Our premium fiberglass mosquito net rolls offer superior durability and excellent visibility. The fine mesh construction effectively blocks mosquitoes and other insects while maintaining airflow. Suitable for windows, doors and custom frame installations.',
    features: [
      'High-grade fiberglass construction',
      'Corrosion and rust resistant',
      'Excellent ventilation with fine mesh',
      'UV resistant for longer lifespan',
      'Available in multiple widths',
      'Easy to cut and install',
    ],
    applications: [
      'Window and door screening',
      'Custom frame installations',
      'Residential and commercial use',
      'Wholesale cutting and packaging',
    ],
    specifications: {
      Material: 'Fiberglass',
      'Mesh Size': '18x16 per inch',
      Width: '90cm, 120cm, 150cm available',
      Color: 'Grey, Black, White',
      'Roll Length': '30m standard',
      Weight: '110-115 gsm',
    },
    images: [],
    featured: true,
  },
  {
    id: 'mnr-002',
    name: 'Polyester Mosquito Net Roll',
    slug: 'polyester-mosquito-net-roll',
    category: 'mosquito-net-rolls',
    shortDescription: 'Lightweight polyester net roll ideal for bed nets and frame nets.',
    description:
      'Soft, lightweight polyester mosquito net rolls perfect for bed canopy nets and lightweight frame applications. Available in white and off-white for a clean aesthetic.',
    features: [
      'Soft polyester construction',
      'Lightweight and easy to handle',
      'Available in large widths',
      'Suitable for bed canopy nets',
      'Machine washable',
    ],
    applications: ['Bed canopy nets', 'Lightweight frame nets', 'Retail packaging'],
    specifications: {
      Material: 'Polyester',
      'Mesh Size': '156x156 per sqm',
      Width: '150cm, 180cm available',
      Color: 'White, Off-White',
      'Roll Length': '50m standard',
      Weight: '35-40 gsm',
    },
    images: [],
    featured: true,
  },
  {
    id: 'mnr-003',
    name: 'Nylon Mosquito Net Roll',
    slug: 'nylon-mosquito-net-roll',
    category: 'mosquito-net-rolls',
    shortDescription: 'Heavy-duty nylon net roll for commercial and industrial applications.',
    description:
      'Robust nylon mosquito net rolls designed for heavy-duty applications. Excellent strength-to-weight ratio and resistance to stretching makes it ideal for permanent installations.',
    features: [
      'High-tensile nylon construction',
      'Stretch resistant',
      'Long operational life',
      'Suitable for permanent installations',
      'Chemical resistant',
    ],
    applications: [
      'Commercial installations',
      'Industrial screening',
      'Permanent window and door frames',
    ],
    specifications: {
      Material: 'Nylon',
      'Mesh Size': '16x16 per inch',
      Width: '90cm, 120cm available',
      Color: 'Black, Grey',
      'Roll Length': '30m standard',
      Weight: '120-130 gsm',
    },
    images: [],
    featured: false,
  },

  // AGRICULTURAL FILTER NETS
  {
    id: 'afn-001',
    name: 'Crop Protection Filter Net',
    slug: 'crop-protection-filter-net',
    category: 'agricultural-filter-nets',
    shortDescription: 'Fine mesh filter nets to protect crops from insects and airborne debris.',
    description:
      'High-quality crop protection filter nets designed to shield crops from insects, whiteflies and airborne debris while allowing full light transmission and air circulation. Essential for modern agricultural practices.',
    features: [
      'Ultra-fine mesh for insect exclusion',
      'High light transmission (85-90%)',
      'Excellent airflow maintenance',
      'UV stabilised for outdoor use',
      'Lightweight and easy to install',
      'Reusable season after season',
    ],
    applications: [
      'Vegetable crop protection',
      'Fruit orchard insect control',
      'Greenhouse insect barriers',
      'Nursery plant protection',
    ],
    specifications: {
      Material: 'HDPE',
      'Mesh Size': '50 mesh',
      Width: '4m, 6m, 8m available',
      Color: 'White',
      'UV Stabilisation': 'Yes, 3-5 year rated',
      Weight: '17-18 gsm',
    },
    images: [],
    featured: true,
  },
  {
    id: 'afn-002',
    name: 'Shade Net for Agriculture',
    slug: 'shade-net-for-agriculture',
    category: 'agricultural-filter-nets',
    shortDescription: 'HDPE shade nets providing 35% to 75% shade for crop management.',
    description:
      'Premium HDPE shade nets for controlled light management in agriculture and horticulture. Available in multiple shade percentages to suit different crop requirements.',
    features: [
      'Multiple shade percentages available',
      'HDPE monofilament construction',
      'UV stabilised',
      'Tear and abrasion resistant',
      'Lightweight knitted structure',
    ],
    applications: [
      'Vegetable nurseries',
      'Flower cultivation',
      'Poultry shade structures',
      'Greenhouse roofing',
    ],
    specifications: {
      Material: 'HDPE Monofilament',
      'Shade Percentage': '35%, 50%, 65%, 75%',
      Width: '3m, 4m, 6m available',
      Color: 'Green, Black',
      'UV Life': '3-5 years',
      Weight: '45-75 gsm',
    },
    images: [],
    featured: false,
  },

  // INSECT PROTECTION NETS
  {
    id: 'ipn-001',
    name: 'Anti-Insect Net Fine Mesh',
    slug: 'anti-insect-net-fine-mesh',
    category: 'insect-protection-nets',
    shortDescription: 'Ultra-fine mesh nets providing complete insect exclusion for crops.',
    description:
      'Our anti-insect nets feature an ultra-fine mesh that excludes even the smallest insects including thrips, whiteflies and aphids. Used extensively in high-value crop production.',
    features: [
      'Ultra-fine 50-mesh construction',
      'Excludes thrips and whiteflies',
      'Maintains crop microclimate',
      'High durability HDPE material',
      'Long operational lifespan',
    ],
    applications: [
      'High-value vegetable production',
      'Strawberry farming',
      'Herb and spice cultivation',
      'Export crop protection',
    ],
    specifications: {
      Material: 'HDPE',
      'Mesh Count': '50 mesh per inch',
      Width: '4m, 6m standard',
      Color: 'White',
      Weight: '17 gsm',
      'UV Stabilisation': 'Yes',
    },
    images: [],
    featured: true,
  },
  {
    id: 'ipn-002',
    name: 'Bird Protection Net',
    slug: 'bird-protection-net',
    category: 'insect-protection-nets',
    shortDescription: 'Heavy-duty nets to protect fruits and crops from bird damage.',
    description:
      'Durable bird protection nets designed for orchards, vineyards and open-field crops. Effectively excludes birds while allowing sunlight and rain to reach crops.',
    features: [
      'Heavy-duty HDPE construction',
      'Large aperture for light and water',
      'Lightweight for easy draping',
      'Reusable multiple seasons',
      'UV stabilised',
    ],
    applications: ['Fruit orchards', 'Vineyards', 'Blueberry and strawberry farms', 'Fish ponds'],
    specifications: {
      Material: 'HDPE',
      'Mesh Size': '19mm x 19mm',
      Width: '4m, 6m, 10m available',
      Color: 'White, Black',
      Weight: '28-35 gsm',
      'UV Life': '5+ years',
    },
    images: [],
    featured: false,
  },

  // FOLDABLE & READYMADE NETS
  {
    id: 'frn-001',
    name: 'Foldable Single Bed Mosquito Net',
    slug: 'foldable-single-bed-mosquito-net',
    category: 'foldable-readymade-nets',
    shortDescription: 'Pop-up foldable mosquito net for single beds, easy to carry and store.',
    description:
      'Convenient foldable pop-up mosquito net for single beds. Self-supporting frame with ultra-fine mesh. Folds flat into a compact carry bag. Ideal for retail sale and home delivery distribution.',
    features: [
      'Self-supporting pop-up frame',
      'No installation required',
      'Ultra-fine polyester mesh',
      'Folds into compact carry bag',
      'Zippered entry for easy access',
      'Suitable for indoor and outdoor use',
    ],
    applications: ['Home use', 'Travel and camping', 'Retail distribution', 'Gifting'],
    specifications: {
      Material: 'Polyester mesh, fibreglass frame',
      Size: '190cm x 90cm x 150cm (L x W x H)',
      'Mesh Count': '156 holes per sq inch',
      Color: 'White',
      Packaging: 'Round carry bag included',
      Weight: '0.8 kg',
    },
    images: [],
    featured: true,
  },
  {
    id: 'frn-002',
    name: 'Foldable Double Bed Mosquito Net',
    slug: 'foldable-double-bed-mosquito-net',
    category: 'foldable-readymade-nets',
    shortDescription: 'Large foldable mosquito net for double and queen size beds.',
    description:
      'Spacious foldable mosquito net designed for double and queen size beds. The enlarged self-supporting frame provides ample sleeping space while the fine mesh ensures complete mosquito protection.',
    features: [
      'Extra-large pop-up frame',
      'Fits double and queen beds',
      'Ultra-fine polyester mesh',
      'Reinforced frame connections',
      'Double-sided zipper entry',
      'Carry bag included',
    ],
    applications: ['Home double beds', 'Hotel and hospitality', 'Retail bulk supply'],
    specifications: {
      Material: 'Polyester mesh, fibreglass frame',
      Size: '200cm x 150cm x 155cm (L x W x H)',
      'Mesh Count': '156 holes per sq inch',
      Color: 'White',
      Packaging: 'Round carry bag included',
      Weight: '1.1 kg',
    },
    images: [],
    featured: false,
  },
  {
    id: 'frn-003',
    name: 'Window Frame Mosquito Net',
    slug: 'window-frame-mosquito-net',
    category: 'foldable-readymade-nets',
    shortDescription: 'Ready-fit magnetic or velcro window mosquito net frames.',
    description:
      'Pre-fitted window mosquito net frames available in standard sizes. Magnetic and velcro variants available for easy installation without drilling. Suitable for retail and builder supply.',
    features: [
      'No-drill magnetic variant available',
      'Standard window size compatibility',
      'Fine fiberglass mesh',
      'Aluminium frame',
      'Easy DIY installation',
      'Removable for cleaning',
    ],
    applications: [
      'Residential windows',
      'Office windows',
      'Builder and contractor supply',
      'Retail distribution',
    ],
    specifications: {
      Material: 'Aluminium frame, fiberglass mesh',
      'Available Sizes': 'Standard window sizes, custom on request',
      Variants: 'Magnetic, Velcro, Fixed frame',
      Color: 'Silver, White frame',
      'Mesh Size': '18x16 per inch',
    },
    images: [],
    featured: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit)
}

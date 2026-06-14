import { Category } from '@/types/category'

export const categories: Category[] = [
  {
    name: 'Mosquito Net Rolls',
    slug: 'mosquito-net-rolls',
    shortDescription: 'Premium quality mosquito net rolls for bulk cutting and distribution.',
    description:
      'Our mosquito net rolls are manufactured from high-grade materials including fiberglass, polyester and nylon. Available in multiple mesh sizes, widths and colours to suit domestic, commercial and agricultural requirements. Ideal for wholesalers and distributors who cut and package nets to specification.',
    image: undefined,
    productCount: 12,
  },
  {
    name: 'Agricultural Filter Nets',
    slug: 'agricultural-filter-nets',
    shortDescription: 'Durable filter nets designed for agricultural and horticultural use.',
    description:
      'Specially engineered agricultural filter nets that protect crops from insects, birds and debris while maintaining airflow. Suitable for greenhouses, nurseries and open field farming. Available in various shade percentages and mesh densities for different agricultural needs.',
    image: undefined,
    productCount: 10,
  },
  {
    name: 'Insect Protection Nets',
    slug: 'insect-protection-nets',
    shortDescription: 'High-density insect barrier nets for crops and storage protection.',
    description:
      'Our insect protection nets provide effective barriers against a wide range of insects and pests. Used in agriculture, horticulture and storage facilities. Fine mesh construction ensures protection without restricting light or ventilation. Available in bulk rolls and custom sizes.',
    image: undefined,
    productCount: 8,
  },
  {
    name: 'Foldable & Readymade Nets',
    slug: 'foldable-readymade-nets',
    shortDescription: 'Ready-to-use foldable mosquito nets for beds, windows and doors.',
    description:
      'Complete range of foldable and readymade mosquito nets for immediate use. Available in single, double and king sizes for beds. Also includes window and door net frames. Suitable for retail distribution and direct consumer supply.',
    image: undefined,
    productCount: 15,
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

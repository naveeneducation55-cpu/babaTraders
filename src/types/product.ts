export interface ProductSpecification {
  [key: string]: string
}

export interface Product {
  id: string
  name: string
  slug: string
  category: string
  shortDescription?: string
  description?: string
  features?: string[]
  applications?: string[]
  specifications?: ProductSpecification
  images?: string[]
  featured?: boolean
}

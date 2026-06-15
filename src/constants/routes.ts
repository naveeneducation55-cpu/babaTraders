export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  CONTACT: '/contact',
  CATEGORY: (slug: string) => `/products/${slug}`,
  PRODUCT: (category: string, slug: string) => `/products/${category}/${slug}`,
} as const

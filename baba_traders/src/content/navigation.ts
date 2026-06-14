export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  pages: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ],
  categories: [
    { label: 'Mosquito Net Rolls', href: '/products/mosquito-net-rolls' },
    { label: 'Agricultural Filter Nets', href: '/products/agricultural-filter-nets' },
    { label: 'Insect Protection Nets', href: '/products/insect-protection-nets' },
    { label: 'Foldable & Readymade Nets', href: '/products/foldable-readymade-nets' },
  ],
}

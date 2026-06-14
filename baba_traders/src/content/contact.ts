import { Contact } from '@/types/contact'

export const contact: Contact = {
  phone: '+919876543210',
  whatsapp: '+919876543210',
  address: {
    street: '41, BM Sarani Rd',
    ward: 'Ward 6',
    area: 'Mahananda Para',
    city: 'Siliguri',
    state: 'West Bengal',
    pincode: '734001',
  },
  hours: {
    days: 'Monday – Saturday',
    open: '10:15 AM',
    close: '9:15 PM',
  },
}

export const phoneDisplay = '+91 9749380075'
export const whatsappUrl = `https://wa.me/${contact.whatsapp.replace('+', '')}`
export const phoneUrl = `tel:${contact.phone}`
export const developerName = 'built with ❤️ by @NKDugar - 9079762748'

export const addressOneLine =
  '41, BM Sarani Rd, Ward 6, Mahananda Para, Siliguri, West Bengal 734001'

export const googleMapsUrl =
  'https://www.google.com/maps/search/41+BM+Sarani+Rd+Mahananda+Para+Siliguri+West+Bengal+734001'

export const googleMapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.234567890!2d88.4276!3d26.7271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQzJzM3LjYiTiA4OMKwMjUnMzkuNCJF!5e0!3m2!1sen!2sin!4v1234567890'

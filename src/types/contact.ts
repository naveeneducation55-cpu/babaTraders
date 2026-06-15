export interface Address {
  street: string
  ward: string
  area: string
  city: string
  state: string
  pincode: string
}

export interface BusinessHours {
  days: string
  open: string
  close: string
}

export interface Contact {
  phone: string
  whatsapp: string
  address: Address
  hours: BusinessHours
}

import { StaticImageData } from 'next/image'

export type MenuTypes = {
  id: string
  slug: string
  title: string
  desc?: string
  img?: StaticImageData
  color: string
}[]

export type FeaturedTypes = {
  id: string
  slug: string
  title: string
  desc?: string
  img?: StaticImageData
  color: string
  price: number
}[]

export type OrderType = {
  id: string
  userEmail: string
  price: number
  products: CartItemType[]
  status: string
  createdAt: Date
  intent_id?: String
}

export type CartItemType = {
  id: string
  title: string
  img?: StaticImageData
  price: number
  optionTitle?: string
  quantity: number
}

export type ProductType = {
  id: string
  title: string
  desc?: string
  img?: StaticImageData
  price: number
  options?: { title: string; additionalPrice: number }[]
}

export type CartType = {
  products: CartItemType[]
  totalItems: number
  totalPrice: number
}

export type ActionTypes = {
  addToCart: (item: CartItemType) => void
  removeFromCart: (item: CartItemType) => void
}

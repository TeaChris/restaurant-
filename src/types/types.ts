export type MenuTypes = {
  id: string
  slug: string
  title: string
  desc?: string
  img?: string
  color: string
}[]

export type FeaturedTypes = {
  id: string
  slug: string
  title: string
  desc?: string
  img?: string
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
  img?: string
  price: number
  optionTitle?: string
  quantity: number
}

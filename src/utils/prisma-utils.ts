import { FeaturedTypes, MenuTypes } from '@/types/types'

export async function getData(): Promise<MenuTypes> {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed!')
  }

  return res.json()
}

export async function getFeatured(): Promise<FeaturedTypes> {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed!')
  }

  return res.json()
}

export async function getCategory(category: string): Promise<FeaturedTypes> {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error('Failed!')
  }

  return res.json()
}

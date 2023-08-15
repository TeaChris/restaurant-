import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

// fetch all products
export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const cat = searchParams.get('cat')

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    })
    return new NextResponse(JSON.stringify(products), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    )
  }
}
export const POST = () => {
  return new NextResponse('Hello', { status: 200 })
}

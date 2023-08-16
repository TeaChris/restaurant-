import { prisma } from '@/utils/connect'
import { NextResponse, NextRequest } from 'next/server'

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params

  try {
    const body = await request.json()

    await prisma.order.update({
      where: {
        id: id,
      },
      data: { status: body },
    })
    return new NextResponse(
      JSON.stringify({ message: 'Order has been updated!' }),
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
  }
}

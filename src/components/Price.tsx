'use client'

import { FC, useEffect, useState } from 'react'

interface PriceProps {
  price: number
  id: number
  options?: { title: string; additionalPrice: number }[]
}

const Price: FC<PriceProps> = ({ price, id, options }) => {
  const [total, setTotal] = useState<number>(price)
  const [quantity, setQuantity] = useState<number>(1)
  const [selected, setSelected] = useState<number>(0)

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? 'rgb(248 113 113)' : 'white',
              color: selected === index ? 'white' : 'red',
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {'>'}
            </button>
          </div>
          <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Price

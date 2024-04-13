'use client'
import { useState } from 'react'
import { useCatItemsStore } from '../store/carItems'

interface Product {
  id: number
  title: string
  image: string
  description: string
  price: number
  category?: number
}

interface CardProps {
  product: Product
}
const Card = ({ product }: CardProps) => {
  const listItems = useCatItemsStore((state) => state.items)
  const addItems = useCatItemsStore((state) => state.addItems)
  const [quantity, setQuantity] = useState(1)
  const { id, title, image, price, category } = product

  const handleAddToCart = () => {
    console.log('ssas')
    if (listItems.length === 0) {
      return addItems({ ...product, quantity })
    }

    listItems.map((item) => {
      if (item.id === id) {
        console.log('tassxsa')
        return addItems({ ...product, quantity: item.quantity + quantity })
      } else {
        console.log('tas')
        return addItems({ ...product, quantity })
      }
    })

    // addItems({ ...product, quantity })
  }

  return (
    <div
      key={id}
      className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 flex-1"
    >
      <img
        src={image}
        className="object-cover w-40 h-40 -mt-20 rounded-full shadow-2xl"
      />
      <p className="text-xl">{title}</p>
      <span className="text-gray-400">${price}</span>
      <p className="flex-1">{category}</p>
      {/* <p className="text-gray-600">{quantity} Bowls available</p> */}
      <footer className="flex gap-4">
        <div className="flex px-2 py-2 border rounded-md">
          <button
            onClick={() => quantity > 1 && setQuantity((prev) => (prev -= 1))}
            className=""
          >
            ➖
          </button>
          <input
            className="w-10 text-center text-gray-300 bg-transparent"
            type="text"
            pattern="[0-9]"
            value={quantity}
            onChange={(e) => {
              setQuantity(parseInt(e.target.value) || 1)
            }}
            name=""
            id=""
          />
          <button
            onClick={() => setQuantity((prev) => (prev += 1))}
            className=""
          >
            ➕
          </button>
        </div>
        <button
          onClick={() => handleAddToCart()}
          className="px-2 py-2 border rounded-md hover:bg-slate-50"
        >
          Add to Cart
        </button>
      </footer>
    </div>
  )
}

export default Card

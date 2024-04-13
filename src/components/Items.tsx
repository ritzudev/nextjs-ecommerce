//'use client'
//import { useEffect, useState } from 'react'
import Card from './Card'

export default async function Items() {
  // const [products, setProducts] = useState([])

  //useEffect(() => {
  const products = await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
      return data
    })
  //}, [])

  return (
    <div className="grid grid-cols-1 gap-16 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product: any) => {
        return <Card key={product.id} product={product} />
      })}
    </div>
  )
}

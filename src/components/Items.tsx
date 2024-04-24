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
    <div className="grid gap-16 py-8 px-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product: any) => {
        return <Card key={product.id} product={product} />
      })}
    </div>
  )
}

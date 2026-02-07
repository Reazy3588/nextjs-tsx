"use client"

import CardProduct from "@/app/components/card/CardProduct"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const ENDPOINT = "https://fakestoreapi.com/products/"

export default function Service() {
  const [products, setProducts] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(ENDPOINT)
        const data = await res.json()
        setProducts(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error("Fetch error:", error)
        setProducts([])
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mt-25 mb-8 text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onClick={() => router.push(`/service/${product.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

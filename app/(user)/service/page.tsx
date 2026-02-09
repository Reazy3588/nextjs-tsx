"use client"

import CardProduct from "@/app/components/card/CardProduct"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// OPTION A: More stable API (Recommended)
const ENDPOINT = "https://dummyjson.com/products" 

// OPTION B: If you MUST use FakeStoreAPI, try adding a User-Agent header
// const ENDPOINT = "https://fakestoreapi.com/products"

export default function Service() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true) // Added loading state
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(ENDPOINT, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // This header helps bypass some "bot" filters
            'User-Agent': 'Mozilla/5.0' 
          },
        })

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json()
        
        const productList = Array.isArray(data) ? data : (data.products)
        
        setProducts(productList)
      } catch (error) {
        console.error("Fetch error:", error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div className="mt-25 text-center">
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Spinner */}
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-purple-500 animate-[spin_1.5s_linear_infinite_reverse]"></div>
      </div>

      {/* Text */}
      <h1 className="mt-8 text-3xl font-extrabold tracking-widest text-white animate-pulse">
        LOADING
      </h1>
    </div>
  </div>

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
            // DummyJSON uses .thumbnail, FakeStoreAPI uses .image
            image={product.image || product.thumbnail} 
            price={product.price}
            onClick={() => router.push(`/service/${product.id}`)}
          />
        ))}
      </div>
    </div>
  )
};
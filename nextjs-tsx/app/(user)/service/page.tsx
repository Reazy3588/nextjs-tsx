"use client";

import CardProduct from '@/app/components/card/CardProduct';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ENDPOINT = 'https://fakestoreapi.com/products/';

export default function Service() {
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
<div className="container mx-auto px-4 py-8">
  <h1 className=" mt-25 mb-8 text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
    Featured Products
  </h1>
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {products.map((product, index) => (
      <CardProduct
        onClick={() => router.push(`/service/${product.id}`)}
        key={index}
        title={product.title}
        image={product.image}
        price={product.price}
      />
    ))}
  </div>
</div>
  );
}

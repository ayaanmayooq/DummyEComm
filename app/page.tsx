"use client"
import { cn } from "@/lib/utils"

import { useState, useEffect } from 'react';

import { fetchAllProducts } from "@/lib/data";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">Dummy E-Commerce</h1>
        
        <p className="mx-auto mt-4 max-w-3xl text-base">Description</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            {products.length} products
            </h1>
            {/* Product Sort */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="hidden lg:block">{/* Product filters */}</div>
              {/* Product grid */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

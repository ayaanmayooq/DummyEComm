"use client"
import { cn } from "@/lib/utils"

import { useState, useEffect } from 'react';

import { fetchAllProducts, fetchProductsWithOptions, searchProduct } from "@/lib/data";
import { Product } from "@/lib/schema";
import { siteConfig } from "@/config/site";

import { Filters } from "@/components/filters";
import { GridLayout } from "@/components/grid";

import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const category = searchParams.get('category');
    const searchQuery = searchParams.get('search');

    fetchProductsWithOptions(category, searchQuery)
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.error(error);
      });
  }, [searchParams]);

  return (
    <div className="">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">{siteConfig.name}</h1>
        
        <p className="mx-auto mt-4 max-w-3xl text-base">{siteConfig.description}</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            {products.length} product{products.length === 1 ? "" : "s"}
            </h1>
            {/* Product Sort */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="hidden lg:block">
                <Filters />
              </div>
              {/* Product grid */}
              <GridLayout products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

"use client"
import { cn } from "@/lib/utils"

import { useState, useEffect } from 'react';

import { fetchAllProducts, fetchProductsWithOptions, searchProduct } from "@/lib/data";
import { Product } from "@/lib/schema";
import { siteConfig } from "@/config/site";

import { Filters } from "@/components/filters";
import { GridLayout } from "@/components/grid";

import { useSearchParams } from 'next/navigation'

export default function Products() {
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
            <div className="flex gap-x-8">
              <div className="hidden md:basis-1/3 md:block lg:basis-1/4">
                <Filters />
              </div>
              {/* Product grid */}
              <div className="flex-1 md:basis-2/3 lg:basis-3/4">
                <GridLayout products={products} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

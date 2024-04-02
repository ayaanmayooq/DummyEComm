"use client"
import { cn } from "@/lib/utils"

import { useState, useEffect } from 'react';

import { fetchAllProducts, fetchProductsWithOptions, searchProduct } from "@/lib/data";
import { Product } from "@/lib/schema";
import { siteConfig } from "@/config/site";

import {ProductCarousel} from '@/components/product-carousel';


export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      fetchProductsWithOptions(null, null)
        .then(data => {
          setProducts(data.products);
        })
        .catch(error => {
          console.error(error);
        });
  }, []);

  return (
    <div>
    <div className="h-[60vh] flex justify-center items-center border-y border-slate-200 bg-gray-100">
      <div className="mx-auto px-4 text-center">
        <h1 className="text-3xl h1-core font-medium tracking-normal">{siteConfig.name}</h1>
        <p className="mt-2 h2-core text-2xl text-slate-800">{siteConfig.description}</p>
        <p className="mb-4 h2-core text-2xl text-slate-800">Powered by Next.js and DummyJSON API</p>
      </div>
    </div>
    <ProductCarousel products={products} />
    </div>

  );
}

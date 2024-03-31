"use client"

import Image from "next/image"
import Link from "next/link"
import { XCircle } from "lucide-react"
import { Product } from "@/lib/schema"
import { formatSlug } from "@/lib/utils"
import { formatCurrencyString } from "use-shopping-cart";
import { ProductCard } from "@/components/product-card"
// import { shimmer, toBase64 } from "@/lib/image"

interface Props {
    products: Product[]
}

export function GridLayout({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="col-span-3 mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

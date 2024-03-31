"use client"

import Image from "next/image"
import Link from "next/link"
import { XCircle } from "lucide-react"
import { Product } from "@/lib/schema"
import { formatSlug } from "@/lib/utils"
import { formatCurrencyString } from "use-shopping-cart";
// import { shimmer, toBase64 } from "@/lib/image"

interface Props {
    products: Product[]
}

export function GridLayout({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="col-span-3 mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`} className="group text-sm hover:border hover:border-gray-200 p-3 hover:dark:border-gray-800 rounded-lg hover:scale-105 duration-200">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-80 ">
            <Image
            placeholder="blur"
            blurDataURL="/product-placeholder.jpg"
              src={product.thumbnail}
              alt={product.title}
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 text-lg text-center">{product.title}</h3>
          <p className="mt-0 font-medium text-xl text-center">{formatCurrencyString({value: product.price, currency: "USD"})}</p>
        </Link>
      ))}
    </div>
  )
}

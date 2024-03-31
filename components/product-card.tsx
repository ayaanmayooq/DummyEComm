import { Product } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import { formatCurrencyString } from "use-shopping-cart"

interface Props {
    product: Product
}

export function ProductCard({ product }: Props) {
    return (
        <Link key={product.id} href={`/products/${product.slug}`} className="group text-sm hover:border hover:border-gray-200 p-3 hover:dark:border-gray-800 rounded-lg hover:scale-105 duration-200">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-80 transition-shadow ease-in-out duration-150 relative aspect-[16/13]">
            <Image
            placeholder="blur"
            blurDataURL="/product-placeholder.jpg"
              src={product.thumbnail}
              alt={product.title}
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center absolute inset-0 border border-[#e5e7eb]"
            />
          </div>
          <div className="flex justify-between">
            <h3 className="mt-2 text-medium font-normal text-center mx-2">{product.title}</h3>
            <p className="mt-2 text-medium font-normal text-center mx-2 text-slate-700">{formatCurrencyString({value: product.price, currency: "USD"})}</p>
          </div>
        </Link>
    )
}
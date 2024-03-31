"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, X, XCircle, Plus } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { Product } from "use-shopping-cart/core"
import { ToastContainer, toast } from 'react-toastify';


// import { shimmer, toBase64 } from "@/lib/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { title } from "process"
// import { useToast } from "@/components/ui/use-toast"
// import { CartItemsEmpty } from "@/components/cart-items-empty"

export function CartStuff() {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart()
  const cartStuff = Object.entries(cartDetails!).map(([_, product]) => product)
  console.log(cartStuff)

  function removeCartItem(product: Product) {
    removeItem(product.id)
    toast.error(`${product.title} removed from cart`);
  }

  return (
    <>
    <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true}/>
    {cartStuff.length === 0 && 
      <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
          <XCircle className="h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No products added</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            Add products to your cart.
          </p>
          <Link href="/">
            <Button size="sm" className="relative">
              <Plus className="mr-2 h-4 w-4" />
              Add Products
            </Button>
          </Link>
        </div>
      </div>
    }
    <ul
      role="list"
      className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500"
    >
      {cartStuff.map((product, productIdx) => (
        <li key={product.id} className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link href={`/products/${product.slug}`} className="font-medium">
                      {product.title}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">{formatCurrencyString({value: product.price, currency: "USD"})}</p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, {product.title}
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-16"
                  min={1}
                  max={product.stock}
                  value={product.quantity}
                  onChange={event => setItemQuantity(product.id, Number(event.target.value))}
                />
                <div className="absolute right-0 top-0">
                  <Button
                    variant="ghost"
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={() => removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>

            <p className="mt-4 flex space-x-2 text-sm">
              <Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Ships immediately</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}

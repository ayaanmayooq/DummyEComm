"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, X, XCircle, Plus } from "lucide-react"
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
    {cartStuff.length === 0 ? ( 
      <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
          <XCircle className="h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No products added</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            Add products to your cart.
          </p>
          <Link href="/products">
            <Button size="sm" className="relative">
              <Plus className="mr-2 h-4 w-4" />
              Add Products
            </Button>
          </Link>
        </div>
      </div>
    ): (
    <table className="w-full">
  <thead className="border-t-0">
    <tr className="border-b ">
      <th className="h-12 pr-3 text-left !pl-0">Item</th>
      <th className="h-12 pr-3 text-left"></th>
      <th className="h-12 pr-3 text-left">Quantity</th>
      <th className="h-12 pr-3 text-left small:table-cell">Price</th>
      <th className="h-12 pr-0 text-right">Total</th>
    </tr>
  </thead>
  <tbody className="border-ui-border-base border-b">
    {cartStuff.map((product, productIdx) => (
      <tr key={product.id} className="border-b w-full">
        <td className="h-36 !pl-0 p-4 w-36">
          <a className="flex small:w-24 w-full" href={`/products/${product.slug}`}>
            <div className="rounded-lg relative w-full overflow-hidden p-4 ease-in-out duration-150 aspect-[1/1] flex justify-center items-center">
              <Image 
              src={product.thumbnail} 
              alt="Thumbnail" 
              draggable="false" 
              loading="lazy" 
              className="h-full w-full object-cover object-center absolute inset-0 border border-[#e5e7eb]" 
              width={400} 
              height={400} />
            </div>
          </a>
        </td>
        <td className="h-12 pr-3 text-left">
          <p className="font-normal">{product.title}</p>
          <p className="font-normal inline-block w-full text-slate-700 text-sm">{product.brand}</p>
        </td>
        <td className="h-12 pr-3 m-auto">
          {/* Quantity component */}
          <div className="mt-4 sm:mt-0 sm:pr-9 flex">
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
                <div className="ml-1">
                  <Button
                    variant="ghost"
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={() => removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <Trash2 className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
            </div>
        </td>
        <td className="h-12 pr-3 small:table-cell">
          {formatCurrencyString({value: product.price, currency: "USD"})}
        </td>
        <td className="h-12 pr-0 text-right">
          {formatCurrencyString({value: product.price * product.quantity, currency: "USD"})}
        </td>
      </tr>
    ))}
  </tbody>
</table>
    )}
    </>
  )
}

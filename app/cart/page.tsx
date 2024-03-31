"use client"

import { CartStuff } from "@/components/cart-stuff";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"
import Link from "next/link";
import { useState } from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

export default function Cart() {
  const { formattedTotalPrice, totalPrice, cartDetails, cartCount } = useShoppingCart()
  const [isLoading, setLoading] = useState()
  const isDisabled = isLoading || cartCount! === 0
  const shippingAmount = cartCount! > 0 ? 500 : 0
  const totalAmount = totalPrice! + shippingAmount

  return (
    <div>
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <CartStuff />
          </section>

          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm">Subtotal</dt>
                <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 ">
                <dt className="flex items-center text-sm">
                  <span>Shipping estimate</span>
                </dt>
                <dd className="text-sm font-medium">{formatCurrencyString({value: shippingAmount, currency: "USD"})}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 ">
                <dt className="text-base font-medium">Order total</dt>
                <dd className="text-base font-medium">{formatCurrencyString({value: totalAmount, currency: "USD"})}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <Button className="w-full bg-slate-200 hover:bg-slate-400" disabled={isDisabled}>
                <Link href="/checkout" className="h-full w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Loading..." : "Checkout"}
                </Link>
              </Button>
            </div>
          </section>
        </form>
      </main>
    </div>
  )
}

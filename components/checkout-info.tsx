import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"
import Link from "next/link";
import { useState } from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

export default function CheckoutInfo() {
    const { formattedTotalPrice, totalPrice, cartDetails, cartCount } = useShoppingCart()
    const [isLoading, setLoading] = useState()
    const isDisabled = isLoading || cartCount! === 0
    const shippingAmount = cartCount! > 0 ? 500 : 0
    const totalAmount = totalPrice! + shippingAmount

    return (
        <div
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm">Subtotal</dt>
                <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
                <dt className="flex items-center text-sm">
                  <span>Shipping estimate</span>
                </dt>
                <dd className="text-sm font-medium">{formatCurrencyString({value: shippingAmount, currency: "USD"})}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
                <dt className="text-base font-medium">Order total</dt>
                <dd className="text-base font-medium">{formatCurrencyString({value: totalAmount, currency: "USD"})}</dd>
              </div>
            </dl>

            <div className="mt-6">
            <Link href="/checkout">
              <Button className="w-full" disabled={isDisabled}>
                
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Loading..." : "Checkout"}
                
              </Button>
              </Link>
            </div>
          </div>
    )
}
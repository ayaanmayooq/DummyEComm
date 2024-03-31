"use client"

import { Button } from "@/components/ui/button"
import { Product } from "@/lib/schema"
import { useState } from "react"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
        product: Product
}

export function ProductInfo({ product }: Props) {
    // cosnt [quantity, setQuantity] = useState()
    const { addItem, cartDetails, incrementItem } = useShoppingCart()
    const isInCart = !!cartDetails?.[product.id]

    function addToCart() {
        const item = {
            ...product,
            product_data: {

            }
        }
        isInCart ? incrementItem(item.id) : addItem(item)
        notify()
  }

  const notify = () => toast(`${product.title} added to cart`);

    return (
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true}/>

            <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>
            <p>{product.brand}</p>

            <div className="mt-3">
                <h2 className="sr-only">Product Information</h2>
                <p className="text-3xl tracking-tight">{formatCurrencyString({value: product.price, currency: "USD"})}</p>
            </div>

            <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6 text-base">{product.description}</div>
            </div>

            <form className="mt-6">
                <div className="mt-4 flex">
                <Button
                    type="button"
                    onClick={addToCart}
                    className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                    Add to cart
                </Button>
                </div>
            </form>
        </div>
    )
}
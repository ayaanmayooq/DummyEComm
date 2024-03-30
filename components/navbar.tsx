"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingCart } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
    return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
            <div className="flex gap-6 md:gap-10">
                <Link href="/" className="flex items-center space-x-2">
                    <Icons.logo className="h-10 w-10" />
                    
                    <span className="inline-block text-xl font-bold">
                    {siteConfig.name}
                    </span>
                </Link>
            </div>

            <form className="hidden items-center lg:inline-flex">
                <Input
                    id="search"
                    name="search"
                    type="search"
                    autoComplete="off"
                    placeholder="Search products..."
                    className="h-9 lg:w-[400px]"
                />
            </form>

            <div className="flex items-center space-x-1">
                <Link href="/cart">
                    <Button size="sm" variant="ghost">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="ml-2 text-sm font-bold">0</span>
                    <span className="sr-only">Cart</span>
                    </Button>
                </Link>
                <ThemeToggle />
            </div>
        </div>

    </header>
    )
}
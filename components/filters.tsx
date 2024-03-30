"use client"

import { useRouter, useSearchParams } from "next/navigation"

import { Checkbox } from "@/components/ui/checkbox"

const categories = [
      { value: "bags", label: "Bags" },
      { value: "belts", label: "Belts" },
      { value: "gloves", label: "Gloves" },
      { value: "scarves", label: "Scarves" },
      { value: "wallets", label: "Wallets" },
    ]

export function Filters() {
  let queryParams: any = "";

  function checkHandler(type: string, checkBoxValue: string) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }

    if (typeof window !== "undefined") {
      const value = queryParams.get(type);
      if (checkBoxValue === value) return true;
      return false;
    }
  }

  return (
    <form className="sticky top-20">
      <h3 className="py-5 text-lg font-bold">Categories</h3>
      <div className="space-y-4">
        {categories.map((option) => (
          <div
            key={option.value}
            className="flex items-center space-x-2"
          >
            {/* <Checkbox /> */}
            <input
            id={option.value}
            name="category"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500\
             dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            defaultChecked={checkHandler("category", option.label)}
            />
            <label for={option.value} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </form>
  )
}

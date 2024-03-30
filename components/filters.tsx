"use client"

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import { formatLabel } from "@/lib/utils";
import { Category } from "@/lib/schema";

export function Filters() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data: string[]) => {
        const categoryObjects = data.map((value) => ({ value, label: formatLabel(value) }));
        setCategories(categoryObjects);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  let queryParams: any = "";

  function handleClick(checkbox: HTMLInputElement) {
    console.log("handling checkbox")
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }

    const checkboxes = document.getElementsByName(checkbox.name)

    checkboxes.forEach((item: any) => {
      if (item !== checkbox) item.checked = false
    })

    if(checkbox.checked === false) {
      queryParams.delete(checkbox.name)
    } else {
      if (queryParams.has(checkbox.name)) {
        queryParams.set(checkbox.name, checkbox.value)
      } else {
        queryParams.append(checkbox.name, checkbox.value)
      }
    }

    const path = window.location.pathname + "?" + queryParams.toString();
    router.push(path);

  }

  function checkHandler(type: string, checkBoxValue: string) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

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
            value={option.value}
            className="w-4 h-4 accent-black text-black bg-gray-100 border-gray-300 rounded focus:ring-gray-500\
             dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            defaultChecked={checkHandler("category", option.value)}
            onClick={(e) => handleClick(e.target as HTMLInputElement)}
            />
            <label htmlFor={option.value} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </form>
  )
}

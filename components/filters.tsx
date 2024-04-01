"use client"

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import { formatLabel } from "@/lib/utils";
import { Category } from "@/lib/schema";
import { getProductCategories } from "@/lib/data";

export function Filters() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  // const searchParams = useSearchParams();


  useEffect(() => {
    getProductCategories()
      .then((categoryObjects: Category[]) => {
        setCategories(categoryObjects);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  useEffect(() => {
    unCheckOnSearch();
  }, );

  function unCheckOnSearch() {
    queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has("category")) return
    const checkboxes = document.getElementsByName("category")

    checkboxes.forEach((item: any) => {
      item.checked = false
    })
  }

  let queryParams: URLSearchParams;

  function handleClick(checkbox: HTMLInputElement) {
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
    console.log(queryParams)
    const path = window.location.pathname + "/?" + queryParams.toString();
    router.replace(path);

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
    <form className="sticky top-20 md:overflow-auto lg:overflow-visible md:max-h-96 lg:max-h-full ">
      <h3 className="py-5 text-lg font-bold">Categories</h3>
      <div className="space-y-4 ">
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

"use client"

import React, { Suspense } from 'react';
import ProductsLayout from "@/components/products";

export default function Products() {

  return (
    <Suspense><ProductsLayout /></Suspense>
  );
}

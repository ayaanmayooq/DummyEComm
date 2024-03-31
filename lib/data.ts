import { formatLabel, formatSlug } from "./utils";
import { Product } from "./schema";

export async function fetchAllProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=100');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function fetchProductsWithOptions(category: string | null, searchQuery:string | null, limit: number = 100, skip: number = 0) {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    if (category !== null) {
        url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    }
    else if (searchQuery !== null) {
        url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        data.products.forEach((product: Product) => {
            // product.slug = formatSlug(product.title);
            product.price = product.price * 100
            product.slug = product.id
            product.sellPrice = product.price
            product.price = product.sellPrice * (1 - product.discountPercentage / 100)
        });

        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function searchProduct(param: String) {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${param}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getSingleProduct(id: String) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();

        data.price = data.price * 100
        data.slug = data.id
        data.sellPrice = data.price
        data.price = data.sellPrice * (1 - data.discountPercentage / 100)

        return data

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductCategories() {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      const categoryObjects = data.map((value: string) => ({ value, label: formatLabel(value) }));
      return categoryObjects;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }  

export async function getProductByCategory(category: String) {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
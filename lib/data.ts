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

export async function fetchProductsWithOptions(category: string | null, limit: number = 100, skip: number = 0) {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&category=${category}`;
    if (category !== null) {
        url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
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
        return data;

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductCategories() {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        return data;

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
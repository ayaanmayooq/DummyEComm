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

export async function fetchProductsWithOptions(limit = 10, skip = 0, select = 'title,price') {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`;
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
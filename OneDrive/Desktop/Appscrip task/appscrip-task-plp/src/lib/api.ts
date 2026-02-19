import { Product } from '@/types/product';

const API_URL = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
    try {
        const res = await fetch(`${API_URL}/products`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export async function getCategories(): Promise<string[]> {
    try {
        const res = await fetch(`${API_URL}/products/categories`);
        if (!res.ok) throw new Error('Failed to fetch categories');
        return res.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

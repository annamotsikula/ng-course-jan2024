export interface Product extends NewProduct{
    id: number,
    discountPercentage?: number,
    rating: number,
    stock: number,
    brand?: string,
    thumbnail: string,
    images: string[]
}
export interface NewProduct {
    title: string;
    description: string;
    price: number|null;
    category: string;
}
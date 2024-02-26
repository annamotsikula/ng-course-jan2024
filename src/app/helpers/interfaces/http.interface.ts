import { Product } from "./product.interface";

export interface ProductHttpResponse {
    limit: number;
    products: Product[],
    skip: number;
    total: number
}
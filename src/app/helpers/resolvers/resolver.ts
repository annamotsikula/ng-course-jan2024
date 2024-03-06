import { ResolveFn } from "@angular/router";
import { Product } from "../interfaces/product.interface";
import { inject } from "@angular/core";
import { ProductService } from "src/app/core/services/product.service";

export const productResolver: ResolveFn<Product> = (route) => {
    const service = inject(ProductService);
    const id = route.params['id']
    return service.getProductById(Number(id))

}
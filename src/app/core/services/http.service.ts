import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/app/helpers/interfaces/product.interface";

@Injectable({
    providedIn: 'root'
}) export class HttpService {
    constructor(private _http: HttpClient) {
        
    }

    getJsonData() {
       return this._http.get<Product>('https://dummyjson.com/products')
    }
}
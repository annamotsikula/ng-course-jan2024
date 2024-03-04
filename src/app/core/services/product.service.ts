import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHttpResponse } from 'src/app/helpers/interfaces/http.interface';
import { NewProduct, Product } from 'src/app/helpers/interfaces/product.interface';
import { BASE_URL } from '../constants';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription, map, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Product[] = [];
  productAdded: Subject<boolean> = new Subject<boolean>();
  categories$!: Subscription
  cartProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  constructor(private _http: HttpClient) {}


  getProducts(): Observable<Product[]> {
    return this._http.get<ProductHttpResponse>(`${BASE_URL}/products`).pipe(
      map(data => data.products)
    )
  }
  getProductByCategory(category: string) {
    return this._http.get<ProductHttpResponse>(`${BASE_URL}/products/category/${category}`).pipe(
      map(data => data.products)
    )
  }
  addProduct(product: NewProduct): Observable<Product> {
    const newProduct: Product = {
      title: product.title,
      description: product.description,
      stock: 100,
      price: product.price,
      id: this._products.length + 1,
      category: product.category,
      thumbnail: '',
      images: [],
      rating: 5
    }
    return this._http.post<Product>(`${BASE_URL}/products/add`, {...newProduct})

  }
  deleteProduct(id: number) {
    return this._http.delete<Product>(`${BASE_URL}/products/${id}`)
  }

  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${BASE_URL}/products/${id}`)
  }
  searchProduct(key: string) {
    return this._http.get<ProductHttpResponse>(`${BASE_URL}/products/search?q=${key}`).pipe(
      map(res => res.products)
    )
    
  }

  getCategories() {
    // if(this.categories$) {
    //   return of(this.category)
    // }
      return this._http.get<string[]>(`${BASE_URL}/products/categories`).pipe(
      )
    
  }
}

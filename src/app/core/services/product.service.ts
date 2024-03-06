import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
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
  cartProducts = signal<Product[]>([])
  constructor(private _http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this._http.get<ProductHttpResponse>(`${BASE_URL}/products`).pipe(
      map(data => data.products),
      map(data => data.map(i => ({...i, quantity: i.quantity ? i.quantity : 1}))),
      tap(console.log)
    )
  }
  getProductByCategory(category: string) {
    return this._http.get<ProductHttpResponse>(`${BASE_URL}/products/category/${category}`).pipe(
      map(data => data.products)
    )
  }
  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${BASE_URL}/products/${id}`)
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
      rating: 5,
      quantity: 0
    }
    return this._http.post<Product>(`${BASE_URL}/products/add`, { ...newProduct })

  }
  deleteProduct(id: number) {
    return this._http.delete<Product>(`${BASE_URL}/products/${id}`)
  }
  searchProduct(key: string) {
    return this._http.get<ProductHttpResponse>(`${BASE_URL}/products/search?q=${key}`).pipe(
      map(res => res.products)
    )

  }
  getCategories() {
    return this._http.get<string[]>(`${BASE_URL}/products/categories`).pipe(
    )
  }
  addToCart(product: Product) {
    const cartProducts = this.cartProducts()
    if(!product.quantity) {
      product.quantity = 1
    }
    const itemInCart = cartProducts.findIndex(item => item.id === product.id);
    if(itemInCart !== -1) {
      this.cartProducts.update(() => {
        cartProducts[itemInCart].quantity += 1
        return cartProducts
      })
    } else {
      this.cartProducts.update(() => [product, ...cartProducts])

    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHttpResponse } from 'src/app/helpers/interfaces/http.interface';
import { NewProduct, Product } from 'src/app/helpers/interfaces/product.interface';
import { BASE_URL } from '../constants';
import { BehaviorSubject, Observable, ReplaySubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Product[] = [];
  productAdded: Subject<boolean> = new Subject<boolean>();
  constructor(private _http: HttpClient) {
    // this.productAdded.asObservable().subscribe(data => console.log(data))

    // this.productAdded.next(1);
    // this.productAdded.next(2);
    // this.productAdded.next(3);
    // const testSubject = new Subject()
    // this.productDeleted.next(true)
  // this.productDeleted.subscribe(console.log);
  // this.productDeleted.next(true);


  // const replay = new ReplaySubject(2);

  // replay.next(1);
  // replay.next('Angular');
  // replay.subscribe(console.log);
  // replay.next(2);
  // replay.next(3);
  // replay.next('RxJs');
  // replay.subscribe(console.log);


  }


  getProducts(): Observable<Product[]> {
    return this._http.get<ProductHttpResponse>(`${BASE_URL}/products`).pipe(
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
    return this._http.get<string[]>(`${BASE_URL}/products/categories`)
  }
}

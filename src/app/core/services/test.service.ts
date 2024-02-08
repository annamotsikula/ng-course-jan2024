import { Injectable } from '@angular/core';
import { NewProduct, Product } from 'src/app/helpers/interfaces/product.interface';

@Injectable()
export class ProductTestService {
  private _products: Product[] = []
  constructor() {
    console.log('Product Test Service Has Injected')
    this._products = [
      
      {
        "id": 30,
        "title": "Key Holder",
        "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        "price": 30,
        "discountPercentage": 2.92,
        "rating": 4.92,
        "stock": 54,
        "brand": "Golden",
        "category": "home-decoration",
        "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/30/1.jpg",
          "https://i.dummyjson.com/data/products/30/2.jpg",
          "https://i.dummyjson.com/data/products/30/3.jpg",
          "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
        ]
      }
    ]
  }


  getProducts() {
    return this._products
  }
  addProduct(product: NewProduct) {
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
    this._products.push(newProduct)

  }
}

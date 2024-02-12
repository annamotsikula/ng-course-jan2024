import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ProductService } from './core/services/product.service';
import { NewProduct, Product } from './helpers/interfaces/product.interface';
import { INJECTOR_TITLE } from './core/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  constructor(private _productService: ProductService ) {
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts()
    // console.log(this.products)
  }

  addProduct(product: NewProduct) {
    console.log('Product will be added: ', product)
      this._productService.addProduct(product)
  }
}
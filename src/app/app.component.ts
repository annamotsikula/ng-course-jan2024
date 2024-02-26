import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ProductService } from './core/services/product.service';
import { NewProduct, Product } from './helpers/interfaces/product.interface';
import { INJECTOR_TITLE } from './core/constants';
import { HttpService } from './core/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  constructor(private _productService: ProductService, private _httpService: HttpService ) {
  }

  ngOnInit(): void {
  }

}
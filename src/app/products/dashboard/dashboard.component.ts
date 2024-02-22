import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { NewProduct, Product, ProductForm } from 'src/app/helpers/interfaces/product.interface';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ProductDashboardComponent {
  products: Product[] = [];
  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts()
    // console.log(this.products)
  }

  addProduct({ name, description, price, category, brand }: any) {
    const newProduct = {
      title: name, description, price, category
    }
    console.log('Product will be added: ', newProduct)
    this._productService.addProduct(newProduct)
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { NewProduct, Product, ProductForm } from 'src/app/helpers/interfaces/product.interface';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ProductDashboardComponent {
  products: Product[] = [];

  dataModel = {
    firstName: '',
    lastName: '',
    sge: null
  }
  constructor(private _productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productService.getProducts().subscribe(
      result => {
        this.products = result.products
      }
    )
  }

  deleteProduct(p: Product) {
    this._productService.deleteProduct(p.id).subscribe(d => {
      alert(
        `Product (id: ${p.id}) has successfully deleted`
      );
      this.getAllProducts();
    })
  }
  
  // templateDrFormSubmit(ngform: NgForm) {
  //   // console.log(ngform.form.)

  // }
  addProduct({ name, description, price, category, brand }: any) {
    const newProduct = {
      title: name, description, price, category
    }
    this._productService.addProduct(newProduct).subscribe(result => {
      this.getAllProducts();
    })
  }
}

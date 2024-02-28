import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { NewProduct, Product, ProductForm } from 'src/app/helpers/interfaces/product.interface';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  @ViewChild('search') searchInput!: ElementRef<HTMLInputElement>;
  categories$: Observable<string[]>= new Observable();

  

  


  dataModel = {
    firstName: '',
    lastName: '',
    sge: null
  }
  constructor(private _productService: ProductService) {
    this.categories$ = this._productService.getCategories().pipe(

    )

  }
  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(700),
      map(ev => ev.target as HTMLInputElement),
      map(ev => ev.value),
      switchMap(val => this._productService.searchProduct(val))
    )
    .subscribe(res => {
      console.log(res)
      this.products = res
    })

  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  open() {
    this._productService.getCategories().subscribe(res => {
      console.log(res)
    })
  }

  getAllProducts() {
    this._productService.getProducts().subscribe(
      result => {
        this.products = result
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
      this._productService.productAdded.next(true)
      this.getAllProducts();
    })
  }
}

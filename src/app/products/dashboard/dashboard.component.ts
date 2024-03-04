import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, concat, concatMap, debounceTime, fromEvent, map, switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
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
  categories: string[] = []
  // categories$: Observable<string[]>= new Observable();

  dataModel = {
    firstName: '',
    lastName: '',
    sge: null
  }
  constructor(private productService: ProductService, private _httpService: HttpService) {
  }
  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(700),
      map(ev => ev.target as HTMLInputElement),
      map(ev => ev.value),
      switchMap(val => this.productService.searchProduct(val))
    )
      .subscribe()

   }
  ngOnInit(): void {
    
    this.getAllProducts();
  }
  open() {
    this.productService.getCategories().subscribe(res => {
      console.log(res)
      this.categories = this.categories
    })
  }
  action(type: 'delete' | 'add', product: Product) {
    type === 'delete' ? this.deleteProduct(product) : this.addToCart(product)
  }
  addToCart(product: Product) {
    this.productService.cartProducts.next(
     [ product, ...this.productService.cartProducts.getValue() ]
    )
  }
  searchByCategory(key: string) {
    this.productService.getProductByCategory(key).pipe(
      tap(result => this.products = result)
    ).subscribe()
  }
  getAllProducts() {
    this.productService.getProducts().subscribe(
      result => {
        this.products = result
      }
    )
  }

  deleteProduct(p: Product) {
    this.productService.deleteProduct(p.id).subscribe(d => {
      alert(
        `Product (id: ${p.id}) has successfully deleted`
      );
      this.getAllProducts();
    })
  }

  addProduct({ name, description, price, category, brand, file }: any) {
    const newProduct = {
      title: name, description, price, category
    }
    console.log(file)
    this._httpService.upload(name, file).pipe(
      concatMap(uploadStatus => this.productService.addProduct(newProduct))
    )
      .subscribe(res => {
        this.productService.productAdded.next(true)
        this.getAllProducts();
      })

  }
  
  getCategory() {
    if(this.productService.categories$) {
      return 
    }
    this.productService.categories$ = this.productService.getCategories().pipe(
      tap(category => this.categories = category)
      
    ).subscribe()
  }

  ngOnDestroy() {
    if(this.productService.categories$) {
      this.productService.categories$.unsubscribe()
    }
  }
}

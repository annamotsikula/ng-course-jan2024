import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/helpers/interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnDestroy {
  item!: Product
  quantity: number = 1
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    this.item = this._activatedRoute.snapshot.data['item']
  }
  ngOnDestroy() {
    console.log('This component will be removed from DOM')
  }
  addToCart() {
    if (this.item && this.quantity <= this.item.stock && this.quantity >= 1) {
      this.item.quantity = this.quantity
      console.log(this.item)
      this._productService.addToCart(this.item);
      return
    } 
    alert('Not required')
  }

  changeQuantity(status: 'incr' | 'decr') {
    status === 'decr' ? 
      this.quantity <= 1 ? 
        null : this.quantity -= 1 :
          this.quantity >= this.item?.stock ? null : this.quantity +=1

  }
}

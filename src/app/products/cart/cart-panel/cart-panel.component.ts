import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/helpers/interfaces/product.interface';

@Component({
  selector: 'app-cart-panel',
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.scss'],
  standalone: true,
  imports: [AsyncPipe]

})
export class CartPanelComponent {
  cart$: Observable<Product[]>
  constructor(private _productService: ProductService) {
    this.cart$ = this._productService.cartProducts.asObservable()

  }

}

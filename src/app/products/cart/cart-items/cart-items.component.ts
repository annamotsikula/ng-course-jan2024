import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {
  service = inject(ProductService)

  products = this.service.cartProducts().map(item => ({...item, price: item.quantity * (item.price as number)}));

  itemsTotalPrice = computed(() => {
    return this.products.reduce((acc, product) => {
      return acc + (product.quantity * product.price)
    }, 0)
  })



}

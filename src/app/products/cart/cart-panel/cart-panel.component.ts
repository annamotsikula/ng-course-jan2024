import { AsyncPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-cart-panel',
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.scss'],
  standalone: true,
  imports: [AsyncPipe, RouterModule]

})
export class CartPanelComponent {
  productService = inject(ProductService)
  router = inject(Router)
  items = computed(() => {
    return this.productService.cartProducts().length
  })


}

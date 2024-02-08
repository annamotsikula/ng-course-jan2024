import { Component, Input } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input({required: true}) product!: Product

 
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input({ required: true }) product!: Product
  @Output() emitProduct : EventEmitter<void> = new EventEmitter<void>()

  constructor(private _router: Router) {
  }

  redirect() {
    this._router.navigate(['products', this.product.id])
  }

  productToDelete() {
    this.emitProduct.emit()
  }


}

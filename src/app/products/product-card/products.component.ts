import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';

type Status = 'delete' | 'add'

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input({ required: true }) product!: Product
  @Output() emitProduct: EventEmitter<Status> = new EventEmitter<Status>()

  constructor(private _router: Router) {
  }

  redirect() {
    console.log(this.product.id)
    this._router.navigate(['products', this.product.id])
  }

  emitValue(status: Status) {
    this.emitProduct.emit(status)
  }


}

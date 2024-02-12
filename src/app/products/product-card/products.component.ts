import { Component, Input } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input({ required: true }) product!: Product

  constructor(private _router: Router) {
  }

  redirect() {
    this._router.navigate(['products', this.product.id])
  }
}

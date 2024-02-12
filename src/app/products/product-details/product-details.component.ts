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
  item: Product | undefined
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    const idFromUrl = Number(this._activatedRoute.snapshot.params['id']);
    this.item = this._productService.getProductById(idFromUrl);
    console.log(this.item)
  }
  ngOnDestroy() {
    console.log('This component will be removed from DOM')
  }
}

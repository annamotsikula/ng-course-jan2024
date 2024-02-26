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
    this._productService.getProductById(idFromUrl).subscribe(res => {
      console.log('Result', res)
      this.item = res
    },
    error => console.log(error),
    () => console.log('COMPLETED')
    );
  }
  ngOnDestroy() {
    console.log('This component will be removed from DOM')
  }
}

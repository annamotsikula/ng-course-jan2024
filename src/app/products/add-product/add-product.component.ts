import { Component, EventEmitter, Output } from '@angular/core';
import { NewProduct } from 'src/app/helpers/interfaces/product.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: NewProduct = {
    title: '',
    description: '',
    price: null,
    category: ''
  }

  @Output() newProduct: EventEmitter<NewProduct> = new EventEmitter()

  add() {
    const { title, price, category } = this.product
    if (title !== "" || category !== "" || price !== null) {
      this.newProduct.emit(this.product)
    } else {
      alert('Please Fill all mandatory fields')
    }
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { List, ProductForm } from 'src/app/helpers/interfaces/product.interface';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent {
  form: FormGroup<ProductForm>
  @Output() newProduct : EventEmitter<any> = new EventEmitter<any>()
  currencyList: List[] = [
    { id: 'gel', name: '₾' },
    { id: 'usd', name: '$' },
    { id: 'eur', name: '€' },
  ]
  categoryList: List[] = [
    { id: '48223', name: 'smartphone' },
    { id: '48224', name: 'clothes' },
    { id: '48225', name: 'accessories' },
    { id: '48226', name: 'home & decor' }
  ]

  constructor() {
    this.form = new FormGroup<ProductForm>({
      id: new FormControl('123', { nonNullable: true }),
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      description: new FormControl(null, [Validators.required]),
      brand: new FormControl(),
      price: new FormControl(null, [Validators.required, Validators.min(800)]),
      category: new FormArray([
        new FormControl()
      ]),
      hasFeatures: new FormControl(false),
      features: new FormGroup({
        color: new FormControl(),
        size: new FormControl(),
      }),
      specification: new FormArray([
        new FormControl()
      ])
    })
    console.log(this.form)


  }
  clearControl() {
    this.form.reset();
    // console.log(this.form.controls.id)
  }
  // updateControlValue() {
  // this.form.controls.features?.setValue({color: 'red', size: 'S'});
  // this.form.controls.features?.patchValue({color: 'red'});
  // this.form.controls.name.setValue('anna');
  // this.form.controls.name.patchValue('John');
  // console.log(this.form.controls.features?.value)
  // }
  addCurrency(curr: List) {
    if (curr.selected) return;
    this.form.addControl('currency', new FormControl(null, { nonNullable: true }))
    curr.selected = true;
    this.currencyList = this.currencyList.map(i => i.selected && i.id !== curr.id ? { ...i, selected: false } : i);
    this.form.controls.currency?.setValue(curr.id)
  }
  addCategory(category: List) {
    if (category.selected) {
      this.removeItem(category.name, 'category');
      category.selected = false
      return;
    }
    category.selected = !category.selected
    const categoryControl = new FormControl(category.name);
    this.form.controls.category.push(categoryControl)
  }

  removeItem(val: string, faName: string) {
    const arr = this.form.get(faName) as FormArray
    const index = arr.controls.findIndex(c => c.value === val)
    arr.removeAt(index)
  }

  addItemInArr(formArrayName: string) {
    const item = new FormControl(null, Validators.required);
    (<FormArray>this.form.get(formArrayName)).push(item)

  }
  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.newProduct.emit(this.form.value);
      console.log('Form Submitted')
      return;
    }
    // alert('Your form is not valid')
  }



}

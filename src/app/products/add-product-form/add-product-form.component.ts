import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent {
  form: FormGroup
  categoryList: {id: string; name: string; selected?: boolean}[] = [
    {id: '48223', name: 'smartphone'},
    {id: '48224', name: 'clothes'},
    {id: '48225', name: 'accessories'},
    {id: '48226', name: 'home & decor'}
  ]

  constructor() {
    this.form = new FormGroup({
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
        size: new FormControl()
      })
    })

    console.log(this.form)

  }

  addCategory(category: {id: string; name: string; selected?: boolean}) {
    if(category.selected) {
      this.removeItem(category.name);
      category.selected = false
      return;
    }
    category.selected = !category.selected
    const categoryControl = new FormControl(category.name);
    (<FormArray>this.form.controls['category']).push(categoryControl);
  }

  removeItem(val: string) {
    const arr = this.form.controls['category'] as FormArray 
    const index = arr.controls.findIndex(c => c.value === val)
    arr.removeAt(index)
  }

  addItemInArr() {
    const item = new FormControl(null, Validators.required);
    (<FormArray>this.form.controls['category']).push(item);

  }

  get categoryArray() {
    return this.form.get('category') as FormArray
  }
  onSubmit() {
    console.log(this.form);
    if(this.form.valid) {
      return;
    }
    // alert('Your form is not valid')

  }



}

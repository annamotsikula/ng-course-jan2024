import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { List, ProductForm } from 'src/app/helpers/interfaces/product.interface';
import { nameRestrictionValidator } from 'src/app/helpers/validators/name.valiador';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent {
  form: FormGroup<ProductForm>;
  isOpen: boolean = false
  @Output() newProduct: EventEmitter<any> = new EventEmitter<any>()
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

  constructor(private _productService: ProductService) {
    this._productService.productAdded.subscribe(status => {
      if(status) {
        this.isOpen = false;
        this.form.reset();
        this.categoryList.filter(i => i.selected).forEach(i => i.selected = false);
        this.currencyList.filter(i => i.selected).forEach(i => i.selected = false);
      }
    })
  
    this.form = new FormGroup<ProductForm>({
      id: new FormControl('123', { nonNullable: true }),
      name: new FormControl(null, [nameRestrictionValidator, Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
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
      ]),
      file: new FormControl()
    })
    console.log(this.form)

    // this.form.controls.brand.valueChanges.subscribe(data => {
    //   console.log(data)
    // })

    // this.form.controls.description.valueChanges.subscribe(data => {
    //   console.log(data)
    // })


  }
  clearControl() {
    this.form.reset();
  }

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
  onSubmit(status: boolean) {
    const submit = () => {
      if (this.form.valid) {
        this.newProduct.emit(this.form.value);
        return;
      } else {
        alert('Form is not valid')
      }
    }
    const cancel = () => {
      this.isOpen = false
    }
    status ? submit() : cancel();

  }

  uploadImage(event: Event) {
    const fileObject =(event.target as HTMLInputElement).files
    if(fileObject?.length) {
      const file: File = fileObject[0];
     
      this.form.controls.file?.patchValue(file)
    }
    
    
    
  }



}

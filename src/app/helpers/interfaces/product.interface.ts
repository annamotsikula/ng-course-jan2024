import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface Product extends NewProduct {
    id: number,
    discountPercentage?: number,
    rating: number,
    stock: number,
    brand?: string,
    thumbnail: string,
    images: string[]
}
export interface NewProduct {
    title: string;
    description: string;
    price: number | null;
    category: string;
}

export interface ProductForm {
    id: FormControl;
    name: FormControl<string | null>,
    description: FormControl<string | null>,
    brand: FormControl<string | null>,
    price: FormControl<number | null>,
    category: FormArray,
    hasFeatures: FormControl<boolean | null>,
    features?: FormGroup<ProductFeatureForm>,
    currency?: FormControl<string | null>,
    specification: FormArray,
    file?: FormControl<File>
   

}

export interface ProductFeatureForm {
    color: FormControl<string>;
    size: FormControl<string>;

}

export interface List { id: string; name: string; selected?: boolean }
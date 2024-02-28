import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameRestrictionValidator(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string;
    if(val) {
        val.toLowerCase();
        if(control.value === 'iphone') {
            return { nameRestricted: true }
        }
    }
    return null


}
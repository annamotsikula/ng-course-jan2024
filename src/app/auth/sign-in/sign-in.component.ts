import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('kminchelle', [Validators.required]),
    password: new FormControl('0lelplR', [Validators.required]),
    rememberUser: new FormControl(null)

  })
  private _auth = inject(AuthService)
  private _router = inject(Router)

  submit() {
    if (this.form.valid) {
      const {email, password} = this.form.value
      this._auth.auth({username: email, password}).subscribe(res => {
        this._router.navigateByUrl('main')
      })
    }
  }
}

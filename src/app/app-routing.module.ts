import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { authorized } from './helpers/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [ authorized ]
  },
  {
    path: 'main',
    loadChildren: () => import('./main-content/main.module').then(i=> i.MainModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

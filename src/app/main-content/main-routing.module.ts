import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from '../products/dashboard/dashboard.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { productResolver } from '../helpers/resolvers/resolver';
import { CartItemsComponent } from '../products/cart/cart-items/cart-items.component';
import { MainComponent } from './main/main.component';
import { authGuard } from '../helpers/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
        {
          path: '',
          component: ProductDashboardComponent,
        },
        {
            path: 'products',
            redirectTo: ''
        },
        {
          path: 'products/:id',
          component: ProductDetailsComponent,
          resolve: { item: productResolver }
        },
        {
          path: 'workshop-3',
          loadChildren: () => import('../demo-examples/test-lazy.module').then(m => m.TestLazyModule)
        },
        {
          path: 'cart', component: CartItemsComponent
        }
    ]
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }

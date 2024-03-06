import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './products/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CartPanelComponent } from './products/cart/cart-panel/cart-panel.component';
import { CartItemsComponent } from './products/cart/cart-items/cart-items.component';
import { productResolver } from './helpers/resolvers/resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductDashboardComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    resolve: { item: productResolver }
  },
  {
    path: 'workshop-3',
    loadChildren: () => import('./demo-examples/test-lazy.module').then(m => m.TestLazyModule)
  },
  {
    path: 'cart', component: CartItemsComponent

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

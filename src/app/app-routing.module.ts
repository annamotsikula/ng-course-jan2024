import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './products/dashboard/dashboard.component';
import { ExamplePipesComponent } from './demo-examples/example-pipes/example-pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ChildRoutingComponentComponent } from './demo-examples/child-routing-component/child-routing-component.component';

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
    component: ProductDetailsComponent
  },
  {
    path: 'workshop-3',
    loadChildren: () => import('./demo-examples/test-lazy.module').then(m => m.TestLazyModule)
    // component: ExamplePipesComponent,
    // children: [
    //   {
    //     path: '',
    //     component: ChildRoutingComponentComponent
    //   }
    // ]
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

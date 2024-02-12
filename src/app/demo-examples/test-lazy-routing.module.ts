import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExamplePipesComponent } from './example-pipes/example-pipes.component';
import { ChildRoutingComponentComponent } from './child-routing-component/child-routing-component.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplePipesComponent,
    children: [
      {
        path: 'child-path',
        component: ChildRoutingComponentComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestLazyRoutingModule { }

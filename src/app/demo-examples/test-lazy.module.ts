import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLazyRoutingModule } from './test-lazy-routing.module';
import { ExamplePipesComponent } from './example-pipes/example-pipes.component';
import { ChildRoutingComponentComponent } from './child-routing-component/child-routing-component.component';
import { SharedModule } from '../core/modules/shared.module';



@NgModule({
  declarations: [
    ExamplePipesComponent,
    ChildRoutingComponentComponent,
  ],
  imports: [
    CommonModule,
    TestLazyRoutingModule,
    SharedModule
    
  ]
})
export class TestLazyModule { }

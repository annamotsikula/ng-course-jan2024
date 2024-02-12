import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLazyRoutingModule } from './test-lazy-routing.module';
import { ExamplePipesComponent } from './example-pipes/example-pipes.component';
import { ChildRoutingComponentComponent } from './child-routing-component/child-routing-component.component';
import { TruncatePipe } from '../helpers/pipes/truncate.pipe';



@NgModule({
  declarations: [
    ExamplePipesComponent,
    ChildRoutingComponentComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    TestLazyRoutingModule,
    
  ]
})
export class TestLazyModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { StudentCardComponent } from './demo-examples/student-card/student-card.component';
import { OutdateDirective } from './helpers/directives/outdate.directive';
import { ExamplePipesComponent } from './demo-examples/example-pipes/example-pipes.component';
import { TruncatePipe } from './helpers/pipes/truncate.pipe';
import { ProductService } from './core/services/product.service';
import { ProductsComponent } from './products/product-card/products.component';
import { RatingComponent } from './rating/rating.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductTestService } from './core/services/test.service';
import { INJECTOR_TITLE } from './core/constants';

@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    OutdateDirective,
    ExamplePipesComponent,
    TruncatePipe,
    ProductsComponent,
    RatingComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  providers: [
    {
      provide: ProductService,
      useClass: ProductTestService
    },
    {
      provide: INJECTOR_TITLE,
      useValue: 'Product Page'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

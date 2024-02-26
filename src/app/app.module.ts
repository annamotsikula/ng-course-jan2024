import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentCardComponent } from './demo-examples/student-card/student-card.component';
import { OutdateDirective } from './helpers/directives/outdate.directive';
import { ProductsComponent } from './products/product-card/products.component';
import { RatingComponent } from './rating/rating.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { INJECTOR_TITLE } from './core/constants';
import { AppRoutingModule } from './app-routing.module';
import { ProductDashboardComponent } from './products/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { SharedModule } from './core/modules/shared.module';
import { AddProductFormComponent } from './products/add-product-form/add-product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    OutdateDirective,
    ProductsComponent,
    RatingComponent,
    AddProductComponent,
    ProductDashboardComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    AddProductFormComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: ProductService,
    //   useClass: ProductTestService
    // },
    {
      provide: INJECTOR_TITLE,
      useValue: 'Product Page'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

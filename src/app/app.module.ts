import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { StudentCardComponent } from './demo-examples/student-card/student-card.component';
import { OutdateDirective } from './helpers/directives/outdate.directive';
import { TruncatePipe } from './helpers/pipes/truncate.pipe';
import { ProductsComponent } from './products/product-card/products.component';
import { RatingComponent } from './rating/rating.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { INJECTOR_TITLE } from './core/constants';
import { AppRoutingModule } from './app-routing.module';
import { ProductDashboardComponent } from './products/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    OutdateDirective,
    TruncatePipe,
    ProductsComponent,
    RatingComponent,
    AddProductComponent,
    ProductDashboardComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    AppRoutingModule,
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

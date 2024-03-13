import { NgModule } from "@angular/core";
import { StudentCardComponent } from "../demo-examples/student-card/student-card.component";
import { OutdateDirective } from "../helpers/directives/outdate.directive";
import { ProductsComponent } from "../products/product-card/products.component";
import { RatingComponent } from "../rating/rating.component";
import { AddProductComponent } from "../products/add-product/add-product.component";
import { AddProductFormComponent } from "../products/add-product-form/add-product-form.component";
import { ProductDashboardComponent } from "../products/dashboard/dashboard.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { ProductDetailsComponent } from "../products/product-details/product-details.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../core/modules/shared.module";
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
    declarations: [
        StudentCardComponent,
        OutdateDirective,
        ProductsComponent,
        RatingComponent,
        AddProductComponent,
        ProductDashboardComponent,
        PageNotFoundComponent,
        ProductDetailsComponent,
        AddProductFormComponent,
        MainComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        HeaderComponent,
        FooterComponent,
        MainRoutingModule
        
    ]
})
export class MainModule {

}
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

@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    OutdateDirective,
    ExamplePipesComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { INJECTOR_TITLE } from './core/constants';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './core/modules/shared.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    SignInComponent
  ],
  providers: [
    {
      provide: INJECTOR_TITLE,
      useValue: 'Product Page'
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

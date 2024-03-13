import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LocalStorageSevice } from "../services/localstorage.service";
import { AUTH_HEADER, BASE_URL } from "../constants";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor extends LocalStorageSevice implements HttpInterceptor {
    constructor() {
        super();
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.isAuthReq(req)) {
            return next.handle(req)
        }
        if(this.itemExist(AUTH_HEADER)) {
            const modifiedRequest = req.clone({
                setHeaders: { 'Authorization' : `Bearer ${this.getLocalItem(AUTH_HEADER)}`}
            })
            return next.handle(modifiedRequest)
        } else {
            const newReq = new HttpRequest<any>('GET', `${BASE_URL}/http/401`)
            return next.handle(newReq)
        }
    }

    isAuthReq(req: HttpRequest<any>) {
        return req.url.includes('auth/login')
    }

   
}
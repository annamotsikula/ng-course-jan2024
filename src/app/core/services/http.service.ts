import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of, switchMap, tap, throwError } from "rxjs";
import { Product } from "src/app/helpers/interfaces/product.interface";

@Injectable({
    providedIn: 'root'
}) export class HttpService {
    constructor(private _http: HttpClient) {

    }

    mockRequest(statusCode: number, message: string = '') {
        return this._http.get<{status: string; message: string}>(`https://dummyjson.com/http/${statusCode}/${message}`)
    }

    upload(file: File, name: string) {
        console.log('Upload function in HttpService')
        const fileToUpload = new FormData();
        fileToUpload.append(name, file);
        return this._http.post('/', fileToUpload).pipe(
            catchError((err) => {
                    console.log(err);
                    const newResponse = new HttpResponse()
                    newResponse.clone({
                        status: 200,
                        statusText: 'OK',
                        body: null
                    })
                    return of(newResponse)
            }),
            switchMap((_) => this.mockRequest(200))
        )

    }

}
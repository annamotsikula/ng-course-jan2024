import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AUTH_HEADER, BASE_URL } from "../core/constants";
import { AuthResponse, Authorization } from "./interface/auth.interface";
import { map, tap } from "rxjs";
import { LocalStorageSevice } from "../core/services/localstorage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService extends LocalStorageSevice{

    constructor(private _http: HttpClient) {
        super();
        
    }

    auth(data: Authorization) {
        const body: Authorization = {
            username: data.username,
            password: data.password
        }
        return this._http.post<AuthResponse>(`${BASE_URL}/auth/login`, body).pipe(
            tap(data => {
                this.setItem(AUTH_HEADER, data.token)
            }),
            map(user => ({token: user.token}))
        )
    }
    unauthorized() {
        return this._http.get<{
            status: string,
            message: string
          }>(`${BASE_URL}/http/401`)
    }

    isUserAuthorized() {
        return this.itemExist(AUTH_HEADER)
    }
}
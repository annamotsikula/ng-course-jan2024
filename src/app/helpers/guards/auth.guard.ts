import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

export const authGuard: CanActivateFn = () => {
    const router = inject(Router);
    const auth = inject(AuthService);
    if (auth.isUserAuthorized()) return true

    return router.parseUrl('/')

}

export const authorized: CanActivateFn = () => {
    const router = inject(Router);
    const auth = inject(AuthService);

    if(auth.isUserAuthorized()) return router.parseUrl('main');
    return true
}
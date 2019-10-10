import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    canActivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.auth.getCurrentUser()
                .then(user => {
                    return resolve(true);
                }, err => {
                    this.router.navigate(['/error']);
                    return resolve(true);
                });
        });
    }

}

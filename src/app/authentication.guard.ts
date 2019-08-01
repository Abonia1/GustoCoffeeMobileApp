import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    public authService: AuthService, public router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise( (resolve, reject) => {
      this.authService.isAuthenticated()
      .then( isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['login']);
        }
        resolve(true);
      })
      .catch( error => {
        return (false);
      });
    });
  }
}

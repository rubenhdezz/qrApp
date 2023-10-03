import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(
    private _router: Router,
    private _authService: AuthService
    ) {}

  // canActivate
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const currentUser = localStorage.getItem('user');
    if (currentUser) {
        return true;
    } else {
        // not logged in so redirect to login page with the return url
        this._router.navigate(['/login']);
        return true;
    }
  }
}

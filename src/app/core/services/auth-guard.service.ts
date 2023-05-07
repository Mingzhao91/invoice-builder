import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

import { JwtService } from './jwt.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private jwtService: JwtService,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    if (this.jwtService.getToken()) {
      return of(true);
    }

    // extrac token if it presents in the url params
    const token = route.queryParamMap.get('token');
    if (token) {
      // if token then authenticate the user
      return this.authService.isAuthenticated(token).pipe(
        map((authenticated) => {
          if (authenticated) {
            this.jwtService.setToken(token);
            return true;
          }
          this.router.navigate(['/login']);
          return false;
        }),
        catchError(() => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }
}

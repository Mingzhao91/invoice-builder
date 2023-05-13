import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

import { JwtService } from './jwt.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private jwsService: JwtService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headerConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const token = this.jwsService.getToken();

    if (token) {
      headerConfig['Authorization'] = `bearer ${token}`;
    }

    const _req = req.clone({
      setHeaders: headerConfig,
    });
    return next.handle(_req).pipe(
      tap({
        next: () => {},
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 || err.status === 403) {
              this.jwsService.destroyToken();
              this.router.navigateByUrl('/login');
            }
          }
        },
      })
    );
  }
}

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(private router: Router, private authService: AuthService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(req).pipe(
//       catchError((err) => {
//         if ([401, 403].includes(err.status)) {
//           // auto logout if 401 or 403 response returned from api
//           this.authService.logout();
//           this.router.navigateByUrl('/login');
//         }

//         const error = err.error?.message || err.statusText;
//         return throwError(() => error);
//       })
//     );
//   }
// }

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from './jwt.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private jwsService: JwtService) {}

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
    return next.handle(_req);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  setToken(token: string) {
    window.localStorage.setItem('jwt_token', token);
  }

  getToken() {
    window.localStorage.getItem('jwt_token');
  }

  destroyToken() {
    window.localStorage.removeItem('jwt_token');
  }
}

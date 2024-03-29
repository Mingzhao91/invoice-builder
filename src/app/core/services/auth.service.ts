import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginRsp, SignUpResp, LogoutRsp, User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(body: User): Observable<LoginRsp> {
    return this.http.post<LoginRsp>(`${environment.api_url}/users/login`, body);
  }

  signup(body: User): Observable<SignUpResp> {
    return this.http.post<SignUpResp>(
      `${environment.api_url}/users/signup`,
      body
    );
  }

  googleAuth(): Observable<LoginRsp> {
    return this.http.get<LoginRsp>(`${environment.api_url}/auth/google`);
  }

  isAuthenticated(token: string): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      }),
    };
    return this.http.get<boolean>(
      `${environment.api_url}/auth/authenticate`,
      httpOptions
    );
  }

  logout(): Observable<LogoutRsp> {
    return this.http.get<LogoutRsp>(`${environment.api_url}/auth/logout`);
  }

  forgotPassword(data: { email: string }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${environment.api_url}/users/forgot-password`,
      data
    );
  }

  resetPassword(body: {
    token: string;
    password: string;
  }): Observable<{ success: boolean }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `bearer ${body.token}`,
      }),
    };
    return this.http.put<{ success: boolean }>(
      `${environment.api_url}/users/reset-password`,
      {
        password: body.password,
      },
      httpOptions
    );
  }
}

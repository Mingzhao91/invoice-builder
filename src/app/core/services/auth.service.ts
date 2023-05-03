import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginRsp, User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(body: User): Observable<LoginRsp> {
    return this.http.post<LoginRsp>(`${environment.api_url}/users/login`, body);
  }
}

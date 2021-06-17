import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData, RegisterData } from './typings';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  register(registerData: RegisterData): Observable<boolean> {
    return this.http
      .post<boolean>('/api/auth/register', registerData)
      .pipe(take(1));
  }

  login(loginData: LoginData): Observable<boolean> {
    return this.http.post<boolean>('/api/auth/login', loginData).pipe(take(1));
  }
}

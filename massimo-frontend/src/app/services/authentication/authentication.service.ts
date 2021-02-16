import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from 'src/app/models/auth/register.interface';
import { Login } from 'src/app/models/auth/login.interface';
import { map } from 'rxjs/operators';
import { LoginResponse } from 'src/app/models/auth/loginResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  register(user: Register): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiAuthentication}/v1/users/register`, user);
  }

  login(user: Login): Observable<void> {
    return this.httpClient.post<LoginResponse>(`${environment.apiAuthentication}/v1/users/login`, user)
      .pipe(map((response: LoginResponse) => {
        this.setJwtToken(response.token);
      }));
  }

  setJwtToken(token: string): void {
    localStorage.setItem('JWT_TOKEN', token);
  }

  getJwtToken(): string {
    return localStorage.getItem('JWT_TOKEN');
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from 'src/app/models/auth/register.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  register(user: Register): Observable<any> {
    return this.httpClient.post<any>(environment.apiAuthentication + 'v1/users/register', user);
  }
}

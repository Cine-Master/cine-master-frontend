import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticateUser(loginData): any {
    // TODO concordare URL e dati restituiti da REST
    return this.httpClient.post<string>('http://localhost:8080/login', {username: loginData.username,
      password: loginData.password});
  }

}

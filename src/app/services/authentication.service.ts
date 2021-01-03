import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public loggato = false;


  constructor(private httpClient: HttpClient) { }

  authenticateUser(loginData): any {
    // TODO concordare URL e dati restituiti da REST
    return this.httpClient.post<string>('http://localhost:8080/login', {username: loginData.username,
      password: loginData.password}, { withCredentials: true });
  }
  registrationUser(registrationData): any{
    return this.httpClient.post<string>('http://localhost:8080/registration', {username: registrationData.username, firstName: registrationData.firstname, hashedPassword: registrationData.password,
      // tslint:disable-next-line:max-line-length
      lastName: registrationData.lastname, email: registrationData.email, birthdate: registrationData.birthdate, gender: registrationData.gender}, { withCredentials: true });
  }

}

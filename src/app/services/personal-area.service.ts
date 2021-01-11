import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalAreaService {

  constructor(private httpClient: HttpClient) { }

  getBookings(): Observable<Object>{
    return this.httpClient.get('http://localhost:8080/user/tickets', {withCredentials: true});
  }

  deleteBooking(id): Observable<Object>{
    return this.httpClient.post( 'http://localhost:8080/booking/remove',  [{id}], {withCredentials: true, responseType: 'text' });
  }
  getPersonalData(): Observable<Object>{
    return this.httpClient.get('http://localhost:8080/user/profile', {withCredentials: true});
  }
  savePersonalData(personalData): Observable<Object>{
    return this.httpClient.post( 'http://localhost:8080/user/update',  personalData, {withCredentials: true, responseType: 'text' });
  }
  savePassword(personalData): Observable<Object>{
    return this.httpClient.post( 'http://localhost:8080/user/change-password',  personalData, {withCredentials: true, responseType: 'text' });
  }

}

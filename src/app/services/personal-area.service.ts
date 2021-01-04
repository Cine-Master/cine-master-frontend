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
    return this.httpClient.request('delete', 'http://localhost:8080/booking/delete', {body: {id}, withCredentials: true, responseType: 'text' });
  }
}

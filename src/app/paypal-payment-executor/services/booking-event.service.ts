import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../../model/Show';

@Injectable({
  providedIn: 'root'
})
export class BookingEventService {

  constructor(private httpClient: HttpClient) { }

  bookEventsSeats(book: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/booking/select', book, { withCredentials: true });
  }
}

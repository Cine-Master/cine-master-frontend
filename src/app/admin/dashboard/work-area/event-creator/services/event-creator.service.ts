import { Injectable } from '@angular/core';
import {Event} from '../../../../../model/Event';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventCreatorService {

  constructor(private httpClient: HttpClient) { }

  createNewEvent(event: Event): Observable<Event> {

    return this.httpClient.post<Event>('http://localhost:8080/admin/events', event, { withCredentials: true });
  }
}
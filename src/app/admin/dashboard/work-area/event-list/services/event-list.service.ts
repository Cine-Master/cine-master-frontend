import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AddEvent} from '../../../../../model/AddEvent';

const SERVICE_URI = 'http://localhost:8080/admin/';
@Injectable({
  providedIn: 'root'
})
export class EventListService {
  private options = { withCredentials: true };
  constructor(private http: HttpClient) { }

  public getEvents(): Observable<any> {
    return this.http.get<AddEvent[]>(SERVICE_URI + 'events', this.options);
  }
}

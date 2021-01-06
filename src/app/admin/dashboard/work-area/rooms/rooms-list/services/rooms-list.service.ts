import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {EventRoom} from '../../../../../../model/EventRoom';
import {HttpClient} from '@angular/common/http';

const SERVICE_URI = 'http://localhost:8080/admin/';

@Injectable({
  providedIn: 'root'
})
export class RoomsListService {
  private options = { withCredentials: true };
  constructor(private http: HttpClient) { }

  public getRooms(): Observable<EventRoom[]>{
    return this.http.get<EventRoom[]>(SERVICE_URI + 'rooms', this.options);
  }
}

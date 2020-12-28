import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ShowRoom} from '../../../../../../model/ShowRoom';
import {HttpClient} from '@angular/common/http';

const SERVICE_URI = 'http://localhost:8080/admin/';

@Injectable({
  providedIn: 'root'
})
export class RoomsListService {
  private options = { withCredentials: true };
  constructor(private http: HttpClient) { }

  public getRooms(): Observable<ShowRoom[]>{
    return this.http.get<ShowRoom[]>(SERVICE_URI + 'rooms', this.options);
  }
}

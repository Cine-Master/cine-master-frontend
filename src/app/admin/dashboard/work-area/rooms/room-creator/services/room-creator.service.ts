import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const SERVICE_URI = 'http://localhost:8080/admin/';
@Injectable({
  providedIn: 'root'
})
export class RoomCreatorService {

  constructor(private http: HttpClient) { }

  public saveRoom(room: object): Observable<any> {
    return this.http.post<any>(SERVICE_URI + 'rooms', room, {withCredentials: true});
  }
}

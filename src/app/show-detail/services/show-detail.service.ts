import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const URI_PATH = 'http://localhost:8080/shows/details?id=';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailService {

  constructor(private http: HttpClient) { }

  public getShowDetail(id: string): Observable<any>{
    return this.http.get<any>(URI_PATH + id);
  }
}

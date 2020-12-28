import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  searchShowByName(showName: string): Observable<object> {
    const params = new HttpParams().set('name', showName);
    return this.httpClient.get('http://localhost:8080/shows/search', {withCredentials: true, params});
  }


  getHighlightedShows(): Observable<object> {
    const params = new HttpParams().set('highlighted', 'true');
    return this.httpClient.get('http://localhost:8080/shows/search', {withCredentials: true, params});
  }
}

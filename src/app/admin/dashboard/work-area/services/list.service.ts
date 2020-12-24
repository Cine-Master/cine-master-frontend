import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const SERVICE_URI = 'http://localhost:8080/admin/';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private options = { withCredentials: true };
  constructor(private http: HttpClient) {
  }

  public getRooms(): Observable<any>{
    return this.http.get<any>(SERVICE_URI + 'rooms', this.options);
  }

  public getShows(): Observable<any>{
    return this.http.get<any>(SERVICE_URI + 'shows', this.options);
  }

  public getActors(): Observable<any> {
    return this.http.get<any>(SERVICE_URI + 'actors', this.options);
  }

  public getDirectors(): Observable<any> {
    return this.http.get<any>(SERVICE_URI + 'directors', this.options);
  }

  public getCategories(): Observable<any> {
    return this.http.get<any>(SERVICE_URI + 'categories', this.options);
  }

  public updateShow(show: object): Observable<any> {
    return this.http.put<object>(SERVICE_URI + 'shows', show, this.options);
  }

  public updateActor(actor: object): Observable<any> {
    return this.http.put<object>(SERVICE_URI + 'actors', actor, this.options);
  }

  public updateRoom(room: object): Observable<any> {
    return this.http.put<object>(SERVICE_URI + 'rooms', room, this.options);
  }

  public updateDirector(director: object): Observable<any> {
    return this.http.put<object>(SERVICE_URI + 'directors', director, this.options);
  }

  public updateCategorie(categorie: object): Observable<any> {
    return this.http.put<object>(SERVICE_URI + 'categories', categorie, this.options);
  }

  public deleteRoom(id: string): any{
    return this.http.request('delete', SERVICE_URI + 'rooms', { body: {id}, withCredentials: true, responseType: 'text' });
  }

  public deleteShow(id: string): Observable<any>{
    return this.http.request('delete', SERVICE_URI + 'shows', { body: {id}, withCredentials: true, responseType: 'text' });
  }

  public deleteActor(id: string): Observable<any> {
    return this.http.request('delete', SERVICE_URI + 'actors', { body: {id}, withCredentials: true, responseType: 'text' });
  }

  public deleteDirector(id: string): Observable<any> {
    return this.http.request('delete', SERVICE_URI + 'directors', { body: {id}, withCredentials: true, responseType: 'text' });
  }

  public deleteCategorie(id: string): Observable<any> {
    return this.http.request('delete', SERVICE_URI + 'categories', { body: {id}, withCredentials: true, responseType: 'text' });
  }
}

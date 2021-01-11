import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const SERVICE_URI = 'http://localhost:8080/cashier/';
const SHOW_PATH = 'http://localhost:8080/shows/';
@Injectable({
  providedIn: 'root'
})
export class CashierService {

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<any> {
    //return this.http.get()
    return null;
  }

  public getPurchases(): Observable<any> {
    return null;
  }

  public deletePurchase(id: string): Observable<any> {
    return this.http.request('delete', SERVICE_URI, {body: {id}, withCredentials: true, responseType: 'text'});
  }

}

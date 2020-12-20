import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

const SERVICE_URI = 'http://localhost:8080/';

@Injectable({ providedIn: 'root' })
export class SimpleListService {
  constructor(private http: HttpClient) {
  }

  public getRooms(): Observable<any>{
    return this.http.get<any>(SERVICE_URI + 'shows');
  }

  // TODO: modificare con url corretti dopo evere affettuato il login, gestire eventuali errori.
  public getActors(): Observable<any> {
    return this.http.get<any>(SERVICE_URI + 'shows');
  }

  public getProducers(): Observable<any> {
    return this.http.get<any>(SERVICE_URI + 'shows');
  }

  public getCategories(): Observable<any> {
    return this.http.get<any>(SERVICE_URI + 'shows');
  }

  // TODO: implementare i metodi put e delete per modifica e eliminazione dei record
}

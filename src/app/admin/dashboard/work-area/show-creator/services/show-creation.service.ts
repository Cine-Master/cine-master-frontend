import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Show } from '../../../../../model/Show';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowCreationService {

  constructor(private httpClient: HttpClient) { }

  createNewShow(show: Show): Observable<Show> {

    // TODO: To implement in the next Sprint
    /* const formData = new FormData();
    formData.append('show', JSON.stringify(show));
    formData.append('showCover', show.coverImageRawData, 'cover' + show.coverImageExtension); */

    return this.httpClient.post<Show>('http://localhost:8080/admin/shows', show, { withCredentials: true });
  }
}

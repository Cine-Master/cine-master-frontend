import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Show } from '../../../../model/Show';

@Injectable({
  providedIn: 'root'
})
export class ShowCreationService {

  successfulCreation: boolean;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'multipart/form-data',
    }),
    withCredentials: true
  };

  constructor(private httpClient: HttpClient) { }

  createNewShow(show: Show): boolean {

    // TODO: To implement in the next Sprint
    /* const formData = new FormData();
    formData.append('show', JSON.stringify(show));
    formData.append('showCover', show.coverImageRawData, 'cover' + show.coverImageExtension); */



    this.httpClient.post<Show>('http://localhost:8080/admin/shows', show, { withCredentials: true }).subscribe(
      data => {
        if (data.id !== -1)
          this.successfulCreation = true;
        else
          this.successfulCreation = false;
      },
      error => {
        this.successfulCreation = false;
      }
    );

    return this.successfulCreation;
  }
}

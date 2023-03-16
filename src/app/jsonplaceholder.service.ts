import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhotos } from './interfaces/IPhotos';
import { IPosts } from './interfaces/IPosts';
@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  public apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) { }

  getFotos(): Observable<IPhotos> {
    return this.http.get<IPhotos>(`${this.apiUrl}/photos`);
  }

  getPosts(){
    return this.http.get<IPosts>(`${this.apiUrl}/posts`);
  }
}

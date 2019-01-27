import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { detailsData } from './detailsdata';
import 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  constructor(private http: HttpClient) {}
  // url = 'https://jsonplaceholder.typicode.com/photos';
  url = 'https://jsonplaceholder.typicode.com/users';
  // url = 'http://localhost:4200/assets/data/data.json';
  data: any;

  getData() {
    //    return this.http.get<detailsData>(this.url, { observe: 'response' });
    return this.http.get<detailsData[]>(this.url);
  }
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<detailsData[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<detailsData[]>(`${this.url}/?name=${term}`);
  }
}

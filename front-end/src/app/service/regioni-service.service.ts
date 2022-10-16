import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Regioni } from '../model/Regioni';
@Injectable({
  providedIn: 'root'
})
export class RegioniServiceService {
  private heroesUrl = 'http://localhost:8080';  // URL to web api
  url="http://localhost:8080/allregioni";
  constructor(private http: HttpClient) { }
  getRegioni(): Observable<Regioni[]> {
    return this.http.get<Regioni[]>(`http://localhost:8080/allregioni`);
  }
  
  getReg(id: number): Observable<Regioni> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Regioni>(url).pipe();
  }

}

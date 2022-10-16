import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CentriVaccinali } from '../model/CentriVaccinali';

@Injectable({
  providedIn: 'root'
})
export class CentriVaccinaliService {
  url=`http://localhost:8080/allCentriDistinct`;
  url2='http://localhost:8080/forReg'
  url3='http://localhost:8080/forProv'
  constructor(private http: HttpClient) { }
  
  getAllCentri(): Observable<String[]> {
    return this.http.get<String[]>(this.url);
  }

  getCentriReg(s:String): Observable<String[]> {
    const url=`${this.url2}/${s}`
    return this.http.get<String[]>(url).pipe();
  }

  getProvincia(s:String): Observable<CentriVaccinali[]> {
    const url=`${this.url3}/${s}`
    return this.http.get<CentriVaccinali[]>(url).pipe();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stato } from '../model/Stato';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatoService {

  constructor(private http: HttpClient) { }
  getAllStato(): Observable<Stato[]> {
    return this.http.get<Stato[]>(`http://localhost:8080/stati`);
  }

  getStato(): Observable<Stato> {
    return this.http.get<Stato>(`http://localhost:8080/ultimoReport`);
  }
}

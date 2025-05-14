import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from './candidato';


@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  private baseUrl = "https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${this.baseUrl}/candidates.json`);
  }

  getById(id: number): Observable<Candidato> {
      return this.http.get<Candidato>(`${this.baseUrl}/${id}/candidates.json`);
    }
}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private baseUrl = 'http://localhost:8446/api/projets';

  constructor(private http: HttpClient) { }

  getProjet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createProjet(projet: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/pro`, projet);
  }

  // tslint:disable-next-line:ban-types
  updateProjet(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProjet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProjetsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projetsuser`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {
  private baseUrl = 'http://localhost:8446/api/taches';
  constructor(private http: HttpClient) { }

  getTachesBacklogById(backlogId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${backlogId}`);
  }

  // tslint:disable-next-line:ban-types
  createTache(tache: Object, backlogId: String): Observable<Object> {
    return this.http.post(`${this.baseUrl}/tach/${backlogId}`, tache);
  }

  // tslint:disable-next-line:ban-types
  updateTache(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTache(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}


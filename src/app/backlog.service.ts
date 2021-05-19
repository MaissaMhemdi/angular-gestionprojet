import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BacklogService {
  private baseUrl = 'http://localhost:8446/api/Backlogs';
  private baseUrl1 = 'http://localhost:8446/api/projets';

  constructor(private http: HttpClient) { }

  getBacklogById(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createBacklog(backlog: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/back`, backlog);
  }

  // tslint:disable-next-line:ban-types
  updatBacklog(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBacklog(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBacklogsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/backloglist`);
  }
  // tslint:disable-next-line:typedef
  getBacklogByIdProjet(projetid: number): Observable<any>{
    return this.http.get(`${this.baseUrl1}/${projetid}`);
  }
}


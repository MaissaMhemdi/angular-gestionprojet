import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintserviceService {
  private baseUrl = 'http://localhost:8446/api/sprints';
  constructor(private http: HttpClient) { }

  getSprintByIdBacklog(idbacklog: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idbacklog}`);
  }

  // tslint:disable-next-line:ban-types
  createSprint(sprint: Object, backlogId: String): Observable<Object> {
    return this.http.post(`${this.baseUrl}/sprint/${backlogId}`, sprint);
  }

  // tslint:disable-next-line:ban-types
  updateSprint(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSprint(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from './mail';

const MAIL_API = 'http://localhost:8446/api/mail/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MailService {
 url = 'http://localhost:8446/api/mail/send';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }
  // tslint:disable-next-line:ban-types
  public SendMail(email: string , text: string, projectName: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      /*params: new HttpParams().set('email', email).set('text', text).set('projectName', projectName)*/
     };
    return this._http.post(this.url + '?email=' + email + '&text=' + text + '&projectName=' + projectName, options);
  }


}

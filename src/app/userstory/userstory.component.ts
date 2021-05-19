import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Taches } from '../taches';
import { UserstoryService } from '../userstory.service';
@Component({
  selector: 'app-userstory',
  templateUrl: './userstory.component.html',
  styleUrls: ['./userstory.component.css']
})
export class UserstoryComponent implements OnInit {
 tache = new Taches();
 msg = '';
// tslint:disable-next-line:ban-types
backlogId: String;

  // tslint:disable-next-line:variable-name
  constructor(private _service: UserstoryService, private _router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  ajouterTache() {
    this._service.createTache(this.tache , this.backlogId).subscribe(
      data => {
        console.log('response recieved');
        this._router.navigate(['/projet']);
       } ,
       error => {
          console.log('exception occured');
          this.msg = 'Bad  credentials,please enter valid title and description';
     }

    ); }

}

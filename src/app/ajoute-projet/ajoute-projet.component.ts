import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from '../projet';
import { ProjetService } from '../_services/projet.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-ajoute-projet',
  templateUrl: './ajoute-projet.component.html',
  styleUrls: ['./ajoute-projet.component.css']
})
export class AjouteProjetComponent implements OnInit {

  projet = new Projet();
 msg = '';
  // tslint:disable-next-line:variable-name
  constructor(private _service: ProjetService, private _router: Router, private token: TokenStorageService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
  // tslint:disable-next-line:typedef
  ajouterProjet() {
    this._service.createProjet(this.projet).subscribe(
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjetService } from '../_services/projet.service';
import {Projet} from '../projet';
import {Backlog} from '../backlog';
import { TokenStorageService } from '../_services/token-storage.service';
import {  BacklogService } from '../backlog.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetsComponent implements OnInit {

  projets: Observable<Projet[]>;
  backlogs: Observable<Backlog[]>;
   constructor(private projetService: ProjetService, private backlogService: BacklogService,
               private router: Router, private token: TokenStorageService) {}

   // tslint:disable-next-line:typedef
   ngOnInit() {
     this.reloadData();
   }
   logout(): void {
    this.token.signOut();
    window.location.reload();
  }
   // tslint:disable-next-line:typedef
   reloadData() {
     this.projets = this.projetService.getProjetsList();

   }

   // tslint:disable-next-line:typedef
   deleteProjet(id: number) {
     this.projetService.deleteProjet(id)
       .subscribe(
         data => {
           console.log(data);
           this.reloadData();
         },
         error => console.log(error));
   }

  // tslint:disable-next-line:typedef
  ajouteProjet() {
     this.router.navigate(['ajoute']);
   }

   // tslint:disable-next-line:typedef
   updateProjet(id: number) {
     this.router.navigate(['/update', id]);
   }
    // tslint:disable-next-line:typedef
   getbacklog(id: number) {
    this.backlogService.getBacklogByIdProjet(id)
       .subscribe(
         data => {
           console.log(data);
           this.router.navigate(['/backlog']);
         },
         error => console.log(error));
 }
}

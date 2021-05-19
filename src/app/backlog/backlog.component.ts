import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Backlog } from '../backlog';
import { Taches } from '../taches';
import { UserstoryService } from '../userstory.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {  BacklogService } from '../backlog.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  tache = new Taches();
  msg = '';
 // tslint:disable-next-line:ban-types
 backlogId: String;
 // tslint:disable-next-line:ban-types
 projetid: String;
 backlogs: Observable<Backlog[]>;
  backlog: Backlog;
  id: number;

   // tslint:disable-next-line:max-line-length
   constructor(private route: ActivatedRoute, private service: UserstoryService, private servicebacklog: BacklogService, private router: Router ) { }

   // tslint:disable-next-line:typedef
   ngOnInit() {
   }
   logout(): void {
    this.backlog = new Backlog();

    this.id = this.route.snapshot.params.id;
    this.servicebacklog.getBacklogById(this.id)
      .subscribe(data => {
        console.log(data),
        this.backlog = data;
      }, error => console.log(error));
  }


   // tslint:disable-next-line:typedef
   ajouterTache() {
     this.service.createTache(this.tache , this.backlogId).subscribe(
       data => {
         console.log('response recieved');
         this.router.navigate(['/backlog']);
        } ,
        error => {
           console.log('exception occured');
           this.msg = 'Bad  credentials,please enter valid title and description';
      }

     ); }

 }

/*function projetid(projetid: any): Observable<Backlog[]> {
  throw new Error('Function not implemented.');
}
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Backlog } from '../backlog';
import { BacklogService } from '../backlog.service';
import {  SprintserviceService } from '../sprintservice.service';
import { Sprint } from '../sprint';
@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

  sprint = new Sprint();
  msg = '';
 // tslint:disable-next-line:ban-types
 idbacklog: String;
 // tslint:disable-next-line:ban-types
  projetid: String;
  backlog: Backlog;
  id: number;


   // tslint:disable-next-line:max-line-length
   constructor(private route: ActivatedRoute, private service: SprintserviceService, private servicebacklog: BacklogService, private router: Router ) { }

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
   ajouterSprint() {
     this.service.createSprint(this.sprint , this.idbacklog).subscribe(
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

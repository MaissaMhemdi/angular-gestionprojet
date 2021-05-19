import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Backlog } from '../backlog';
import { BacklogService } from '../backlog.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-listbacklog',
  templateUrl: './listbacklog.component.html',
  styleUrls: ['./listbacklog.component.css']
})
export class ListbacklogComponent implements OnInit {


  backlogs: Observable<Backlog[]>;
  backlog: Backlog;
  id: number;
   // tslint:disable-next-line:max-line-length
   constructor( private route: ActivatedRoute, private backlogService: BacklogService, private router: Router, private token: TokenStorageService) {}

   // tslint:disable-next-line:typedef
   ngOnInit() {

   }
   logout(): void {
    this.backlog = new Backlog();

    this.id = this.route.snapshot.params.id;
    this.backlogService.getBacklogById(this.id)
      .subscribe(data => {
        console.log(data),
        this.backlog = data;
        const msg = 'mmmm';
      }, error => console.log(error));
  }
   // tslint:disable-next-line:typedef




}

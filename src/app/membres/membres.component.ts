import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mail} from '../mail';
import { MailService} from '../mail.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
 email: string ;
 text: string;
 projectName: string;
  msg = '';
   // tslint:disable-next-line:variable-name
   constructor(private  _Service: MailService, private token: TokenStorageService , private _router: Router) { }
   // tslint:disable-next-line:typedef
   ngOnInit() {

   }
   onSubmit(f: NgForm): void {
    this._Service.SendMail(this.email, this.text, this.projectName).subscribe(
      data => {
       console.log(f.value);
       console.log (f.valid );
      } ,

    ); }
    logout(): void {
      this.token.signOut();
      window.location.reload();
    }
  }

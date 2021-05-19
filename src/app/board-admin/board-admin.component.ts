import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content1: string;

  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content1 = data;
      },
      err => {
        this.content1 = JSON.parse(err.error).message;
      }
    );
  }
  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
}

import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:typedef
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:member-ordering
  private roles: string[];
  // tslint:disable-next-line:member-ordering
  isLoggedIn = false;
  // tslint:disable-next-line:member-ordering
  showUserBoard = false;
  // tslint:disable-next-line:member-ordering
  showAdminBoard = false;
  // tslint:disable-next-line:member-ordering
  showModeratorBoard = false;
  // tslint:disable-next-line:member-ordering
  username: string;
  // tslint:disable-next-line:member-ordering
  image: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showAdminBoard = this.roles.includes('ROLE_Admin');

      this.username = user.username;
      this.image = user.image;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

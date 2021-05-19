import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
import { ProjetService } from '../_services/projet.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {

  id: number;
  projet: Projet;

  constructor(private route: ActivatedRoute, private router: Router,
              private projetService: ProjetService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.projet = new Projet();

    this.id = this.route.snapshot.params.id;
    this.projetService.getProjet(this.id)
      .subscribe(data => {
        console.log(data),
        this.projet = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  updateProjet() {
    this.projetService.updateProjet(this.id, this.projet)
      .subscribe(data => console.log(data), error => console.log(error));
    this.projet = new Projet();
    this.gotoList();
  }


  // tslint:disable-next-line:typedef
  onSubmit() {
    this.updateProjet(); }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/projet']);
  }
  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
}

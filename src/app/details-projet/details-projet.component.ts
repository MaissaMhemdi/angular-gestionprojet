import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
import { ProjetService } from '../_services/projet.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.css']
})
export class DetailsProjetComponent implements OnInit {

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
  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
  // tslint:disable-next-line:typedef
  list() {
    this.router.navigate(['projets']);
  }
  }
